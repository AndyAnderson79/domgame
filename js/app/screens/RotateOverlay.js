

function RotateOverlay(domParent)
{
    console.log("[RotateOverlay] "+domParent);
    this.name="RotateOverlay";
    var parent = domParent;
    var scope = this;
    /*
     var rotateCanvas = document.createElement( 'canvas' );
     rotateCanvas.id = "rotateCanvas";
     var rotateContext = rotateCanvas.getContext( '2d' );
     */
    var rotateImage = null, rotateImageInfo, rotateDIV;

    this.addToScreen =  function()
    {
        console.log("[RotateOverlay.addToScreen] parent="+parent+"  rotateImage="+rotateImage+"  "+document.documentElement.clientWidth+","+document.documentElement.clientHeight);

        if(!rotateImageInfo)
        {
            rotateImageInfo = displayFactory.getElementByRef("rotateToPlay");
            rotateImage = rotateImageInfo.object;
            rotateImage.style.position = "absolute";
        }
        rotateImage.width = document.documentElement.clientWidth;//window.screen.availWidth;//"100%";
        rotateImage.height = document.documentElement.clientHeight;//window.screen.availHeight;//"100%";
        parent.appendChild(rotateImage);

        //rotateImage.style.backgroundColor = "red";
        //rotateImage.style.backgroundPosition="center";      /* center the image */
        //rotateImage.style.backgroundSize="cover";
        //rotateImage.style.width = window.screen.availWidth+"px";//"100%";
        //rotateImage.style.height = window.screen.availHeight+"px";//"100%";

        //rotateImage.style.height = "100%";
        //rotateImage.style.top = "0px";
        //rotateImage.style.left = "0px";
        //rotateImage.width =
        //var widthToUse = document.documentElement.clientWidth<document.documentElement.clientHeight?document.documentElement.clientWidth:document.documentElement.clientHeight;
        //var heightToUse = document.documentElement.clientWidth>document.documentElement.clientHeight?document.documentElement.clientWidth:document.documentElement.clientHeight;
        //rotateImage.width = widthToUse;//document.documentElement.clientWidth;//window.innerWidth;
        //rotateImage.height =  heightToUse;//document.documentElement.clientHeight;//(window.innerWidth/rotateImageInfo.width) * rotateImageInfo.height;




        //console.log("[RotateOverlay.addToScreen] "+parent.offsetWidth+","+parent.offsetHeight+"--"+parent.id+"//"+rotateImage);

        /*
         clearDebugCanvas();
         rotateCanvas.width = window.innerWidth;
         rotateCanvas.height = window.innerHeight;
         rotateContext.drawImage(rotateImage, rotateCanvas.width , rotateCanvas.height);
         */
        /*
         rotateDIV = document.createElement("div");
         rotateDIV.id="rotateToPlay";
         rotateDIV.innerHTML = "HELLO!!!";
         parent.appendChild(rotateDIV);
         console.log("apendded???"+rotateDIV);
         console.log(rotateDIV);
         */
    }

    this.removeFromScreen = function()
    {
        //console.log("[RotateOverlay.removeFromScreen] parent="+parent+"  rotateImage="+rotateImage);
        /*
         if(!rotateDIV) return;
         if(rotateDIV.parentNode)rotateDIV.parentNode.removeChild(rotateDIV);
         */
        if(!rotateImage) return;
        if(rotateImage.parentNode)parent.removeChild(rotateImage);
        displayFactory.finishWithElementInUseByRef(rotateImage, "rotateToPlay")

    }
    /*
     function clearDebugCanvas()
     {
     rotateContext.clearRect(0, 0, rotateCanvas.width, rotateCanvas.height);
     }
     */
}