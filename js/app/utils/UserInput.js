function mouseHandler(event)
{
    var mousePosX, mousePosY;

    if (event.pageX || event.pageY)
    {
        mousePosX = event.pageX;
        mousePosY = event.pageY;
    }
    else if (event.clientX || event.clientY)
    {
        mousePosX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mousePosY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    //Return with no response if mouse event is outside game area
    if(mousePosX < EXTENT_MINX || mousePosX > EXTENT_MAXX || mousePosY < EXTENT_MINY || mousePosY > EXTENT_MAXY) return;

    switch(event.type)
    {
        case "mousedown":
        case "onmousedown":

            inputDown = true;
            inputX = currentX = mousePosX;
            inputY = currentY = mousePosY;

            var targetElement = (typeof event.target != 'undefined') ? event.target : event.srcElement;

            if(screenManager) screenManager.handleUserInput(event.type, targetElement.id);

            break;

        case "mousemove":
        case "onmousemove":

            currentX = mousePosX;
            currentY = mousePosY;
            inputIsMoving = true;

            break;

        case "mouseup":
        case "onmouseup":

            inputIsMoving = false;
            inputDown = false;
            inputLifted = true;
            currentX = mousePosX;
            currentY = mousePosY;
            leftIsDown = false;
            rightIsDown = false;
            upIsDown = false;
            jumpIsDown = false;

            var targetElement = (typeof event.target != 'undefined') ? event.target : event.srcElement;

            if(screenManager) screenManager.handleUserInput(event.type, targetElement.id);

            break;

        default: return;
    }

    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
}

function touchStartHandler(event)
{
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

    var touch, i, len = event.changedTouches.length;

    inputDown = true;

    for (i = 0; i < len; i++)
    {
        touch = event.changedTouches[i];

        if (controlTouchID < 0)
        {
            controlTouchID = touch.identifier;
            inputX = currentX = touch.clientX;
            inputY = currentY = touch.clientY;
        }
    }

    if (screenManager) screenManager.handleUserInput(event.type, event.target.id);
}

function touchMoveHandler(event)
{
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

    var touch, i, len = event.changedTouches.length;

    for (i = 0; i < len; i++) touch = event.changedTouches[i];
}

function touchEndHandler(event)
{
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

    inputIsMoving = false;
    inputLifted = true;
    inputDown = false;

    var touch, i, len = event.changedTouches.length;

    for (i = 0; i < len; i++)
    {
        touch = event.changedTouches[i];

        if (controlTouchID == touch.identifier)
        {
            controlTouchID = -1;
            leftIsDown = false;
            rightIsDown = false;
            upIsDown = false;
            jumpIsDown = false;
        }
    }

    if (screenManager) screenManager.handleUserInput(event.type, event.target.id);
}

function MSGestureHandler(event)
{
    if (evt.type == "MSPointerDown")
    {
        docGesture.addPointer(evt.pointerId);
        return;
    }

    inputX = currentX = event.clientX;
    inputY = currentY = event.clientY;
}

function gestureHandler(event)
{
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
}

function onKeyDown(event)
{
    inputDown = true;

    switch (event.keyCode)
    {
        case SPACE: jumpIsDown = true; break;
        case UP: upIsDown = true; break;
        case DOWN: downIsDown = true; break;
        case LEFT: leftIsDown = true; break;
        case RIGHT: rightIsDown = true; break;
    }

    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
}

function onKeyUp(event)
{
    inputDown = false;

    switch (event.keyCode)
    {
        case SPACE: jumpIsDown = false; break;
        case UP: upIsDown = false; break;
        case DOWN: downIsDown = false; break;
        case LEFT: leftIsDown = false; break;
        case RIGHT: rightIsDown = false; break;
    }

    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

    if (screenManager) screenManager.handleUserInput("keyup", null);
}