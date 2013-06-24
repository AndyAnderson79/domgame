//Jon Howard - @swingpants
//swingpants.com
//Draw to canvas the edges and requested bounding boxes
/****************************************************************************************************
 DEBUG
 *****************************************************************************************************/

function initDebugCanvas()
{
    debugCanvas = document.createElement( 'canvas' );
    debugContext = debugCanvas.getContext( '2d' );
    debugCanvas.width = 2000;
    debugCanvas.height = 1000;
}

function drawDebugCanvas()
{
    if(!debugCanvas) initDebugCanvas();

    scene.appendChild( debugCanvas );
    drawDebugEdges();
    drawDebugBoundingBoxes(blockers, "rgb(0,255,0)");
    drawDebugBoundingBoxes(lines, "rgb(255,0,0)");
    drawDebugBoundingBoxes(ladders, "rgb(255,255,0)");
    drawDebugBoundingBoxes(hittables, "rgb(255,0,255)");
}

function clearDebugCanvas()
{
    context.clearRect (0, 0, debugCanvas.width, debugCanvas.height);
}

function drawDebugEdges()
{
    var i,j;
    debugContext.strokeStyle = "rgb(0,255,0)";
    debugContext.lineWidth = 3; //Bigger if older gen
    debugContext.lineCap = 'round';
    debugContext.beginPath();
    for (i=0;i<lines.length;i++)
    {
        if(lines[i].type=="line")
        {
            for(j=0;j<lines[i].edges.length;j++)
            {
                debugContext.moveTo(lines[i].edges[j].from.x, lines[i].edges[j].from.y);
                debugContext.lineTo(lines[i].edges[j].to.x, lines[i].edges[j].to.y);
            }
        }
    }

    debugContext.stroke();
    debugContext.restore();
}

function drawDebugBoundingBoxes(array, strokeStyle)
{
    //console.log("[DrawDebug.drawDebugBoundingBoxes] strokeStyle="+strokeStyle+"  array="+array[0]);
    var i,bb, offsetX, offsetY, element;
    debugContext.strokeStyle = strokeStyle;
    debugContext.lineWidth = 2; //Bigger if older gen
    debugContext.lineCap = 'round';
    debugContext.beginPath();
    for (i=0;i<array.length;i++)
    {
        element = array[i];
        offsetX = element.offsetX||0;
        offsetY = element.offsetY||0;
        bb = array[i].boundingBox;
        debugContext.strokeRect(bb.x+offsetX, bb.y+offsetY, bb.width, bb.height);
    }
    debugContext.stroke();
    debugContext.restore();
}