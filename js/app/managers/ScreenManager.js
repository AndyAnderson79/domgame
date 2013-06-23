function ScreenManager(display)
{
    this.currentScreen = null;
    this.display = display;
    this.dialogManager = new DialogManager(this);

    this.goto = function(screen, launchVars, transition)
    {
        //If need transitions then will handle here.
        if(this.dialogManager.currentDialog) this.dialogManager.close();
        if(this.currentScreen)
        {
            this.currentScreen.handleRemoved();
            this.currentScreen.destroy();
        }
        if (!launchVars) launchVars = {};

        this.currentScreen = this.createScreen(screen);
        this.currentScreen.launchVars = launchVars;
        this.currentScreen.parent = this.display;
        this.currentScreen.handleAdded();
    };

    this.createScreen = function(screen)
    {
        var scr = new screen();

        scr.manager = this;

        return scr;
    };

    this.handleUserInput = function(type, name)
    {
        if (this.dialogManager.currentDialog) this.dialogManager.currentDialog.onUserInput(name, type);
        else if (this.currentScreen) this.currentScreen.onUserInput(name, type);
    };

    this.toString = function()
    {
        return "(ScreenManager)";
    }
}