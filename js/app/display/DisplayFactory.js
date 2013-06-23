

function DisplayFactory()
{
    this.elementStore={};
    this.elementsInUse={};
    this.transferStore={};

    this.addElement = function(ref, type, object, width, height, columns, rows, img, left, top)
    {
        var displayObject = new DisplayObject(ref, type, object, width, height, columns||null, rows||null, img||null, left||null, top||null);
        //console.log("[DisplayFactory.addElement] ref="+ref+" type="+type+"   object:"+object+"  firstChild"+object.firstChild+"  w/h:"+width+","+height);
        if(type=="spritesheet")
        {
            displayObject.object.style.position = "absolute";
            displayObject.object.style.overflow = "hidden";
            displayObject.img = object.firstChild;
        }

        if(!this.elementStore[ref]) this.elementStore[ref]=[];
        this.elementStore[ref].push(displayObject);

        return displayObject;
    }

    this.getElementByRef = function(ref)
    {
        //console.log("[DisplayFactory.getElementByRef] ref="+ref+"  stored="+this.elementStore[ref]);

        if(!this.elementStore[ref] || this.elementStore[ref].length==0)
        {
            console.log("Element not available!! "+ref);
            return null;
        }
        var object = this.elementStore[ref].pop();
        if(!this.elementsInUse[ref]) this.elementsInUse[ref]=[];
        this.elementsInUse[ref].push(object);

        return object;
    }

    this.elementExists = function(ref)
    {
        return this.elementStore[ref]?true:false;
    }

    //About to clear out stored elements, need to first check for elements to reuse
    this.initTransfer = function()
    {
        this.transferStore = this.elementStore;
        this.elementStore = {};
    }

    this.elementAlreadyExisits = function(ref)
    {
        if(this.transferStore[ref] && this.transferStore[ref].length>0)
        {//If exists then transfer
            if(!this.elementStore[ref]) this.elementStore[ref]=[];
            this.elementStore[ref].push(this.transferStore[ref].pop());

            return true;
        }
        else
        {
            return false;
        }
    }

    this.endTransfer - function()
    {
        this.transferStore = {};
    }

    this.scaleAllElements = function(scale)
    {
        this.doScale(scale, this.elementStore)
        this.doScale(scale, this.elementsInUse)
    }

    this.doScale = function(scale, store)
    {
        var item,len,i;

        for(var propt in store)
        {
            len = store[propt].length;
            for(i=0;i<len;i++)
            {

                item = store[propt][i];

                item.object.style.width = Math.ceil(item.width*scale)+"px";
                item.object.style.height = Math.ceil(item.height*scale)+"px";

                //console.log(item.name);
            }
        }
    }

    this.finishWithAllElementsInUse = function()
    {
        var len, i;
        for(var propt in this.elementsInUse)
        {
            while(this.elementsInUse[propt].length>0)
            {
                this.elementStore[propt].push(this.elementsInUse[propt].pop());
            }
        }
    }

    this.finishWithElementInUseByRef = function(element, ref)
    {
        //var res = this.elementsInUse[ref];
        //if(res) res = res.length;
        //console.log("[DisplayFactory.finishWithElementInUseByRef]  element="+element+"  ref="+ref+" ?? "+res);
        if(!this.elementsInUse[ref]) return;

        var len = this.elementsInUse[ref].length;
        for(var i=len-1;i>=0;i--)
        {
            if(this.elementsInUse[ref][i].object==element)
            {

                this.elementStore[ref].push(this.elementsInUse[ref][i]);
                this.elementsInUse[ref].splice(i,1);
            }
        }
    }

    this.destroy = function()
    {
        this.elementStore = null;
    }
}