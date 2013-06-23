
var PREFIX_PATH = "";
var MEDIA_PATH = PREFIX_PATH + "media/";
var USING_HOWLER = true;
var IS_MOBILE_DEVICE = true;
var IS_DESKTOP_BARLESQUE = true;
var MOUSE_ACTIVE = true;
var IS_IE7_OR_8 = false;
var IS_INSIDE_IFRAME = false;
var IFRAME_CREATED = false;
var gameContainer = null;

define([
    "jquery",
    "modernizr",
    "PxLoader",
    "app/utils/BrowserDetect"
], function($)
{
    // instantiate jQuery plugins
    $(function()
    {
        //$('body').alpha().beta();
    });

    var soundManagerToLoad;

    if ((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 9))
    {
        IS_IE7_OR_8 = true;
        USING_HOWLER = false;

        soundManagerToLoad = "soundmanager2";

        if(document.getElementById('blq-container-inner'))
        {
            var iframeLink = document.createElement('iframe');
            iframeLink.setAttribute('id', 'if');
            iframeLink.setAttribute('src', 'http://downloads.bbc.co.uk/cbbc/scoobydoo/require.html');
            iframeLink.setAttribute('width', '720');
            iframeLink.setAttribute('height', '480');
            iframeLink.setAttribute('scrolling', 'no');
            iframeLink.setAttribute('frameborder', '0');
            iframeLink.setAttribute('framepadding', '0');

            var gameHolder = document.getElementById('cbbc-game-holder');
            gameHolder.appendChild(iframeLink);

            document.getElementById('cbbc-more').style.marginTop = "-46%";

            IFRAME_CREATED = true;
        }
        else IS_INSIDE_IFRAME = true;
    }
    else soundManagerToLoad = "howler";

    if (!IFRAME_CREATED)
    {
        var loadcss = document.createElement('link');
        loadcss.setAttribute("rel", "stylesheet");
        loadcss.setAttribute("type", "text/css");
        loadcss.setAttribute("href", PREFIX_PATH + "css/interface.css");
        document.getElementsByTagName("head")[0].appendChild(loadcss);

        loadcss = document.createElement('link');
        loadcss.setAttribute("rel", "stylesheet");
        loadcss.setAttribute("type", "text/css");
        loadcss.setAttribute("href", PREFIX_PATH + "css/game.css");
        document.getElementsByTagName("head")[0].appendChild(loadcss);

        //Mobile device?
        var isTouchDevice = function() { return 'ontouchstart' in window || 'onmsgesturechange' in window; };
        IS_MOBILE_DEVICE = (window.screenX == 0 && isTouchDevice()) ? true : false;

        gameContainer = document.createElement("div");
        gameContainer.id = "gameContainer";

        var loadingImage = document.createElement("div");
        loadingImage.id = "loadingImage";
        loadingImage.className = "loadingImage";
        gameContainer.appendChild(loadingImage);

        if(IS_MOBILE_DEVICE)
        {
            document.body.appendChild(gameContainer);

            loadcss = document.createElement('link');
            loadcss.setAttribute("rel", "stylesheet");
            loadcss.setAttribute("type", "text/css");
            loadcss.setAttribute("href", PREFIX_PATH + "css/mobile.css");
            document.getElementsByTagName("head")[0].appendChild(loadcss);
        }
        else
        {
            if(document.getElementById('blq-container-inner') )
            {
                document.getElementById('cbbc-game-holder').appendChild(gameContainer);
                document.getElementById('cbbc-more').style.marginTop = "-46%"; //Bodge to re-arrange furniture - right column
                gameContainer.style.width = "720px"; //Assuming SD
                gameContainer.style.height = "480px";
                document.getElementById('cbbc-game-holder').style.height="480px";

                IS_DESKTOP_BARLESQUE = true;
            }
            else
            {//Not barlesque - testing mode
                document.body.appendChild(gameContainer);
                gameContainer.style.width = "960px"; //Using HD
                gameContainer.style.height = "640px";

                IS_DESKTOP_BARLESQUE = false;
            }
        }

        var bgHolder = document.createElement("div");
        bgHolder.id = "bgHolder";
        gameContainer.appendChild(bgHolder);

        var screenHolder = document.createElement("div");
        screenHolder.id = "screenHolder";
        gameContainer.appendChild(screenHolder);
    }

    requirejs([
        // 3rd-party libraries
        "PxLoader",
        "PxLoaderImage",
        "Stats",
        soundManagerToLoad,

        // app
        "app/init",
        "app/AssetList",
        "app/AssetParser",
        "app/Configuration",
        "app/GameParams",

        "app/display/DisplayFactory",
        "app/display/DisplayObject",

        "app/managers/DialogManager",
        "app/managers/DivTweenManager",
        "app/managers/GameLoopManager",
        "app/managers/LoadManager",
        "app/managers/LocalStorageManager",
        "app/managers/ScalingManager",
        "app/managers/ScreenManager",
        "app/managers/SoundManager",

        "app/scene/Levels",

        "app/screens/LoaderScreen",
        "app/screens/RotateOverlay",

        "app/utils/Edge",
        "app/utils/Intersection",
        "app/utils/Line",
        "app/utils/Point",
        "app/utils/Rectangle",
        "app/utils/Spritesheet",
        "app/utils/UserInput",
        "app/utils/Utils"
    ], function()
    {
        init();
    });
});