function Line()
{
    this.type = "line";
    this.edges = [];
    this.boundingBox = new Rectangle(0, 0, 1, 1);
    this.numEdges = 0;

    //Add an edge to the line
    this.addEdge = function(edge)
    {
        //Update linked list data
        if(this.edges.length > 0)
        {
            edge.prevEdge = this.edges[this.edges.length - 1];
            this.edges[this.edges.length - 1].nextEdge = edge;
        }

        this.edges.push(edge);

        //Update bounding box
        if (this.edges.length == 1) this.initBoundingBox();
        else this.updateBoundingBox(edge);

        //Store the number of edges for optimised accees to this info
        this.numEdges = this.edges.length;
    };

    //Update the bounding box for this line
    this.updateBoundingBox = function(edge)
    {
        var minX = (edge.from.x <= edge.to.x) ? edge.from.x : edge.to.x;
        var maxX = (edge.from.x > edge.to.x) ? edge.from.x : edge.to.x;
        var minY = (edge.from.y <= edge.to.y) ? edge.from.y : edge.to.y;
        var maxY = (edge.from.y > edge.to.y) ? edge.from.y : edge.to.y;

        var bbX = (this.boundingBox.x <= minX) ? this.boundingBox.x : minX;
        var bbY = (this.boundingBox.y <= minY) ? this.boundingBox.y : minY;
        var bbW = (maxX > this.boundingBox.x + this.boundingBox.width) ? maxX - bbX : this.boundingBox.x + this.boundingBox.width - bbX;
        var bbH = (maxY > this.boundingBox.y + this.boundingBox.height) ? maxY - bbY : this.boundingBox.y + this.boundingBox.height - bbY;

        this.boundingBox.x = bbX;
        this.boundingBox.y = bbY;
        this.boundingBox.width = Math.max(1, bbW);
        this.boundingBox.height = Math.max(1, bbH);
    };

    //Initialise the bounding box for the first time
    this.initBoundingBox = function()
    {
        var edge = this.edges[0];
        this.boundingBox.x = (edge.from.x < edge.to.x) ? edge.from.x : edge.to.x;
        this.boundingBox.y = (edge.from.y < edge.to.y) ? edge.from.y : edge.to.y;
        this.boundingBox.width = Math.max(1, Math.abs(edge.to.x - edge.from.x));
        this.boundingBox.height = Math.max(1, Math.abs(edge.to.y - edge.from.y));
    };

    //Is position colliding with this line's bounding box?
    this.isColliding = function(posX, posY)
    {
        return (this.boundingBox.isColliding(posX, posY));
    };

    //Is a given box intersecting with this line's bounding box?
    this.isBoxIntersecting = function(box)
    {
        return (this.boundingBox.intersects(box));
    };

    this.adjustPosition = function(dX, dY)
    {
        this.boundingBox.x += dX;
        this.boundingBox.y += dY;

        var len = this.edges.length;

        for (var i = 0; i < len; i++)
        {
            this.edges[i].from.x += dX;
            this.edges[i].from.y += dY;
            this.edges[i].to.x += dX;
            this.edges[i].to.y += dY;
        }
    };

    this.destroy = function()
    {
        this.edges = null;
        this.boundingBox = null;
    }
}