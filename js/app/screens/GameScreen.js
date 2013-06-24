
function GameScreen()
{
    var scope = this;
    var scene;
    this.name="gameScreen";
    this.manager=null;
    this.parent=null;

    this.characterArea = null;
    this.titleHolderTapToGo = null;
    this.levelTitle=null;
    this.waitingForTap = true;


    this.handleAdded =  function()
    {
        var vp = this.parent.appendChild(displayFactory.getElementByRef("backgroundDiv").object);
        vp.style.top="0px";
        vp.style.backgroundPosition = "0px "+(-300*RENDER_RATIO)+"px";

        //Init game screen elements
        bg = displayFactory.getElementByRef("gameViewport").object;//this.createDiv("gameViewport");
        this.parent.appendChild(bg);
        bg.style.top="0px";
        bg.style.backgroundPosition = (RENDER_RATIO*bgPosX)+"px "+(RENDER_RATIO*bgPosY)+"px";


        scene = bg.appendChild(this.createDiv("scene"));
        buildScene(levels[currentLevel-1],scene);

        //Add wrapper to scene layer - make sure it is on top
        scene.appendChild(wrapper);

        if(doDebug && document.addEventListener) //If doDebug true and not IE
        {//If doDebug - use canas to overdraw the bounding boxes
            drawDebugCanvas();
        }

        var bgHolder = document.getElementById('bgHolder');
        bgHolder.className = "";
        bgHolder.style.top="0px";

        gameContainer.appendChild(bgHolder);

        //HUD
        //		bgHolder.appendChild(displayFactory.getElementByRef("homeButton").object);
        bgHolder.appendChild(displayFactory.getElementByRef("pauseButton").object);
        bgHolder.appendChild(displayFactory.getElementByRef("restartButton").object);

        this.titleHolderTapToGo = bgHolder.appendChild(displayFactory.getElementByRef("levelTitleTapToGo").object);
        this.levelTitleAsset = displayFactory.getElementByRef("levelTitleSheet");
        this.levelTitleAsset.img.style.position = "absolute";
        this.levelTitle = this.titleHolderTapToGo.appendChild(this.levelTitleAsset.object);//this.createDiv("levelTitleSheet"));


        initGameLoop();
        tweenOnTitle();

        sndManager.playSound("bgMusic", true);
    }

    //	var titleCount = 0;
    function tweenOnTitle()
    {
        //console.log("[GameScreen.tweenOnTitle]"+scope.titleHolderTapToGo);
        scope.waitingForTap = true;
        //gameLoopManager.unPauseCharacters();
        gameLoopManager.pauseCharacters();


        scope.titleHolderTapToGo.style.left = "-60%";

        //scope.levelTitleAsset.img.style.top = (-(scope.levelTitleAsset.object.offsetHeight)*(currentLevel-1))+"px";//(currentLevel-1)*3.445+"%";
        scope.levelTitleAsset.img.style.top = (-(30.03448*MEDIA_SIZE_RATIO)*(currentLevel-1))+"px";//(currentLevel-1)*3.445+"%";
        divTweenManager.clearAllTweens();

        divTweenManager.addTween(scope.titleHolderTapToGo,"left",  "%", -80, 23, 0.23, onTitleTweenOnComplete);

        divTweenManager.startTweening();
    }

    function onTitleTweenOnComplete()
    {
        //console.log("[GameScreen.onTitleTweenComplete]");
        gameLoopManager.pauseCharacters();
        scope.waitingForTap = true;
    }

    function tweenOffTitle()
    {
        //console.log("[GameScreen.tweenOffTitle]");
        divTweenManager.clearAllTweens();

        divTweenManager.addTween(scope.titleHolderTapToGo,"left",  "%", 23, 110, 0.23, null);

        divTweenManager.startTweening();
        gameLoopManager.unPauseCharacters();
    }



    function onLevelComplete()
    {
        gameLoopManager.pauseGame();
        scope.manager.dialogManager.open(LevelCompleteDialog,{nextLevel:gotoNextLevel});
        //console.log("[GameScreen.onLevelComplete] gotoNextLevel fn?"+gotoNextLevel);
        sndManager.stopAllSounds();
        sndManager.playSound("exitSting");
    }

    function gotoNextLevel()
    {
        //console.log("[GameScreen.gotoNextLevel]");
        gameLoopManager.clearLevel();
        gameLoopManager.nextLevel();
        if(!scope.waitingForTap) tweenOnTitle();
        sndManager.continueSounds();
    }

    function onStageComplete()
    {
        //console.log("!!!!!!!! Facing left? "+player.isFacingLeft()+"  vel:"+player.velocity);
        player.displayFaceRight();//Bodge to try and solve the 'facing left at start' problem
        player.displayUpdate();

        gameLoopManager.pauseGame();
        scope.manager.dialogManager.open(SwipeToUnmaskDialog,{nextLevel:gotoNextLevel});
        //console.log("[GameScreen.onStageComplete] gotoNextLevel fn?"+gotoNextLevel);
    }

    function onGameComplete()
    {
        gameLoopManager.pauseGame();
        scope.manager.dialogManager.open(SwipeToUnmaskDialog,{nextLevel:gotoNextLevel});
        //console.log("[GameScreen.onStageComplete] gotoNextLevel fn?"+gotoNextLevel);
    }

    //	Init the game loop
    function initGameLoop()
    {
        //console.log("****************INIT GAME LOOP*************************");

        gameLoopManager.initGameLoop(onLevelComplete, onStageComplete, onGameComplete, onInstaDeath, scene);

        //IE or standard listeners
        //	if(document.addEventListener)initListeners();
        //	else initIEListeners();

        //coverall for win8
        //console.log(BrowserDetect.browser.indexOf("Explorer"));
        //console.log("  ... "+ BrowserDetect.version>9);
        //	if(BrowserDetect.browser.indexOf("Explorer")>-1 && BrowserDetect.version>9) initWin8Listeners();

        gameLoopManager.startGameLoop();
    }

    this.handleRemoved =  function()
    {
        //this.removeDiv("homeButton");
        this.removeDiv("restartButton");
        this.removeDiv("pauseButton");
        this.removeDiv("levelTitleSheet");
        this.removeDiv("levelTitleTapToGo");

        this.removeDiv("gameViewport");
        this.removeDiv("backgroundDiv");
        this.removeDiv("scene");
        this.removeDiv("playerAnim");

        document.getElementById('bgHolder').className = "bgHolder";

        displayFactory.finishWithAllElementsInUse();
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.pauseForOrientation = function() {pauseGame();}
    this.unPauseForOrientation = function() {unPauseGame();}

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

    //Respond to instant death by re-doing title
    function onInstaDeath()
    {
        sndManager.stopAllSounds();
        gameLoopManager.restartGame();
        tweenOnTitle();
    }

    this.onUserInput = function(name, type)
    {
        //console.log("[GameScreen.onUserInput] Button pressed:"+name+"  "+type);

        if(this.waitingForTap)
        {
            this.waitingForTap = false;
            tweenOffTitle();
        }
        if(type=="touchstart" || type=="mousedown") return;


        switch(name)
        {
            case "homeButton":
                gameLoopManager.cancelLevel();
                /*
                 gameLoopManager.pauseGame();
                 gameLoopManager.clearLevel();
                 */
                this.gotoScreen(LandingScreen);
                break;
            case "pauseButton":
                this.manager.dialogManager.open(PauseMenuDialog,{continueFn:unPauseGame});
                pauseGame();
                break;
            case "restartButton":
                sndManager.stopAllSounds();
                gameLoopManager.restartGame();
                tweenOnTitle();
                //this.gotoScreen(GameScreen);
                break;
            case "screenActivityContainer":
            case "screenHolder":

                //this.manager.dialogManager.open(LevelCompleteDialog,{});
                break;
            case "bgHolder":
                //console.log(gameLoopManager.gameInfoString());
                break;
        }
    }

    this.pause = function()
    {
    }

    this.destroy = function()
    {
        this.name=null;
        this.manager=null;
        this.parent=null;
        this.titleHolderTapToGo=null;
    }

    this.removeDiv = function(id)
    {
        //console.log("[GameScreen.removeDiv] id="+id);
        var element = document.getElementById(id);
        if(element && element.parentNode)element.parentNode.removeChild(element);
    }
    this.createDiv = function(className)
    {
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = className;//Apply
        //console.log(pDiv+"   "+pDiv.id);
        return pDiv;
    }
}