//Jon Howard - @swingpants
//swingpants.com
//AttachedImage class  //sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bbWidth,bbHeight, player, parent
function AttachedImage(name, img, attachedToName, offsetX, offsetY, placeBehind)
{
    this.type="AttachedImage";
    var scope = this;
    this.name=name;
    this.img = img;
    this.attachedToName = attachedToName;
    this.attachedTo = null;
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    this.placeBehind = placeBehind;

    this.initAttachement = function(target, parent)
    {
        //console.log("[AttacchedImage.initAttachment] name="+name+"   parent : "+parent+"   target="+target+"  this.placeBehind?"+this.placeBehind);

        this.attachedTo = target;
        if(this.placeBehind)
        {
            parent.insertBefore(this.img, target.spritesheet.displayObject());
        }
        else
        {
            parent.appendChild(this.img);
        };
        this.render();
    }

    this.update=function()
    {
    }

    this.render=function()
    {
        var toX = (scope.attachedTo.position.x+scope.offsetX)*RENDER_RATIO;
        var toY = (scope.attachedTo.position.y+scope.offsetY)*RENDER_RATIO;
        if(scope.img.offsetLeft != toX) scope.img.style.left = toX+"px";
        if(scope.img.offsetTop != toY) scope.img.style.top = toY+"px";
    }


    this.destroy = function()
    {
        if(this.img.parentNode) this.img.parentNode.removeChild(this.img);
        this.name = null;
        this.attachedTo = null;

        //console.log("[AttachedImage] destroy "+name);
    }

    this.toString = function()
    {
        return "(AttachedImage pos:"+this.position.x+","+this.position.y+" Attached to: "+this.attachedTo+")";
    }

}