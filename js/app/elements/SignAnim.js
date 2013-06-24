//Jon Howard - @swingpants
//swingpants.com
//Simple animation
function SignAnim(name,img, fromX, fromY, toX, toY, autoStart)
{
    console.log("Sign ANIM:"+name);
    var scope = this;
    this.name = name;
    this.img = img;
    img.style.left = fromX+"px";
    img.style.top = fromY+"px";
    this.position = new Point(fromX, fromY);
    this.toPosition = new Point(toX, toY);

    this.tweenIsTriggered = false;
    this.tweenIsCompleted = false;
    this.startTime = null;





    this.hitTrigger = function()
    {
        if(scope.tweenIsCompleted) return;
        scope.tweenIsTriggered = true
        scope.startTime = Date.now();
        console.log("starting tween from sign anim   ??"+scope.img.offsetLeft+"  -> "+scope.toPosition.x);
        divTweenManager.addTween(scope.img,"left", "px",scope.img.offsetLeft, scope.toPosition.x, 0.04, null);
        divTweenManager.addTween(scope.img,"top",  "px",scope.img.offsetTop, scope.toPosition.y, 0.06, tweenCompleted);
        divTweenManager.startTweening();
    }
    function tweenCompleted()
    {
        scope.tweenIsCompleted = true;
    }
    if(autoStart) this.hitTrigger();

    this.update = function(timestep)
    {
        if(scope.tweenIsTriggered && scope.tweenIsCompleted) return;
        if(scope.tweenIsTriggered)
        {
            console.log("...tweenIsTriggered");
            var now = Date.now();
            if(now-scope.startTime>10000)
            {
                console.log("...timed out so re-hitting trigger"+now+" // "+scope.startTime+" --> "+(now-scope.startTime));
                scope.hitTrigger();
            }
        }
    }

    this.render=function()
    {
    }
    this.displayUpdate=function()
    {
    }
    this.displayRender=function()
    {

    }

    this.destroy = function()
    {
        this.img = null;
    }

    this.toString = function()
    {
        return "(Triggered pos:"+this.position.x+","+this.position.y+")";
    }

}