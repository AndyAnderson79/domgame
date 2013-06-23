

function LoaderScreen()
{
    var scope = this;
    this.name="loaderScreen";
    this.manager=null;
    this.parent=null;

    this.intervalID=0;
    this.hotdogBar = null;
    var requestAnimationFrame = null;

    this.count=0;

    this.tens = null;
    this.units = null;


    this.handleAdded =  function()
    {
        //Background
        var bg =  displayFactory.getElementByRef("loading_screen").object;
        bg.id = "loading_screen";
        document.getElementById('bgHolder').appendChild(bg);

        //Scooby logo
        this.parent.appendChild(displayFactory.getElementByRef("scoobydoo_logo").object);

        //Hotdog loader bar
        var loaderBar = this.createDiv("loaderBar");
        this.parent.appendChild(loaderBar);
        loaderBar.appendChild(displayFactory.getElementByRef("hotdog_loader").object);

        this.hotdogBar = loaderBar.appendChild(displayFactory.getElementByRef("hotdog_mustard").object);
        this.hotdogBar.style.width = "0%"; //Set initial width to 0%

        //CBBC LOGO
        var logo = displayFactory.getElementByRef("cbbcLogo").object;
        this.parent.appendChild(logo);
        logo.id = "cbbcLogo";
        logo.style.position = "absolute";
        logo.style.left = "42%";
        logo.style.top = "75%";

        //Percentage counter
        var pc = this.parent.appendChild(displayFactory.getElementByRef("percentage").object);
        pc.id="pc";

        this.tens = getNumber(0);
        this.tens.id="tens";
        this.tens.style.left = "45%";
        this.tens.style.top = "61.5%";
        this.parent.appendChild(this.tens );

        this.units = getNumber(0);
        this.units.id = "units";
        this.units.style.left = "48%";
        this.units.style.top = "61.5%";
        this.parent.appendChild(this.units);
    }

    //Screate small number and give it initial value of num
    function getNumber(num)
    {
        var percentage = (num-1)*11.2;
        if(num==0) percentage=100;
        var numImage = displayFactory.getElementByRef("smallNumber").object;
        numImage.style.backgroundPosition = percentage+"% 0";

        return numImage;
    }

    //Set small number element to the value
    function setNumber(value, element)
    {
        var percentage = (value-1)*11.2;
        element.style.backgroundPosition = percentage+"% 0";
    }

    //Update progress of asset load
    this.displayUpdate=function()
    {
        scope.hotdogBar.style.width = loadManager.percentageComplete+"%";

        var tensResult = Math.floor(loadManager.percentageComplete/10);
        if(tensResult>9)tensResult=9;
        var unitsResult =  Math.floor(loadManager.percentageComplete - tensResult*10);// Math.floor(loadManager.percentageComplete/10);
        if(unitsResult>9)unitsResult=9;

        setNumber(tensResult, scope.tens);
        setNumber(unitsResult, scope.units);
    }

    //
    this.finish = function()
    {
        scope.gotoScreen(LandingScreen);
        //scope.gotoScreen(IntroCartoonScreen);
    }

    this.handleRemoved =  function()
    {

        this.removeDiv("tens");
        this.removeDiv("units");
        this.removeDiv("scoobydoo_logo");
        this.removeDiv("loaderBar");
        this.removeDiv("hotdog_mustard"); //this is the full colour hotdog
        this.removeDiv("hotdog_loader"); //this is the greyed out hotdog
        this.removeDiv("cbbcLogo");
        this.removeDiv("pc");
        this.removeDiv("loading_screen");

        displayFactory.finishWithAllElementsInUse();
    }

    this.gotoScreen = function(screen)
    {
        scope.manager.goto(screen, {}, null)
    }

    this.onUserInput = function(name)
    {

    }

    this.pause = function()
    {
    }

    this.destroy = function()
    {
        this.name=null;
        this.manager=null;
        this.parent=null;
        scope = null;
        this.hotdogBar = null;
        this.requestAnimationFrame = null;
    }

    this.removeDiv = function(id)
    {
        var element = document.getElementById(id);
        if(element)element.parentNode.removeChild(element);
    }
    this.createDiv = function(className)
    {
        var pDiv = document.createElement( 'div' );

        pDiv.className = className;//Apply
        pDiv.id = className;//Apply

        return pDiv;
    }
}