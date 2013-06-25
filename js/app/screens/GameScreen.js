
function GameScreen()
{
    var scope = this;
    var scene;

    this.name = "gameScreen";
    this.manager = null;
    this.parent = null;
    this.characterArea = null;
    this.titleHolderTapToGo = null;
    this.levelTitle = null;
    this.waitingForTap = true;

    this.handleAdded = function()
    {
        var vp = this.parent.appendChild(displayFactory.getElementByRef("backgroundDiv").object);
        vp.style.top = "0px";
        vp.style.backgroundPosition = "0px " + (-300 * RENDER_RATIO) + "px";

        //Init game screen elements
        bg = displayFactory.getElementByRef("gameViewport").object;
        bg.style.top = "0px";
        bg.style.backgroundPosition = (RENDER_RATIO * bgPosX) + "px " + (RENDER_RATIO * bgPosY) + "px";
        this.parent.appendChild(bg);

        scene = bg.appendChild(this.createDiv("scene"));
        buildScene(levels[currentLevel - 1], scene);

        //Add wrapper to scene layer - make sure it is on top
        scene.appendChild(wrapper);

        // if doDebug true and not IE
        if (doDebug && document.addEventListener) drawDebugCanvas();

        var bgHolder = document.getElementById("bgHolder");
        bgHolder.className = "";
        bgHolder.style.top = "0px";

        gameContainer.appendChild(bgHolder);

        bgHolder.appendChild(displayFactory.getElementByRef("pauseButton").object);
        bgHolder.appendChild(displayFactory.getElementByRef("restartButton").object);

        this.titleHolderTapToGo = bgHolder.appendChild(displayFactory.getElementByRef("levelTitleTapToGo").object);
        this.levelTitleAsset = displayFactory.getElementByRef("levelTitleSheet");
        this.levelTitleAsset.img.style.position = "absolute";
        this.levelTitle = this.titleHolderTapToGo.appendChild(this.levelTitleAsset.object);

        initGameLoop();
        tweenOnTitle();

        sndManager.playSound("bgMusic", true);
    };

    function tweenOnTitle()
    {
        gameLoopManager.pauseCharacters();

        scope.waitingForTap = true;
        scope.titleHolderTapToGo.style.left = "-60%";
        scope.levelTitleAsset.img.style.top = (-(30.03448 * MEDIA_SIZE_RATIO) * (currentLevel - 1)) + "px";

        divTweenManager.clearAllTweens();
        divTweenManager.addTween(scope.titleHolderTapToGo, "left", "%", -80, 23, 0.23, onTitleTweenOnComplete);
        divTweenManager.startTweening();
    }

    function onTitleTweenOnComplete()
    {
        gameLoopManager.pauseCharacters();

        scope.waitingForTap = true;
    }

    function tweenOffTitle()
    {
        divTweenManager.clearAllTweens();
        divTweenManager.addTween(scope.titleHolderTapToGo, "left", "%", 23, 110, 0.23, null);
        divTweenManager.startTweening();

        gameLoopManager.unPauseCharacters();
    }

    function onLevelComplete()
    {
        gameLoopManager.pauseGame();

        scope.manager.dialogManager.open(LevelCompleteDialog, { nextLevel: gotoNextLevel });

        sndManager.stopAllSounds();
        sndManager.playSound("exitSting");
    }

    function gotoNextLevel()
    {
        gameLoopManager.clearLevel();
        gameLoopManager.nextLevel();

        if (!scope.waitingForTap) tweenOnTitle();

        sndManager.continueSounds();
    }

    function onStageComplete()
    {
        player.displayFaceRight();
        player.displayUpdate();

        gameLoopManager.pauseGame();

        scope.manager.dialogManager.open(SwipeToUnmaskDialog, { nextLevel: gotoNextLevel });
    }

    function onGameComplete()
    {
        gameLoopManager.pauseGame();

        scope.manager.dialogManager.open(SwipeToUnmaskDialog, { nextLevel: gotoNextLevel });
    }

    function initGameLoop()
    {
        gameLoopManager.initGameLoop(onLevelComplete, onStageComplete, onGameComplete, onInstaDeath, scene);
        gameLoopManager.startGameLoop();
    }

    this.handleRemoved =  function()
    {
        this.removeDiv("restartButton");
        this.removeDiv("pauseButton");
        this.removeDiv("levelTitleSheet");
        this.removeDiv("levelTitleTapToGo");
        this.removeDiv("gameViewport");
        this.removeDiv("backgroundDiv");
        this.removeDiv("scene");
        this.removeDiv("playerAnim");

        document.getElementById("bgHolder").className = "bgHolder";

        displayFactory.finishWithAllElementsInUse();
    };

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    };

    this.pauseForOrientation = function()
    {
        pauseGame();
    };

    this.unPauseForOrientation = function()
    {
        unPauseGame();
    };

    function pauseGame()
    {
        gameLoopManager.pauseGame();
        sndManager.stopAllSounds();
    }

    function unPauseGame()
    {
        gameLoopManager.unPauseGame();

        sndManager.continueSounds();
    }

    function onInstaDeath()
    {
        sndManager.stopAllSounds();

        gameLoopManager.restartGame();

        tweenOnTitle();
    }

    this.onUserInput = function(name, type)
    {
        if (this.waitingForTap)
        {
            this.waitingForTap = false;

            tweenOffTitle();
        }

        if(type == "touchstart" || type == "mousedown") return;

        switch(name)
        {
            case "homeButton":

                gameLoopManager.cancelLevel();

                this.gotoScreen(LandingScreen);

                break;

            case "pauseButton":

                this.manager.dialogManager.open(PauseMenuDialog, { continueFn: unPauseGame });

                pauseGame();

                break;

            case "restartButton":

                sndManager.stopAllSounds();

                gameLoopManager.restartGame();

                tweenOnTitle();

                break;

            case "screenActivityContainer":
            case "screenHolder":
            case "bgHolder":

                break;
        }
    };

    this.pause = function()
    {

    };

    this.destroy = function()
    {
        this.name = null;
        this.manager = null;
        this.parent = null;
        this.titleHolderTapToGo = null;
    };

    this.removeDiv = function(id)
    {
        var element = document.getElementById(id);

        if (element && element.parentNode) element.parentNode.removeChild(element);
    };

    this.createDiv = function(className, id)
    {
        var pDiv = document.createElement("div");

        pDiv.className = className;
        pDiv.id = id || className;

        return pDiv;
    };
}