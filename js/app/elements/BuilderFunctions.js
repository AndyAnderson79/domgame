function buildBlocker(posX, posY, width, height)
{
    var blocker = new Blocker(posX, posY, width, height);
    blockers.push(blocker);

    return blocker;
}

//Initialise the player
function initPlayer(scene)
{
    //console.log("INITING PLAYER");
    var chars=["shockwave", "scooby","velma", "fred", "daphne",];
    var chosenChar = chars[selectedCharacter]+"_walkcycle";
    //if(player) displayFactory.finishWithElementInUseByRef(player.spritesheet.wrapper, chosenChar);
    var playerAsset = displayFactory.getElementByRef(chosenChar);

    wrapper = playerAsset.object;
    wrapper.style.position = "absolute"; //SIGH. Bodge again - already set this to absolute - but resetting it here seems to work...
    scene.appendChild(wrapper);
    wrapper.appendChild(playerAsset.img);
    //Spritesheet(sheet,sheetWidth,sheetHeight, cellsPerStrip, numStrips, wrapper, offsetX, offsetY, speed, renderType)
    var spritesheet = new Spritesheet(playerAsset.img, playerAsset.width, playerAsset.height, playerAsset.columns, playerAsset.rows, wrapper, -49, -130, 0.1, "image" );
    //Character(posn,velocity, bbWidth,bbHeight, bbOffsetX, bbOffsetY, spritesheet)

    console.log("spritesheet: ", spritesheet);

    player = new Character(new Point(0, 0), new Point(4, 0), 30, 120, 5, 20, spritesheet);

    console.log("player: ", player);
    //wrapper.appendChild(character);
    spritesheet.render(true); //Force a spritesheet render - BODGE to force fix starting levels facing wrong direction.

    characters.push(player);
}


//Build the npc baddie
function buildNPCBaddie(name, ref, cellWidth, cellHeight, numCells, speed, posX, posY, offsetY, velX, velY, bbWidth, bbHeight, bbOffsetX, bbOffsetY, parent)
{
    //console.log("[BuilderFunctions.buildNPCBaddie]  ref="+ref);

    displayFactory.finishWithElementInUseByRef(document.getElementById(ref), ref);
    var baddieAsset = displayFactory.getElementByRef(ref);
    parent.appendChild(baddieAsset.object);
    baddieAsset.object.appendChild(baddieAsset.img);
    //Create sprite sheet
    //var sheet = new Spritesheet(pDiv, cellWidth, cellHeight, numCells, 2, npcWrapper, -cellWidth*0.5, -cellHeight, speed);
    var sheet = new Spritesheet(baddieAsset.img, baddieAsset.width, baddieAsset.height, baddieAsset.columns, baddieAsset.rows, baddieAsset.object, -cellWidth*0.5, -cellHeight, speed, "image");
//console.log("pos:"+posX+","+posY+"  cell dims:"+cellWidth+","+cellHeight);
    var npc = new NPCBaddie(name, new Point(posX-cellWidth*0.5, posY+(cellHeight)), offsetY, new Point(velX,velY), bbWidth, bbHeight, sheet, player);
    if(velX<0)npc.displayFaceLeft();//Face left

    return npc;
}


//*************TO DO**********************/
function buildFallingBlock(name, ref, parent, posX, posY, minY, cellWidth, cellHeight, numCells, bbWidth, bbHeight)
{
    //console.log("buildFallingBlock name="+name+"  ref="+ref);
    var element = displayFactory.getElementByRef(ref);
    parent.appendChild(element.object);
    //var pDiv = createADiv(className, posX, posY);
    //parent.appendChild(pDiv);//Add to the parent
    //Create the spritesheet
    var sheet = new Spritesheet(element.object, cellWidth, cellHeight, numCells, 1, null, 0, -cellHeight, 0);
    //var iDiv = createADiv("impactSmoke", posX, posY);
    //var impactSheet = new Spritesheet(iDiv, 250, 40, 5, 1, null, 0, -0, 0);

    //Build the pickup
    var fallingBlock = new FallingBlock(name, sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, minY,0, 0, bbWidth,bbHeight, player, parent);

    return fallingBlock;
}





