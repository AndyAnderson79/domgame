//Jon Howard - @swingpants
//swingpants.com
//Moving platform
function CollapsingPlatform(name, sheet, posX, posY, width, height, steps, stepCount, parent, player)
{
    this.name = name;
    this.boundingBox = new Rectangle(posX,posY,width, height);

    this.position = {x:posX, y:posY};
    this.contacts = [];
    this.parent = parent;
    this.sheet = sheet;
    this.active = true;

    this.steps = steps;
    this.stepCount = stepCount;

    this.isCollapsed = false;

    this.player = player;
    this.count=0;
    this.currentStep=0;

    this.isCollapsed=false;

    this.npcTargetList=[];
    this.checkForNPCTargets=false;



    this.setLine = function(line)
    {
        this.line = line;
        this.boundingBox = this.motionBox//this.line.boundingBox;
    }

    this.addNPCTargets = function(list)
    {
        //this.npcTargetList=list;
        this.checkForNPCTargets=list.length>0;
        //console.log("[CollapsingPlatform.addNPCTargets] list="+list+"  "+this.checkForNPCTargets);
    }

    this.setPosition = function(posX, posY)
    {
        this.position.x = posX;
        this.position.y = posY;
    }

    this.isColliding = function(tgtX, tgtY)
    {
        return this.boundingBox.isColliding(tgtX, tgtY);
    }

    this.isBoxIntersecting = function(box)
    {
        return this.boundingBox.intersects(box);
    }




    this.update = function(characters)
    {
        if(!this.active) return;

        //Bodge - quick route to grab actual npc element rather than dom element
        if(this.checkForNPCTargets && this.npcTargetList.length==0) this.npcTargetList.push(characters[1]);
        if(this.isCollapsed)
        {
            this.currentStep++;
            var frame = Math.floor(this.currentStep*0.3);
            this.sheet.goToColumn(frame);
            if(frame==this.steps-1)
            {
                this.render();
                this.active=false;
            }
        }

        if(this.player.contact == this.line.edges[0] || (this.checkForNPCTargets && areNPCsContacting(this.line.edges[0], this.npcTargetList)))
        {

            this.count++;
            if(this.count>this.stepCount)
            {
                this.count=0;
                this.currentStep++;
                if(this.currentStep>=this.steps)
                {
                    //this.active=false;
                    this.line.adjustPosition(-10000,-10000); //Move line out of the way
                    if(this.player.contact == this.line.edges[0]) this.player.contact = null;
                    if(this.checkForNPCTargets) loseNPCContacts(this.line.edges[0],this.npcTargetList);
                    this.isCollapsed=true
                    this.currentStep=0;
                    this.sheet.goToRow(1);
                    this.sheet.goToColumn(0);
                }
                else
                {
                    this.sheet.goToColumn(this.currentStep);
                }
            }
        }

    }
    function areNPCsContacting(edge, list)
    {

        if(list.length==0) return false;
        var result=false, element;
        var len = list.length;
        for(var i=0; i<len;i++)
        {
            //console.log("::"+i+"::"+document.getElementById(list[i]))
            element = list[i];//document.getElementById(list[i]);
            //if(element) console.log("-->  element.contact="+element.contact)
            if(element && element.contact==edge) result = true;
        }
        //console.log("areNPCsContacting?"+result+"  lisy="+list);
        //if(result)console.log("areNPCsContacting?"+result+"  lisy="+list);
        return result;
    }
    function loseNPCContacts(edge, list)
    {
        var element;
        var len = list.length;
        for(var i=0; i<len;i++)
        {
            element = list[i];// document.getElementById(list[i]);
            if(element && element.contact==edge) element.contact=null;
        }
    }

    this.render = function()
    {
        if(!this.active) return;
        //Only render if in view
        //if(this.boundingBox.x+this.boundingBox.width<-scenePosX || this.boundingBox.x>-scenePosX+SCREEN_WIDTH
        //	|| this.boundingBox.y+this.boundingBox.height<-scenePosY || this.boundingBox.y>-scenePosY+SCREEN_HEIGHT) return;
        //this.sheet.update();
        //this.sheet.setWrapperPosition(this.position.x, this.position.y);
        this.sheet.render();
    }

    this.destroy = function()
    {
        this.sheet.destroy();
        this.boundingBox = null;
        this.motionBox = null;
        this.sheet = null;
        this.line.destroy();
        this.line = null;
        this.npcTargetList=null;
    }

    this.toString = function()
    {
        return "(CollapsingPlatform: position "+this.position.x+","+this.position.y+")";
    }
}