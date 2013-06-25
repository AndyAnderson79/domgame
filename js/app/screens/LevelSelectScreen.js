
function LevelSelectScreen()
{
    var scope = this;
    var muteBtn;
    var distToConfirmSwipe = 40 * 40;
    var requestId = -1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out = setTimeout(func, 1000 / FPS); };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){ clearTimeout(scope.t_out) };
    var divsToRemove = [];
    var pageOrder = [[0.125, 1.125, 1.125], [-1.125, 0.125, 1.125], [-1.125, -1.125, 0.125]];
    var targetWidth = 960;
    var parentPosition = new Point(0, 0);

    this.name = "levelSelectScreen";
    this.manager = null;
    this.foreground = null;
    this.parent = null;
    this.levelpicker = null;
    this.characterArea = null;
    this.stagepicker = null;
    this.stageTitle = null;
    this.numStages = 3;
    this.inputType = "click";
    this.tapStartTime = 0;
    this.tapStartPosition = new Point(0, 0);
    this.containerStartPosX = 0;
    this.currentPage = 0;
    this.levelContainers = [];
    this.containerContainer = null;

    this.handleAdded = function()
    {
        getScreenPosition(this.parent, parentPosition);

        gameContainer.appendChild(document.getElementById('screenHolder'));

        var bg =  displayFactory.getElementByRef("loading_screen").object;
        bg.id = "loading_screen";
        document.getElementById('bgHolder').appendChild(bg);

        // buttons
        this.parent.appendChild(displayFactory.getElementByRef("backButton").object);

        muteBtn = this.parent.appendChild(displayFactory.getElementByRef("muteButton").object);

        sndManager.initMuteButton(muteBtn);

        this.parent.appendChild(displayFactory.getElementByRef("helpButton").object);
        this.parent.appendChild(displayFactory.getElementByRef("leveltitle").object);

        targetWidth = this.parent.offsetWidth;

        this.containerContainer = this.parent.appendChild(this.createDiv("containerContainer"));

        var levelContainer;

        for (var i = 0; i < this.numStages; i++)
        {
            levelContainer =  this.containerContainer.appendChild(buildContainer(i));
            levelContainer.style.left = (i * targetWidth + targetWidth * 0.13) + "px";
            this.levelContainers.push(levelContainer);
        }

        this.currentPage = firstLevelWithNoCollections();
        this.stageTitle = displayFactory.getElementByRef("stageTitles");
        this.parent.appendChild(this.stageTitle.object);
        this.parent.appendChild(displayFactory.getElementByRef("stageLeftArrow").object);
        this.parent.appendChild(displayFactory.getElementByRef("stageRightArrow").object);
        this.containerContainer.style.left = targetWidth+"px";

        tweenToCurrentPage();

        sndManager.stopAllSounds();
    };

    function firstLevelWithNoCollections()
    {
        var result = -1;

        for (var i = 0; i < scope.numStages * 10; i++) if (result == -1 && recordOfCollections[characterName + "_" + (i + 1)] == 0) result = i;

        if (result == -1) return 0;
        else return Math.floor(result / 10);
    }

    function tweenToCurrentPage()
    {
        if (scope.currentPage < 0) scope.currentPage = 0;
        else if (scope.currentPage > scope.numStages - 1) scope.currentPage = scope.numStages - 1;

        var targets = pageOrder[scope.currentPage];

        scope.stageTitle.img.style.top = -(scope.currentPage * scope.stageTitle.object.offsetHeight) + "px";

        divTweenManager.clearAllTweens();
        divTweenManager.addTween(scope.containerContainer, "left", "px", scope.containerContainer.offsetLeft, -targetWidth * scope.currentPage, 0.13, null);
        divTweenManager.startTweening();
    }

    function buildContainer(stageNum)
    {
        var levelContainer = scope.createDiv("levelContainer", "levelContainer"+stageNum);
        var box;
        var num;
        var item;
        var nudgeDown = true;
        var i;
        var j;
        var collectedDiv;
        var itemToGrab;

        for (i = 1; i <= 10; i++)
        {
            item = (levelsUnlocked[stageNum * 10 + i - 1]) ? "levelBox" : "lockedLevel";

            if (i == 6) nudgeDown = true;

            itemToGrab = item;

            if (item == "levelBox") itemToGrab += (stageNum + 1);

            box = displayFactory.getElementByRef(itemToGrab).object;
            box.id = item + i + "_" + stageNum;
            box.style.float = "left";
            box.style.position = "relative";
            box.className = item;

            levelContainer.appendChild(box);

            if (item == "levelBox")
            {
                num = displayFactory.getElementByRef("levelNumber").object;
                num.id = item + i + "_" + stageNum + "_number";
                num.className = "numbers";
                num.style.backgroundPosition = (i - 1) * 11.2 + "% 0";

                box.appendChild(num);
                divsToRemove.push(num);
            }

            if (nudgeDown)
            {
                box.style.marginTop = "0px";
                box.style.marginBottom = "8px";
            }
            else
            {
                box.style.marginTop = "8px";
                box.style.marginBottom = "0px";
            }

            var numCollected = recordOfCollections[characterName + "_" + ((stageNum * 10) + i)] || 0;

            for (j = 0; j < numCollected; j++)
            {
                collectedDiv = displayFactory.getElementByRef("collects_spritesheet").object;
                collectedDiv.className = "collected";
                collectedDiv.style.top = "70%";
                collectedDiv.style.left = (2 + j * 28) + "%";
                collectedDiv.style.backgroundPosition = 25 * selectedCharacter + "% 0%";

                divsToRemove.push(collectedDiv);
                box.appendChild(collectedDiv);
            }

            nudgeDown =! nudgeDown;
        }

        return levelContainer;
    }

    this.handleRemoved =  function()
    {
        var i;

        this.removeDiv("helpButton");
        this.removeDiv("muteButton");
        this.removeDiv("backButton");
        this.removeDiv("leveltitle");
        this.removeDiv("stageLeftArrow");
        this.removeDiv("stageTitles");
        this.removeDiv("stageRightArrow");
        this.removeDiv("loading_screen");

        for (i = 0; i < divsToRemove.length; i++) this.removeDiv(divsToRemove[i].id);
        for( i = 0; i < scope.levelContainers.length; i++) this.removeDiv(scope.levelContainers[i].id);

        this.removeDiv("containerContainer");

        displayFactory.finishWithAllElementsInUse();
    };

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null);
    };

    function loop()
    {
        var dX = scope.tapStartPosition.x - currentX;

        if (scope.inputType == "swipe")
        {
            var targetX = scope.containerStartPosX - dX;

            if (targetX > 0) targetX = 0;
            if (targetX <- targetWidth * (scope.numStages - 1)) targetX = -targetWidth * (scope.numStages - 1);

            scope.containerContainer.style.left = targetX + "px";
        }
        else if (dX * dX > distToConfirmSwipe) scope.inputType = "swipe";

        requestId = requestAnimationFrame(loop);
    }

    this.onUserInput = function(name, type)
    {
        if (name == "continueButton") return;
        if (type == "touchstart" || type == "mousedown")
        {
            if (currentY - parentPosition.y > scope.containerContainer.offsetTop && (currentY - parentPosition.y < scope.containerContainer.offsetTop + scope.containerContainer.offsetHeight) && (currentX - parentPosition.x > 0 && currentX - parentPosition.x < scope.parent.offsetWidth))
            {
                scope.inputType = "clickOrSwipe";
                scope.tapStartTime = Date.now();
                scope.tapStartPosition.x = currentX;
                scope.tapStartPosition.y = currentY;
                scope.containerStartPosX = scope.containerContainer.offsetLeft;
                requestId = requestAnimationFrame(loop);
            }
            else scope.inputType = "click";

            return;
        }
        else
        {
            cancelAnimationFrame(requestId);

            if (scope.inputType == "swipe")
            {
                var dX = scope.tapStartPosition.x - currentX;

                if (dX < -targetWidth * 0.1) scope.currentPage--;
                else if (dX > targetWidth * 0.1) scope.currentPage++;

                tweenToCurrentPage();

                return;
            }
        }

        if (name && name.indexOf("levelBox") >- 1)
        {
            var levelChosen = parseInt(name.substr(8, 1));
            var stageChosen = parseInt(name.substr(name.indexOf("_") + 1, 1));

            sndManager.playSound("buttonClick");

            if (name.indexOf("levelBox10") >- 1) levelChosen = 10;

            currentLevel = (stageChosen * 10) + levelChosen;

            // ToDo: Uncomment to enable intro cartoon
            /*if (currentLevel == 1) scope.gotoScreen(IntroCartoonScreen);
            else scope.gotoScreen(GameScreen);*/

            scope.gotoScreen(GameScreen);

            return;
        }

        switch(name)
        {
            case "homeButton":

                sndManager.playSound("buttonClick");

                this.gotoScreen(LandingScreen);

                break;

            case "backButton":

                sndManager.playSound("buttonClick");

                this.gotoScreen(CharacterSelectScreen);

                break;

            case "muteButton":

                sndManager.toggleMute();
                sndManager.initMuteButton(muteBtn);

                break;

            case "helpButton":

                sndManager.playSound("buttonClick");

                this.manager.dialogManager.open(InstructionsDialog, {});

                break;

            case "stageLeftArrow":

                if (scope.currentPage > 0)
                {
                    sndManager.playSound("buttonClick");

                    scope.currentPage--;

                    tweenToCurrentPage();
                }

                break;

            case "stageRightArrow":

                if (scope.currentPage < this.numStages - 1)
                {
                    sndManager.playSound("buttonClick");

                    scope.currentPage++;

                    tweenToCurrentPage();
                }

                break;
        }
    };

    this.pause = function()
    {

    };

    this.destroy = function()
    {
        this.name = null;
        this.manager = null;
        this.foreground = null;
        this.parent = null;
        this.levelpicker = null;
        this.characterArea = null;
        this.stagepicker = null;
    };

    this.removeDiv = function(id)
    {
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    };

    this.createDiv = function(className, id)
    {
        var pDiv = document.createElement("div");

        pDiv.className = className;
        pDiv.id = id || className;

        return pDiv;
    };
}