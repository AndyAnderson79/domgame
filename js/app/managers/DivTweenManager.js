
//Simple tweening (ease-out)
function DivTweenManager()
{
    var scope = this;
    this.tweenList = [];
    this.startTime = 0;
    this.prevTime = 0;

    var requestId=-1;
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(func){ scope.t_out=setTimeout(func, 1000 / FPS); };
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(){clearTimeout(scope.t_out)};

    this.startTweening = function()
    {
        //console.log("[DivTweenManager.startTweening]");
        if(requestId>-1) return;
        this.startTime = this.prevTime = Date.now();
        requestId = requestAnimationFrame(scope.updateTweens);
    }

    this.clearAllTweens = function()
    {
        //console.log("Clear all tweens");
        scope.tweenList.length=0;
        cancelAnimationFrame(requestId);
        requestId = -1;
    }

    this.addTween = function(element, styleType, metricType, current, target, rate, callback)
    {
        //console.log("[DivTweenManager.addTween]element:"+element+"  styleType:"+styleType+"  metricType:"+metricType+"  current:"+current+"  target:"+target+"  rate:"+rate);//+"  callback:"+callback?"yes":"no");
        scope.tweenList.push({element:element, styleType:styleType, metricType:metricType, current:current, target:target, rate:rate, callback:callback});
    }

    this.updateTweens = function()
    {
        //console.log("[DivTweenManager.updateTweens]");
        var len = scope.tweenList.length;
        if(len==0) return;

        var time = Date.now();
        var ratio = ((time-this.prevTime)/1000) || 1
        if(ratio>2) ratio = 2;
        if(ratio<0.5) ratio = 0.5;

        var i, tween;
        for(i=0;i<len;i++)
        {
            tween = scope.tweenList[i];
            //console.log("tween:"+tween);
            if(!tween)
            {
                //console.log("No tween but:"+ scope.tweenList.length);
                removeTweenFromList(tween);
                //console.log("No tween but:"+ scope.tweenList.length);
            }
            else
            {
                tween.current-= (tween.current-tween.target)*tween.rate*ratio;
                if(Math.abs(tween.current-tween.target)<=1)
                {
                    tween.current = tween.target;
                    removeTweenFromList(tween);
                    if(tween.callback) tween.callback();
                }
                tween.element.style[tween.styleType] = Math.round(tween.current)+tween.metricType;
            }
        }
        if(scope.tweenList.length==0)
        {
            scope.clearAllTweens();
        }
        else
        {
            requestId = requestAnimationFrame(scope.updateTweens);
        }
    }
    function removeTweenFromList(tweenToRemove)
    {
        var tween;
        var index = scope.tweenList.length-1;
        while(index>=0)
        {
            //console.log("[DivTweenManager.removeTweenFromList]"+scope.tweenList[index]+"  tweenToRemove="+tweenToRemove);
            if(scope.tweenList[index]===undefined) console.log("#################UNDEFINED#############");
            if(tweenToRemove===scope.tweenList[index] || scope.tweenList[index]===undefined)
            {
                scope.tweenList.splice(index,1);
            }
            index--
        }
    }

}