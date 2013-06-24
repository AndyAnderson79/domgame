function LandingScreen()
{
    var thisScreen = this;
    var muteBtn;

    this.name = "landingScreen";
    this.manager = null;
    this.parent = null;

    this.handleAdded = function()
    {
        var bg = displayFactory.getElementByRef("start_screen").object;
        bg.id = "start_screen";
        document.getElementById('bgHolder').appendChild(bg);

        gameContainer.appendChild(this.parent);

        if (IS_MOBILE_DEVICE) this.parent.appendChild(displayFactory.getElementByRef("exitButton").object);
        muteBtn = this.parent.appendChild(displayFactory.getElementByRef("muteButton").object);
        sndManager.initMuteButton(muteBtn);
        this.parent.appendChild(displayFactory.getElementByRef("scoobydoo_logo").object);

        this.parent.appendChild(displayFactory.getElementByRef("playButton").object);
        this.parent.appendChild(displayFactory.getElementByRef("howToPlayButton").object);

        sndManager.stopAllSounds();
    };

    this.handleRemoved =  function()
    {
        if(IS_MOBILE_DEVICE)this.removeDiv("exitButton");
        this.removeDiv("scoobydoo_logo");
        this.removeDiv("muteButton");
        this.removeDiv("playButton");
        this.removeDiv("howToPlayButton");
        this.removeDiv("start_screen");

        displayFactory.finishWithAllElementsInUse();
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name, type)
    {

        if(type=="touchstart" || type=="mousedown") return;

        switch(name)
        {
            case "backButton":
            case "exitButton":
                sndManager.playSound("buttonClick");
                history.go(-1);//Go to previous page the user had navigated to
                break;
            case "muteButton":
                //scaleAllPageElements(0.5);
                sndManager.toggleMute();
                sndManager.initMuteButton(muteBtn);
                break;
            case "swipeButton":
                this.gotoScreen(SwipeToUnmaskSelectScreen);
                break;
            case "playButton":
                this.gotoScreen(CharacterSelectScreen);
                sndManager.playSound("buttonClick");
                break;
            case "howToPlayButton":
                //console.log("howToPlayButton pressed");
                //scope.gotoScreen(SwipeToUnmaskDialog);
                //this.manager.dialogManager.open(SwipeToUnmaskDialog,{});
                this.manager.dialogManager.open(InstructionsDialog,{});
                sndManager.playSound("buttonClick");
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
    }

    this.removeDiv = function(id)
    {
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    }
    this.createDiv = function(className, id)
    {
        if(!id) var id = className
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = id;//Apply

        return pDiv;
    }


}