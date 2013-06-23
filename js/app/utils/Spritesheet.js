function Spritesheet(sheet, sheetWidth, sheetHeight, cellsPerStrip, numStrips, wrapper, offsetX, offsetY, speed, renderType)
{
    this.sheet = sheet;
    this.width = sheetWidth;
    this.height = sheetHeight;
    this.cellsPerStrip = cellsPerStrip;
    this.numStrips = numStrips;
    this.wrapper = wrapper;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.posX = 0;
    this.posY = 0;
    this.origSpeed=speed;
    this.speed = speed;
    this.renderType = renderType || "background";
    this.dirOffsetY = 0;
    this.prevPosX = 0;
    this.prevPosY = 0;

    var roundX;

    this.setWrapperPosition = function(posX, posY)
    {
        //BODGE FIX - need to find out why posY is becoming NaN
        var toX = (posX + this.offsetX) * RENDER_RATIO;
        var toY = (posY + this.offsetY) * RENDER_RATIO;

        if (!posY) posY = 0;
        if (this.wrapper)
        {
            //Only render if necessary
            if (this.wrapper.offsetLeft != toX) this.wrapper.style.left = toX + 'px';
            if (this.wrapper.offsetTop != toY) this.wrapper.style.top = toY + 'px';
        }
        else
        {
            if (this.sheet.offsetLeft != toX) this.sheet.style.left = toX + 'px';
            if (this.sheet.offsetTop != toY) this.sheet.style.top = toY + 'px';
        }
    };

    this.displayObject = function()
    {
        return this.wrapper || this.sheet;
    };

    //Update the anim position
    this.update = function(timestep)
    {
        this.posX += this.speed * (timestep || 1);

        if (this.posX >= this.cellsPerStrip) this.posX -= cellsPerStrip;
        if (this.posX < 0) this.posX += cellsPerStrip;
    };

    //Go to a different anim line
    this.goToRow = function(row)
    {
        this.posY = row;
    };

    this.goToColumn = function(col)
    {
        this.posX = col;
    };

    this.stopAnim = function()
    {
        this.speed = 0;
    };
    this.startAnim = function()
    {
        this.speed = this.origSpeed;
    };

    //Initially I used a CSS transform here, but that was far too slow, so now the spritesheets are constructed to have right on top and left replicated below.
    this.faceRight = function()
    {
        if (this.dirOffsetY == 0) return;
        this.dirOffsetY = 0;
    };

    this.faceLeft = function()
    {
        if (this.dirOffsetY > 0) return;
        this.dirOffsetY = this.numStrips * 0.5;
    };

    this.adjustSpeedToTimestep = function(timestep)
    {
        this.speed = this.origSpeed * timestep;
    };

    //Render, but only if necessary
    this.render = function(force)
    {
        roundX = Math.floor(this.posX);

        if (!force && this.prevPosX == roundX && this.prevPosY == this.posY + this.dirOffsetY) return;

        this.prevPosX = roundX;
        this.prevPosY = this.posY + this.dirOffsetY;

        if(this.renderType=="background") this.sheet.style.backgroundPosition = (-roundX * this.width) + "px " + (-this.prevPosY * this.height) + "px";
        else
        {
            this.sheet.style.left = (-roundX * this.width) + "px";
            this.sheet.style.top = (-this.prevPosY * this.height) + "px";
        }
    };

    this.destroy = function()
    {
        if (this.sheet && this.sheet.parentNode) this.sheet.parentNode.removeChild(this.sheet);
        if (this.wrapper && this.wrapper.parentNode) this.wrapper.parentNode.removeChild(this.wrapper);

        this.sheet = null;
        this.wrapper = null;
        this.renderType = null;
    };

    this.toString = function()
    {
        return "(Spritesheet: x/y: " + this.posX + ", " + this.posY + " sheet: " + this.sheet + ")";
    }
}