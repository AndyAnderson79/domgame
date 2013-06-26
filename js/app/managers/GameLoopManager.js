function GameLoopManager()
{
    var scope = this;
    var t_out = -1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out = setTimeout(func, 1000 / FPS) };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){ clearTimeout(scope.t_out) };
    var isPaused = false;
    var isRestarting = false;
    var gameLoopStarted = false;
    var doCharacterUpdates = false;
    var doMoveableUpdates = false;
    var doHittableUpdates = false;
    var baddieIsCaptured = false;
    var deathWasBeforeUserInput = true;
    var scene;
    var i;
    var len;
    var timestep;
    var chr;
    var dx = 0;

    this.requestId = -1;
    this.levelCompleteCallback = null;
    this.stageCompleteCallback = null;
    this.gameCompleteCallback = null;
    this.instaDeathCallback = null;
    this.loopIsActive = false;

    this.initGameLoop = function(levelCompleteFn, stageCompleteFn, gameCompleteFn, instaDeathFn, sceneFromGameScreen)
    {
        collectedItems = [];
        scope.levelCompleteCallback = levelCompleteFn;
        scope.stageCompleteCallback = stageCompleteFn;
        scope.gameCompleteCallback = gameCompleteFn;
        scope.instaDeathCallback = instaDeathFn;

        inputDown = false;

        scene = sceneFromGameScreen;
    };

    /***********************************************************************
     * Main public functions
     ***********************************************************************/

    this.startGameLoop = function()
    {
        lastTime = Date.now();
        isPaused = false;
        gameLoopStarted = true;

        if (!scope.loopIsActive) scope.requestId = requestAnimationFrame(loop);

        scope.loopIsActive = true;
        isRestarting = false;
    };

    this.stopGameLoop = function()
    {
        cancelAnimationFrame(scope.requestId);

        scope.loopIsActive = false;
    };

    this.pauseGame = function()
    {
        if (baddieIsCaptured) return;

        scope.stopGameLoop();

        isPaused = true;
    };

    this.unPauseGame = function()
    {
        scope.startGameLoop();
    };

    this.pauseCharacters = function()
    {
        doCharacterUpdates = false;
        doMoveableUpdates = false;
        doHittableUpdates = false;
    };

    this.unPauseCharacters = function()
    {
        doCharacterUpdates = true;
        doMoveableUpdates = true;
        doHittableUpdates = true;
    };

    this.restartGame = function()
    {
        scope.resetLevel();
    };

    this.stageCompleted = function()
    {
        levelsUnlocked[currentLevel] = true;
        recordOfCollections[characterName + "_" + currentLevel] = Math.max(collectedItems.length, recordOfCollections[characterName + "_" + currentLevel] || 0);

        divTweenManager.clearAllTweens();

        if (currentLevel == 30 && scope.gameCompleteCallback) scope.gameCompleteCallback();
        else if (scope.stageCompleteCallback) scope.stageCompleteCallback();
    };

    this.baddieCaptured = function(cage)
    {
        scope.pauseGame();

        baddieIsCaptured = true;

        var gameContainer = document.getElementById("gameContainer");
        var targetPosX = Math.min(0, (HALF_SCREEN_WIDTH - cage.position.x));
        var targetPosY = Math.min(worldHeight, (HALF_SCREEN_HEIGHT - cage.position.y));

        targetPosX = Math.max(-(worldWidth - SCREEN_WIDTH), targetPosX);
        targetPosY = Math.max(-(worldHeight - SCREEN_HEIGHT), targetPosY);

        divTweenManager.clearAllTweens();
        divTweenManager.addTween(scene, "left", "px",scenePosX * MEDIA_SIZE_RATIO, targetPosX * MEDIA_SIZE_RATIO, 0.04, scope.stageCompleted);
        divTweenManager.addTween(scene, "top", "px",scenePosY * MEDIA_SIZE_RATIO, targetPosY * MEDIA_SIZE_RATIO, 0.06, null);
        divTweenManager.startTweening();
    };

    /****************************************************************************************************
     MAIN LOOP
     *****************************************************************************************************/
    function loop()
    {
        if (isPaused) return;

        thisTime = Date.now();
        timestep = (thisTime - lastTime) / FRAME_TIME;

        if (timestep < 0.1 || timestep > 10) timestep = 1;

        if (doCharacterUpdates)
        {
            len = characters.length;

            for(i = 0; i < len; i++)
            {
                chr = characters[i];
                chr.update(lines, blockers, timestep);

                if (chr != player) chr.displayRender();
            }
        }

        //MOVING PLATFORMS
        if(movingPlatforms.length > 0) updateMovingPlatforms(timestep, doMoveableUpdates);

        if (doCharacterUpdates) updateCharacter();

        if (doScroll)
        {
            dx = scenePosX;
            scenePosX -= (scenePosX - (HALF_SCREEN_WIDTH - player.position.x) * 0.99);
            scenePosY -= ((scenePosY - (HALF_SCREEN_HEIGHT - player.position.y)) * 0.1);
            scenePosX = Math.min(0, scenePosX);
            scenePosX = Math.max(-(worldWidth - SCREEN_WIDTH), scenePosX);
            dx -= scenePosX;
            scenePosY = Math.min(worldHeight, scenePosY);
            scenePosY = Math.max(-(worldHeight - SCREEN_HEIGHT), scenePosY);
        }

        bgPosX -= dx * 0.5 - 0.5;

        if (bgPosX < -SKY_TILE_WIDTH) bgPosX += SKY_TILE_WIDTH;

        //Set background position - CLOUDS
        bg.style.backgroundPosition = (bgPosX * MEDIA_SIZE_RATIO) + "px " + (bgPosY * MEDIA_SIZE_RATIO) + "px";

        //Set scene layer position
        if (prevScenePosX != scenePosX)
        {
            scene.style.left = scenePosX * MEDIA_SIZE_RATIO + "px ";

            bgPosX += (scenePosX - prevScenePosX) * 0.2;
            prevScenePosX = scenePosX;
        }

        if (prevScenePosY != scenePosY)
        {
            scene.style.top = scenePosY * MEDIA_SIZE_RATIO + "px ";

            prevScenePosY = scenePosY;
            bgPosY = scenePosY * 0.3;
        }

        //Player update
        player.displayUpdate(timestep);

        if (player.position.y > worldHeight - 50 && !player.isDying) isRestarting = true;

        //Update elements
        updateHittables(timestep, doHittableUpdates);
        updateUpdateables(timestep, doHittableUpdates);

        //Test for exit
        if (exitTrigger.triggered)
        {
            rightIsDown = false;
            inputLifted = false;
            levelsUnlocked[currentLevel] = true;

            //Record collections
            recordOfCollections[characterName + "_" + currentLevel] = Math.max(collectedItems.length, recordOfCollections[characterName + "_" + currentLevel] || 0);

            scope.stopGameLoop();

            localStorageManager.saveGameData();
            localStorageManager.retrieveGameData();

            if (scope.levelCompleteCallback) scope.levelCompleteCallback();
            else scope.nextLevel();
        }
        else if (player.isDead || isRestarting)
        {
            if (deathWasBeforeUserInput) scope.instaDeathCallback();
            else scope.resetLevel();
        }
        else scope.requestId = requestAnimationFrame(loop);

        lastTime = thisTime; //Record the time
    }

    /****************************************************************************************************
     ELEMENTS UPDATE
     *****************************************************************************************************/

    //Loop through the moving platforms. Update & Render
    function updateMovingPlatforms(timestep, doUpdate)
    {
        len = movingPlatforms.length;

        for (i = 0;i < len; i++)
        {
            if (doUpdate) movingPlatforms[i].update(characters, timestep);

            movingPlatforms[i].render();
        }
    }

    //Loop through the updateables. Update & Render
    function updateUpdateables(timestep, doUpdate)
    {
        len = updateables.length;

        for (i = 0;i < len; i++)
        {
            if (doUpdate) updateables[i].update(timestep);

            updateables[i].render();
        }
    }

    //Loop through the hittables. Render and trigger hit responses
    function updateHittables(timestep, doUpdate)
    {
        len = hittables.length;

        for (i = 0; i < len; i++)
        {
            if (doUpdate && hittables[i].update) hittables[i].update(lines, blockers, timestep);

            hittables[i].render(timestep);

            if (hittables[i].active && hittables[i].isColliding()) hittables[i].hitResponse();
        }
    }

    /****************************************************************************************************
     CHARACTER UPDATE
     *****************************************************************************************************/

    //Update character animation states and render
    function updateCharacter()
    {
        player.displayRender();

        if (inputDown) deathWasBeforeUserInput = false;

        if(inputDown && player.contact)
        {
            player.displayStandingAnim();
            player.stopMoving();
        }
        else if (player.contact)
        {
            player.displayWalkingAnim();
            player.startMoving();
        }

        if (isInContact && !player.contact) isInContact = false;
        else if (!isInContact && player.contact) isInContact = true;
    }

    /****************************************************************************************************
     CHARACTER UPDATE
     *****************************************************************************************************/
    this.clearLevel = function()
    {
        var img;

        bgPosX = bgPosY = inputX = inputY = currentX = currentY = scenePosX = scenePosY = lastTime = thisTime = 0;
        prevScenePosX = prevScenePosY = -1;

        while (characters.length > 0) characters.pop().destroy();
        while (hittables.length > 0) hittables.pop().destroy();
        while (blockers.length > 0) blockers.pop().destroy();
        while (movingPlatforms.length > 0) movingPlatforms.pop().destroy();
        while (lines.length > 0) lines.pop().destroy();
        while (updateables.length > 0) updateables.pop().destroy();

        switchables = [];

        while (images.length > 0)
        {
            img = images.pop();

            if (img.parentNode) img.parentNode.removeChild(img);
        }

        if (doDebug) clearDebugCanvas()
    };

    this.nextLevel = function ()
    {
        scope.clearLevel();

        currentLevel++;

        if (currentLevel > levels.length) currentLevel = 1;

        scope.initLevel();
    };

    this.initLevel = function()
    {
        baddieIsCaptured = false;
        collectedItems = [];

        buildScene(levels[currentLevel - 1], scene);

        if (doDebug) drawDebugCanvas();

        scene.appendChild(wrapper);

        scope.startGameLoop();
    };

    this.cancelLevel = function()
    {
        scope.stopGameLoop();
        scope.isRestarting = false;
        scope.isPaused = false;
        scope.inputDown = false;

        baddieIsCaptured = false;

        divTweenManager.clearAllTweens();

        scope.clearLevel();
    };

    this.resetLevel = function()
    {
        player.displayWalkingAnim();
        player.displayFaceRight();
        player.displayRender();

        deathWasBeforeUserInput = true;

        divTweenManager.clearAllTweens();

        scope.stopGameLoop();

        isRestarting = false;
        baddieIsCaptured = false;

        scope.clearLevel();
        scope.initLevel();

        sndManager.playSound("bgMusic");
    };

    this.gameInfoString = function()
    {
        var str = "--------GAME INFO---------";
        str += player;

        return str;
    };
}