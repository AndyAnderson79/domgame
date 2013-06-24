//Jon Howard - @swingpants
//swingpants.com
//A pickup or collectible will display
function Exit(sheet, posX, posY, bboffsetX, bboffsetY, width, height,target, parent)
{
//console.log("[Exit] pos:"+posX+","+posY+"  offset:"+bboffsetX+","+bboffsetY);
    this.boundingBox = new Rectangle(posX+bboffsetX,posY+bboffsetY,width, height);
    this.bboffsetX = bboffsetX;
    this.bboffsetY = bboffsetY;
    this.centreX = posX + width * 0.5;
    this.target = target;
    this.parent = parent;
    this.sheet = sheet;
    this.triggered = false;
    this.active = true;
    this.dirty = true;

    this.position = function()
    {
        return {x:this.boundingBox.x, y:this.boundingBox.y};
    }

    this.setPosition = function(posX, posY)
    {
        this.boundingBox.x = posX;
        this.boundingBox.y = posY;
    }
    this.isColliding = function()
    {
        return this.boundingBox.intersects(this.target.boundingBox);
    }
    this.isBoxIntersecting = function(box)
    {
        return this.boundingBox.intersects(box);
    }
    this.hitResponse = function()
    {
        if(!this.target.contact) return;
        this.sheet.goToColumn(1);//Start at beginning of anim
        this.dirty=true;
        this.triggered = true;
    }

    this.render = function()
    {
        if(!this.active) return;
        if(!this.dirty) return;
        //Only render if in view

        this.sheet.update();
        this.sheet.render();

        this.dirty=false;
    }
    this.destroy = function()
    {
        this.sheet.destroy();
        this.boundingBox = null;
        this.target = null;
        this.parent = null;
        this.sheet = null;
    }
}