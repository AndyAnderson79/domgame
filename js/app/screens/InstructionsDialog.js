
function InstructionsDialog()
{
    this.name="instructionsDialog";
    this.manager=null;
    this.foreground = null;
    this.parent=null;

    this.handleAdded =  function()
    {
        gameContainer.appendChild(this.parent);

        //BG
        this.parent.appendChild(displayFactory.getElementByRef("dialogBackground").object);
        this.foreground = this.parent.appendChild(displayFactory.getElementByRef("dialogForeground").object);
        this.parent.appendChild(this.foreground);

        //BUTTONS
        this.foreground.appendChild(displayFactory.getElementByRef("closeButton").object);

        //GFX
        this.foreground.appendChild(displayFactory.getElementByRef("instructionsTitle").object);
        this.foreground.appendChild(displayFactory.getElementByRef("instructionsImg").object);

    }

    this.handleRemoved =  function()
    {
        displayFactory.finishWithElementInUseByRef(document.getElementById("closeButton"), "closeButton");
        displayFactory.finishWithElementInUseByRef(document.getElementById("instructionsTitle"), "instructionsTitle");
        displayFactory.finishWithElementInUseByRef(document.getElementById("instructionsImg"), "instructionsImg");
        displayFactory.finishWithElementInUseByRef(document.getElementById("dialogForeground"), "dialogForeground");
        displayFactory.finishWithElementInUseByRef(document.getElementById("dialogBackground"), "dialogBackground");
        this.removeDiv("closeButton");
        this.removeDiv("instructionsTitle");
        this.removeDiv("instructionsImg");
        this.removeDiv("dialogForeground");
        this.removeDiv("dialogBackground");

        if(this.launchVars && this.launchVars["continueFn"])
        {
            gameContainer.appendChild(document.getElementById("bgHolder"));
            this.launchVars["continueFn"]();
        }
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name,type)
    {
        if(type=="touchstart" || type=="mousedown") return; //Only respond to touchend and mouseup

        switch(name)
        {
            case "closeButton":
                //console.log("[InstructionsDialog] name="+name )
                //buttonClick.stop().play();//Audio
                sndManager.playSound("buttonClick");
                this.manager.close();
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
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    }
    this.createDiv = function(className)
    {
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = className;//Apply

        return pDiv;
    }
}