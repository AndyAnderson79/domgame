function LoadManager(baseUrl)
{
    var scope = this;

    this.baseUrl = baseUrl;
    this.loader = new PxLoader();
    this.completeCallback = null;
    this.percentageComplete = 0;
    this.doDisplayUpdate = false;
    this.displayUpdateFn = null;

    this.loadRotateImage = function(assetList, callback)
    {
        this.percentageComplete = 0;
        this.completeCallback = callback;

        this.loadAssetsFromArray(assetList.rotateToPlay);

        loadManager.startLoading(callback);
    };

    //init load of all assets required for preloader
    this.doPreLoad = function(assetList, callback)
    {
        this.percentageComplete = 0;
        this.completeCallback = callback;

        this.loadAssetsFromArray(assetList.loader);

        loadManager.startLoading(callback);
    };

    //Init load of all assets required for main game - callback when finished; updateDisplayFn for loaderbar, etc.
    this.doMainLoad = function(assetList, callback, updateDisplayFn)
    {
        this.percentageComplete = 0;
        this.completeCallback = callback;

        this.loadAssetsFromArray(assetList.ui);

        var assetParser = new AssetParser();
        var array = assetParser.parseAssets(assetList.list, levels);

        this.loadAssetsFromArray(array);

        loadManager.startLoading(callback);

        if(updateDisplayFn)
        {
            this.displayUpdateFn = updateDisplayFn;
            this.doDisplayUpdate = true;
        }
    };

    this.loadAssetsFromArray = function(array)
    {
        var img, item, container;
        var len = array.length;
        var numCopies = 1;

        //loop through assets - create, init load and add to displayFactory
        for(var i = 0; i < len; i++)
        {
            item = array[i];
            numCopies = item.multiple || 1;

            for(var j = 0; j < numCopies; j++)
            {
                //If item has no url then use className to create div
                if (!item.url || item.url == "") displayFactory.addElement(item.name, item.type, createADiv(item.className, 0, 0), item.width, item.height, null, null, null, item.left || null, item.top || null);
                else
                {
                    img = this.addImgToQueue(MEDIA_PATH + item.url);
                    img.style.padding = "0 0 0 0"; // Need to override CBBC page CSS

                    if (item.type == "spritesheet")
                    {
                        container = this.createSpritesheetDiv(item.name, MEDIA_SIZE_RATIO * item.width / item.columns, MEDIA_SIZE_RATIO * item.height / item.rows, item.left || null, item.top || null);
                        container.appendChild(img);

                        img.style.position = "absolute";

                        //ref, type, object, width, height, columns, rows, img, left, top
                        var dObj = displayFactory.addElement(item.name, item.type, container, MEDIA_SIZE_RATIO * item.width / item.columns, MEDIA_SIZE_RATIO * item.height / item.rows, item.columns, item.rows, img, item.left || null, item.top || null);
                    }
                    else if(item.type == "BGDiv")
                    {
                        container = this.createBGDiv(item.name, MEDIA_SIZE_RATIO * item.width, MEDIA_SIZE_RATIO * item.height, item.url, item.left || 0, item.top || 0);

                        displayFactory.addElement(item.name, item.type, container, MEDIA_SIZE_RATIO * item.width, MEDIA_SIZE_RATIO * item.height, null, null, null, item.left || null, item.top || null);
                    }
                    else if(item.type == "button")
                    {
                        container = this.createButton(item.name, MEDIA_SIZE_RATIO * item.width / (item.columns || 1), MEDIA_SIZE_RATIO * item.height / (item.rows || 1), item.url, item.left, item.top, item.className || "standardButton");

                        displayFactory.addElement(item.name, item.type, container, MEDIA_SIZE_RATIO * item.width, MEDIA_SIZE_RATIO * item.height, null, null, null, item.left || null, item.top || null);
                    }
                    else
                    {
                        displayFactory.addElement(item.name, item.type, img, MEDIA_SIZE_RATIO * item.width, MEDIA_SIZE_RATIO * item.height, null, null, null, item.left || null, item.top || null);

                        if(item.left || item.top)
                        {
                            img.id = item.name;
                            img.style.left = item.left || 0;
                            img.style.top = item.top || 0;
                            img.style.position = "absolute";
                        }
                    }
                }
            }
        }
    };

    this.createSpritesheetDiv = function(name, width, height, left, top)
    {
        var container = document.createElement("div");
        container.id = name;
        container.style.position = "absolute";
        container.style.width = width + "px";
        container.style.height = height + "px";

        if (left) container.style.left = left;
        if (top) container.style.top = top;

        container.style.overflowX = "hidden";
        container.style.overflowY = "hidden";

        return container;
    };

    this.createBGDiv = function(name, width, height, src, left, top)
    {
        var container = document.createElement("div");
        container.id =  name;
        container.style.position = "absolute";
        container.style.width = width + "px";
        container.style.height = height + "px";
        container.style.backgroundImage ="url('" + MEDIA_PATH + src + "')";
        container.style.left = left;
        container.style.top = top;

        return container;
    };

    this.createButton = function(name, width, height, src, left, top, buttonClass)
    {
        var button = document.createElement("div");
        button.id = name;
        button.style.backgroundImage ="url('" + MEDIA_PATH + src + "')";
        button.className = buttonClass;
        button.style.position = "absolute";
        button.style.width = width + "px";
        button.style.height = height + "px";
        button.style.left = left;
        button.style.top = top;

        return button;
    };

    this.addImgToQueue = function(url)
    {
        var pxImage = new PxLoaderImage(url);

        this.loader.add(pxImage);

        return pxImage.img;
    };

    this.onLoadComplete = function(e)
    {
        scope.doDisplayUpdate = false;
        scope.displayUpdateFn = null;

        if (scope.completeCallback) scope.completeCallback();
    };

    this.testSpritesheetsInContainers = function()
    {
        var object, element;

        for (var propt in displayFactory.elementStore)
        {
            if (displayFactory.elementStore[propt].length > 0)
            {
                element = displayFactory.elementStore[propt][0];
                object = element.object;

                if(object.childNodes.length > 0) object.style.width = element.width;
            }
        }
    };

    this.onProgress = function(e)
    {
        scope.percentageComplete = 100*e.completedCount/e.totalCount;

        if (scope.doDisplayUpdate) scope.displayUpdateFn();
    };

    this.startLoading = function(completeCallback)
    {
        this.completeCallback = completeCallback;
        this.loader.start();
    };

    this.loader.addProgressListener(this.onProgress);
    this.loader.addCompletionListener(this.onLoadComplete);
}