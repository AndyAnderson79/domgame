var loadManager;
var displayFactory;
var screenManager;
var screenHolder;
var bgHolder;
var scenePosX = 0;
var scenePosY = 0;
var userInputTarget = null;
var controlTouchID = -1;
var currentScale = 1;
var currentWindowWidth;
var origWindowWidth;
var gameLoopManager;
var divTweenManager;
var localStorageManager;
var scalingManager;
var sndManager;
var loaderScreen;
var debugCanvas;
var debugContext;
var rotateOverlay = null;
var waitingForInitialisation;

function init()
{
    displayFactory = new DisplayFactory();
    gameLoopManager = new GameLoopManager();
    divTweenManager = new DivTweenManager();
    localStorageManager = new LocalStorageManager();

    scalingManager = new ScalingManager();
    scalingManager.initListeners();

    loadManager = new LoadManager("");
    loadManager.loadRotateImage(assetList, testForRotation);
}

function testForRotation()
{
    if(IS_MOBILE_DEVICE)
    {
        waitingForInitialisation = true;
        scalingManager.doOrientationChange();
    }
    else finishInitialisation();
}

function finishInitialisation()
{
    waitingForInitialisation = false;
    scalingManager.assessInitialScale();

    if(IS_IE7_OR_8)
    {
        gameContainer.style.left = "0px";
        gameContainer.style.top = "0px";
    }

    currentWindowWidth = origWindowWidth = window.innerWidth;

    initLevelsCompleted(30);
    initGameState();

    loadManager.doPreLoad(assetList, onPreloaded);
}

function onPreloaded()
{
    var loadingImage = document.getElementById("loadingImage");

    if (loadingImage) gameContainer.removeChild(loadingImage);

    screenHolder = document.getElementById('screenHolder');
    bgHolder = document.getElementById('bgHolder');

    screenManager = new ScreenManager(screenHolder);
    screenManager.goto(LoaderScreen,{});

    loaderScreen = screenManager.currentScreen;

    sndManager = new SoundManager();
    sndManager.init();

    loadManager.doMainLoad(assetList, onMainLoaded, loaderScreen.displayUpdate);
}

function onMainLoaded()
{
    if (document.addEventListener) initListeners();
    else initIEListeners();

    loaderScreen.finish();
    loaderScreen = null;

    scalingManager.doOrientationChange();
}

function initListeners()
{
    {
        document.addEventListener("touchstart", touchStartHandler, true);
        document.addEventListener("touchmove", touchMoveHandler, true);
        document.addEventListener("touchend", touchEndHandler, true);
        document.addEventListener("touchcancel", touchEndHandler, true);
        document.addEventListener("gesturestart", gestureHandler, true);
        document.addEventListener("gesturechange", gestureHandler, true);
        document.addEventListener("gestureend", gestureHandler, true);
    }

    var touchable = 'createTouch' in document;

    if (!touchable)
    {
        document.addEventListener("mousedown", mouseHandler, true);
        document.addEventListener("mousemove", mouseHandler, true);
        document.addEventListener("mouseup", mouseHandler, true);
        document.addEventListener("keydown", onKeyDown, true);
        document.addEventListener("keyup", onKeyUp, true);
    }
}

function activateMouseActions()
{
    MOUSE_ACTIVE = true;
}

function deactivateMouseActions()
{
    MOUSE_ACTIVE = false;
}

function initIEListeners()
{
    document.attachEvent("touchstart", touchStartHandler);
    document.attachEvent("touchmove", touchMoveHandler);
    document.attachEvent("touchend", touchEndHandler);
    document.attachEvent("touchcancel", touchEndHandler);
    document.attachEvent("onmousedown", mouseHandler);
    document.attachEvent("onmousemove", mouseHandler);
    document.attachEvent("onmouseup", mouseHandler);
    document.attachEvent("gesturestart", gestureHandler);
    document.attachEvent("gesturechange", gestureHandler);
    document.attachEvent("gestureend", gestureHandler);
    document.attachEvent("onkeydown", onKeyDown);
    document.attachEvent("onkeyup", onKeyUp);
}