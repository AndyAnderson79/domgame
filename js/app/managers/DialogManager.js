

function DialogManager(screenManager)
{

    this.currentDialog = null;
    this.screenManager = screenManager;

    this.open = function(dialog, launchVars)
    {
        //console.log("[DialogManager.open]");
        this.goto(dialog, launchVars);
    }

    this.close = function close()
    {
        //console.log("[DialogManager.close]"+this.currentDialog.name);
        this.currentDialog.handleRemoved();
        this.currentDialog.destroy();
        this.currentDialog = null;
    }

    this.goto =  function(dialog, launchVars, transition)
    {
        //console.log("[DialogManager.goto]");
        //If need transitions then will handle here.
        if(this.currentDialog) this.close();
        if (!launchVars) launchVars = {};
        this.currentDialog = this.createDialog(dialog);
        this.currentDialog.launchVars = launchVars;
        this.currentDialog.parent = this.screenManager.display;
        //if (display.stage) display.stage.focus = display.stage;
        this.currentDialog.handleAdded();
    }

    this.createDialog= function(dialog)
    {
        var d = new dialog();

        d.manager = this;

        return d;
    }

}