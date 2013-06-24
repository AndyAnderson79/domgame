
function PauseMenuDialog()
{
    var muteBtn;
    this.name="pauseMenuDialog";
    this.manager=null;
    this.foreground = null;
    this.parent=null;

    this.ignoreContinueFunction = true;//Ignore unless continue pressed

    this.handleAdded =  function()
    {
        //console.log("[PauseMenuDialog.handleAdded] this.launchVars="+this.launchVars["continueFn"]);
        gameContainer.appendChild(this.parent);

        //this.parent.appendChild(this.createDiv("dialogBackground"));
        //this.foreground = this.createDiv("dialogForeground");

        this.parent.appendChild(displayFactory.getElementByRef("dialogBackground").object);
        this.foreground = displayFactory.getElementByRef("dialogForeground").object
        this.parent.appendChild(this.foreground);


        //this.foreground.appendChild(this.createDiv("pauseTitle"));
        this.foreground.appendChild(displayFactory.getElementByRef("gamePaused").object);

        this.foreground.appendChild(displayFactory.getElementByRef("pauseHomeButton").object);
        var helpButton = this.foreground.appendChild(displayFactory.getElementByRef("helpButton").object);
        helpButton.style.left = "77%";
        muteBtn = this.foreground.appendChild(displayFactory.getElementByRef("muteButton").object);
        sndManager.initMuteButton(muteBtn);
        /*
         this.foreground.appendChild(this.createDiv("homeButton", "pauseHomeButton"));
         var helpButton = this.foreground.appendChild(this.createDiv("helpButton"));
         helpButton.style.left = "77%";
         this.foreground.appendChild(this.createDiv("muteButton"));
         */

        var retryLevel = this.foreground.appendChild(displayFactory.getElementByRef("retryLevel").object);
        retryLevel.style.top = "50%";
        var selectLevel = this.foreground.appendChild(displayFactory.getElementByRef("selectLevel").object);
        selectLevel.style.top = "50%";
        var continueButton = this.foreground.appendChild(displayFactory.getElementByRef("resumePlay").object);

    }



    this.handleRemoved =  function()
    {
        displayFactory.finishWithElementInUseByRef(document.getElementById("pauseHomeButton"), "pauseHomeButton");
        displayFactory.finishWithElementInUseByRef(document.getElementById("helpButton"), "helpButton");
        displayFactory.finishWithElementInUseByRef(document.getElementById("muteButton"), "muteButton");

        displayFactory.finishWithElementInUseByRef(document.getElementById("retryLevel"), "retryLevel");
        displayFactory.finishWithElementInUseByRef(document.getElementById("selectLevel"), "selectLevel");
        displayFactory.finishWithElementInUseByRef(document.getElementById("resumePlay"), "resumePlay");
        displayFactory.finishWithElementInUseByRef(document.getElementById("gamePaused"), "gamePaused");

        displayFactory.finishWithElementInUseByRef(document.getElementById("dialogForeground"), "dialogForeground");
        displayFactory.finishWithElementInUseByRef(document.getElementById("dialogBackground"), "dialogBackground");

        this.removeDiv("pauseHomeButton");
        this.removeDiv("helpButton");
        this.removeDiv("muteButton");
        this.removeDiv("gamePaused");
        this.removeDiv("resumePlay");
        this.removeDiv("retryLevel");
        this.removeDiv("selectLevel");
        this.removeDiv("dialogForeground");
        this.removeDiv("dialogBackground");

        gameContainer.appendChild(document.getElementById("bgHolder"));
        if(!this.ignoreContinueFunction) this.launchVars["continueFn"]();
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name,type)
    {
        if(type=="touchstart" || type=="mousedown") return; //Only respond to touchend and mouseup

        this.ignoreContinueFunction = true;//Ignore unless continue pressed
        //buttonClick.stop().play();//Audio
        sndManager.playSound("buttonClick");
        switch(name)
        {
            case "muteButton":
                sndManager.toggleMute();
                sndManager.initMuteButton(muteBtn);
                break;
            case "pauseHomeButton":
                gameLoopManager.cancelLevel();
                this.manager.screenManager.goto(LandingScreen, {}, null);
                break;
            case "helpButton":
                this.ignoreContinueFunction = true;
                this.manager.open(InstructionsDialog,this.launchVars);
                break;
            case "closeButton":
            case "resumePlay":
                this.ignoreContinueFunction = false;
                this.manager.close();
                break;
            case "retryLevel":
                gameLoopManager.restartGame();
                this.manager.close();
                //this.manager.screenManager.goto(GameScreen, {}, null);
                break;
            case "selectLevel":
                gameLoopManager.cancelLevel();
                this.manager.screenManager.goto(LevelSelectScreen, {}, null);
                break;
        }
    }

    this.destroy = function()
    {
        this.name=null;
        this.manager=null;
        this.foreground = null;
        this.parent=null;
    }
    this.removeDiv = function(id)
    {
        //console.log("remove:"+id);
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