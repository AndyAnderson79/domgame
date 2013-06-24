//Jon Howard - @swingpants
//swingpants.com
//Main character class
function Character(posn,velocity, bbWidth,bbHeight, bbOffsetX, bbOffsetY, spritesheet)
{
    var scope = this;
    this.name = "character";
    this.drag = 0.9//*FPSMultiplier;
    this.gravity = 0.3*FPSMultiplier;

    this.terminalVelocity = 12*FPSMultiplier;

    this.origPosition = new Point(0,0);
    this.to = new Point();
    this.position = posn;
    this.velocity = velocity;
    this.prevVelocityX = velocity.x;
    this.isMoving = true;
    this.bbWidth = bbWidth;
    this.bbHeight = bbHeight;
    this.bbOffsetX = bbOffsetX;
    this.bbOffsetY = bbOffsetY;
    this.boundingBox = new Rectangle(bbOffsetX,bbOffsetY,1,1);
    this.motionBox = new Rectangle(0,0,1,1);

    this.contact = null;
    this.prevContact = null;
    this.contactLost = false;
    this.intersection=new Intersection();

    this.spritesheet = spritesheet;

    this.isStillOnLadder = false;

    this.facingLeft = false;

    this.isDying = false;
    this.isDead = false;

    this.numBounces=0;
    this.isBouncing=false;

    //Update the bounding box
    this.updateBoundingBox = updateBoundingBox;
    this.updateBoundingBox();

    this.reset = function(posX, posY, velX, velY)
    {
        //console.log("[Character.reset] pos="+posX+","+posY+"  vel="+velX+","+velY);
        this.isDying = false;
        this.isDead = false;

        this.contact=null;
        this.origPosition.x=this.position.x= this.to.x = posX;
        this.origPosition.y=this.position.y= this.to.y = posY;


        this.velocity.x = velX;
        this.velocity.y = velY;

        if(this.velocity.x>=0)
        {
            this.setDirection("right");
            this.displayFaceRight();
        }
        else
        {
            this.setDirection("left");
            this.displayFaceLeft();
        }

        this.updateBoundingBox();
        this.boundingBox.x+=this.offsetX;
        this.boundingBox.y+=this.offsetY;

        this.contactLost = true;

        this.isMoving=true
        //console.log("[Character.reset] firing a stop move...");
        this.stopMoving();

        this.spritesheet.startAnim();
        this.displayRender();
    }

    this.updateDeath = function()
    {
        //console.log("upodateDeath");
        deathCount++;
        this.contact = null;
        this.velocity.y+=this.gravity;
        this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
        this.position.y = this.to.y = this.position.y+this.velocity.y;
        if(this.position.y>worldHeight || deathCount>60)
        {
            this.isDead=true;
        }
    }

    //Main character update
    this.update = function(lines, blockers, timestep)
    {
        //console.log(timestep);
        if(this.isDying)
        {
            this.updateDeath();
            return;
        }

        //this.spritesheet.adjustSpeedToTimestep(timestep);//Anim is too slow on spritesheets so need to adjust

        this.isStillOnLadder = false;
        //If contact type is ladder then return - the ladder update should be used
        if(this.contact && this.contact.type=="ladder") return;

        this.contactLost = false;

        //Update horizontal velocity
        //this.velocity.x *= this.drag;
        this.origPosition.x = this.to.x = this.position.x;
        this.origPosition.y = this.to.y = this.position.y;

        if(this.contact)
        {//If contact exists then move along the contact
            this.numBounces=0;
            this.isBouncing = false;
            if(this.velocity.x!=0) this.moveAlongContact(this.velocity.x * timestep);
        }
        else
        {//If no contact then apply gravity and search for hits
            this.velocity.y += this.gravity * timestep;
            this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity*timestep);
            //Look for intersections
            this.findIntersection(this.velocity.x*timestep, this.velocity.y*timestep, lines);

            this.displayJumpingAnim();

            if(this.contact)
            {
                //hitGround.stop().play();//Audio
                sndManager.playSound("hitGround");
            }
        }
        //Check for blockers
        this.checkForBlockers(blockers);

        //Apply position
        this.position.x = this.to.x;
        this.position.y = this.to.y;

    }

    //Character update if on ladder
    this.updateLadders = function(ladders, dirY)
    {
        if(this.contact && this.contact.type=="ladder")
        {//If in contact with a ladder

            //Tween to centre
            this.position.x+=(this.contact.targetX-this.position.x)*0.1;

            if(dirY<0 && this.position.y>this.contact.boundingBox.y+this.contact.boundingBox.height*0.9)
            {//If going down and in the bottom 10% then lose contact with ladder
                this.contact=null;
            }
            else
            {//Apply direction
                this.position.y-=dirY;
            }
            if(this.position.y<(this.contact && this.contact.boundingBox.y))
            {//Reached top of ladder
                this.contact=null;
                this.velocity.y=-4;//Small jump at top of ladder
            }
        }
        else
        {//If not in contact with a ladder
            var i,
                ladder,
                len=ladders.length;
            for (i=0;i<len;i++)
            {//Loop through ladders
                ladder=ladders[i];
                if(ladder.isColliding(this.position.x, this.position.y))
                {//If colliding with bounding box then initiate contact and kill character velocities
                    if(dirY<0 && this.position.y>ladder.boundingBox.y+ladder.boundingBox.height*0.9)
                    {
                        //FAIL - in bottom 10% and going down so ignoring
                    }
                    else
                    {
                        this.contact = ladder;
                        this.velocity.x=0;
                        this.velocity.y=0;
                    }
                }
            }
        }
        this.isStillOnLadder = dirY==0?true:false;
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

    this.buildBoundingBox = buildBoundingBox;


    this.findIntersection = findIntersection;

    this.doJump = function(velY, override)
    {
        if(this.contact || override)
        {
            this.position.y--
            this.velocity.y = velY
            this.contact=null;
        }
    }
    this.doBounce = function(velY, velX)
    {
        if(this.isDying) return;

        this.numBounces++
        this.position.y--
        this.velocity.y = velY*(Math.min(1.3,this.numBounces));

        if(inputDown)
        {
            this.stopMoving();
        }
        else
        {
            this.startMoving();
        }
        this.contact=null;
        this.isBouncing = true;

        sndManager.playSound("trampolineBounce");

    }
    this.setDirection=function(direction)
    {
        if((direction=="left" && this.velocity.x>0) || (direction=="right" && this.velocity.x<0) ) this.changeDirection();

    }

    this.changeDirection = function()
    {
        this.velocity.x = -this.velocity.x;
        if(this.velocity.x>0) this.displayFaceRight();
        else this.displayFaceLeft();
    }
    this.stopMoving = function()
    {
        if(!this.isMoving) return;
        //console.log("STOP MOVING vel.x:"+this.velocity.x);
        this.prevVelocityX = this.velocity.x
        this.velocity.x = 0;
        this.isMoving=false;
    }
    this.startMoving = function()
    {
        if(this.isMoving) return;
        //console.log("START MOVING prevVelX:"+this.prevVelocityX);
        this.velocity.x = this.prevVelocityX;
        this.isMoving=true;
    }
    this.moveHoriz = function(dist)
    {
        this.velocity.x += dist;
    }

    this.adjustPosition=function(dX, dY)
    {
        //console.log("[Character.adjustPosition] dX/dY="+dX+","+dY);
        this.position.x+=dX;
        this.position.y+=dY;
    }

    this.displayWalkingAnim = function()
    {
        if(this.isDying) return;
        this.spritesheet.goToRow(0);
    }
    this.displayStandingAnim = function()
    {
        if(this.isDying) return;
        this.spritesheet.goToColumn(0);
        this.spritesheet.goToRow(1);
    }
    this.displayJumpingAnim = function()
    {
        if(this.isDying) return;
        this.spritesheet.goToColumn(0);
        this.spritesheet.goToRow(2);
    }
    this.displayDeathAnim = function()
    {
        this.spritesheet.goToColumn(0);
        this.spritesheet.goToRow(3);
    }
    this.displayClimbAnim = function()
    {
        if(this.isDying) return;
        this.spritesheet.goToRow(3);
    }
    this.displayFaceRight=function()
    {
        this.spritesheet.faceRight()
        this.facingLeft = false;
    }
    this.displayFaceLeft=function()
    {
        this.spritesheet.faceLeft();
        this.facingLeft = true;
    }

    this.isFacingLeft = function()
    {
        return this.facingLeft;
    }

    this.displayUpdate=function(timestep)
    {
        var ts = timestep>2?2:timestep; //Max out at 2 x speed
        if(!this.isStillOnLadder)this.spritesheet.update(ts);
        this.updateBoundingBox();
        this.boundingBox.x+=this.bbOffsetX;
        this.boundingBox.y+=this.bbOffsetY;
        //	console.log("this.boundingBox="+this.boundingBox);
    }
    this.displayRender=function()
    {
        if(!this.position.y)
        {
            //console.log("[Character.displayRender] y prob"+this.position.y);
            this.position.y=0;
        }
        this.spritesheet.setWrapperPosition(this.position.x, this.position.y );
        this.spritesheet.render();
    }
    var deathCount=0;
    this.initDeath = function(audioName)
    {
        if(this.isDying) return;

        sndManager.stopSoundByName("bgMusic");
        sndManager.playSound(audioName || "deathSting");
        deathCount=0;
        this.velocity.y-=5;
        this.isDying = true;
        this.contact = null;
        this.displayDeathAnim();
        this.spritesheet.stopAnim();
    }
    this.destroy = function()
    {
        if(scope.spritesheet)scope.spritesheet.destroy();
        scope.spritesheet = null;
        scope.boundingBox = null;
        scope.contact = null;
        scope.motionBox = null;
        scope.prevContact = null;
        scope.intersection=null;
    }
    this.toString = function()
    {
        return "(Character: position:"+this.position.x+","+this.position.y+"  velocity:"+this.velocity.x+","+this.velocity.y+")";
    }

}