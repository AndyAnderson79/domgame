

var loadManager;// = new LoadManager("./");
var displayFactory;// = new DisplayFactory();
var screenManager, screenHolder, bgHolder;
var scenePosX=0,scenePosY=0;

var userInputTarget=null;
var controlTouchID=-1;
var currentScale = 1;
var currentWindowWidth;// = window.innerWidth;
var origWindowWidth;// = currentWindowWidth;
var gameLoopManagerp;// = new GameLoopManager();
var divTweenManager;// = new DivTweenManager();
var localStorageManager;// = new LocalStorageManager();
var scalingManager;// = new ScalingManager();
var sndManager;
var loaderScreen;
var debugCanvas, debugContext;
var rotateOverlay = null;
var waitingForInitialisation;
//var buttonClick, hitGround, collectItem, deathSting, monsterGrowl;

function init()
{
    //Init managers
    displayFactory = new DisplayFactory();
    gameLoopManager = new GameLoopManager();
    divTweenManager = new DivTweenManager();
    localStorageManager = new LocalStorageManager();

    scalingManager = new ScalingManager(); //Need to init listeners here, will there be an issue if haven't assessed scale yet
    scalingManager.initListeners();

    loadManager = new LoadManager("");
    loadManager.loadRotateImage(assetList, testForRotation);
}

function testForRotation()
{
    //Don't start scaling assessment until device rotated in the right direction.
    if(IS_MOBILE_DEVICE)
    {
        waitingForInitialisation = true;
        scalingManager.doOrientationChange();//Test orientation
    }
    else
    {
        finishInitialisation();
    }
}

function finishInitialisation()
{
    waitingForInitialisation = false;
    scalingManager.assessInitialScale();

    //console.log("gameContainer?"+gameContainer.offsetLeft+","+gameContainer.offsetTop);
    //Fix padding behaviour of gameContainer in iFrame
    if(IS_IE7_OR_8)
    {
        gameContainer.style.left="0px";
        gameContainer.style.top="0px";
    }
    //console.log("gameContainer?"+gameContainer.offsetLeft+","+gameContainer.offsetTop);
    updateGameParams()

    currentWindowWidth = origWindowWidth = window.innerWidth;

    //Initialise completed levels & game state
    initLevelsCompleted(30);
    initGameState();

    //Load the pre-load assets
    loadManager.doPreLoad(assetList,onPreloaded);
}



//Preload ready - load the main asset set
function onPreloaded()
{
    //console.log("[init.onPreloaded]"+document.getElementById("loadingImage")+" // "+gameContainer);
    var loadingImage = document.getElementById("loadingImage");
    if(loadingImage) gameContainer.removeChild(loadingImage);

    //Apply backgrounds for pre-loader
    screenHolder = document.getElementById('screenHolder');
    bgHolder = document.getElementById('bgHolder');

    screenManager = new ScreenManager(screenHolder);
    screenManager.goto(LoaderScreen,{});
    loaderScreen = screenManager.currentScreen;
    sndManager = new SoundManager();
    sndManager.init();
    loadManager.doMainLoad(assetList,onMainLoaded, loaderScreen.displayUpdate);

}

//Main assets loaded - so add event listeners and finish loader screen
function onMainLoaded()
{
    //console.log("#1.1 SCREEN:"+screen.width+","+screen.height);

    //IE or standard listeners
    if(document.addEventListener)initListeners();
    else initIEListeners();

    loaderScreen.finish();
    loaderScreen=null;

    scalingManager.doOrientationChange();
}

/**
 *	Initialise the Listeners for IE and for everyone else
 */
function initListeners()
{

    {//These listeners will have no effect on ost devices if they don't work.
        //but testing for touchable will cause Android 2.2 to fail
        document.addEventListener("touchstart", touchStartHandler, true);
        document.addEventListener("touchmove", touchMoveHandler, true);
        document.addEventListener("touchend", touchEndHandler, true);
        document.addEventListener("touchcancel", touchEndHandler, true);

        //Apply geture listeners so can prevent default
        document.addEventListener("gesturestart", gestureHandler, true);
        document.addEventListener("gesturechange", gestureHandler, true);
        document.addEventListener("gestureend", gestureHandler, true);
    }

    var touchable = 'createTouch' in document;
    if(!touchable)
    {//iOS seems to react to mouse and touch - so only add these listeners if not touchable
        document.addEventListener("mousedown", mouseHandler, true);
        document.addEventListener("mousemove", mouseHandler, true);
        document.addEventListener("mouseup", mouseHandler, true);

        //gameContainer.addEventListener("mouseover", activateMouseActions, true);
        //gameContainer.addEventListener("mouseout", deactivateMouseActions, true);

        document.addEventListener("keydown", onKeyDown, true);
        document.addEventListener("keyup", onKeyUp, true);
    }

    //window.addEventListener('resize', onResize, false);

}

function activateMouseActions() {MOUSE_ACTIVE=true;}
function deactivateMouseActions() {MOUSE_ACTIVE=false;}


function initIEListeners()
{
    document.attachEvent("touchstart", touchStartHandler);
    document.attachEvent("touchmove", touchMoveHandler);
    document.attachEvent("touchend", touchEndHandler);
    document.attachEvent("touchcancel", touchEndHandler);

    document.attachEvent("onmousedown", mouseHandler);
    document.attachEvent("onmousemove", mouseHandler);
    document.attachEvent("onmouseup", mouseHandler);

    //gameContainer.attachEvent("mouseover", activateMouseActions);
    //gameContainer.attachEvent("mouseout", deactivateMouseActions);

    document.attachEvent("gesturestart", gestureHandler);
    document.attachEvent("gesturechange", gestureHandler);
    document.attachEvent("gestureend", gestureHandler);


    //window.attachEvent('resize', onResize, false);

    document.attachEvent("onkeydown", onKeyDown);
    document.attachEvent("onkeyup", onKeyUp);
}

