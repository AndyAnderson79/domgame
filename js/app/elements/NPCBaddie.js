//Jon Howard - @swingpants
//swingpants.com
//Main character class
function NPCBaddie(name, posn, offsetY, velocity, bbWidth,bbHeight, spritesheet, target)
{
//console.log("[NPCBaddie] name="+name+" posn:"+posn);
//console.log("[NPCBaddie]"+velocity);
    this.name = name;
    this.target = target;
    this.drag = 0.99//*FPSMultiplier;
    this.gravity = 0.3*FPSMultiplier;

    this.terminalVelocity = 12*FPSMultiplier;

    this.origPosition = new Point(posn.x,posn.y);
    this.to = new Point();
    this.position = posn;
    this.velocity = velocity;
    this.bbWidth = bbWidth;
    this.bbHeight = bbHeight;
    this.boundingBox = new Rectangle(0,0,1,1);
    this.motionBox = new Rectangle(0,0,1,1);
    this.offsetY = offsetY;

    this.contact = null;
    this.prevContact = null;
    this.contactLost = false;
    this.intersection=new Intersection();

    this.spritesheet = spritesheet;

    //this.direction=-1;
    //this.speed=3;

    this.active = true;

    //Update the bounding box
    this.updateBoundingBox = updateBoundingBox;

    this.updateBoundingBox();

    this.captured=false;
    this.captureMoveTo=null;


    //Main character update
    this.update = function(lines, blockers, timestep)
    {
        //console.log("[NPCBaddie.update]"+lines.length);
        if(this.captured)
        {
            this.position.x += (this.captureMoveTo.x-this.position.x)*.1*timestep;
            this.position.y += (this.captureMoveTo.y-this.position.y)*.1*timestep;
        }

        if(!this.active) return;

        this.contactLost = false;

        //Update horizontal velocity
        //this.velocity.x *= this.drag;
        this.origPosition.x = this.position.x;
        this.origPosition.y = this.position.y;

        if(this.contact)
        {//If contact exists then move along the contact
            //console.log("[NPCBaddie.update] vel="+this.velocity.x+"   "+this.position);
            if(this.velocity.x!=0) this.moveAlongContact(this.velocity.x*timestep);
        }
        else
        {//If no contact then apply gravity and search for hits
            //console.log("[NPCBaddie.update] gravity:"+this.gravity+"  "+timestep);
            this.velocity.y += this.gravity*timestep;
            this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity*timestep);
            //Look for intersections
            this.findIntersection(this.velocity.x*timestep, this.velocity.y*timestep, lines);
        }
        //Check for blockers
        this.checkForBlockers(blockers);

        //Apply position
        this.position.x = this.to.x;
        this.position.y = this.to.y;
//console.log("NPC:"+this.position.x+","+this.position.y);
        if(this.boundingBox.intersects(this.target.boundingBox))
        {
            //console.log(this.boundingBox, this.target.boundingBox);
            this.target.initDeath("monsterGrowl");
        }
    }

    //Checking for blockers
    this.checkForBlockers = checkForBlockers;

