function DisplayObject(name, type, object, width, height, columns, rows, img, left, top)
{
    this.name = name;
    this.type = type;
    this.object = object;
    this.img = img;//Ready for spritesheet, etc
    this.width = width;
    this.height = height;
    this.columns = columns;
    this.rows = rows;
    this.left = left;
    this.top = top;

    this.destroy = function()
    {
        this.object = null;
    };

    this.toString = function()
    {
        return "[DisplayObject] "+this.name+", type:"+this.type+", object:"+this.object+", image:"+this.img+", w/h:"+this.width+", "+this.height+" cols/rows:"+this.columns+","+this.rows+"  left/top"+this.left+","+this.top;
    }
}