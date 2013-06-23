
//Jon Howard - @swingpants//swingpants.com
function SoundManager()
{
    var scope = this;
    var engineType = "howler"; // howler or sm2
    var soundEngine;
    var audioStore = {};
    var inited = false;
    //Audio data - became expedient to store data here..
    var soundsArray =
        [
            {name:"buttonClick", mp3_url:'media/audio/button_singleclick.mp3', ogg_url:'media/audio/button_singleclick.ogg', volume:0.5},
            {name:"hitGround", mp3_url:'media/audio/landing01.mp3', ogg_url:'media/audio/landing01.ogg', volume:0.2},
            {name:"collectItem", mp3_url:'media/audio/collect.mp3', ogg_url:'media/audio/collect.ogg', volume:0.5},
            {name:"unmasking", mp3_url:'media/audio/game_over.mp3', ogg_url:'media/audio/game_over.ogg', volume:0.8},
            {name:"trampolineBounce", mp3_url:'media/audio/trampoline_bounce.mp3', ogg_url:'media/audio/trampoline_bounce.ogg', volume:0.4},
            {name:"dropLow", mp3_url:'media/audio/drop_low.mp3', ogg_url:'media/audio/drop_low.ogg', volume:0.4},
            {name:"switchClick", mp3_url:'media/audio/switch_click.mp3', ogg_url:'media/audio/switch_click.ogg', volume:0.4},
            {name:"monsterGrowl", mp3_url:'media/audio/monster_growl01.mp3', ogg_url:'media/audio/monster_growl01.ogg', volume:0.9},
            {name:"bgMusic", mp3_url:'media/audio/bg_music.mp3', ogg_url:'media/audio/bg_music.ogg', volume:0.2, loop:true},
            {name:"deathSting", mp3_url:'media/audio/death_sting.mp3', ogg_url:'media/audio/death_sting.ogg', volume:0.4},
            {name:"doorOpen", mp3_url:'media/audio/door_open2.mp3', ogg_url:'media/audio/door_open2.ogg', volume:0.2},
            {name:"hypnoSeq", mp3_url:'media/audio/hypno_seq.mp3', ogg_url:'media/audio/hypno_seq.ogg', volume:0.3},
            {name:"exitSting", mp3_url:'media/audio/exit_sting.mp3', ogg_url:'media/audio/exit_sting.ogg', volume:0.2}
        ];
    var spriteArray =
        [
            {name:"soundSprite", mp3_url:'media/audio/sound_sprite.mp3', ogg_url:'media/audio/sound_sprite.ogg', volume:1.0,
                sprite: {
                    silence: [0,100],
                    buttonClick: [1000,150],
                    hitGround: [1500, 250],
                    collectItem: [2000, 200],
                    trampolineBounce: [2500, 350],
                    dropLow: [3000,200],
                    switchClick: [3500, 250],
                    doorOpen: [4000, 1300],
                    exitSting: [5500, 2500],
                    monsterGrowl: [8000, 1700],
                    deathSting: [10000, 1800],
                    unmasking: [12000,3000],
                    hypnoSeq: [15000,8000]
                }}
        ]


    var muted = false;
    //var usingSoundSprites = false;

    this.init = function()
    {
        if(!USING_HOWLER)
        {
            //SoundManager2
            engineType = "sm2";
            //console.log("setting up SoundManager2");
            soundManager.setup({
                url: PREFIX_PATH+'swf/soundmanager2_flash_xdomain/',
                flashVersion: 9, // optional: shiny features (default = 8)
                waitForWindowLoad: false,
                // optional: ignore Flash where possible, use 100% HTML5 mode
                preferFlash: true,
                useHighPerformance: true,
                // useFastPolling: true,
                // wmode: 'transparent',
                debugMode: false,
                onready: function()
                {
                    //console.log("soundManager is ready");
                    initAudioArray(soundsArray);
                }
            });

        }
        else
        {
            //Howler
            engineType = "howler";

            //Sound sprite feature sniffing moved to embed for easier decision point on desktop

            if (USING_SOUNDSPRITES)
            {//Use sound sprites
                //console.log("USING SOUND SPRITES");

                if(IS_MOBILE_DEVICE)
                {
                    document.body.addEventListener("touchstart", capturingFirstUserInteraction, false);
                }
                else
                {
                    initAudioArray(spriteArray);
                }
            }
            else
            {//Use webaudio api
                initAudioArray(soundsArray);
                //playHowl("monsterGrowl");
            }

        }
        //console.log("[SoundManager.init] engineType="+engineType);
    }

    function capturingFirstUserInteraction(event)
    {
        //console.log("capturingFirstUserInteraction");

        initAudioArray(spriteArray);
        audioStore["soundSprite"].play("silence");

        document.body.removeEventListener("touchstart", capturingFirstUserInteraction, false);

        //Delay and then pause - fix for iPod
        setTimeout(scope.pauseSoundSprite, 200);
    }

    this.pauseSoundSprite = function()
    {
        //console.log("Pausing sound sprite");
        audioStore["soundSprite"].pause();
    }

    function initAudioArray(audioArray)
    {
        //console.log("[SoundManager.initAudioArray]"+audioArray);
        var len = audioArray.length;
        for(var i=0;i<len;i++)
        {
            addSound(audioArray[i]);
        }
        inited =true;
    }

    this.playSound = function(name, doLoop)
    {
        //console.log("playSound name="+name);
        switch(engineType)
        {
            case "howler":
                if(USING_SOUNDSPRITES) playHowlSprite(name);
                else playHowl(name, doLoop);
                break;
            case "sm2":
                //if(!inited) initAudioArray();

                playSM2(name, doLoop);
                break;
        }
    }

    this.continueSounds = function()
    {
        for(var name in audioStore)
        {
            switch(engineType)
            {
                case "howler":
                    continueHowl(name);
                    break;
                case "sm2":
                    continueSM2(name);
                    break;
            }
        }
    }

    this.stopSoundByName = function(name)
    {
        switch(engineType)
        {
            case "howler":
                stopHowl(name);
                break;
            case "sm2":
                //if(!inited) initAudioArray();
                stopSM2(name);
                break;
        }
    }

    this.stopAllSounds = function()
    {
        for(var name in audioStore)
        {
            switch(engineType)
            {
                case "howler":
                    stopHowl(name);
                    break;
                case "sm2":
                    stopSM2(name);
                    break;
            }
        }
    }

    function addSound(obj)
    {
        switch(engineType)
        {
            case "howler":
                addHowl(obj);
                break;
            case "sm2":
                addSM2Sound(obj);
                break;
        }

    }

    //{name:"monsterGrowl", mp3_url:'media/audio/monster_growl01.mp3', ogg_url:'media/audio/monster_growl01.ogg', volume:0.9}

    //Howler
    function addHowl(obj)
    {
        //console.log("Add howl "+obj.name+"  PREFIX_PATH="+PREFIX_PATH);
        var howl = {
            urls: [PREFIX_PATH+obj.mp3_url,PREFIX_PATH+obj.ogg_url],
            volume: (obj.volume || 1),
            loop: (obj.loop || false)
        };
        if(obj.sprite) howl.sprite = obj.sprite;

        audioStore[obj.name] = new Howl(howl);
    }

    function playHowlSprite(name)
    {
        if(name=="bgMusic") return; //No bg music for sprite version

        audioStore["soundSprite"].pause().play(name);
    }

    function playHowl(name, doLoop)
    {
        if(!audioStore[name]) return;
        if(doLoop) audioStore[name].loop = true;
        audioStore[name].stop().play();
    }

    function stopHowl(name)
    {
        if(!audioStore[name]) return;
        audioStore[name].stop();
    }

    function continueHowl(name)
    {
        //console.log("continueHowl nmae="+name+" ... ")
        //console.log(audioStore[name].loop);
        if(audioStore[name].loop==true) audioStore[name].play();
    }

    //SM2
    function addSM2Sound(obj)
    {
        //console.log("Adding SM2"+obj+"  PREFIX_PATH="+PREFIX_PATH);
        audioStore[obj.name] = soundManager.createSound({ id:obj.name, url:PREFIX_PATH+obj.mp3_url, stream: false, autoPlay: false, multiShot: false, autoLoad: true});
    }

    function playSM2(name, doLoop)
    {
        //if(!audioStore[name]) return;
        //audioStore[name].play()
        //console.log("playSM2 - play..."+name);
        if(doLoop) soundManager.play(name, {loop:10});
        else soundManager.play(name);
    }

    function stopSM2(name)
    {
        soundManager.stop(name);
    }

    function continueSM2(name)
    {
        if(name=="bgMusic")soundManager.play(name);
    }
    this.isMuted = function() {return muted;}

    this.toggleMute = function()
    {
        muted = !muted;
        setMuteOnEngine();
    }
    function setMuteOnEngine()
    {
        switch(engineType)
        {
            case "howler":
                if(muted) Howler.mute();
                else Howler.unmute();
                break;
            case "sm2":
                if(muted) soundManager.mute();
                else soundManager.unmute();
                break;
        }
    }

    this.initMuteButton = function(muteBtn)
    {
        if(muted)
        {
            muteBtn.className = "stateOffButton";
        }
        else
        {
            muteBtn.className = "stateOnButton";
        }
    }


}