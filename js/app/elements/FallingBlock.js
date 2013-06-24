//Jon Howard - @swingpants
//swingpants.com
//Main character class  //sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bbWidth,bbHeight, player, parent
function FallingBlock(name, spritesheet, posX, posY, minY, velX, velY, bbWidth,bbHeight, target)
{
    this.name=name;
    this.drag = 0.9//*FPSMultiplier;
    this.gravity = 0.2*FPSMultiplier;

    this.terminalVelocity = 12*FPSMultiplier;

    this.origPosition = new Point(posX,posY);
    this.homePosition = new Point(posX,minY);

    this.to = new Point(posX, posY);
    this.position = new Point(posX, posY);
    this.velocity = new Point(velX, velY);
    this.bbWidth = bbWidth;
    this.bbHeight = bbHeight;
    this.offsetY = 0;
    this.boundingBox = new Rectangle(0,0,bbWidth,bbHeight);
    this.motionBox = new Rectangle(0,0,1,1);

    this.target = target;

    this.contact = null;
    this.prevContact = null;
    this.contactLost = false;
    this.intersection=new Intersection();
    this.spritesheet = spritesheet;
    this.impactElement =  null;
    this.impactSmokeActive = false;

    this.direction=1;
    this.speed=0;

    this.states = ["waiting", "falling", "resting",  "hoisting"];
    this.state = "waiting"; // falling/waiting/hoisting/resting


    //Update the bounding box
    this.updateBoundingBox = updateBoundingBox
    this.updateBoundingBox();

    this.waitTime=0;
    this.hoistTime=0;
    this.restTime=0;

    this.timeoutID=null;

    this.hoistRate=0;
    this.topIsPlatform = false;
    //this.line = null;
    this.platform=null;

    this.onlyKillIfFallingOnto = false;

    this.initTopAsPlatform = function(parent, offsetY, onlyKillIfFallingOnto)
    {
        //this.line = new Line();
        //this.line.addEdge(new Edge("onewayline", new Point(this.position.x, this.position.y-this.boundingBox.height-1), new Point(this.position.x+this.boundingBox.width, this.position.y-this.boundingBox.height-1)));
        //return this.line;
        //console.log("onlyKillIfFallingOnto="+onlyKillIfFallingOnto)
        this.topIsPlatform = true;
        this.offsetY = offsetY;
        this.onlyKillIfFallingOnto = onlyKillIfFallingOnto;

        var posX =  this.position.x;
        var posY = this.position.y-this.boundingBox.height-offsetY-2;
        var sheet=null;

        var pDiv = createADiv("movingPlatformBlank", posX, posY);
        parent.appendChild(pDiv);//Add to the parent

        sheet = new Spritesheet(pDiv, 100, 20, 1, 2, pDiv, 0, 0, 0);


        this.platform = new MovingPlatform("platform", sheet, posX, posY, this.boundingBox.width, 1, posX,posX, 0, 1920, 0, 0, parent);

        return this.platform;
    }



    this.initSequence = function(waitTime, hoistTime, restTime)
    {
        this.waitTime=waitTime;
        this.hoistTime=hoistTime;
        this.restTime=restTime;
        this.active=true;
    }
    this.startState = function(state)
    {
        this.state=state;
        var that=this;
        switch(state)
        {
            case "waiting":
                this.timeoutID=setTimeout(function(){that.nextState()}, this.waitTime*1000);
                break;
            case "hoisting":
                //Calc num steps over time to reach orig position
                this.hoistRate = (this.position.y-this.homePosition.y) / (this.hoistTime*FPS);
                this.contact=null;

                break;
            case "falling":
                //engage gravity
                break;
            case "resting":
                if(this.impactSmokeActive) this.impactElement.hitTrigger();
                this.timeoutID=setTimeout(function(){that.nextState()}, this.restTime*1000);
                sndManager.playSound("dropLow");
                break;

        }

    }
    this.initImpactSmoke = function(smokeElement)
    {
        this.impactElement =  smokeElement;
        this.impactSmokeActive = true;
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
                this.velocity.y += this.gravity * timestep;
                this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
                //Look for intersections
                this.findIntersection(this.velocity.x, this.velocity.y, lines);

                if(this.contact) this.nextState();
            }
            //Check for blockers
            this.checkForBlockers(blockers);
        }

        if(this.state=="hoisting")
        {
            this.to.y = this.position.y-this.hoistRate*timestep;

            if(this.to.y<=this.homePosition.y)
            {
                this.to.x = this.homePosition.x;
                this.to.y = this.homePosition.y;
                this.nextState();
            }
        }

        //Apply position
        if(this.topIsPlatform)
        {
            this.platform.setVelocity(0,this.to.y-this.position.y);
            this.platform.update(characters,1);
            this.platform.render();
        }

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
        if(this.target.isDying) return false;
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
                //console.log(this.onlyKillIfFallingOnto+" ????  "+this.target.contact+"  "+this.target.contact.type);
                //console.log("-->"+(this.target && this.target.contact?(this.target.position.y+"//"+this.position.y):"nope"));
                if((this.onlyKillIfFallingOnto && this.target.contact && this.position.y<this.target.position.y) || !this.onlyKillIfFallingOnto) this.target.initDeath();
                //else this.turnTargetAround();
                break;
            case "hoisting":
            case "resting":
            case "waiting":
                if((this.onlyKillIfFallingOnto && this.target.contact && this.position.y<this.target.position.y) || !this.onlyKillIfFallingOnto)this.turnTargetAround();
                break;
        }
    }
    this.turnTargetAround = function()
    {
        //Turn player around
        if(this.target.position.x<this.position.x) this.target.setDirection("left");
        else
        if(this.target.position.x>this.position.x) this.target.setDirection("right");
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
        //+if(!this.position.y)console.log("[FallingBlock.displayRender] y prob"+this.position.y);
        this.spritesheet.setWrapperPosition(this.position.x, this.position.y);
        this.spritesheet.render();
    }

    this.destroy = function()
    {
        if(this.topIsPlatform)
        {
            this.platform.destroy();
        }
        if(this.timeoutID)clearTimeout(this.timeoutID);
        this.spritesheet.destroy();
        this.boundingBox = null;
        this.spritesheet = null;
    }

    this.toString = function()
    {
        return "(Falling Block pos:"+this.position.x+","+this.position.y+")";
    }

}