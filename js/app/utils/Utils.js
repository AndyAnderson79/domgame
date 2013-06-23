//Assorted utility functions
function trace(str)
{
    if (!doTrace) return;
    if (window.console) console.log(str);
}

function traceObject(object)
{
    console.log("-------OBEJCT TRACE--------");
    console.log(object);

    for(var propt in object) console.log(propt + ": " + object[propt]);
}

function testAudio()
{
    var audio = document.createElement('audio');
    var boolObj = false;

    try
    {
        if (boolObj = !!audio.canPlayType)
        {
            boolObj = new Boolean(boolObj);
            boolObj.ogg = audio.canPlayType('audio/ogg; codecs="vorbis"');
            boolObj.mp3 = audio.canPlayType('audio/mpeg;');

            var debug = document.getElementById('debug');

            trace("debug? " + debug);
            debug.innerHTML = "ogg: " + boolObj.ogg + " <br> mp3: " + boolObj.mp3;
            trace("? boolObj.ogg: " + boolObj.ogg + " boolObj.mp3: " + boolObj.mp3);
        }
    } catch(e) { }

    trace("testAudio: " + boolObj);

    return boolObj;
}

function buildAudio(src)
{
    var audio = document.createElement('audio');
    audio.preload = "auto";
    audio.src = src;

    return audio;
}

//Create a client side image
function getImage(url, posX, posY, width, height)
{
    var img = new Image();//document.createElement("IMG");

    img.style.position="absolute";
    img.style.left = posX+"px";
    img.style.top = posY+"px";
    img.src = url;
    //console.log(">>>"+url+"  "+img.width+"  "+img.height);
    //img.width=width;
    //img.height=height;
    return img;
}

function createADiv(className, posX, posY)
{
    //console.log(className+"  "+posX+","+posY);
    var pDiv = document.createElement( 'div' );
    pDiv.className = className;//Apply
    pDiv.style.left = posX+'px';
    pDiv.style.top = posY+'px';

    return pDiv
}

function getScreenPosition(element, resultPoint)
{

    var valueT = element.offsetTop  || 0;
    var valueL = element.offsetLeft  || 0;
    var parent = element.offsetParent;
    var pos;

    //console.log("getScreenPosition");
    while (parent)
    {
        //console.log(parent);
        if( parent.tagName == 'BODY' ) break;

        //pos = parent.getStyle('position');
        //if( pos == 'relative' || pos == 'absolute') break;

        valueT += parent.offsetTop  || 0;
        valueL += parent.offsetLeft || 0;
        parent = parent.offsetParent;
    }

    resultPoint.x = valueL;
    resultPoint.y = valueT;
}