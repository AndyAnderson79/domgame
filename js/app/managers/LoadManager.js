

function LoadManager(baseUrl)
{

    this.baseUrl = baseUrl;
    this.loader = new PxLoader();
    this.completeCallback=null;
    var scope = this;
    this.percentageComplete = 0;
    this.doDisplayUpdate = false;
    this.displayUpdateFn = null;

    this.loadRotateImage = function(assetList, callback)
    {
        this.percentageComplete = 0;
        this.completeCallback = callback;
        this.loadAssetsFromArray(assetList.rotateToPlay);
        loadManager.startLoading(callback);
    }

    //init load of all assets required for preloader
    this.doPreLoad = function(assetList, callback)
    {
        //console.log(assetList);
        this.percentageComplete = 0;
        this.completeCallback = callback;
        this.loadAssetsFromArray(assetList.loader);
        loadManager.startLoading(callback);
    }
    //Init load of all assets required for main game - callback when finished; updateDisplayFn for loaderbar, etc.
    this.doMainLoad = function(assetList, callback, updateDisplayFn)
    {
        this.percentageComplete = 0;
        this.completeCallback = callback;
        this.loadAssetsFromArray(assetList.ui);

        var assetParser = new AssetParser();
        var array = assetParser.parseAssets(assetList.list,levels);
        this.loadAssetsFromArray(array);
        loadManager.startLoading(callback);

        if(updateDisplayFn)
        {
            this.displayUpdateFn = updateDisplayFn;
            this.doDisplayUpdate = true;
        }
    }


    this.loadAssetsFromArray = function(array)
    {
        var img,item,container;
        var len = array.length;
        var numCopies=1;
        //loop through assets - create, init load and add to displayFactory
        for(var i = 0;i<len;i++)
        {
            item = array[i];
            numCopies = item.multiple || 1;
            //console.log("copies:"+numCopies);
            for(var j = 0; j<numCopies; j++)
            {
                if(!item.url || item.url=="")
                {//If item has no url then use className to create div
                    //console.log("[LoadManager] no url so creating div. Name="+item.name);
                    displayFactory.addElement(item.name, item.type, createADiv(item.className, 0, 0), item.width, item.height, null, null, null, item.left || null, item.top || null);
                }
                else
                {
                    img = this.addImgToQueue(MEDIA_PATH+item.url);
                    img.style.padding = "0 0 0 0"; // Need to override CBBC page CSS
                    if(item.type == "spritesheet")
                    {
                        //console.log("spritesheet - so storing accordingly");
                        container = this.createSpritesheetDiv(item.name, MEDIA_SIZE_RATIO*item.width/item.columns, MEDIA_SIZE_RATIO*item.height/item.rows, item.left || null, item.top || null);
                        //displayFactory.addElement(item.name+"_container", item.type, container, item.width/item.columns, item.height/item.rows);
                        container.appendChild(img);
                        img.style.position = "absolute";

                        //ref, type, object, width, height, columns, rows, img, left, top
                        //container.style.backgroundColor = "#FF0000";
                        var dObj = displayFactory.addElement(item.name, item.type, container, MEDIA_SIZE_RATIO*item.width/item.columns, MEDIA_SIZE_RATIO*item.height/item.rows, item.columns, item.rows, img, item.left || null, item.top || null);
                    }
                    else if(item.type == "BGDiv")
                    {
                        //console.log("[LoadManager.loadAssetsFromArray]  BGDiv name="+item.name);
                        container = this.createBGDiv(item.name, MEDIA_SIZE_RATIO*item.width, MEDIA_SIZE_RATIO*item.height, item.url, item.left || 0, item.top || 0);
                        //console.log(container);
                        displayFactory.addElement(item.name, item.type, container, MEDIA_SIZE_RATIO*item.width, MEDIA_SIZE_RATIO*item.height, null, null, null, item.left || null, item.top || null);
                    }
                    else if(item.type == "button")
                    {
                        container = this.createButton(item.name, MEDIA_SIZE_RATIO*item.width/(item.columns||1), MEDIA_SIZE_RATIO*item.height/(item.rows || 1), item.url, item.left, item.top, item.className || "standardButton");
                        displayFactory.addElement(item.name, item.type, container, MEDIA_SIZE_RATIO*item.width, MEDIA_SIZE_RATIO*item.height, null, null, null, item.left || null, item.top || null);
                    }
                    else
                    {
                        //console.log("not a spritesheet");
                        displayFactory.addElement(item.name, item.type, img, MEDIA_SIZE_RATIO*item.width, MEDIA_SIZE_RATIO*item.height, null, null, null, item.left || null, item.top || null);
                        if(item.left || item.top)
                        {
                            //console.log("--->"+item.name+"//"+item.type+"//"+item.left+","+item.top);
                            img.id = item.name;
                            img.style.left = item.left || 0;
                            img.style.top = item.top || 0;
                            img.style.position = "absolute";
                        }
                    }
                }
            }

        }
    }
    this.createSpritesheetDiv = function(name,width,height, left, top)
    {
        //console.log("[LoadManager.createSpritesheetDiv] name="+name+"  w/h:"+width+","+height+"  l/t:"+left+","+top);
        var container = document.createElement("div");
        container.id = name;
        //container.setAttribute("id", name+"_container");
        container.style.position = "absolute";
        container.style.width = width+"px";
        container.style.height = height+"px";
        if(left) container.style.left = left;
        if(top) container.style.top = top;
        container.style.overflowX = "hidden";
        container.style.overflowY = "hidden";

        return container;
    }

    this.createBGDiv = function(name,width,height,src, left, top)
    {
        var container = document.createElement("div");
        container.id =  name;
        container.style.position = "absolute";
        container.style.width = width+"px";
        container.style.height = height+"px";
        container.style.backgroundImage ="url('"+MEDIA_PATH+src+"')";
        container.style.left = left;
        container.style.top = top;

        return container;
    }

    this.createButton = function(name, width, height, src, left, top, buttonClass)
    {
        //	console.log("[LoadManager.createButton] name="+name+"  w/h="+width+","+height+"  src="+src+"  l/t="+left+","+top+"  buttonClass="+buttonClass);
        var button = document.createElement("div");
        button.id = name;
        button.style.backgroundImage ="url('"+MEDIA_PATH+src+"')";
        button.className = buttonClass;
        button.style.position = "absolute";
        button.style.width = width+"px";
        button.style.height = height+"px";
        button.style.left = left;
        button.style.top = top;

        return button;
    }


    this.addImgToQueue = function(url)
    {
        //console.log("addImgToQueue url="+url);
        var pxImage = new PxLoaderImage(url);

        this.loader.add(pxImage);

        return pxImage.img;
    }

    this.onLoadComplete = function(e)
    {
        //console.log("Load complete");
        scope.doDisplayUpdate = false;
        scope.displayUpdateFn = null;
        //scope.testSpritesheetsInContainers();
        if(scope.completeCallback) scope.completeCallback();
    }
    this.testSpritesheetsInContainers = function()
    {
        //console.log("========TESTINGSPRITESHEETS IN CONTAINERS==========");
        var object, element;
        for(var propt in displayFactory.elementStore)
        {
            if(displayFactory.elementStore[propt].length>0)
            {
                element = displayFactory.elementStore[propt][0];
                object = element.object;
                //console.log(propt+"____"+object.localName+"  width?"+object.offsetWidth+"-----"+object.childNodes.length+"   ??"+element.width);
                if(object.childNodes.length>0)
                {
                    //console.log(object.style.backgroundColor+"--"+object.style.overflowX);
                    object.style.width = element.width;
                }
                //container.appendChild(object);
            }
        }
    }
    this.onProgress = function(e)
    {
        //console.log((100*e.completedCount/e.totalCount)+"  "+e.completedCount + ' / ' + e.totalCount+"  scope.doDisplayUpdate="+scope.doDisplayUpdate);
        scope.percentageComplete = 100*e.completedCount/e.totalCount;

        if(scope.doDisplayUpdate) scope.displayUpdateFn()
    }

    this.startLoading = function(completeCallback)
    {
        //console.log("STarting load"+completeCallback);
        this.completeCallback = completeCallback;
        this.loader.start();
    }

    this.loader.addProgressListener(this.onProgress);
    // the event provides stats on the number of completed items

    this.loader.addCompletionListener(this.onLoadComplete);
    //this.loader.addProgressListener = this.onProgress;

}