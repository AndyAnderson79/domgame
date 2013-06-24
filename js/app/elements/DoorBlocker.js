//Jon Howard - @swingpants
//swingpants.com
//A pickup or collectible will display
function DoorBlocker(name, sheet, posX, posY, offsetX, width, height,target, parent, isOpen)
{
    this.name = name;
    this.origPosY = posY;
    this.boundingBox = new Rectangle(posX+offsetX,posY,width, height);
    this.centreX = posX+offsetX + width * 0.5;
    this.target = target;
    this.parent = parent;
    this.sheet = sheet;
    this.isOpen = isOpen;
    this.active = true;
    this.updateSpritesheet = function() { this.sheet.goToColumn(this.isOpen?0:1); }
    this.updateSpritesheet();

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
        if(this.target.isDying) return false;
        return this.boundingBox.intersects(this.target.boundingBox);
    }

    this.isBoxIntersecting = function(box)
    {
        return this.boundingBox.intersects(box);
    }

    this.doSwitch = function(setting)
    {
        //console.log("[DoorBlocker]doSwitch this.isOpen = "+this.isOpen)
        this.isOpen = setting;
        if(this.isOpen)
        {
            this.unHideBlocker()
        }
        else
        {
            this.hideBlocker();
        }
        this.updateSpritesheet();
        this.render();
    }
    this.hideBlocker = function()
    {
        //console.log("[DoorBlocker.hideBlocker");
        this.boundingBox.y = -5000;
    }
    this.unHideBlocker = function()
    {
        //console.log("[DoorBlocker.unHideBlocker");
        this.boundingBox.y = this.origPosY;
    }

    this.render = function()
    {
        if(!this.active) return;
        //Only render if in view
        /*
         if(this.boundingBox.x+this.boundingBox.width<-scenePosX || this.boundingBox.x>-scenePosX+SCREEN_WIDTH
         || this.boundingBox.y+this.boundingBox.height<-scenePosY || this.boundingBox.y>-scenePosY+SCREEN_HEIGHT) return;
         */
        this.sheet.update();
        this.sheet.render();
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