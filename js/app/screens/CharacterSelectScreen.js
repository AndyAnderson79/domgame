
function CharacterSelectScreen()
{
    var scope = this, prevTime=0, prevX=0, velocity=0;
    var muteBtn;
    this.name="characterSelectScreen";
    this.manager=null;
    this.parent=null;

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

    var mouseIsOverPosterArea = true;

    var parentWidth, parentHeight; //Requesting offsetWidth causes a redraw - so am asking once and then referring to that

    function setMouseOverCharacters()
    {
        //console.log("MOUSE IS OVER CHARACTER AREA");
        mouseIsOverPosterArea=true;
    }
    function unsetMouseOverCharacters()
    {
        //console.log("**MOUSE IS NOT OVER CHARACTER AREA");
        mouseIsOverPosterArea=false;
    }

    this.handleAdded =  function()
    {
        inputDown=false;

        var bg =  displayFactory.getElementByRef("loading_screen").object;
        bg.id = "loading_screen";
        document.getElementById('bgHolder').appendChild(bg);

        getScreenPosition(this.parent, parentPosition);

        var contentContainer = this.createDiv("blankDiv","contentContainer");
        this.parent.appendChild(contentContainer);

        this.parent.appendChild(displayFactory.getElementByRef("backButton").object);
        muteBtn = this.parent.appendChild(displayFactory.getElementByRef("muteButton").object);
        sndManager.initMuteButton(muteBtn);

        this.parent.appendChild(displayFactory.getElementByRef("helpButton").object);


        this.parent.appendChild(displayFactory.getElementByRef("title_select_character").object);

        this.characterArea = this.createDiv("characterArea");
        this.characterArea.style.position="absolute";
        this.characterArea.style.cursor="pointer";

        contentContainer.appendChild(this.characterArea);

        //CHARACTER POSTERS
        var characters = ["shaggy","scooby", "velma", "fred", "daphne"];
        var poster,imgObj, completedSign;
        for(var i=1;i<=5;i++)
        {
            //poster = this.createDiv("poster","poster"+i);
            imgObj = displayFactory.getElementByRef("poster_"+characters[i-1])
            poster = imgObj.object
            poster.id = "poster"+i;
            poster.className = "poster";
            //poster.style.cursor="pointer";
            poster.style.left = (imgObj.width*i*1.1)+"px";
            scope.toRemove.push(poster);
            this.characterArea.appendChild(poster);
            characterElements.push(poster);

            if(calcNumCollectedItems(characters[i-1])>=90)
            //if(true)
            {
                completedSign = displayFactory.getElementByRef("completedSign").object;
                completedSign.id="completed"+characters[i-1];
                //completedSign.className="completedSign";
                completedSign.style.left = "25%";
                completedSign.style.top = "66%";
                poster.appendChild(completedSign);
                scope.toRemove.push(completedSign);

                //console.log(completedSign);
            }
        }
        //updatePosterPosition()

        parentWidth = this.parent.offsetWidth;
        parentHeight = this.parent.offsetHeight;

        //GRADIENTS
        var gradient = displayFactory.getElementByRef("leftGradient").object;
        gradient.style.position="absolute";
        gradient.style.left="-2px";
        gradient.style.top="0px";
        contentContainer.appendChild(gradient);


        var element = displayFactory.getElementByRef("rightGradient");
        gradient = element.object;
        gradient.style.position="absolute";
        gradient.style.left=(parentWidth-element.width+1)+"px";//(this.parent.offsetWidth-gradient.offsetWidth)+"px";
        gradient.style.top="0px";
        contentContainer.appendChild(gradient);


        //HIT AREA
        this.hitArea = this.createDiv("hitArea", "hit");
        this.parent.appendChild(this.hitArea);

        //listeners so can work out when over the swipable area...  <sigh/>  - This relates to issues when the page is scrolled up or down on a standard page.
        if(document.addEventListener)
        {
            this.hitArea.addEventListener("mouseover", setMouseOverCharacters, true);
            this.hitArea.addEventListener("mouseout", unsetMouseOverCharacters, true);
        }
        else
        {
            this.hitArea.attachEvent("mouseover", setMouseOverCharacters);
            this.hitArea.attachEvent("mouseout", unsetMouseOverCharacters);
        }


        this.characterArea.style.left = "-1095px";

        //CONTINUE BUTTON
        //this.parent.appendChild(displayFactory.getElementByRef("continueButton").object);
        //this.parent.appendChild(this.createDiv("continue"));


        this.characterTitle = displayFactory.getElementByRef("characterTitles")
        this.parent.appendChild(this.characterTitle.object);

        //this.stageTitle = this.stagepicker.appendChild(this.createDiv("stageTitle"));

        this.parent.appendChild(displayFactory.getElementByRef("stageLeftArrow").object);

        this.parent.appendChild(displayFactory.getElementByRef("stageRightArrow").object);

        //console.log("---->");
        updatePosterPosition();

        goToPosition(currentPosition); //Tween to character position

        sndManager.stopAllSounds();
    }

    function calcNumCollectedItems(character)
    {
        var result=0;
        for(var i = 0; i<30;i++)
        {
            result+=recordOfCollections[character+"_"+(i+1)];
        }
        return result;
    }

    function resetAllPosters()
    {
        for(var i=0;i<5;i++)
        {
            //console.log(characterElements[i].offsetTop);
            characterElements[i].style.top = 0+"%";
        }
    }

    function updatePosterPosition()
    {
        var poster, pos, halfScreenWidth=parentWidth*0.5;
        posterPositions = []
        //console.log("***********----------updatePosterPosition--------------********************");
        for(var i=1;i<=5;i++)
        {
            poster = document.getElementById("poster"+i);
            pos = halfScreenWidth-(poster.offsetLeft+poster.offsetWidth*0.5)
            posterPositions.push(pos);
            //console.log(i+"::"+pos+"  "+halfScreenWidth);
        }
        //console.log("***********----------updatePosterPosition--------------********************");
    }

    function nearestPosition()
    {
        var currentPos = scope.characterArea.offsetLeft;
        var nearest=99999, dX, result=-1;
        for(var i=0;i<5;i++)
        {
            dX = Math.abs(posterPositions[i]-currentPos);
            if(dX<nearest)
            {
                nearest= dX;
                result = i;
            }
        }
        return result; //posterPositions[result]-currentPos;
    }

    function goToPosition(pos)
    {
        currentPosition = pos;
        if(currentPosition<0) currentPosition = 0;
        if(currentPosition>4) currentPosition = 4;
        //console.log("--- new current position:"+currentPosition+"  posterPositions[currentPosition]="+posterPositions[currentPosition]+"  scope.characterArea.offsetLeft="+scope.characterArea.offsetLeft);
        divTweenManager.clearAllTweens();
        divTweenManager.addTween(scope.characterArea,"left",  "px",scope.characterArea.offsetLeft, posterPositions[currentPosition], 0.1, null);
        divTweenManager.startTweening();

        updateTitle();
    }

    function updateTitle()
    {
        scope.characterTitle.img.style.top = -(currentPosition*scope.characterTitle.object.offsetHeight)+"px";
    }


    this.handleRemoved =  function()
    {
        //Remove events first
        if(document.addEventListener)
        {
            this.hitArea.removeEventListener("mouseover", setMouseOverCharacters, true);
            this.hitArea.removeEventListener("mouseout", unsetMouseOverCharacters, true);
        }
        else
        {
            this.hitArea.detachEvent("mouseover", setMouseOverCharacters);
            this.hitArea.detachEvent("mouseout", unsetMouseOverCharacters);
        }

        //Now remove divs
        var remove;
        while(scope.toRemove.length>0)
        {
            remove = scope.toRemove.pop();
            //console.log("REMOVING..."+remove)
            this.removeDiv(remove.id);
        }

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

        cancelAnimationFrame(requestId);

        displayFactory.finishWithAllElementsInUse();
    }

    this.gotoScreen = function(screen)
    {
        this.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name, type)

    {//console.log("...onUserInput  name:"+name+"  type:"+type);
        //Bodge needed for IE - not picking up id or classname for hit area so going to use area
        //currentX>this.hitArea.offsetLeft && currentX<this.hitArea.offsetLeft+this.hitArea.offsetWidth &&
        //console.log("mouseIsOverCharacterArea="+mouseIsOverPosterArea);
        if((type=="mousedown" || type=="touchstart")
            && (currentY-parentPosition.y>this.hitArea.offsetTop && currentY-parentPosition.y<this.hitArea.offsetTop+this.hitArea.offsetHeight)
            && (currentX-parentPosition.x>this.hitArea.offsetLeft && currentX-parentPosition.x<this.hitArea.offsetLeft+this.hitArea.offsetWidth))
        {//console.log("hit area mouse down");
            //Start listening more gesture moves.
            resetAllPosters();

            touchStartPos.x = currentX;
            touchStartPos.y = currentY;
            //console.log("$$$$$$$$$gameContainer.offsetLeft="+gameContainer.offsetLeft);
            var posX = (currentX-parentPosition.x)/this.hitArea.offsetWidth;
            //console.log("posX % = "+posX);
            if(posX>.33 && posX<.66)
            {
                lookingForTap = true;
                characterElements[currentPosition].style.top = "2%";
            }

            startPos.x = this.characterArea.offsetLeft;
            startPos.y = this.characterArea.offsetTop;
            startPos.ptX = null;//Need to null these - seems to be a difference between touch start and touch move coords for clientX - so am ignoring start here
            startPos.ptY = null;

            scrollModeIsVelocity = false;//Manual until the 'throw'

            requestId=requestAnimationFrame(loop);

            return;
        }

        if(type=="mousedown" || type=="touchstart") return;

        switch(name)
        {
            case "backButton":
                sndManager.playSound("buttonClick");
                displayFactory.finishWithAllElementsInUse();
                this.gotoScreen(LandingScreen);
                break;
            case "muteButton":
                sndManager.toggleMute();
                sndManager.initMuteButton(muteBtn);
                break;
            case "helpButton":
                sndManager.playSound("buttonClick");
                this.manager.dialogManager.open(InstructionsDialog,{});
                break;
            case "screenCharacterSelect":
            case "continueButton":
                sndManager.playSound("buttonClick");
                selectedCharacter = nearestPosition();
                characterName = names[selectedCharacter];
                displayFactory.finishWithAllElementsInUse();
                this.gotoScreen(LevelSelectScreen);
                break;
            case "stageLeftArrow":
                goToPosition(currentPosition-1);
                sndManager.playSound("buttonClick");
                break;
            case "stageRightArrow":
                goToPosition(currentPosition+1);
                sndManager.playSound("buttonClick");
                break;
        }


        if(lookingForTap)
        {
            var dX = touchStartPos.x - currentX;
            var dY = touchStartPos.y - currentY;
            //console.log("LOOKING FOR TAP:"+dX+", "+dY+"   "+(dX*dX+dY*dY)+"//"+distToConfirmSwipe+"   ??"+(dX*dX+dY*dY<distToConfirmSwipe)+"  touchStartPos="+touchStartPos+"  current?"+currentX+","+currentY);
            if(dX*dX+dY*dY<distToConfirmSwipe)
            {//Poster has been tapped
                sndManager.playSound("buttonClick");
                selectedCharacter = nearestPosition();
                characterName = names[selectedCharacter];
                displayFactory.finishWithAllElementsInUse();
                scope.gotoScreen(LevelSelectScreen);
            }
            resetAllPosters();
            lookingForTap = false;
        }
    }

    function loop()
    {
        //console.log("CHaracterSelectScreen"+currentX+","+currentY+"  scope="+scope+"  "+scope.characterArea);
        var time = Date.now();
        var moveTo;
        var continueLoop = true;
        if(inputIsMoving && !startPos.ptX)
        {
            startPos.ptX = currentX;
            startPos.ptY = currentY;
        }

        if(inputDown || scrollModeIsVelocity)
        {
            var latestPos =  nearestPosition();
            if(currentPosition!=latestPos)
            {
                currentPosition = latestPos;
                updateTitle();
            }
            if(scrollModeIsVelocity)
            {//Input not down so on scroll velocitiy

                if(Math.abs(charVelocity)>4)
                {//Too fast so still running on 'throw' velocity
                    moveTo = scope.characterArea.offsetLeft + charVelocity;
                    //console.log(charVelocity);
                    charVelocity*=0.93;
                }
                else
                {//Move to nearest position

                    var distX = posterPositions[currentPosition]-scope.characterArea.offsetLeft;
                    var dX = distX*0.1;
                    if(dX<0 && dX>-2) dX= -2;
                    if(dX>0 && dX<2) dX= 2;
                    moveTo = scope.characterArea.offsetLeft+dX;
                    //	console.log("moving to nearest:"+moveTo+"  dX="+dX+"  distX="+distX);
                    if(Math.abs(distX)<2) continueLoop = false;
                }
            }
            else
            if(inputIsMoving)
            {//Input down, Move character area
                moveTo = startPos.x + (currentX-startPos.ptX);
            }
            moveTo = Math.min(Math.max(moveTo, posterPositions[posterPositions.length-1]),posterPositions[0]);//Set limits for positions
            try {
                scope.characterArea.style.left = moveTo +"px"; //Throwing errors in IE7, not sure why - doesn't seem to have any other effect so blocking off with a try/catch
            }
            catch (error) {}


            if(continueLoop) requestId=requestAnimationFrame(loop);
        }
        else
        {

            var diff = time - prevTime;
            //console.log("Velocity?"+diff+" dX"+(currentX-prevX));
            scrollModeIsVelocity = true;
            charVelocity = (currentX-prevX)*0.5;
            //console.log("Dist to nearest:"+distToNearestPosition());
            requestId=requestAnimationFrame(loop);
        }
        prevTime = time;
        prevX=currentX;
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
        //console.log("removeDiv:"+id);
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    }
    this.createDiv = function(className,id)
    {
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = id||className;//Apply
        return pDiv;
    }
}