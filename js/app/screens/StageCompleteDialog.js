
function StageCompleteDialog()
{
    var scope = this;

    this.active = true;

    this.name="stageCompleteDialog";
    this.manager=null;
    this.foreground = null;
    this.parent=null;

    this.exitCallback = null;

    this.requestId=-1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out=setTimeout(func, 1000 / FPS); };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){clearTimeout(scope.t_out)};

    this.handleAdded =  function()
    {
        this.active = true;

        gameContainer.appendChild(this.parent); //Make sure dialog box on top

        //BG
        this.parent.appendChild(displayFactory.getElementByRef("dialogBackground").object);
        this.foreground = displayFactory.getElementByRef("dialogForeground").object
        this.parent.appendChild(this.foreground);

        var div;
        //this.foreground.appendChild(this.createDiv("titleStageComplete"));
        this.foreground.appendChild(displayFactory.getElementByRef("titleStageComplete").object);

        //Collected items
        var items = this.foreground.appendChild(displayFactory.getElementByRef("items").object);

        if(collectedItems.length>0)
        {
            var item, pcX=[27,55,83];//Percentage position to hit boxes
            for(var i=0;i<collectedItems.length;i++)
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

        this.removeDiv("retryLevel");
        this.removeDiv("nextLevel");
        this.removeDiv("selectLevel");
        this.removeDiv("items");

        this.removeDiv("titleStageComplete");

        this.removeDiv("dialogForeground");
        this.removeDiv("dialogBackground");

        gameContainer.appendChild(document.getElementById("bgHolder"));

        displayFactory.finishWithAllElementsInUse();

        if(scope.exitCallback) scope.exitCallback();
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name, type)
    {
        if(type=="touchstart" || type=="mousedown") return;
        //console.log("[StageCompleteDialog.onUserInput] name="+name);
        switch(name)
        {
            case "goToGameComplete":
                this.manager.open(GameCompletedDialog,{});
                break;
            case "continue":
            case "nextLevel":
                //this.manager.screenManager.goto(StageSelectScreen, {}, null);
                scope.exitCallback = scope.launchVars["nextLevel"];
                scope.manager.close();
                sndManager.playSound("buttonClick");
                break;
            case "retryLevel":
                gameLoopManager.restartGame();
                this.manager.close();
                sndManager.playSound("buttonClick");
                break;
            case "selectLevel":
                gameLoopManager.cancelLevel();
                this.manager.screenManager.goto(LevelSelectScreen, {}, null);
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
        //console.log("remove div id="+id);
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