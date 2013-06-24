
function LevelCompleteDialog()
{
    var scope = this;
    this.name="levelCompleteDialog";
    this.manager=null;
    this.foreground = null;
    this.parent=null;

    this.exitCallback = null;

    this.active = true;

    this.requestId=-1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out=setTimeout(func, 1000 / FPS); };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){clearTimeout(scope.t_out)};

    this.handleAdded =  function()
    {
        inputDown=false;
        this.active = true;

        gameContainer.appendChild(this.parent); //Make sure dialog box on top

        //BG
        this.parent.appendChild(displayFactory.getElementByRef("dialogBackground").object);
        this.foreground = displayFactory.getElementByRef("dialogForeground").object
        this.parent.appendChild(this.foreground);

        var div;
        //TITLE
        this.foreground.appendChild(displayFactory.getElementByRef("titleLevelComplete").object);
        //COLLECTED ITEMS
        var items = this.foreground.appendChild(displayFactory.getElementByRef("items").object);
        if(collectedItems.length>0)
        {
            var item, pcX=[27,55,83];//Percentage position to hit boxes
            var len = Math.min(3,collectedItems.length);
            for(var i=0;i<len;i++)
            {
                item = collectedItems[i];
                item.redisplayCollectedPickUp(pcX[i], 30);
                items.appendChild(item.sheet.wrapper);
            }
            this.requestId = requestAnimationFrame(loop);
        }

        //BUTTONS

        var retryLevel = this.foreground.appendChild(displayFactory.getElementByRef("retryLevel").object);
        retryLevel.style.top = "58%";
        var selectLevel = this.foreground.appendChild(displayFactory.getElementByRef("selectLevel").object);
        selectLevel.style.top = "58%";
        this.foreground.appendChild(displayFactory.getElementByRef("nextLevel").object);


    }

    function loop()
    {
        if(!scope.active) return;
        for(var i=0;i<collectedItems.length;i++)
        {
            collectedItems[i].sheet.update();
            collectedItems[i].sheet.render();
        }
        scope.requestId = requestAnimationFrame(loop);
    }

    this.handleRemoved =  function()
    {
        this.active = false;
        cancelAnimationFrame(this.requestId);

        this.removeDiv("titleLevelComplete");

        this.removeDiv("items");
        this.removeDiv("nextLevel");

        this.removeDiv("retryLevel");

        this.removeDiv("selectLevel");


        this.removeDiv("dialogForeground");
        this.removeDiv("dialogBackground");

        gameContainer.appendChild(document.getElementById("bgHolder"));

        displayFactory.finishWithAllElementsInUse();

        if(scope.exitCallback) scope.exitCallback();
    }

    this.gotoScreen = function(screen)
    {
        scope.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name, type)
    {
        if(type=="touchstart" || type=="mousedown") return;
        //console.log("[LevelCompleteDialog.onUserInput] name="+name+"  name="+name);
        //buttonClick.stop().play();//Audio
        sndManager.playSound("buttonClick");
        switch(name)
        {
            case "homeButton":
                gameLoopManager.cancelLevel();
                scope.manager.screenManager.goto(LandingScreen, {}, null);
                break;
            case "helpButton":
                scope.manager.open(InstructionsDialog,{});
                break;
            case "nextLevel":
            case "nextlevelin":
                //console.log("---> going to next level  LaunchVArs?"+scope.launchVars);
                //traceObject(scope.launchVars);
                //this.manager.screenManager.goto(GameScreen, {}, null);
                scope.exitCallback = scope.launchVars["nextLevel"];
                scope.manager.close();
                break;
            case "retryLevel":
                gameLoopManager.restartGame();
                this.manager.close();
                //scope.manager.screenManager.goto(GameScreen, {}, null);
                break;
            case "selectLevel":
                gameLoopManager.cancelLevel();
                this.manager.screenManager.goto(LevelSelectScreen, {}, null);
                break;
            case "stars":
                //console.log("stars pressed ...  opening StageCompleteDialog");
                this.manager.open(StageCompleteDialog,{});
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
        //console.log("id="+id);
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    }
    this.createDiv = function(className, id)
    {
        if(!id) var id = className
        //console.log(">> id:"+id+"  className:"+className);
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = id;//Apply

        return pDiv;
    }
}