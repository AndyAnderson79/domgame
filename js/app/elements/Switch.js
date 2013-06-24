//Jon Howard - @swingpants
//swingpants.com
//A pickup or collectible will display
function Switch(name, sheet, posX, posY, width, height, bbOffsetX, bbOffsetY, target, parent, isOn, switchTargets)
{
//console.log("[Switch] name="+name+"  bbOffsetX="+bbOffsetX+","+bbOffsetY);
    sheet.testName = name+" Sheet";
    this.name = name;
    this.boundingBox = new Rectangle(posX+bbOffsetX,posY+bbOffsetY,width, height);
    this.centreX = posX + width * 0.5;
    this.bbOffsetX = bbOffsetX;
    this.bbOffsetY = bbOffsetY;

    this.target = target;
    this.parent = parent;
    this.sheet = sheet;
    this.sheet.goToColumn(isOn?0:1);
    this.isOn = isOn;
    this.active = true;
    this.switchTargets = switchTargets;//object containing targets of switch

    this.position = function()
    {
        return {x:this.boundingBox.x, y:this.boundingBox.y};
    }

    this.setPosition = function(posX, posY)
    {
        this.boundingBox.x = posX+this.bbOffsetX;
        this.boundingBox.y = posY+this.bbOffsetY;
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

    this.initSwitchDisplay = function()
    {
        if(this.isOn) this.sheet.goToColumn(0);
        else this.sheet.goToColumn(1);

        var s;
        for(var propt in switchables)
        {
            s = switchables[propt];
            if(s.name in this.switchTargets)
            {
                //console.log("[Switch.initDisplaySwitch] s="+s+"  to  "+this.switchTargets[s.name]);
                s.doSwitch(this.switchTargets[s.name]);
            }
        }
    }

    this.hitResponse = function()
    {
        if(!this.isOn && !this.target.isFacingLeft())
        {
            this.sheet.goToColumn(0);
            this.isOn=true;
            this.flickSwitch();
        }
        else
        if(this.isOn && this.target.isFacingLeft())
        {
            this.sheet.goToColumn(1);
            this.isOn=false;
            this.flickSwitch();
        }
    }

    this.flickSwitch = function()
    {
        var s;
        for(var propt in switchables)
        {
            s = switchables[propt];
            if(s.name in this.switchTargets)
            {
                this.switchTargets[s.name] = ! this.switchTargets[s.name];
                s.doSwitch(this.switchTargets[s.name]);
                sndManager.playSound("switchClick");
            }
        }
    }
    this.doSwitch = function(setting)
    {
        if(this.isOn == setting) return;

        if(!this.isOn)
        {
            this.sheet.goToColumn(0);
            this.isOn=true;
        }
        else
        if(this.isOn)
        {
            this.sheet.goToColumn(1);
            this.isOn=false;
        }
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