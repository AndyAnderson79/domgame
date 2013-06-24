

function ScalingManager()
{
    var scope = this;
    var screenWidth = window.innerWidth || 720;
    var screenHeight = window.innerHeight || 480;
    var assetSets = {HD:{width:960, height:640}, SD:{width:720, height:480}};
    this.assetSetToUse = "HD"; //HD 960 x 640; SD: 720 x480
    this.scale = 1;

    //var currentOrientation=-999; //dummy value to test orientation against

    this.assessInitialScale = function()
    {
        screenWidth = window.innerWidth || 720;
        screenHeight = window.innerHeight || 480;

        this.assetSetToUse = "HD";
        //if(false)
        if((IS_MOBILE_DEVICE && (screenWidth<900 || screenHeight<600)) || (!IS_MOBILE_DEVICE ))//&& IS_DESKTOP_BARLESQUE) || IS_IE7_OR_8)  //<-NEED TO TEST FOR DESKTOP
        {
            //console.log("*********************ASSET SET: SD*************************");

            this.assetSetToUse = "SD";
            MEDIA_SIZE_RATIO = 0.75;
            RENDER_RATIO = 0.75;
            gameContainer.style.width = assetSets.SD.width+"px";
            gameContainer.style.height = assetSets.SD.height+"px";

        }
        else
        {
            //console.log("*********************ASSET SET: HD*************************");
        }

        if(this.assetSetToUse == "HD") MEDIA_PATH += "hd/";
        else MEDIA_PATH +="sd/";

        var width =  assetSets[this.assetSetToUse].width;
        var height =  assetSets[this.assetSetToUse].height;

        centerGameOnScreen();
        calculateExtents();
    }

    function calculateExtents()
    {
        var position = new Point(0,0);
        getScreenPosition(gameContainer, position);
        EXTENT_MINX = position.x;
        EXTENT_MINY = position.y;
        EXTENT_MAXX = position.x + gameContainer.offsetWidth;
        EXTENT_MAXY = position.y + gameContainer.offsetHeight;
    }

    function centerGameOnScreen()
    {
        if(!IS_MOBILE_DEVICE) return;

        var dX = 100*((window.innerWidth - gameContainer.offsetWidth)*0.5)/window.innerWidth;
        var dY = ((window.innerHeight - gameContainer.offsetHeight)*0.5);

        if(BrowserDetect.browser=="Explorer" && BrowserDetect.version<9)
        {
            //console.log("<IE9  - having trouble with the centering algortihm");
        }
        else
        {
            gameContainer.style.position = "absolute";
            gameContainer.style.left = dX+"%";
            //gameContainer.style.top = dY+"%";
            gameContainer.style.top = dY+"px";//Pixels is working / % refused to budge...
        }
    }

    this.initListeners = function()
    {
        if(document.addEventListener)
        {
            window.addEventListener('resize', onResize, false);
            window.addEventListener('scroll', calculateExtents, false);
            window.addEventListener('orientationchange', onOrientationChange, false);
        }
        else
        {
            window.attachEvent('resize', onResize);
            window.attachEvent('scroll', calculateExtents);
            window.attachEvent('orientationchange', onOrientationChange);
        }
    }

    function onResize()
    {
        centerGameOnScreen();
        calculateExtents();
        scope.doOrientationChange();
    }

    function scaleAllPageElements(scale)
    {
        var all = document.getElementById("screenHolder").getElementsByTagName("*");
        function scaleElement(element, scale)
        {
            element.style.width =  element.offsetWidth*scale+"px";
            element.style.height =  element.offsetHeight*scale+"px";
        }

        scaleElement(document.getElementById('bgHolder'), scale);
        scaleElement(document.getElementById('screenHolder'), scale);
        for (var i=0, max=all.length; i < max; i++)
        {
            scaleElement(all[i], scale);
        }
    }
    this.applyScale = function(scale)
    {

    }

    //window.orientation  0=portrait, 90=landscape
    function isOrientationPortrait()
    {
        //console.log("window.orientation:"+window.orientation+"  outerWidth:"+window.outerWidth+"  outerHeight:"+window.outerHeight+"  "+BrowserDetect.browser+" // "+BrowserDetect.version);
        //return ((window.orientation!=90 && window.orientation!=-90) || window.outerWidth<window.outerHeight); //window.orientation not working on Blackberry...
        return window.outerWidth<window.outerHeight;
    }

    this.doOrientationChange = function()
    {
        onOrientationChange(null);
    }

    function onOrientationChange(event)
    {
        //console.log("onOrientationChange"+window.screen.availWidth+","+window.screen.availHeight+" IS_MOBILE_DEVICE:"+IS_MOBILE_DEVICE+" isOrientationPortrait:"+isOrientationPortrait()+"  rotateOverlay:"+rotateOverlay );

        if(!IS_MOBILE_DEVICE || IS_IE7_OR_8 ) return;

        if(!rotateOverlay) rotateOverlay = new RotateOverlay(document.body);//gameContainer.parentNode);

        if(isOrientationPortrait())
        {//Portrait
            //console.log("Adding rotatetoplay image to page");
            rotateOverlay.addToScreen();
            if(screenManager && screenManager.currentScreen.name=="gameScreen") screenManager.currentScreen.pauseForOrientation();
        }
        else
        {//Landscape
            //console.log("Removing image from page");
            rotateOverlay.removeFromScreen();
            if(screenManager && screenManager.currentScreen.name=="gameScreen") screenManager.currentScreen.unPauseForOrientation();
            if(waitingForInitialisation) finishInitialisation();

            //Scroll 1 pixel to force android browser chrome to disappear
            window.scrollTo(0, 1);

            centerGameOnScreen();
        }

    }

}