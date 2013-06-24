//Jon Howard - @swingpants
//swingpants.com
//A blocker is an invisible element that stops a user walking through it
function Blocker(posX, posY, width, height)
{
    this.boundingBox = new Rectangle(posX,posY,width, height);
    this.centreX = posX + width * 0.5;

    this.position = function() { return {x:this.boundingBox.x, y:this.boundingBox.y};}
    this.setPosition=function(posX, posY)
    {
        this.boundingBox.x = posX;
        this.boundingBox.y = posY;
    }
    this.isColliding=function(posX,posY)
    {
        return this.boundingBox.contains(posX,posY);
    }
    this.isBoxIntersecting=function(box)
    {
        return this.boundingBox.intersects(box);
    }

    this.destroy = function()
    {
        this.boundingBox = null;
    }
    this.toString = function()
    {
        return "(Blocker: boundingBox:"+this.boundingBox+")";
    }
}