//Build a spring bouncer
function buildBouncer(ref, parent, posX, posY, cellWidth, cellHeight, numCells, bounceYAmt, bbWidth, bbHeight, bbOffsetX, bbOffsetY, speed)
{
    //console.log(className, parent, posX, posY, cellWidth, cellHeight, numCells, bounceYAmt, bbWidth, bbHeight, bbOffsetX, bbOffsetY, speed)
    console.log("[BuilderFunctions.buildBouncer] ref="+ref);
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);
    applySpritesheetCSSProperties(element, posX, posY);
    var object = element.object;
    var img = element.img;
    object.appendChild(img);
    //Add to parent
    parent.appendChild(object);
    //Create spritesheet
    var sheet = new Spritesheet(img, element.width, element.height, numCells, 2, object, 0, 0, speed, "image");
    //Build bouncer object
    var bouncer = new Bouncer(sheet, posX+(cellWidth-bbWidth)*0.5+bbOffsetX, posY+(cellHeight-bbHeight)*0.5+bbOffsetY, bbWidth,bbHeight, bounceYAmt, player);

    return bouncer;
}

function buildDoorBlocker(name, ref, parent, posX, posY, numCells, bbOffsetX, bbWidth, bbHeight)
{
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);
    applySpritesheetCSSProperties(element, posX, posY);
    var object = element.object;
    var img = element.img;
    object.appendChild(img);
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet
    var sheet = new Spritesheet(img, element.width, element.height, numCells, 2, object, 0, -element.width, 0, "image");
    //Build the door //sheet, posX, posY, width, height,target, parent, isOpen)
    var doorBlocker = new DoorBlocker(name, sheet, posX, posY, bbOffsetX, bbWidth,bbHeight, player, parent, false);

    return doorBlocker;
}

function buildMovingPlatform(name,className, parent, posX, posY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, speed, minX, maxX, minY, maxY, velX, velY, repositionTargets)
{
    //Get element from factory

    var element, object;
    if(className.indexOf("Blank")>-1)
    {//Bodgeto allow blank divs to ease use of attachedImages.
        object = createADiv(className, posX, posY);
    }
    else
    {
        element = displayFactory.getElementByRef(className);
        object = element.object;
    }
    //applySpritesheetCSSProperties(element, posX, posY);

    object.style.position="absolute";
    //Add to parent
    parent.appendChild(object);
    //Create spritesheet (even though just object - is ready for easy update)
    var sheet = new Spritesheet(object, cellWidth, cellHeight, 1, 1, null, 0, 0, speed);
    //sheet, posX, posY, width, height, minX, maxX, minY, maxY, velX, velY, parent
    var movingPlatform = new MovingPlatform(name,sheet, posX, posY, bbWidth, bbHeight, minX, maxX, minY, maxY, velX, velY, parent, repositionTargets);

    return movingPlatform;
}

//Pick up-ables
function buildLethalToTouch(ref, parent, posX, posY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, speed)
{
    //console.log("...buildLethalToTouch  ref="+ref);
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);
    //applySpritesheetCSSProperties(element, posX, posY);
    var object = element.object;
    object.style.position="absolute";
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet
    var sheet = new Spritesheet(object, cellWidth, cellHeight, 1, 1, null, 0, 0, speed);
    sheet.setWrapperPosition(posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5); //<------######NEED TO INCLUDE POS OFFSET
    //Build the pickup
    var lethal = new LethalToTouch(sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bbWidth,bbHeight, player, parent);

    return lethal;
}


function buildCollapsingPlatform(name,className,  posX, posY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, steps, stepCount, parent, player)
{
    //Get element from factory
    var element = displayFactory.getElementByRef(className);
    applySpritesheetCSSProperties(element, posX, posY);
    var object = element.object;
    var img = element.img
    object.appendChild(img); //Ensure image is attached...
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet
    var sheet = new Spritesheet(img, element.width, element.height, numCells, 2, object, 0, 0, 0, "image");
    //sheet, posX, posY, width, height, steps, stepCount, parent, player)
    var collapsingPlatform = new CollapsingPlatform(name,sheet, posX, posY, bbWidth, bbHeight, steps, stepCount, parent, player);

    return collapsingPlatform;
}

function buildTriggeredAnim(name,className,  posX, posY, parent, target)
{
    //console.log("[BuilderFunctions.buildTriggeredAnim] parent="+parent);
    //Get element from factory
    var element = displayFactory.getElementByRef(className);
    applySpritesheetCSSProperties(element, posX, posY);
    var object = element.object;
    var img = element.img
    object.appendChild(img); //Ensure image is attached...
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet //Spritesheet(sheet,sheetWidth,sheetHeight, cellsPerStrip, numStrips, wrapper, offsetX, offsetY, speed, renderType)
    var sheet = new Spritesheet(img, element.width, element.height, 5, 1, object, 0, 0, 0.2, "image");
    //sheet, posX, posY, width, height, steps, stepCount, parent, player)
    var triggeredAnim = new TriggeredAnim(name,sheet, posX, posY, target, 5);

    return triggeredAnim;
}

