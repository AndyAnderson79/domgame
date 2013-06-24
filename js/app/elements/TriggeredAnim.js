//Jon Howard - @swingpants
//swingpants.com
//Simple animation
function TriggeredAnim(name,sheet, posX, posY, target, numCols)
{
//console.log("TRIGGERED ANIM:"+name);
    this.name = name;
    this.sheet = sheet;
    this.position = new Point(posX, posY);

    this.sheet.goToColumn(numCols-1);
    this.sheet.render();

    this.animationIsRunning = false;

    this.update = function(timestep)
    {
        if(!this.animationIsRunning) return;
        this.displayUpdate();
    }

    this.hitTrigger = function()
    {
        this.animationIsRunning = true;
        this.sheet.goToColumn(0);
    }

    this.render=function()
    {
        if(!this.animationIsRunning) return;
//console.log("this.animationIsRunning="+this.animationIsRunning+"   sheet="+this.sheet);
        //this.displayUpdate();
        this.displayRender()
    }
    this.displayUpdate=function()
    {
        if(!this.sheet) return;
        this.sheet.update();
    }
    this.displayRender=function()
    {
        //this.sheet.setWrapperPosition(this.position.x, this.position.y+this.offsetY);
        if(!this.sheet) return;
        this.sheet.render();
        //console.log("this.sheet.posX="+this.sheet.posX+"  this.sheet.cellsPerStrip="+this.sheet.cellsPerStrip);

        if(this.sheet.posX>=this.sheet.cellsPerStrip-1)
        {
            this.animationIsRunning = false;
            this.sheet.goToColumn(this.sheet.cellsPerStrip-1);
            this.sheet.render();
        }

    }

    this.destroy = function()
    {
        this.sheet.destroy();
        this.spritesheet = null;
    }

    this.toString = function()
    {
        return "(Triggered pos:"+this.position.x+","+this.position.y+")";
    }

}