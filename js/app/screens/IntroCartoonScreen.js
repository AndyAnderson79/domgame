
function IntroCartoonScreen()
{
    var scope = this, prevTime=0, prevX=0, velocity=0;
    var muteBtn;
    this.name="introCartoonScreen";
    this.manager=null;
    this.parent=null;

    this.inputType = "";
    this.isTweening = true;

    this.characterArea = null;

    var touchStartPos = new Point(0,0);
    var distToConfirmSwipe = 40*40; //Squared
    var lookingForTap = false;


    var posterPositions = [];
    var characterElements = [];
    var charVelocity=0;
    var currentPosition = selectedCharacter || 0;

    this.hitArea = null;
    var startPos={x:0, y:0, ptX:0, ptY:0};

    this.toRemove = [];
    var scope = this;
    var t_out = -1;
    var requestId=-1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out=setTimeout(func, 1000 / FPS); };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){clearTimeout(scope.t_out)};

    var scrollModeIsVelocity = false;

    var parentPosition = new Point();

    var pages = [];
    var currentPage = 0;

    var hypnoAnim= null, continueButton=null;

    this.handleAdded =  function()
    {
        inputDown=false;

        var page;
        page = this.parent.appendChild(displayFactory.getElementByRef("comic1").object);
        page.style.left = (MEDIA_SIZE_RATIO * 960 +1) +"px";
        pages.push(page);

        page = this.parent.appendChild(displayFactory.getElementByRef("comic2").object);
        page.style.left = (MEDIA_SIZE_RATIO * 960 +1) +"px";
        pages.push(page);

        page = this.parent.appendChild(displayFactory.getElementByRef("comic3").object);
        page.style.left = (MEDIA_SIZE_RATIO * 960 +1) +"px";
        pages.push(page);

        page = this.parent.appendChild(displayFactory.getElementByRef("comic4").object);
        page.style.left = (MEDIA_SIZE_RATIO * 960 +1) +"px";
        pages.push(page);

        hypnoAnim = new HypnotismAnimPage(this.parent, this.onAnimationComplete);

        pages.push("animPage"); //<- Woah - nasty bodge, but am bashing this out really quickly

        continueButton = this.parent.appendChild(displayFactory.getElementByRef("continueButton").object);

        //divTweenManager.clearAllTweens();

        tweenPageOn(pages[0])
    }

    function tweenPageOn(page)
    {
        if(page=="animPage")
        {
            page = hypnoAnim.container();
            scope.removeDiv("continueButton");
        }

        scope.isTweening = true;
        divTweenManager.addTween(page, "left",  "px", page.offsetLeft, 0, 0.3, scope.tweenCompleted);

        divTweenManager.startTweening();
    }

    function tweenPageOff(page)
    {
        divTweenManager.addTween(page, "left",  "px", page.offsetLeft, -(MEDIA_SIZE_RATIO * 960 +1), 0.3, null);
    }

    this.tweenCompleted = function()
    {
        if(pages[currentPage]=="animPage") hypnoAnim.startAnim();
        scope.isTweening = false;
    }

    this.handleRemoved =  function()
    {

        //Now remove divs
        var remove;
        while(pages.length>0)
        {
            remove = pages.pop();
            //console.log("REMOVING..."+remove);
            if(remove!="animPage")	this.removeDiv(remove.id);
            else this.removeDiv("animContainer");
        }

        if(continueButton.parentNode) this.removeDiv("continueButton");
        /*
         this.removeDiv("helpButton");
         this.removeDiv("muteButton");
         this.removeDiv("backButton");

         this.removeDiv("stageLeftArrow");
         this.removeDiv("characterTitles");
         this.removeDiv("stageRightArrow");

         this.removeDiv("title_select_character");

         this.removeDiv("characterArea");
         this.removeDiv("contentContainer");
         this.removeDiv("hit");
         this.removeDiv("loading_screen");
         */
        cancelAnimationFrame(requestId);

        displayFactory.finishWithAllElementsInUse();
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    function loop()
    {
        /*   NEED TO CODE THIS FOR BETTER USER INPUT
         var dX = scope.tapStartPosition.x-currentX;
         if(dX*dX>distToConfirmSwipe) scope.inputType = "swipe";
         if(scope.inputType == "swipe")
         {
         var targetX = scope.containerStartPosX - dX;
         if(targetX>0) targetX=0;
         if(targetX<-targetWidth*(scope.numStages-1)) targetX=-targetWidth*(scope.numStages-1);
         scope.containerContainer.style.left = targetX+"px";
         }
         else
         {
         if(dX*dX>distToConfirmSwipe) scope.inputType = "swipe";
         }
         requestId=requestAnimationFrame(loop);
         */
    }

    this.onUserInput = function(name, type)
    {
        if(type=="keyup") name = type;
        //console.log("[LevelSelectScreen.onUserInput]name="+name+"  type="+type);


        switch(name)
        {

            case "comic1":
            case "comic2":
            case "comic3":
            case "comic4":
            case "continueButton":
            case "keyup":
                if(!scope.isTweening)
                {
                    tweenPageOff(pages[currentPage]);
                    currentPage++;
                    if(currentPage>=pages.length)
                    {
                        this.gotoScreen(GameScreen);
                    }
                    else
                    {
                        tweenPageOn(pages[currentPage]);
                    }
                    sndManager.playSound("buttonClick");
                }
                break;
        }
    }

    this.onAnimationComplete = function()
    {
        hypnoAnim.destroy();
        scope.gotoScreen(GameScreen);
    }
    this.destroy = function()
    {
        this.name=null;
        this.manager=null;
        this.parent=null;
    }


    this.pause = function()
    {
    }

    this.removeDiv = function(id)
    {
        //	console.log("removeDiv:"+id);
        var element = document.getElementById(id);
        if(element && element.parentNode) element.parentNode.removeChild(element);
    }
    this.createDiv = function(className,id)
    {
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = id||className;//Apply
        return pDiv;
    }
}