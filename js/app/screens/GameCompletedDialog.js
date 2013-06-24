
function GameCompletedDialog()
{
    this.name="gameCompletedDialog";
    this.manager=null;
    this.foreground = null;
    this.parent=null;

    this.handleAdded =  function()
    {
        gameContainer.appendChild(this.parent); //Make sure dialog box on top

        //BG
        this.parent.appendChild(displayFactory.getElementByRef("dialogBackground").object);
        this.foreground = displayFactory.getElementByRef("dialogForeground").object
        this.parent.appendChild(this.foreground);


        var box = this.foreground.appendChild(displayFactory.getElementByRef("gameCompleteItemBox").object);
        box.style.backgroundPosition = "100% 0";

        var collectedDiv = displayFactory.getElementByRef("collects_spritesheet").object;
        collectedDiv.id = "collected";
        collectedDiv.className = "collected";
        collectedDiv.style.top = "12%";
        collectedDiv.style.left = "13%";
        collectedDiv.style.backgroundPosition=25*selectedCharacter+"% 0%";
        box.appendChild(collectedDiv);

        //Display number of items collected
        var numCollected = calcNumCollectedItems(characterName);
        var tens = Math.floor(numCollected/10);
        var units = numCollected-tens*10;
        var num = getNumber(tens);
        num.id="tens";
        num.style.left = "47.5%";
        num.style.top = "5%";
        box.appendChild(num);

        num = getNumber(units);
        num.id="units";
        num.style.left = "58%";
        num.style.top = "5%";
        box.appendChild(num);

        //console.log("COLLECTED RESULT="+tens+"  "+units+"  numCollected="+numCollected);

        this.foreground.appendChild(displayFactory.getElementByRef("gameCompleted").object);

        var div;
        div = displayFactory.getElementByRef("anotherCharacter").object;
        this.foreground.appendChild(div);

        this.foreground.appendChild(displayFactory.getElementByRef("playAgainButton").object);
    }

    function calcNumCollectedItems(character)
    {
        var result=0;
        for(var i = 0; i<30;i++)
        {
            result+=recordOfCollections[character+"_"+(i+1)]||0;
        }
        return result;
    }

    function getNumber(num)
    {
        var percentage = (num-1)*11.2;
        if(num==0) percentage=100;
        var numImage = displayFactory.getElementByRef("smallNumber").object;
        numImage.style.backgroundPosition = percentage+"% 0";

        return numImage;
    }

    this.handleRemoved =  function()
    {
        this.removeDiv("collected");
        this.removeDiv("tens");
        this.removeDiv("units");
        this.removeDiv("gameCompleteItemBox");

        this.removeDiv("anotherCharacter");
        this.removeDiv("gameCompleted");
        this.removeDiv("playAgainButton");
        this.removeDiv("dialogForeground");
        this.removeDiv("dialogBackground");
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name, type)
    {
        if(type=="touchstart" || type=="mousedown") return;
        //		console.log("[GameCompletedDialog]"+name)

        switch(name)
        {
            case "playAgainButton":
                gameLoopManager.cancelLevel();
                this.manager.screenManager.goto(LandingScreen, {}, null);
                sndManager.playSound("buttonClick");
                break;
            case "muteButtonDialog":
            case "muteButton":
                sndManager.toggleMute();
                sndManager.initMuteButton(muteBtn);
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
    this.createDiv = function(className, id)
    {
        if(!id) var id = className
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = id;//Apply

        return pDiv;
    }
}