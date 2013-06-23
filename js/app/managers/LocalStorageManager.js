

function LocalStorageManager()
{
    var LOCAL_STORAGE_TURNED_ON = true;
    var supportsStorage=supportsHTML5Storage();

    function supportsHTML5Storage()
    {
        try
        {
            return 'localStorage' in window && window['localStorage'] && LOCAL_STORAGE_TURNED_ON;
        }
        catch (e)
        {
            return false;
        }
    }

    this.deleteGameData = function()
    {
        if(!supportsStorage) return false;
        localStorage.removeItem('levelsUnlocked');
        localStorage.removeItem('recordOfCollections');
    }

    this.saveGameData = function()
    {
        //collectedItems, recordOfCollections
        if(!supportsStorage) return false;


        try
        {
            //console.log("---SAVE GAME DATA---");
            localStorage.setItem('levelsUnlocked', JSON.stringify(levelsUnlocked));
            localStorage.setItem('recordOfCollections', JSON.stringify(recordOfCollections));
        }
        catch(error)
        {
            console.log("JSON feature not available");
        }

    }

    this.retrieveGameData = function()
    {
        if(!supportsStorage) return false;
        //console.log("---RETRIEVE GAME DATA---");
        var lUnlocked, recCollections;
        try
        {
            //console.log("trying..."+JSON);
            lUnlocked = JSON.parse(localStorage.getItem('levelsUnlocked'));
            recCollections = JSON.parse(localStorage.getItem('recordOfCollections'));
        }
        catch(error)
        {
            //console.log("JSON feature not available");
        }
        levelsUnlocked = lUnlocked || levelsUnlocked;
        recordOfCollections = recCollections || recordOfCollections;
        //console.log("---COMPLETED---");
    }

    function listObjectProperties(obj)
    {
        for(var propt in obj)
        {
            console.log(propt + ': ' + obj[propt]);
        }
    }
}