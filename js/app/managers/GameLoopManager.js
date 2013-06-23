

function GameLoopManager()
{
    var scope = this;
    var t_out = -1;
    this.requestId=-1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out=setTimeout(func, 1000 / FPS); };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){clearTimeout(scope.t_out)};




    var isPaused = false;
    var isRestarting = false;
    var gameLoopStarted = false;
    var doCharacterUpdates = false;
    var doMoveableUpdates = false;
    var doHittableUpdates = false;
    this.levelCompleteCallback=null;
    this.stageCompleteCallback=null;
    this.gameCompleteCallback=null;
    this.instaDeathCallback = null;

    this.loopIsActive = false;
    var baddieIsCaptured = false;
    var deathWasBeforeUserInput = true;
    var scene;

    var i, len; //Commonly used primitives
    var timestep, chr, dx=0;

    this.initGameLoop = function(levelCompleteFn, stageCompleteFn, gameCompleteFn, instaDeathFn, sceneFromGameScreen)
    {
        //console.log("[GameLoopManager.initGameLoop]  levelCompleteFn?"+levelCompleteFn);
        collectedItems=[];
        scope.levelCompleteCallback = levelCompleteFn;
        scope.stageCompleteCallback = stageCompleteFn;
        scope.gameCompleteCallback = gameCompleteFn;
        scope.instaDeathCallback = instaDeathFn;
        inputDown=false;
        scene = sceneFromGameScreen;
        //requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ setTimeout(func, 1000 / FPS); };
    }

    /***********************************************************************
     * Main public functions
     ***********************************************************************/

    this.startGameLoop = function()
    {
        //console.log("STARTGAMELOOP  scope.loopIsActive="+scope.loopIsActive)
        lastTime=Date.now();
        isPaused=false;
        gameLoopStarted=true;
        if(!scope.loopIsActive)	scope.requestId=requestAnimationFrame(loop);
        scope.loopIsActive=true;
        isRestarting = false;
    }

    this.stopGameLoop = function()
    {
        cancelAnimationFrame(scope.requestId);
        scope.loopIsActive=false;
    }

    this.pauseGame = function()
    {
        if(baddieIsCaptured) return;

        scope.stopGameLoop();
        isPaused = true;
    }

    this.unPauseGame=function()
    {
        //console.log("[GameLoopManager.unPauseGame] --> startGameLoop");
        scope.startGameLoop();
    }

    this.pauseCharacters = function()
    {
        doCharacterUpdates=false;
        doMoveableUpdates = false;
        doHittableUpdates = false;
    }

    this.unPauseCharacters = function()
    {
        doCharacterUpdates=true;
        doMoveableUpdates = true;
        doHittableUpdates = true;
    }

    this.restartGame = function()
    {
        //if(scope.loopIsActive) scope.stopGameLoop();
        scope.resetLevel();
        //isRestarting = true;
    }

    this.stageCompleted = function()
    {
        //console.log("[GameLoopManager.stageCompleted] currentLevel="+currentLevel);
        levelsUnlocked[currentLevel] = true;
        recordOfCollections[characterName+"_"+currentLevel]=Math.max(collectedItems.length,recordOfCollections[characterName+"_"+currentLevel]||0);
        divTweenManager.clearAllTweens();
        if(currentLevel==30)
        {
            if(scope.gameCompleteCallback) scope.gameCompleteCallback();
        }
        else
        {
            if(scope.stageCompleteCallback) scope.stageCompleteCallback();
        }
    }

    this.baddieCaptured = function(cage)
    {
        //console.log("[GameLoopManager.baddieCaptured]  cage"+cage);
        scope.pauseGame();

        baddieIsCaptured = true;

        var gameContainer = document.getElementById("gameContainer");

        var targetPosX = Math.min(0, (HALF_SCREEN_WIDTH-cage.position.x));
        targetPosX = Math.max(-(worldWidth-SCREEN_WIDTH), targetPosX);
        var targetPosY = Math.min(worldHeight,(HALF_SCREEN_HEIGHT-cage.position.y));
        targetPosY = Math.max(-(worldHeight - SCREEN_HEIGHT), targetPosY);

        divTweenManager.clearAllTweens();
        divTweenManager.addTween(scene,"left", "px",scenePosX*MEDIA_SIZE_RATIO, targetPosX*MEDIA_SIZE_RATIO, 0.04, scope.stageCompleted);
        divTweenManager.addTween(scene,"top",  "px",scenePosY*MEDIA_SIZE_RATIO, targetPosY*MEDIA_SIZE_RATIO, 0.06, null);
        divTweenManager.startTweening();
    }


    /****************************************************************************************************
     MAIN LOOP
     *****************************************************************************************************/
    function loop()
    {
        if(isPaused) return;

        thisTime=Date.now();
        timestep = (thisTime-lastTime)/ FRAME_TIME;
        if(timestep<0.1 || timestep>10)
        {//If timestep is baulked for whatever reason go with a simple 1.
            timestep=1;
        }

        //CHARACTERS
        //Loop through characters to run updates and renders
        if(doCharacterUpdates)
        {
            len = characters.length;
            for( i = 0;i<len;i++)
            {
                chr = characters[i];

                chr.update(lines,blockers,timestep);
                if(chr!=player)
                {
                    chr.displayRender();
                }
            }
        }

        //MOVING PLATFORMS
        if(movingPlatforms.length>0)
        {
            updateMovingPlatforms(timestep, doMoveableUpdates);
        }

        if(doCharacterUpdates)updateCharacter();

        if(doScroll)
        {//Scroll the scene layer in relation to player
            dx=scenePosX;
            scenePosX -= (scenePosX-(HALF_SCREEN_WIDTH-player.position.x)*0.99);
            scenePosY -= ((scenePosY-(HALF_SCREEN_HEIGHT-player.position.y))*0.1);

            scenePosX = Math.min(0, scenePosX);
            scenePosX = Math.max(-(worldWidth-SCREEN_WIDTH), scenePosX);
            dx-=scenePosX;
            scenePosY = Math.min(worldHeight, scenePosY);
            scenePosY = Math.max(-(worldHeight - SCREEN_HEIGHT), scenePosY);
        }

        bgPosX-=dx*0.5 - 0.5;
        //bgPosX-=0.5;//Scroll the background - constant scroll - could relate to user movement too.
        if(bgPosX<-SKY_TILE_WIDTH) bgPosX+=SKY_TILE_WIDTH;

        //Set background position - CLOUDS
        bg.style.backgroundPosition = (bgPosX*MEDIA_SIZE_RATIO)+"px "+(bgPosY*MEDIA_SIZE_RATIO)+"px";

        //Set scene layer position
        if(prevScenePosX!=scenePosX)
        {
            scene.style.left = scenePosX*MEDIA_SIZE_RATIO+"px ";
            bgPosX+=(scenePosX-prevScenePosX)*0.2;
            prevScenePosX=scenePosX;
        }
        if(prevScenePosY!=scenePosY)
        {
            scene.style.top = scenePosY*MEDIA_SIZE_RATIO+"px ";
            prevScenePosY=scenePosY
            bgPosY = scenePosY*0.3;
        }


        //Player update
        player.displayUpdate(timestep);

        if(player.position.y>worldHeight-50 && !player.isDying)
        {//Loop fall so lands from above   <-------------------TRYING OUT A DEATH FIX INSTEAD
            isRestarting = true;

        }

        //Update elements
        updateHittables(timestep, doHittableUpdates);
        updateUpdateables(timestep, doHittableUpdates);

        //Test for exit
        if(exitTrigger.triggered)// || rightIsDown)// || (inputLifted && currentX<100 && currentY<100))
        {
            rightIsDown=false;
            inputLifted=false;
            levelsUnlocked[currentLevel] = true;

            //Record collections
            recordOfCollections[characterName+"_"+currentLevel]=Math.max(collectedItems.length,recordOfCollections[characterName+"_"+currentLevel]||0);
            scope.stopGameLoop();

            localStorageManager.saveGameData();
            localStorageManager.retrieveGameData();

            if(scope.levelCompleteCallback) {scope.levelCompleteCallback();}
            else { scope.nextLevel(); }
        }
        else
        if(player.isDead || isRestarting)
        {//IS player dead?
            if(deathWasBeforeUserInput)
            {//console.log("INSTADEATH!!!!!!!!!!!!!!!!...................");
                scope.instaDeathCallback();
            }
            else
            {
                scope.resetLevel();
            }
        }
        else
        {//Request the next anim loop
            scope.requestId=requestAnimationFrame(loop);
        }

        lastTime = thisTime; //Record the time

    }



    /****************************************************************************************************
     ELEMENTS UPDATE
     *****************************************************************************************************/

        //Loop through the moving platforms. Update & Render
    function updateMovingPlatforms(timestep, doUpdate)
    {
        len=movingPlatforms.length;
        for (i=0;i<len;i++)
        {
            if(doUpdate)movingPlatforms[i].update(characters, timestep);
            movingPlatforms[i].render();
        }
    }

    //Loop through the updateables. Update & Render
    function updateUpdateables(timestep, doUpdate)
    {
        len=updateables.length;
        for (i=0;i<len;i++)
        {
            if(doUpdate) updateables[i].update(timestep);
            updateables[i].render();
        }
    }

    //Loop through the hittables. Render and trigger hit responses
    function updateHittables(timestep, doUpdate)
    {
        len=hittables.length;
        for (i=0;i<len;i++)
        {
            if(doUpdate && hittables[i].update)hittables[i].update(lines, blockers, timestep);
            hittables[i].render(timestep);
            if(hittables[i].active && hittables[i].isColliding())
            {
                hittables[i].hitResponse();
            }
        }
    }

    /****************************************************************************************************
     CHARACTER UPDATE
     *****************************************************************************************************/

        //Update character animation states and render
    function updateCharacter()
    {
        player.displayRender();
        if(inputDown) deathWasBeforeUserInput = false;

        if(inputDown && player.contact)
        {
            //console.log("[GameLoopManager.updateCharacter] Firing stop moving");
            player.displayStandingAnim();
            player.stopMoving();
        }
        else
        if (player.contact)
        {
            //console.log("[GameLoopManager.updateCharacter] Firing a start move");
            player.displayWalkingAnim();
            player.startMoving();
        }

        if (isInContact && !player.contact)
        {
            isInContact = false;
        }
        else
        if (!isInContact && player.contact)
        {
            isInContact = true;
        }
    }

    /****************************************************************************************************
     CHARACTER UPDATE
     *****************************************************************************************************/
    this.clearLevel=function ()
    {
        //console.log("[GameLoopManager.clearLevel]");
        //scope.stopGameLoop();
        //console.log("clearing level...");
        bgPosX = bgPosY = inputX = inputY = currentX = currentY = scenePosX = scenePosY = lastTime = thisTime = 0;
        prevScenePosX = prevScenePosY = -1;

        while(characters.length>0)
        {
            characters.pop().destroy();
        }
        //characters.push(player);
        while(hittables.length>0)
        {
            hittables.pop().destroy();
        }
        while(blockers.length>0)
        {
            blockers.pop().destroy();
        }
        while(movingPlatforms.length>0)
        {
            movingPlatforms.pop().destroy();
        }
        while(lines.length>0)
        {
            lines.pop().destroy();
        }
        while(updateables.length>0)
        {
            updateables.pop().destroy();
        }
        switchables = [];
        var img;
        while(images.length>0)
        {
            img = images.pop();
            if(img.parentNode) img.parentNode.removeChild(img);
        }
        if(doDebug) clearDebugCanvas()
    }

    this.nextLevel = function ()
    {
        scope.clearLevel();

        currentLevel++;
        if(currentLevel>levels.length)currentLevel=1;

        scope.initLevel();
    }

    this.initLevel = function()
    {
        //console.log("--------INIT LEVEL----- Level="+currentLevel);
        baddieIsCaptured = false;
        collectedItems = [];
        buildScene(levels[currentLevel-1], scene);

        if(doDebug) drawDebugCanvas();

        //Put player on top
        scene.appendChild(wrapper);

        scope.startGameLoop();//requestAnimationFrame(loop);
    }

    this.cancelLevel = function()
    {
        //console.log("[GameLoopManager.cancelLevel] --> stopGameLoop");
        scope.stopGameLoop();
        scope.isRestarting = false;
        scope.isPaused = false;
        scope.inputDown=false;
        baddieIsCaptured=false;
        divTweenManager.clearAllTweens();
        scope.clearLevel();
    }


    this.resetLevel=function()
    {
        //console.log("[GameLoopManager.resetLevel] --> stopGameLoop");
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
    }
    this.gameInfoString = function()
    {
        var str="--------GAME INFO---------";
        str+=player;
        return str;
    }
}