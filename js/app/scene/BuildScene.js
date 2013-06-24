var levels = [
    level1_0
];

function buildScene(level, scene)
{
    displayFactory.finishWithAllElementsInUse();

    if (player) player.destroy();

    initPlayer(scene);

    var i;

    for (i = 0; i < level.length; i++) parseObject(level[i], scene);
    for (i = 0; i < updateables.length; i++) if (updateables[i].type && updateables[i].type == "AttachedImage") updateables[i].initAttachement(elementByName(updateables[i].attachedToName), scene);
}

function cloneObject(obj)
{
    var o = {};

    for (var propt in obj) o[propt] = obj[propt];

    return o;
}

function elementByName(name)
{
    var result = false;
    var len = characters.length;

    result = findNameInArray(characters, name);
    if (result) return result;

    result = findNameInArray(movingPlatforms, name);
    if (result) return result;

    result = findNameInArray(hittables, name);
    if (result) return result;

    result = findNameInArray(updateables, name);
    if (result) return result;
}

function findNameInArray(array, name)
{
    var result = false;
    var len = array.length;

    for(var i=0;i<len;i++) if (array[i].name && array[i].name == name) result = array[i];

    return result;
}

function parseObject(obj, parent)
{
    var len, index = 0, displayObject;

    switch(obj.type)
    {
        case "worldInit":

            worldWidth = obj.worldWidth;
            worldHeight = obj.worldHeight;

            break;

        case "playerInit":

            player.reset(obj.posX, obj.posY, obj.velX, obj.velY);

            break;

        case "npcBaddieInit":

            var npc = buildNPCBaddie(obj.name, obj.className, obj.cellWidth, obj.cellHeight, obj.numCells, obj.speed, obj.posX, obj.posY, obj.offsetY || 0, obj.velX, obj.velY, obj.bbWidth, obj.bbHeight, obj.bbOffsetX, obj.bbOffsetY,  parent );
            npc.displayRender();

            characters.push(npc);

            break;

        case "overlayImage":

            displayObject = displayFactory.getElementByRef(obj.ref);
            displayObject.object.style.position = "absolute";
            displayObject.object.style.left = RENDER_RATIO * obj.posX + "px";
            displayObject.object.style.top = RENDER_RATIO * obj.posY + "px";
            parent.appendChild(displayObject.object);

            images.push(displayObject.object);

            break;

        case "divWithBackground":

            displayObject = createADiv("blankBG", obj.posX, obj.posY);
            displayObject.style.position = "absolute";
            displayObject.style.width = obj.width + "px";
            displayObject.style.height = obj.height + "px";
            displayObject.style.backgroundImage = "url('" + obj.url + "')";
            parent.appendChild(displayObject);

            images.push(displayObject);

            break;

        case "divBG":

            displayObject = displayFactory.getElementByRef(obj.ref);
            displayObject.object.style.position = "absolute";
            displayObject.object.style.left = RENDER_RATIO * obj.posX + "px";
            displayObject.object.style.top = RENDER_RATIO * obj.posY + "px";
            displayObject.object.style.width = obj.width + "px";
            displayObject.object.style.height = obj.height + "px";
            parent.appendChild(displayObject.object);

            images.push(displayObject.object);

            break;

        case "divWithColour":

            displayObject = createADiv("blankCol", obj.posX, obj.posY);
            displayObject.style.position = "absolute";
            displayObject.style.top = obj.posY + "px";
            displayObject.style.width = obj.width + "px";
            displayObject.style.height = obj.height + "px";
            displayObject.style.backgroundColor = obj.colour;
            parent.appendChild(displayObject);

            images.push(displayObject);

            break;

        case "attachedImage":

            displayObject = displayFactory.getElementByRef(obj.ref);
            displayObject.object.style.position = "absolute";

            updateables.push(new AttachedImage(obj.name, displayObject.object, obj.attachedTo, obj.offsetX, obj.offsetY, obj.placeBehind));

            break;

        case "triggeredAnim":

            var anim = buildTriggeredAnim(obj.name, obj.ref, obj.posX, obj.posY, parent, obj.target);

            var trigger = elementByName(obj.trigger);
            trigger.initImpactSmoke(anim);

            updateables.push(anim);

            break;

        case "signAnim":

            displayObject = displayFactory.getElementByRef(obj.ref);
            displayObject.object.style.position = "absolute";
            parent.appendChild(displayObject.object);

            updateables.push(new SignAnim(obj.name, displayObject.object, obj.fromX, obj.fromY, obj.toX, obj.toY, obj.autostart));

            break;

        case "line":

            var line = new Line();
            var points = obj.edges.points;

            len = points.length;
            index = 2;

            while (index < len)
            {
                line.addEdge(new Edge(obj.type, new Point(points[index - 2], points[index - 1]), new Point(points[index], points[index + 1])));
                index += 2;
            }

            lines.push(line);

            break;

        case "bouncer":

            hittables.push(buildBouncer(obj.ref, parent, obj.posX, obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bounceYAmt, obj.bbWidth, obj.bbHeight, obj.bbOffsetX, obj.bbOffsetY, obj.speed));

            break;

        case "blocker":

            blockers.push(buildBlocker(obj.posX,obj.posY, obj.width, obj.height));

            break;

        case "doorBlocker":

            var doorBlocker = buildDoorBlocker(obj.name, obj.ref, parent, obj.posX, obj.posY, obj.numCells, obj.bbOffsetX, obj.bbWidth, obj.bbHeight);

            blockers.push(doorBlocker);
            switchables.push(doorBlocker);

            break;

        case "movingPlatform":

            var movingPlatform = buildMovingPlatform(obj.name, obj.ref, parent, obj.posX, obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, obj.speed, obj.minX, obj.maxX, obj.minY, obj.maxY, obj.velX, obj.velY, obj.repositionTargets || null);

            movingPlatforms.push(movingPlatform);
            switchables.push(movingPlatform);

            var platformLine = new Line();
            platformLine.addEdge(new Edge("line", new Point(obj.line.fromX, obj.line.fromY), new Point(obj.line.toX,obj.line.toY)));

            movingPlatform.setLine(platformLine);

            lines.push(platformLine);

            if (obj.rotation) movingPlatform.initRotation(obj.rotation.radius, obj.rotation.rate, obj.rotation.rotationPosition, obj.rotation.centreX, obj.rotation.centreY);

            movingPlatform.update(characters, 0.2);
            movingPlatform.render();

            break;

        case "collapsingPlatform":

            var collapser = buildCollapsingPlatform(obj.name, obj.ref, obj.posX, obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, obj.steps, obj.stepCount, parent, player);

            movingPlatforms.push(collapser);

            var platformLine = new Line();
            platformLine.addEdge(new Edge("onewayline", new Point(obj.line.fromX, obj.line.fromY), new Point(obj.line.toX,obj.line.toY)));

            collapser.setLine(platformLine);

            if (obj.respondToNPC) collapser.addNPCTargets(obj.respondToNPC);

            lines.push(platformLine);

            break;

        case "pickup":

            if (obj.character && obj.character != characterName) return;

            hittables.push(buildPickUp(obj.ref, parent, obj.posX, obj.posY, obj.cellWidth * MEDIA_SIZE_RATIO, obj.cellHeight * MEDIA_SIZE_RATIO, obj.numCells, obj.bbWidth, obj.bbHeight, obj.speed));

            break;

        case "switch":

            var flickSwitch = buildSwitch(obj.ref, obj.className, parent, obj.posX, obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, obj.bbOffsetX || 0, obj.bbOffsetY || 0, obj.speed, obj.isOn, cloneObject(obj.switchTargets));

            hittables.push(flickSwitch);
            switchables.push(flickSwitch);

            break;

        case "lethalToTouch":

            hittables.push(buildLethalToTouch(obj.ref, parent, obj.posX, obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, obj.speed));

            break;

        case "fallingBlock":
        case "fallingBlockRoofed":

            var fallingBlock = buildFallingBlock(obj.name, obj.ref, parent, obj.posX, obj.posY, obj.minY || obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, player);
            fallingBlock.initSequence(obj.seq.wait, obj.seq.hoist, obj.seq.rest);
            fallingBlock.startState(obj.seq.start);

            hittables.push(fallingBlock);

            if(obj.type == "fallingBlockRoofed")
            {
                var platform = fallingBlock.initTopAsPlatform(parent, obj.offsetY, obj.onlyKillIfFallingOnto || false);

                var platformLine = new Line();
                platformLine.addEdge(new Edge("line", new Point(platform.position.x - 2, platform.position.y - 2), new Point((platform.position.x + platform.boundingBox.width + 2), platform.position.y - 2)));
                platform.setLine(platformLine);

                lines.push(platformLine);
            }

            break;

        case "cage":

            var cageCrate = buildCage(obj.name, obj.ref, parent, obj.posX, obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, player, cloneObject(obj.cageTargets));
            cageCrate.startState(obj.start);

            hittables.push(cageCrate);
            switchables.push(cageCrate);

            break;

        case "spike":

            var spike = buildSpike(obj.ref, parent, obj.posX, obj.posY, obj.startPosX, obj.startPosY, obj.targetPosX, obj.targetPosY, obj.offsetY || 0, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, obj.bbOffsetX, obj.bbOffsetY, player, obj.cropDiv || false);
            spike.initSequence(obj.seq.wait, obj.seq.spike, obj.seq.rest, obj.seq["return"]);
            spike.startState(obj.seq.start);

            hittables.push(spike);

            break;

        case "exitLevel":

            var exitLevel = buildExit(obj.ref, parent, obj.posX, obj.posY, obj.cellWidth, obj.cellHeight, obj.numCells, obj.bbWidth, obj.bbHeight, obj.bbOffsetX || 0, obj.bbOffsetY || 0);

            hittables.push(exitLevel);
            exitTrigger=exitLevel;

            break;
    }
}
