function AssetParser()
{
    //Parse asset list and levels to calc max required for each element
    this.parseAssets = function(array, levels)
    {
        //console.log("[AssetParser] levels="+levels);
        var item;
        var numElements;
        var element;
        var level;
        var i;
        var j;
        var required = {};
        var results = [];
        var len = array.length;

        var checkAndClearTallies = function()
        {
            for (var propt in required)
            {
                if (required[propt].tally > required[propt].req) required[propt].req = required[propt].tally;

                required[propt].tally = 0;
            }
        };

        //Loop through item to set up a required object
        for (i = 0; i < len; i++)
        {
            item = array[i];

            if (!required[item.name]) required[item.name] = { tally: 0, req: 0 };
        }

        //Loop through levels to tally max
        len = levels.length;

        for (i = 0; i < len; i++)
        {
            level = levels[i];
            numElements = level.length;

            for (j = 0; j < numElements; j++)
            {
                element = level[j];

                if (element && element.ref && required[element.ref]) required[element.ref].tally++;
            }

            checkAndClearTallies();
        }

        //Create array with required amount of items
        len = array.length;

        for (i = 0; i < len; i++)
        {
            item = array[i];

            if (required[item.name].req > 0) for (j = 0; j < required[item.name].req; j++) results.push(item);
        }

        return results;
    };
}