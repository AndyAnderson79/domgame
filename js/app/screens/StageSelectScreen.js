
function StageSelectScreen()
{
    var thisScreen = this;
    this.name="stageSelectScreen";
    this.manager=null;
    this.parent=null;

    this.characterArea = null;

    this.handleAdded =  function()
    {
        document.getElementById('bgHolder').className = "screenStageSelect";

        this.parent.appendChild(this.createDiv("homeButton"));
        this.parent.appendChild(this.createDiv("backPageButton"));
        this.parent.appendChild(this.createDiv("muteButton"));
        this.parent.appendChild(this.createDiv("helpButton"));

        /*
         this.characterArea = this.createDiv("screenActivityContainer");
         this.characterArea.innerHTML  = this.name;
         this.parent.appendChild(this.characterArea);
         */
    }

    this.handleRemoved =  function()
    {
        this.removeDiv("helpButton");
        this.removeDiv("muteButton");
        this.removeDiv("backPageButton");
        this.removeDiv("homeButton");

        document.getElementById('bgHolder').className = "bgHolder";

    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name)
    {
        //buttonClick.stop().play();//Audio
        sndManager.playSound("buttonClick");
        switch(name)
        {
            case "homeButton":
                this.gotoScreen(LandingScreen);
                break;
            case "backPageButton":
                this.gotoScreen(CharacterSelectScreen);
                break;
            case "muteButton":
                break;
            case "helpButton":
                this.manager.dialogManager.open(InstructionsDialog,{});
                break;
            case "screenActivityContainer":
            case "screenHolder":
                //console.log("Character selected");
                this.gotoScreen(LevelSelectScreen);
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
    this.createDiv = function(className)
    {
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = className;//Apply
        //console.log(pDiv+"   "+pDiv.id);
        return pDiv;
    }
}