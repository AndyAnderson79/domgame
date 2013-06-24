
function LevelSelectScreen()
{
    var scope = this;
    var muteBtn;
    this.name="levelSelectScreen";
    this.manager=null;
    this.foreground = null;
    this.parent=null;
    this.levelpicker=null;
    this.characterArea = null;
    this.stagepicker = null;
    this.stageTitle = null;

    this.numStages = 3;

    var distToConfirmSwipe = 40*40; //Squared
    this.inputType = "click"; // click or swipe
    this.tapStartTime = 0;
    this.tapStartPosition = new Point(0,0);
    this.containerStartPosX = 0;

    var requestId=-1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out=setTimeout(func, 1000 / FPS); };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){clearTimeout(scope.t_out)};

    this.currentPage = 0;
    this.levelContainers=[];
    this.containerContainer=null;

    var divsToRemove = [];

    var pageOrder = [[0.125,1.125,1.125], [-1.125,0.125,1.125], [-1.125,-1.125,0.125]];

    var targetWidth = 960;

    var parentPosition = new Point(0,0);

    this.handleAdded =  function()
    {
        //console.log("[LevelSelectScreen.handleAdded]*******************************");

        getScreenPosition(this.parent, parentPosition);

        //Set up bg
        //document.getElementById('bgHolder').className = "screenLevelSelect";
        gameContainer.appendChild(document.getElementById('screenHolder'));

        var bg =  displayFactory.getElementByRef("loading_screen").object;
        bg.id = "loading_screen";
        document.getElementById('bgHolder').appendChild(bg);

        //BUTTONS
        this.parent.appendChild(displayFactory.getElementByRef("backButton").object);
        muteBtn = this.parent.appendChild(displayFactory.getElementByRef("muteButton").object);
        sndManager.initMuteButton(muteBtn);
        this.parent.appendChild(displayFactory.getElementByRef("helpButton").object);

        this.parent.appendChild(displayFactory.getElementByRef("leveltitle").object);
        //this.parent.appendChild(this.createDiv("leveltitle"));


        targetWidth = this.parent.offsetWidth;//SCREEN_WIDTH*this.numStages;
        //Container for all stages
        this.containerContainer = this.parent.appendChild(this.createDiv("containerContainer"));


        //Construct level containers
        var levelContainer;
        for(var i=0;i<this.numStages;i++)
        {
            levelContainer =  this.containerContainer.appendChild(buildContainer(i));
            //levelContainer.style.position="absolute";
            levelContainer.style.left = (i*targetWidth+targetWidth*0.13)+"px";//12.5/(this.numStages+1)+"%";
            //levelContainer.style.top = "15%";//(-29*(this.numStages-1))+"px"; //BODGE!!  More CSS shenanigans
            this.levelContainers.push(levelContainer);

            //if(!levelsUnlocked[(i+1)*10]) this.currentPage=i;
        }
        this.currentPage = firstLevelWithNoCollections();
        //var levelContainer = this.parent.appendChild(buildContainer(2));

        //this.stagepicker = this.createDiv("stagepicker");
        //this.parent.appendChild(this.stagepicker);
        //this.stagepicker.style.top="62%";

        this.stageTitle = displayFactory.getElementByRef("stageTitles")
        this.parent.appendChild(this.stageTitle.object);

        //this.stageTitle = this.stagepicker.appendChild(this.createDiv("stageTitle"));

        this.parent.appendChild(displayFactory.getElementByRef("stageLeftArrow").object);

        this.parent.appendChild(displayFactory.getElementByRef("stageRightArrow").object);


        this.containerContainer.style.left = targetWidth+"px";
        tweenToCurrentPage();

        sndManager.stopAllSounds();
    }

    function firstLevelWithNoCollections()
    {
        var result=-1;
        for(var i = 0; i<scope.numStages*10;i++)
        {
            //console.log("[LevelSelectScreen.firstLevelWithNoCollections] i="+i+"  ??"+(characterName+"_"+(i+1))+"  ??"+recordOfCollections[characterName+"_"+(i+1)]+"  result="+result);
            if(result==-1 && recordOfCollections[characterName+"_"+(i+1)]==0)
            {
                result = i;
            }
        }
        if(result==-1) return 0
        else return Math.floor(result/10);
    }

    function tweenToCurrentPage()
    {
        //console.log("--->  scope.currentPage="+scope.currentPage);
        if(scope.currentPage<0) scope.currentPage = 0;
        if(scope.currentPage>scope.numStages-1) scope.currentPage = scope.numStages-1;
        var targets = pageOrder[scope.currentPage];

        scope.stageTitle.img.style.top = -(scope.currentPage*scope.stageTitle.object.offsetHeight)+"px";//backgroundPosition = "0% "+scope.currentPage*50+"%";

        divTweenManager.clearAllTweens();

        divTweenManager.addTween(scope.containerContainer,"left",  "px", scope.containerContainer.offsetLeft, -targetWidth*scope.currentPage, 0.13, null);

        divTweenManager.startTweening();

    }


    function buildContainer(stageNum)
    {
        var levelContainer, box, num, item, nudgeDown=true;

        levelContainer = scope.createDiv("levelContainer", "levelContainer"+stageNum);


        var i,j, collectedDiv, itemToGrab;
        for(i=1;i<=10; i++)
        {
            item = levelsUnlocked[stageNum*10+i-1]?"levelBox":"lockedLevel";
            //Clear the float
            //if(i==7) { box.style.clear="left"; }
            //Set offset
            if(i==6) { nudgeDown=true; }

            //box = scope.createDiv(item,item+i+"_"+stageNum);

            itemToGrab = item;
            if(item=="levelBox") itemToGrab +=(stageNum+1);//Bodge...
            box = displayFactory.getElementByRef(itemToGrab).object;


            //console.log("item???"+item+"  "+box.className);
            box.id = item+i+"_"+stageNum;
            box.style.float = "left";
            box.style.position = "relative";
            box.className = item;//"levelBox";//item;

            levelContainer.appendChild(box);
            //box.id="b"+i;
            if(item == "levelBox")
            {
                num = displayFactory.getElementByRef("levelNumber").object;
                num.id = item+i+"_"+stageNum+"_number";
                num.className = "numbers";
                //num = box.appendChild(scope.createDiv("numbers", item+i+"_"+stageNum+"_number"));
                num.style.backgroundPosition = (i-1)*11.2+"% 0";
                box.appendChild(num);
                divsToRemove.push(num);
            }
            if(nudgeDown)
            {
                //console.log("i%2"+ i+"  "+(i%2));
                box.style.marginTop="0px";
                box.style.marginBottom="8px";
            }
            else
            {
                box.style.marginTop="8px";
                box.style.marginBottom="0px";
            }
            //Add collectables
            //console.log("characterName:"+characterName+"  numCollected:"+(recordOfCollections[characterName+"_"+((stageNum*10)+i)]||0));
            var numCollected = recordOfCollections[characterName+"_"+((stageNum*10)+i)]||0;
            for(j=0;j<numCollected;j++)
            {
                //collectedDiv = scope.createDiv("collected");
                collectedDiv = displayFactory.getElementByRef("collects_spritesheet").object;
                collectedDiv.className = "collected";
                collectedDiv.style.top = "70%";
                collectedDiv.style.left = (2+j*28)+"%";
                collectedDiv.style.backgroundPosition=25*selectedCharacter+"% 0%";
                divsToRemove.push(collectedDiv);
                box.appendChild(collectedDiv);
            }
            nudgeDown=!nudgeDown;
        }

        return levelContainer;
    }

    this.handleRemoved =  function()
    {
        this.removeDiv("helpButton");
        this.removeDiv("muteButton");
        this.removeDiv("backButton");
        //this.removeDiv("homeButton");
        this.removeDiv("leveltitle");

        this.removeDiv("stageLeftArrow");
        //this.removeDiv("stageTitle");
        this.removeDiv("stageTitles");
        this.removeDiv("stageRightArrow");
        this.removeDiv("loading_screen");

        var i;
        //Remove numbers
        for(i=0;i<divsToRemove.length;i++)
        {
            this.removeDiv(divsToRemove[i].id);
        }
        //Remove level containers
        for(i=0;i<scope.levelContainers.length;i++)
        {
            this.removeDiv(scope.levelContainers[i].id);
        }
        this.removeDiv("containerContainer");

        //	document.getElementById('bgHolder').className = "bgHolder";

        displayFactory.finishWithAllElementsInUse();
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    function loop()
    {
        var dX = scope.tapStartPosition.x-currentX;
        if(scope.inputType == "swipe")
        {
            //var containerX = scope.containerContainer.offsetLeft;
            //console.log("this.containerStartPosX="+scope.containerStartPosX+"  dX="+dX);
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
    }

    this.onUserInput = function(name, type)
    {
        //console.log("[LevelSelectScreen.onUserInput]name="+name+"  type="+type);
        if(name=="continueButton") return; //Don't react to hypno anim sequence button presses...

        if(type=="touchstart" || type=="mousedown")
        {//Start a tap response
            if(currentY-parentPosition.y > scope.containerContainer.offsetTop && (currentY-parentPosition.y <scope.containerContainer.offsetTop + scope.containerContainer.offsetHeight)
                && (currentX-parentPosition.x>0 && currentX-parentPosition.x<scope.parent.offsetWidth))
            {
                scope.inputType = "clickOrSwipe"; // click or swipe
                scope.tapStartTime = Date.now();
                scope.tapStartPosition.x = currentX;
                scope.tapStartPosition.y = currentY;
                scope.containerStartPosX = scope.containerContainer.offsetLeft;
                requestId=requestAnimationFrame(loop);
            }
            else
            {
                scope.inputType = "click"; // click or swipe
            }

            return;
        }
        else
        {
            //up event so cancel anim frame. If swipe then tween to nearest position
            cancelAnimationFrame(requestId);
            //If input type is a swipe...
            if(scope.inputType=="swipe")
            {
                var dX = scope.tapStartPosition.x-currentX;
                //console.log("this.containerStartPosX="+scope.containerStartPosX+"  dX="+dX+"  targetWidth*0.1="+targetWidth*0.1+"  scope.currentPage="+scope.currentPage);
                //Increment/decrement page if moved far enough (10% of screen size)
                if(dX<-targetWidth*0.1) scope.currentPage--;
                else if(dX>targetWidth*0.1) scope.currentPage++;

                //Tween to appropriate page
                tweenToCurrentPage();

                return;
            }
        }


        //If level box has been tapped then go to chosen level
        if(name && name.indexOf("levelBox")>-1)
        {
            sndManager.playSound("buttonClick");
            var levelChosen = parseInt(name.substr(8,1));
            if(name.indexOf("levelBox10")>-1) levelChosen=10;

            var stageChosen = parseInt(name.substr(name.indexOf("_")+1,1)) ;
            //console.log("[LevelSelectScreen]levelChosen "+levelChosen+" name="+name+" type="+type+"   _="+name.substr(name.indexOf("_")+1,1))
            currentLevel = (stageChosen*10)+levelChosen;
            //console.log("levelChosen="+levelChosen+"  stageChosen="+stageChosen+"  currentLevel="+currentLevel);
            if(currentLevel==1) scope.gotoScreen(IntroCartoonScreen);
            else scope.gotoScreen(GameScreen);
            return;
        }


        switch(name)
        {
            case "homeButton":
                this.gotoScreen(LandingScreen);
                sndManager.playSound("buttonClick");
                break;
            case "backButton":
                this.gotoScreen(CharacterSelectScreen);
                sndManager.playSound("buttonClick");
                break;
            case "muteButton":
                sndManager.toggleMute();
                sndManager.initMuteButton(muteBtn);
                break;
            case "helpButton":
                this.manager.dialogManager.open(InstructionsDialog,{});
                sndManager.playSound("buttonClick");
                break;
            case "stageLeftArrow":
                if(scope.currentPage>0)
                {
                    scope.currentPage--;
                    tweenToCurrentPage();
                    sndManager.playSound("buttonClick");
                }
                break;
            case "stageRightArrow":
                if(scope.currentPage<this.numStages-1)
                {
                    scope.currentPage++;
                    tweenToCurrentPage();
                    sndManager.playSound("buttonClick");
                }
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
        this.foreground = null;
        this.parent=null;
        this.levelpicker = null;
        this.characterArea = null;
        this.stagepicker = null;
    }

    this.removeDiv = function(id)
    {
        //	console.log("removeDiv:"+id);
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
        //console.log(pDiv+"   "+pDiv.id);
        return pDiv;
    }
}