function buildExit(ref, parent, posX, posY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, bboffsetX, bboffsetY)
{
    //console.log("[BuilderFunctions.buildExit] bboffsetX, bboffsetY="+bboffsetX+","+bboffsetY)
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);
    applySpritesheetCSSProperties(element, posX, posY);
    var object = element.object;
    object.style.position="absolute";
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet
    var sheet = new Spritesheet(object, cellWidth, cellHeight, 1, 1, null, 0, 0, 0);
    //Build the pickup
    var exitLevel = new Exit(sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bboffsetX, bboffsetY, bbWidth,bbHeight, player, parent);

    return exitLevel;
}

//Pick up-ables
function buildPickUp(ref, parent, posX, posY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, speed)
{
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);

    var object = element.object;
    var img = element.img;
    object.appendChild(img);
    applySpritesheetCSSProperties(element, posX, posY);
    //object.style.backgroundColor = "red";
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet
    var sheet = new Spritesheet(img, element.width, element.height, numCells, 2, object, 0, 0, speed, "image");
    //Build the pickup
    var pickup = new Pickup(sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bbWidth,bbHeight, player, parent);

    return pickup;
}

//SWITCH
function buildSwitch(name, ref, parent, posX, posY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, bbOffsetX, bbOffsetY, speed, isOn, switchTargets)
{
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);

    var object = element.object;
    var img = element.img;
    object.appendChild(img);
    applySpritesheetCSSProperties(element, posX, posY);
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet
    var sheet = new Spritesheet(img, element.width, element.height, numCells, 2, object, 0, 0, speed, "image");
    //Build the pickup
    var fSwitch = new Switch(name, sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bbWidth,bbHeight, bbOffsetX, bbOffsetY, player, parent, isOn, switchTargets);
    //fSwitch.flickSwitch();
    fSwitch.initSwitchDisplay();
    return fSwitch;
}

function buildCage(name, ref, parent, posX, posY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, player, cageTargets)
{
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);
    //applySpritesheetCSSProperties(element, posX, posY);
    var object = element.object;
    object.style.position="absolute";
    //Add to parent
    parent.appendChild(object);
    //Create the spritesheet
    var sheet = new Spritesheet(object, cellWidth, cellHeight, numCells, 1, null, 0, -cellHeight, 0);
    //Build the pickup
    var cage = new Cage(name, sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, 0, 0, bbWidth,bbHeight, player, parent, cageTargets);

    return cage;
}

function buildSpike(ref, parent, posX, posY, startPosX, startPosY, targetPosX, targetPosY, offsetY, cellWidth, cellHeight, numCells, bbWidth, bbHeight, bbOffsetX, bbOffsetY, player, cropDiv)
{
    //Get element from factory
    var element = displayFactory.getElementByRef(ref);
    //applySpritesheetCSSProperties(element, posX, posY);
    var container = createADiv("boxingGloveContainer",0,0);
    //container.style.width = 88*MEDIA_SIZE_RATIO+"px";
    //container.style.height = 165*MEDIA_SIZE_RATIO+"px";
    container.style.position="absolute";
    container.style.width = 66*MEDIA_SIZE_RATIO+"px";
    container.style.height = 165*MEDIA_SIZE_RATIO+"px";
    var object = element.object;
    object.style.position="absolute";
    //Add to parent
    container.appendChild(object);
    parent.appendChild(container);
    //Create the spritesheet
    var sheet = new Spritesheet(object, cellWidth, cellHeight, 1, 1, container, 0, -cellHeight, offsetY,"image");
    //Build the pickup
    var spike = new Spike(sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5,  startPosX+(cellWidth-bbWidth)*0.5, startPosY+(cellHeight-bbHeight)*0.5, targetPosX+(cellWidth-bbWidth)*0.5, targetPosY+(cellHeight-bbHeight)*0.5, offsetY, bbWidth,bbHeight, bbOffsetX, bbOffsetY, player, cropDiv);
    spike.update();
    spike.displayRender();
    return spike;
}



function buildAttachedImage(name, ref, width, height, attachedTo, offsetX, offsetY, placeBehind, parent)
{
    var element = displayFactory.getElementByRef(ref);
    var object = element.object;
    object.style.position="absolute";
    //var img = getImage(url, 0, 0, width, height);

    return new AttachedImage(name, element.object, attachedTo, offsetX, offsetY, placeBehind);
}

function applySpritesheetCSSProperties(element, posX, posY)
{
    var object = element.object;
    var img = element.img;
    //apply properties
    object.style.position="absolute";
    object.style.left = RENDER_RATIO*posX+"px";
    object.style.top = RENDER_RATIO*posY+"px";
    object.style.width=element.width+"px";
    object.style.height=element.height+"px";
    if(img)
    {
        img.style.left = "0px";
        img.style.top = "0px";
        img.style.position="absolute";
    }
}
