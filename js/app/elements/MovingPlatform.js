//Jon Howard - @swingpants
//swingpants.com
//Moving platform
function MovingPlatform(name, spritesheet, posX, posY, width, height, minX, maxX, minY, maxY, velX, velY, parent, repositionTargets)
{
//console.log(name+"  MovingPlatform  width="+width);
    this.name = name;
    this.boundingBox = new Rectangle(posX,posY,width, height);
    this.motionBox = new Rectangle(0,0,1, 1);
    this.extents = {minX:minX, maxX:maxX, minY:minY, maxY:maxY};
    this.velocity = {x:velX, y:velY};
    this.position = {x:posX, y:posY};
    this.contacts = [];
    this.parent = parent;
    this.spritesheet = spritesheet;
    this.movementEnabled = true;
    this.active = true;

    this.stopMovement = function() { this.movementEnabled = false; }
    this.startMovement = function() { this.movementEnabled = true; }

    this.doRotation=false;
    this.rotationRate=0;
    this.rotationPosition = 0;
    this.radius=0;
    this.rotationCentre=null;

    this.parent = parent;
    this.repositionTargets = repositionTargets;

    this.initRotation = function(radius, rate, rotationPos, centreX, centreY)
    {
        this.radius=radius;
        this.doRotation=true;
        this.rotationRate=rate;
        this.rotationPosition = rotationPos;
        this.rotationCentre  = new Point(centreX, centreY);

        this.update(null, 0.1);//Init position

    }

    this.setLine = function(line)
    {
        this.line = line;
        this.boundingBox = this.motionBox//this.line.boundingBox;
    }

    this.setPosition = function(posX, posY)
    {
        this.position.x = posX;
        this.position.y = posY;
        //this.boundingBox.x = posX;
        //this.boundingBox.y = posY;
    }
    this.isColliding = function(tgtX, tgtY)
    {
        //return this.boundingBox.intersects(this.target.boundingBox);
        return this.boundingBox.isColliding(tgtX, tgtY);
    }
    this.isBoxIntersecting = function(box)
    {
        return this.boundingBox.intersects(box);
    }
    this.checkForCollision=function(characters)
    {

        var len = characters.length;

        for(var i=0;i<len;i++)
        {
            //Loop through characters to see if contact already exists
            if(this.contactingTarget(characters[i])<0)
            {//No existing contact with character
                //if contact exists with this line or (asuming only 1 edge on platform
                //if platform isn't heading downwards and character is colliding with bounding box..
                if(characters[i].contact==this.line.edges[0] || (this.velocity.y<=0 && this.isColliding(characters[i].position.x, characters[i].position.y)))
                {
                    this.addContact(characters[i]);
                    characters[i].contact=this.line.edges[0];//<-NEED TO FIND CORRECT EDGE
                }
            }
            else
            {// Already cotnacting...

            }
        }
    }

    this.calcMotionBox = function(dX,dY)
    {
        var edge = this.line.edges[0];
        var leftmost = edge.from.x<edge.from.x+dX?edge.from.x:edge.from.x+dX;
        var rightmost = edge.to.x>edge.to.x+dX?edge.to.x:edge.to.x+dX;
        var topmost = edge.from.y<edge.from.y+dY?edge.from.y:edge.from.y+dY;
        var bottommost = edge.to.y>edge.to.y+dY?edge.to.y:edge.to.y+dY;
        this.motionBox.x = leftmost;
        this.motionBox.y = topmost;
        this.motionBox.width = rightmost-leftmost;
        this.motionBox.height = bottommost-topmost;
    }

    this.updateRotation = function()
    {



    }

    this.setVelocity = function(dX,dY)
    {
        //console.log(dX+"  "+dY);
        this.velocity.x = dX;
        this.velocity.y = dY;
    }

    this.update = function(characters,timestep)
    {
        var origX=this.position.x, origY=this.position.y;
        var toX, toY;
        if(this.doRotation)
        {
            if(this.movementEnabled)
            {
                this.rotationPosition+=this.rotationRate * timestep;
                if(this.rotationPosition>2*Math.PI) this.rotationPosition-=2*Math.PI;
                if(this.rotationPosition<0) this.rotationPosition+=2*Math.PI;
                toX = this.rotationCentre.x + Math.sin(this.rotationPosition)*this.radius;
                toY = this.rotationCentre.y + Math.cos(this.rotationPosition)*this.radius;

                this.velocity.y = toY-origY; //To calc whether to pick up or not
            }
        }
        else
        {
            toX=this.position.x+this.velocity.x*timestep;
            toY=this.position.y+this.velocity.y*timestep;
        }
        if(this.movementEnabled)
        {
            this.setPosition(toX, toY);
            this.calcMotionBox(toX-origX, toY-origY);

            if(!this.doRotation)this.testExtents();

            if(characters) this.checkForCollision(characters);

            this.moveContacts(this.position.x-origX, this.position.y-origY);
            if(this.line)this.line.adjustPosition(this.position.x-origX, this.position.y-origY);
        }
    }

    this.moveContacts=function(dX, dY)
    {
        var len = this.contacts.length;
        for(var i = 0; i<len;i++)
        {
            this.contacts[i].adjustPosition(dX, dY);
        }
    }


    //Check to see if platform has moved out of extents - if so then invert reposition and direction velocity
    this.testExtents = function()
    {
        var extents = this.extents;
        if(this.position.x<extents.minX)
        {
            this.position.x = extents.minX ;//+ (extents.minX - this.position.x);
            this.velocity.x = -this.velocity.x;
        }
        if(this.position.x>extents.maxX)
        {
            this.position.x = extents.maxX ;//+ (this.position.x -	extents.maxX);
            this.velocity.x = -this.velocity.x;
        }
        if(this.position.y<extents.minY)
        {
            this.position.y = extents.minY ;//+ (extents.minY - this.position.y);
            this.velocity.y = -this.velocity.y;
        }
        if(this.position.y>extents.maxY)
        {
            this.position.y = extents.maxY ;//+ (this.position.y -	extents.maxY);
            this.velocity.y = -this.velocity.y;
        }
        //console.log(this.position.x+","+this.position.y+"  vel="+this.velocity.x+","+this.velocity.y+"  minY/maxY:"+extents.minY+","+extents.maxY);
    }
    //Add contact to list
    this.addContact = function(contact)
    {
        this.contacts.push(contact);
        if(this.repositionTargets)
        {
            var thisDObject = this.spritesheet.displayObject()
            var contactDObject = contact.spritesheet.displayObject();
            this.parent.insertBefore(contactDObject, thisDObject);
        }
    }

    //Parse the contact list to find target
    this.contactingTarget = function(target)
    {
        var len = this.contacts.length;
        var result = -1;
        var toRemove=[];
        for(var i = 0; i<len;i++)
        {
            if(this.contacts[i]==target)
            {
                if(this.contacts[i].contact==this.line.edges[0]) //<-again need to fix this logic - currently assuming only one edge on platform line
                {
                    result = i;
                    break;
                }
                else
                {//remove contact
                    //console.log("[MovingPlatform] remove contact i="+i);
                    toRemove.push(i);
                    if(this.repositionTargets)this.parent.appendChild(this.contacts[i].spritesheet.displayObject());
                }
            }
        }
        //Do remove
        while(toRemove.length>0)
        {
            this.contacts.splice(toRemove.pop(),1);
        }
        return result;
    }

    this.render = function()
    {
        //console.log("[MovingPlatform.render] active?"+this.active);
        if(!this.active || !this.spritesheet) return;
        //Only render if in view
        //if(this.boundingBox.x+this.boundingBox.width<-scenePosX || this.boundingBox.x>-scenePosX+SCREEN_WIDTH
        //	|| this.boundingBox.y+this.boundingBox.height<-scenePosY || this.boundingBox.y>-scenePosY+SCREEN_HEIGHT) return;
        this.spritesheet.update();
        this.spritesheet.setWrapperPosition(this.position.x, this.position.y);
        this.spritesheet.render();

    }

    this.doSwitch = function(setting)
    {
        this.movementEnabled = setting;
    }

    this.destroy = function()
    {
        if(this.spritesheet)this.spritesheet.destroy();
        this.boundingBox = null;
        this.motionBox = null;
        this.spritesheet = null;
        this.parent = null;
    }

    this.toString = function()
    {
        return "(MovingPlatform: position "+this.position.x+","+this.position.y+")";
    }
}