//Jon Howard - @swingpants
//swingpants.com
//Main character class  //sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bbWidth,bbHeight, player, parent
function Cage(name, spritesheet, posX, posY,velX, velY, bbWidth,bbHeight, target, player, cageTargets)
{
    this.name = name;
    this.player = player;
    this.cageTargets = cageTargets;
    this.drag = 0.9//*FPSMultiplier;
    this.gravity = 0.2*FPSMultiplier;

    this.terminalVelocity = 12*FPSMultiplier;

    this.origPosition = new Point(posX,posY);
    this.homePosition = new Point(posX,posY);

    this.to = new Point(posX, posY);
    this.position = new Point(posX, posY);
    this.velocity = new Point(velX, velY);
    this.bbWidth = bbWidth;
    this.bbHeight = bbHeight;
    this.boundingBox = new Rectangle(0,0,bbWidth,bbHeight);
    this.motionBox = new Rectangle(0,0,1,1);

    this.target = target;

    this.contact = null;
    this.prevContact = null;
    this.contactLost = false;
    this.intersection=new Intersection();
    this.spritesheet = spritesheet;

    this.direction=1;
    this.speed=0;

    this.states = ["waiting", "falling", "landed"];
    this.state = "waiting"; // falling/waiting/hoisting/resting

    this.active = true;

    //Update the bounding box
    this.updateBoundingBox = updateBoundingBox
    this.updateBoundingBox();

    this.waitTime=0;
    this.hoistTime=0;
    this.restTime=0;

    this.timeoutID=null;

    this.hoistRate=0;


    this.startState = function(state)
    {
        this.state=state;
        var that=this;
        switch(state)
        {
            case "waiting":
                //this.timeoutID=setTimeout(function(){that.nextState()}, this.waitTime*1000);
                break;
            case "hoisting":
                //Calc num steps over time to reach orig position
                //this.hoistRate = (this.position.y-this.homePosition.y) / (this.hoistTime*FPS);
                //this.contact=null;

                break;
            case "falling":
                //engage gravity
                break;
            case "resting":
                //this.timeoutID=setTimeout(function(){that.nextState()}, this.restTime*1000);
                break;

        }

    }
    this.nextState = function()
    {
        var index = this.states.indexOf(this.state);
        index++;
        if(index>=this.states.length)
        {
            index=0;
        }
        this.startState(this.states[index]);
    }

    //Main character update
    this.update = function(lines, blockers, timestep)
    {

        this.contactLost = false;

        //Update horizontal velocity
        //this.velocity.x *= this.drag;
        this.origPosition.x = this.position.x;
        this.origPosition.y = this.position.y;

        if(this.state=="falling")
        {
            if(this.contact)
            {

            }
            else
            {//If no contact then apply gravity and search for hits
                this.velocity.y += this.gravity*timestep;
                this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity*timestep);
                //Look for intersections
                this.findIntersection(this.velocity.x, this.velocity.y, lines);

                if(this.contact)
                {
                    this.state="landed";
                    this.isBaddieCaptured();
                }
            }
            //Check for blockers
            this.checkForBlockers(blockers);
        }
        /*
         if(this.state=="hoisting")
         {
         this.to.y = this.position.y-this.hoistRate;

         if(this.to.y<=this.homePosition.y)
         {
         this.to.x = this.homePosition.x;
         this.to.y = this.homePosition.y;
         this.nextState();
         }
         }
         */
        //Apply position
        this.position.x = this.boundingBox.x = this.to.x;
        this.position.y = this.boundingBox.y = this.to.y;
        this.boundingBox.y-=this.boundingBox.height;
    }

    //Checking for blockers
    this.checkForBlockers = checkForBlockers

    this.buildBoundingBox = buildBoundingBox;


    this.findIntersection = findIntersection;

    this.isColliding = function()
    {
        return this.boundingBox.intersects(this.target.boundingBox);
    }

    this.adjustPosition=function(dX, dY)
    {
        this.position.x+=dX;
        this.position.y+=dY;
    }

    this.hitResponse = function()
    {
        switch (this.state)
        {
            case "falling":
                //Kill player
                this.target.initDeath();
                break;
            case "hoisting":
            case "resting":
            case "waiting":
                //Turn player around
                if(this.target.position.x<this.position.x) this.target.setDirection("left");
                else
                if(this.target.position.x>this.position.x) this.target.setDirection("right");
                break;

        }
    }

    this.isBaddieCaptured = function()
    {
        var c;
        for(var propt in characters)
        {
            c = characters[propt];
            if(c.name in this.cageTargets)
            {
                if(this.boundingBox.intersects(c.boundingBox))
                {
                    //console.log("SUCCESS, HIT TARGET");
                    //place captured baddie just behind the cage - this allows for the back fo cage to be placed correctly
                    this.spritesheet.displayObject().parentNode.insertBefore(c.spritesheet.displayObject(),this.spritesheet.displayObject());
                    gameLoopManager.baddieCaptured(this);
                    c.doCapture(this.position.x+this.bbWidth*0.5, this.position.y);

                    sndManager.stopSoundByName("bgMusic");
                    sndManager.playSound("monsterGrowl");

                }
                else
                {
                    //console.log("FAILED TO HIT TARGET");
                    this.player.isDead=true;
                    sndManager.playSound("monsterGrowl");
                }
            }
        }
    }

    this.changeDirection = function() {};

    this.render=function()
    {
        //this.displayUpdate();
        this.displayRender()
    }
    this.displayUpdate=function()
    {
        this.spritesheet.update();
    }
    this.displayRender=function()
    {
        this.spritesheet.setWrapperPosition(this.position.x, this.position.y);
        this.spritesheet.render();
    }

    this.doSwitch = function(setting)
    {
        //console.log("[Cage.doSwitch] this.state="+this.state);
        if(this.state=="waiting" && setting )
        {
            this.startState("falling");
        }
    }

    this.destroy = function()
    {
        this.spritesheet.destroy();
        this.boundingBox = null;
        this.spritesheet = null;
        this.active = true;
    }

    this.toString = function()
    {
        return "(Cage pos:"+this.position.x+","+this.position.y+")";
    }

}