//Move along a contact by dx
    this.moveAlongContact = function(dx)
    {
        var moved,
            moveX = this.contact.normalVector.x * dx;
        //Set target position by using normalVector from contact
        this.to.x = this.position.x + moveX;
        this.to.y = this.position.y +this.contact.normalVector.y * dx;

        if(this.to.x > this.contact.to.x)
        {
            moved = moveX ==0?1:Math.abs((this.position.x - this.contact.to.x) / moveX);
            this.position.x = this.contact.to.x;
            this.position.y = this.contact.to.y;
            this.prevContact = this.contact;
            this.contact = this.contact.nextEdge;
            if(this.contact) this.moveAlongContact(dx * (1-moved));
            else
            {
                this.to.y = this.position.y-1;
                this.contactLost = true;
            }
        }
        else
        if(this.to.x < this.contact.from.x)
        {
            moved = moveX ==0?1:Math.abs((this.position.x - this.contact.from.x) / moveX);
            this.position.x = this.contact.from.x;
            this.position.y = this.contact.from.y;
            this.prevContact = this.contact;
            this.contact = this.contact.prevEdge;
            //trace("Lost contact to left"+this.prevContact.prevEdge);
            if(this.contact) this.moveAlongContact(dx * (1-moved));
            else
            {
                this.to.y = this.position.y-1;
                this.contactLost = true;
            }
        }
    }
    /*
     //Move along a contact by dx
     this.moveAlongContact = function(dx)
     {
     var moved,
     moveX = this.contact.normalVector.x * dx * this.speed ;
     //Set target position by using normalVector from contact
     this.to.x = this.position.x + moveX;
     this.to.y = this.position.y +this.contact.normalVector.y * dx * this.speed;

     if(this.to.x > this.contact.to.x)
     {
     moved = moveX ==0?1:Math.abs((this.position.x - this.contact.to.x) / moveX);
     this.position.x = this.contact.to.x;
     this.position.y = this.contact.to.y;
     this.prevContact = this.contact;
     this.contact = this.contact.nextEdge;
     if(this.contact) this.moveAlongContact(dx * (1-moved));
     else this.contactLost = true;
     }
     else
     if(this.to.x < this.contact.from.x)
     {
     moved = moveX ==0?1:Math.abs((this.position.x - this.contact.from.x) / moveX);
     this.position.x = this.contact.from.x;
     this.position.y = this.contact.from.y;
     this.prevContact = this.contact;
     this.contact = this.contact.prevEdge;
     //trace("Lost contact to left"+this.prevContact.prevEdge);
     if(this.contact) this.moveAlongContact(dx * (1-moved));
     else this.contactLost = true;
     }
     }
     */
    this.buildBoundingBox = buildBoundingBox;

    this.findIntersection = findIntersection;

    this.changeDirection = function()
    {
        this.velocity.x = -this.velocity.x;
        if(this.velocity.x>0) this.displayFaceRight();
        else this.displayFaceLeft();
    }

    this.adjustPosition=function(dX, dY)
    {
        //console.log("[NPCBaddie.adjustPosition] dX/dY="+dX+","+dY);
        this.position.x+=dX;
        this.position.y+=dY;
    }

    this.moveHoriz = function(dist)
    {
        this.velocity.x += dist;
    }

    this.displayWalkingAnim = function()
    {
        this.spritesheet.goToRow(0);
    }

    this.displayFaceRight=function()
    {
        this.spritesheet.faceRight()
    }
    this.displayFaceLeft=function()
    {
        this.spritesheet.faceLeft();
    }

    this.displayUpdate=function(timestep)
    {
        var ts = timestep>2?2:timestep; //Max out at 2 x speed
        this.spritesheet.update(ts);
        this.updateBoundingBox();
    }
    this.displayRender=function()
    {
        this.displayUpdate();
        this.spritesheet.setWrapperPosition(this.position.x, this.position.y+this.offsetY);
        this.spritesheet.render();
    }
    this.doCapture = function(posX, posY)
    {
        this.active=false;
        this.captured=true;
        this.captureMoveTo=new Point(posX, posY);

        //	console.log("Baddie tweening from "+(this.spritesheet.wrapper.offsetLeft)+","+(this.spritesheet.wrapper.offsetTop)+"  to "+posX+","+posY+"   ?"+this.spritesheet.wrapper);
        divTweenManager.addTween(this.spritesheet.wrapper,"left", "px", this.spritesheet.wrapper.offsetLeft, (posX+this.spritesheet.offsetX)*RENDER_RATIO, 0.15, null);
        divTweenManager.addTween(this.spritesheet.wrapper,"top", "px", this.spritesheet.wrapper.offsetTop, (posY+this.spritesheet.offsetY)*RENDER_RATIO, 0.15, null);
    }
    this.destroy = function()
    {
        //console.log("[NPCBaddie.destroy]");
        displayFactory.finishWithElementInUseByRef(document.getElementById(this.name), this.name);
        this.spritesheet.destroy();
        this.spritesheet = null;
        this.boundingBox = null;
        this.contact = null;
        this.motionBox = null;
        this.prevContact = null;
        this.intersection=null;
    }

    this.toString = function()
    {
        return "(NPCBaddie position: pos:"+this.position.x+","+this.position.y+")";
    }

}