function LoaderScreen()
{
    var scope = this;
    var requestAnimationFrame = null;

    this.name = "loaderScreen";
    this.manager = null;
    this.parent = null;
    this.intervalID = 0;
    this.loaderBarLoaded = null;
    this.count = 0;
    this.tens = null;
    this.units = null;

    this.handleAdded =  function()
    {
        // background
        var bg =  displayFactory.getElementByRef("loading_screen").object;
        bg.id = "loading_screen";
        document.getElementById('bgHolder').appendChild(bg);

        // loader bar
        var loaderBar = this.createDiv("loaderBar");
        this.parent.appendChild(loaderBar);
        loaderBar.appendChild(displayFactory.getElementByRef("loader_image").object);

        this.loaderBarLoaded = loaderBar.appendChild(displayFactory.getElementByRef("loader_image_loaded").object);
        this.loaderBarLoaded.style.width = "0%";

        // percentage counter
        var pc = this.parent.appendChild(displayFactory.getElementByRef("percentage").object);
        pc.id = "pc";

        this.tens = getNumber(0);
        this.tens.id = "tens";
        this.tens.style.left = "45%";
        this.tens.style.top = "61.5%";
        this.parent.appendChild(this.tens);

        this.units = getNumber(0);
        this.units.id = "units";
        this.units.style.left = "48%";
        this.units.style.top = "61.5%";
        this.parent.appendChild(this.units);
    };

    //Create small number and give it initial value of num
    function getNumber(num)
    {
        var percentage = (num - 1) * 11.2;
        var numImage = displayFactory.getElementByRef("smallNumber").object;

        if (num == 0) percentage = 100;

        numImage.style.backgroundPosition = percentage + "% 0";

        return numImage;
    }

    //Set small number element to the value
    function setNumber(value, element)
    {
        var percentage = (value - 1) * 11.2;

        element.style.backgroundPosition = percentage + "% 0";
    }

    //Update progress of asset load
    this.displayUpdate = function()
    {
        scope.loaderBarLoaded.style.width = loadManager.percentageComplete + "%";

        var tensResult = Math.floor(loadManager.percentageComplete / 10);
        var unitsResult = Math.floor(loadManager.percentageComplete - tensResult * 10);

        if (tensResult > 9) tensResult = 9;
        if (unitsResult > 9) unitsResult = 9;

        setNumber(tensResult, scope.tens);
        setNumber(unitsResult, scope.units);
    };

    this.finish = function()
    {
        scope.gotoScreen(LandingScreen);
    };

    this.handleRemoved =  function()
    {
        this.removeDiv("tens");
        this.removeDiv("units");
        this.removeDiv("loaderBar");
        this.removeDiv("loader_image");
        this.removeDiv("loader_image_loaded");
        this.removeDiv("pc");
        this.removeDiv("loading_screen");

        displayFactory.finishWithAllElementsInUse();
    };

    this.gotoScreen = function(screen)
    {
        scope.manager.goto(screen, {}, null)
    };

    this.onUserInput = function(name)
    {

    };

    this.pause = function()
    {

    };

    this.destroy = function()
    {
        this.name = null;
        this.manager = null;
        this.parent = null;
        this.loaderBarLoaded = null;
        this.requestAnimationFrame = null;

        scope = null;
    };

    this.removeDiv = function(id)
    {
        var element = document.getElementById(id);
        if (element) element.parentNode.removeChild(element);
    };

    this.createDiv = function(className)
    {
        var pDiv = document.createElement("div");

        pDiv.className = className;
        pDiv.id = className;

        return pDiv;
    };
}