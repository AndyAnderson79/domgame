//Jon Howard - @swingpants
//swingpants.com
//Main character class  //sheet, posX+(cellWidth-bbWidth)*0.5, posY+(cellHeight-bbHeight)*0.5, bbWidth,bbHeight, player, parent
function Spike(spritesheet, currentPosX, currentPosY, startPosX, startPosY, targetPosX, targetPosY, offsetY, bbWidth,bbHeight, bbOffsetX, bbOffsetY, target, cropDiv)
{
//console.log("SPIKE current:"+currentPosX+" "+currentPosY+" start:"+startPosX+" "+startPosY+" target:"+targetPosX+" "+targetPosY+" "+bbWidth+" "+bbHeight, target);
//console.log("bbOffsetX="+bbOffsetX+"  bbOffsetY="+bbOffsetY);//
    var scope = this;
    this.drag = 0.9//*FPSMultiplier;
    this.gravity = 0.2*FPSMultiplier;

    this.terminalVelocity = 12*FPSMultiplier;

    this.origPosition = new Point(currentPosX,currentPosY);
    this.homePosition = new Point(startPosX,startPosY);
    this.targetPosition = new Point(targetPosX,targetPosY);

    this.to = new Point(currentPosX, currentPosY);
    this.position = new Point(currentPosX, currentPosY);
    this.velocity = new Point(0, 0);
    this.offsetY = offsetY;
    this.bbWidth = bbWidth;
    this.bbHeight = bbHeight;
    this.bbOffsetX = bbOffsetX;
    this.bbOffsetY = bbOffsetY;
    this.boundingBox = new Rectangle(targetPosX+bbOffsetX,targetPosY+bbOffsetY-spritesheet.height,bbWidth,bbHeight);

    this.motionBox = new Rectangle(0,0,1,1);

    this.target = target;

    this.cropDiv = cropDiv;

    this.contact = null;
    this.prevContact = null;
    this.contactLost = false;
    this.intersection=new Intersection();
    this.spritesheet = spritesheet;

    this.direction=1;
    this.speed=0;

    this.states = ["spiking", "waiting", "returning",  "resting"];
    this.state = "waiting"; // spiking/waiting/returning/resting

    //Update the bounding box
    this.updateBoundingBox = updateBoundingBox
    //this.updateBoundingBox();

    this.waitTime=0;
    this.spikeTime=0;
    this.restTime=0;
    this.returnTime=0;

    this.timeoutID=null;

    this.moveRate=0;


    this.initSequence = function(waitTime, spikeTime, restTime, returnTime)
    {
        this.waitTime=waitTime;
        this.spikeTime=spikeTime;
        this.restTime=restTime;
        this.returnTime = returnTime;
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
            case "spiking":
                //Calc num steps over time to reach orig position
                this.moveRate = (this.position.y-this.targetPosition.y) / (this.spikeTime*FPS);
                this.contact=null;
                break;
            case "returning":
                //
                this.moveRate = (this.position.y-this.homePosition.y) / (this.returnTime*FPS);
                this.contact=null;
                break;
            case "resting":
                this.timeoutID=setTimeout(function(){that.nextState()}, this.restTime*1000);
                break;

        }
        //console.log("startState state="+state+"  moveRate="+this.moveRate+"  "+this.homePosition.y+" "+this.position.y+" "+this.returnTime);
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
    this.update = function(lines, blockers)
    {
        //console.log("[Spike.update] this.boundingBox="+this.boundingBox+"  "+this.position+"  "+this.cropDiv);
        this.contactLost = false;

        //Update horizontal velocity
        //this.velocity.x *= this.drag;
        this.origPosition.x = this.position.x;
        this.origPosition.y = this.position.y;


        if(this.state=="spiking" || this.state=="returning")
        {
            this.to.y = this.position.y-this.moveRate;
            if(this.state=="spiking" && this.to.y<=this.targetPosition.y)
            {
                this.to.x = this.targetPosition.x;
                this.to.y = this.targetPosition.y;
                this.nextState();
            }
            if(this.state=="returning" && this.to.y>=this.homePosition.y)
            {
                this.to.x = this.homePosition.x;
                this.to.y = this.homePosition.y;
                this.nextState();
            }
        }

        //Apply position
        this.position.x = this.to.x;//this.boundingBox.x = this.to.x;
        this.position.y = this.to.y;//this.boundingBox.y = this.to.y;
        //this.boundingBox.x+=this.bbOffsetX;
        //this.boundingBox.y+=this.bbOffsetY;
        //this.boundingBox.y-=this.spritesheet.height;

        if(this.cropDiv)this.spritesheet.wrapper.style.height=this.homePosition.y*MEDIA_SIZE_RATIO-this.position.y*MEDIA_SIZE_RATIO+"px";
    }

    //Checking for blockers
    this.checkForBlockers = checkForBlockers

    this.buildBoundingBox = buildBoundingBox;


    this.findIntersection = findIntersection;

    this.isColliding = function()
    {
        //console.log("[Spike.isColliding]"+scope.boundingBox+"   "+scope.target.boundingBox+"  intersect?"+scope.boundingBox.intersects(scope.target.boundingBox)+"  bbOffsetY:"+scope.bbOffsetY);
        if(scope.target.isDying) return false;
        //console.log("state="+scope.state+"  scope.position.y="+scope.position.y+" < "+(scope.targetPosition.y+75*MEDIA_SIZE_RATIO));
        if(scope.state=="resting" || scope.position.y>scope.targetPosition.y+150*MEDIA_SIZE_RATIO) return; //Only test if glove/spike near top

        return scope.boundingBox.intersects(scope.target.boundingBox);
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
            case "waiting":
            case "hoisting":
                //Kill player
                //console.log("HIT RESPONSE  this.boundingBox="+this.boundingBox+"  state="+this.state+"  position="+this.position);
                this.target.initDeath();
                break;

            case "resting":
                //do nothing
                break;

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
        this.spritesheet.setWrapperPosition(this.position.x, this.position.y+this.offsetY);
        this.spritesheet.render();
    }

    this.destroy = function()
    {
        if(this.timeoutID)clearTimeout(this.timeoutID);
        this.spritesheet.destroy();
        this.boundingBox = null;
        this.spritesheet = null;
    }

    this.toString = function()
    {
        return "(Spike pos:"+this.position.x+","+this.position.y+")";
    }

}