//Jon Howard - @swingpants
//swingpants.com
//A pickup or collectible will display
function Pickup(sheet, posX, posY, width, height,target, parent)
{
    this.boundingBox = new Rectangle(posX,posY,width, height);
    this.centreX = posX + width * 0.5;
    this.target = target;
    this.parent = parent;
    this.sheet = sheet;
    this.dying = false;
    this.active = true;

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
    this.hitResponse = function()
    {
        if(this.dying) return;
        this.sheet.goToRow(1); //Go to dying anim
        this.sheet.goToColumn(0);//Start at beginning of anim
        //soundManager.play("pickup");
        this.dying = true;

        collectedItems.push(this);

        //collectItem.stop().play();//Audio
        sndManager.playSound("collectItem");
    }
    this.killPickup = function()
    {
        this.active=false;
        //this.sheet.sheet.style.display = "none"; //<- Seems SLOW
        this.sheet.wrapper.style.left = "-999px";
        //this.parent.removeChild(this.sheet.sheet); //<- Too SLOW
    }
    this.redisplayCollectedPickUp = function(pcX,pcY)
    {//For display in level complete panel
        this.active = true;
        this.sheet.wrapper.style.left = pcX+"%";
        this.sheet.wrapper.style.top = pcY+"%";
        this.sheet.goToRow(0);
        this.sheet.goToColumn(0);
        this.sheet.render();
    }
    this.render = function(timestep)
    {
        if(!this.active) return;
        //Only render if in view
        if(this.boundingBox.x+this.boundingBox.width<-scenePosX || this.boundingBox.x>-scenePosX+SCREEN_WIDTH
            || this.boundingBox.y+this.boundingBox.height<-scenePosY || this.boundingBox.y>-scenePosY+SCREEN_HEIGHT) return;
        var ts = timestep>2?2:timestep;
        this.sheet.update(ts);
        this.sheet.render();
        //If at end of dying anim then kill this pickup
        if(this.dying && this.sheet.posX>=this.sheet.cellsPerStrip-1) this.killPickup();
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