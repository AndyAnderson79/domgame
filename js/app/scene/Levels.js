
//Jon Howard - @swingpants
//swingpants.com


/***********************************************************************************************
 STAGE 3
 ************************************************************************************************/

var level3_10 = [
    {type:"reference", title:"Catcher in the sky", ref:"level3_10"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:950, posY:417, velX:4, velY:0},
    //{ref:"level3_10", type:"overlayImage", posX:0, posY:0},
    {type:"divWithColour", posX:0, posY:-100, width:1500, height:100, colour:"#2c283c"},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:-180, width:1280, height:1280},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:-180, width:1280, height:1280},

    {name:"blocker1",type:"blocker", posX:-40 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1270 , posY:0 , width:40 , height:960 },
    {name:"blocker3",type:"blocker", posX:650 , posY:40 , width:80 , height:400 },
    {name:"blocker4",type:"blocker", posX:900 , posY:460 , width:80 , height:250 },

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 900, 1280, 900]}},

    {name:"line4",type:"line", edges:{type:"onewayline", points:[0, 630, 660, 630]}},

    {ref:"platform_spooky01", type:"overlayImage", posX:1100, posY:880},
    {ref:"platform_spooky01", type:"overlayImage", posX:700, posY:880},
    {ref:"platform_spooky01", type:"overlayImage", posX:300, posY:880},
    {ref:"platform_spooky01", type:"overlayImage", posX:-100, posY:880},

    {ref:"stand_marker_large", type:"overlayImage", posX:630, posY:883},
    {ref:"stand_marker_small", type:"overlayImage", posX:1170, posY:890},
    {ref:"movingPlatformSmall", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformSmall", posX:1170, posY:340, cellWidth:100, cellHeight:20, numCells:1, bbWidth:260, bbHeight:50, speed:0, minX:1160, maxX:1160, minY:300, maxY:902, velX:0, velY:1.5, line:{fromX:1170, fromY:340, toX:1280, toY:340}},
    {ref:"movingLeverPlatformWide", name:"movingPlatform2",type:"movingPlatform", className:"movingLeverPlatformWide", posX:630, posY:870, cellWidth:100, cellHeight:20, numCells:1, bbWidth:260, bbHeight:50, speed:0, minX:630, maxX:630, minY:520, maxY:902, velX:0, velY:3, line:{fromX:630, fromY:870, toX:900, toY:870}},

    {ref:"platform_spooky01", type:"overlayImage", posX:200, posY:610},
    {ref:"platform_spooky01", type:"overlayImage", posX:-200, posY:610},

    {name:"line5",type:"line", edges:{type:"onewayline", points:[660, 420, 1160, 420]}},
    {ref:"wall02", type:"overlayImage", posX:894, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:890, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:660, posY:420},

    {name:"line4",type:"line", edges:{type:"onewayline", points:[900, 660, 1180, 660]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:900, posY:660},

    {ref:"wall02", type:"overlayImage", posX:894, posY:520},

    {ref:"wall02", type:"overlayImage", posX:650, posY:270},
    {ref:"wall02", type:"overlayImage", posX:650, posY:120},
    {ref:"wall02", type:"overlayImage", posX:650, posY:-30},

    {ref:"coffin", type:"overlayImage", posX:77, posY:746},
    {ref:"coffin", type:"overlayImage", posX:500, posY:746},
    {ref:"coffin", type:"overlayImage", posX:960, posY:746},
    {ref:"coffin", type:"overlayImage", posX:1340, posY:746},
    {ref:"suit_of_armour", type:"overlayImage", posX:74, posY:381},
    {ref:"suit_of_armour", type:"overlayImage", posX:250, posY:381},

    {ref:"stain_crate", type:"overlayImage", posX:397, posY:608},
    {ref:"cagefront01", name:"cage1", type:"cage", className:"cage", posX:380, posY:260, cellWidth:252, cellHeight:677, numCells:1, bbWidth:256, bbHeight:256, bbOffsetX:0, bbOffsetY:400,  start:"waiting", cageTargets:{baddie:true}},
    {ref:"cageback01", name:"cageBehind",type:"attachedImage", url:"media/elements/cageback01.png", width:251, height:210, attachedTo:"cage1", offsetX:0, offsetY:-210, placeBehind:true},

    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:760, posY:360, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ cage1:false}},
    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:980, posY:600, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:false, switchTargets:{ movingPlatform2:false}},



    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:750, posY:340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1180, posY:795, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1100, posY:580, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:1180, posY:695, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1180, posY:745, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1180, posY:795, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:740, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:740, posY:340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:740, posY:300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:125, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:540, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:340, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:100, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:530, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:740, posY:340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"ghostBaddieAnim", name:"baddie", type:"npcBaddieInit", className:"ghostBaddieAnim", posX:500, posY:500, velX:1.3, velY:0, cellWidth:150, cellHeight:300, numCells:4, bbWidth:100, bbHeight:200, bbOffsetX:0, bbOffsetY:0, speed:0.1},

    {ref:"exit_spooky", name:"exit1",type:"exitLevel", posX:1320, posY:170, cellWidth:100, cellHeight:100, numCells:1, bbWidth:100, bbHeight:200, bbOffsetX:100, bbOffsetY:50}
];

var level3_9 = [
    {type:"reference", title:"Uplifting", ref:"level3_9"},
    {type:"worldInit", worldWidth:1280,  worldHeight:1320},
    {type:"playerInit", posX:80, posY:910, velX:4, velY:0},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:0, width:1280, height:1320},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:0, width:1280, height:1320},
    //{ref:"level3_9", type:"overlayImage", posX:0, posY:0},

    {name:"blocker1",type:"blocker", posX:-20 , posY:160 , width:40 , height:1280 },
    {name:"blocker2",type:"blocker", posX:1260 , posY:0 , width:40 , height:1280 },
    {name:"blocker2",type:"blocker", posX:0 , posY:940 , width:530 , height:400 },
    {name:"blocker2",type:"blocker", posX:950 , posY:940 , width:530 , height:400 },

    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 930, 575, 930]}},

    {name:"line2",type:"line", edges:{type:"onewayline", points:[905, 930, 1280, 930]}},
    //{ref:"platform_spooky01", type:"overlayImage", posX:1274, posY:912},
    {ref:"platform_spooky01", type:"overlayImage", posX:874, posY:912},
    {ref:"collapsingPlatform", name:"collapsingPlatform1",type:"collapsingPlatform", posX:795, posY:930, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:30, line:{fromX:795, fromY:930, toX:905, toY:930}},
    {ref:"collapsingPlatform", name:"collapsingPlatform2",type:"collapsingPlatform", posX:685, posY:930, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:30, line:{fromX:685, fromY:930, toX:795, toY:930}},
    {ref:"collapsingPlatform", name:"collapsingPlatform3",type:"collapsingPlatform", posX:575, posY:930, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:30, line:{fromX:575, fromY:930, toX:685, toY:930}},
    {ref:"platform_spooky01", type:"overlayImage", posX:140, posY:912},
    {ref:"platform_spooky01", type:"overlayImage", posX:-260, posY:912},

    {name:"line2",type:"line", edges:{type:"onewayline", points:[980, 490, 1280, 490]}},
    {ref:"platform_spooky01", type:"overlayImage", posX:980, posY:470},

    {ref:"platform_spooky01", type:"overlayImage", posX:515, posY:1220},

    {ref:"movingPlatformSmall", name:"movingPlatform6",type:"movingPlatform", className:"movingPlatformSmall", posX:875, posY:450, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:875, maxX:875, minY:450, maxY:570, velX:0, velY:1.2, line:{fromX:875, fromY:450, toX:975, toY:450}},
    {ref:"movingPlatformSmall", name:"movingPlatform5",type:"movingPlatform", className:"movingPlatformSmall", posX:765, posY:460, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:765, maxX:765, minY:490, maxY:620, velX:0, velY:1.7, line:{fromX:765, fromY:460, toX:865, toY:460}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform4",type:"movingPlatform", className:"movingPlatformMediumRed", posX:600, posY:540, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:600, maxX:600, minY:450, maxY:580, velX:0, velY:2.0, line:{fromX:600, fromY:540, toX:780, toY:540}},
    {ref:"movingPlatformSmall", name:"movingPlatform3",type:"movingPlatform", className:"movingPlatformSmall", posX:475, posY:450, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:475, maxX:475, minY:480, maxY:660, velX:0, velY:1.0, line:{fromX:475, fromY:450, toX:575, toY:450}},
    {ref:"movingPlatformSmall", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformSmall", posX:335, posY:550, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:335, maxX:335, minY:560, maxY:750, velX:0, velY:-1.5, line:{fromX:335, fromY:550, toX:435, toY:550}},
    {ref:"stand_marker", type:"overlayImage", posX:140, posY:917},
    {ref:"movingPlatformMediumRed", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMediumRed", posX:140, posY:800, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:140, maxX:140, minY:450, maxY:932, velX:0, velY:1.9, line:{fromX:140, fromY:800, toX:320, toY:800}},

    {ref:"movingPlatformSmall", name:"movingPlatformHidden",type:"movingPlatform", className:"movingPlatformSmall", posX:630, posY:1218, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:630, maxX:630, minY:880, maxY:1222, velX:0, velY:1.9, line:{fromX:630, fromY:1218, toX:730, toY:1218}},
    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:770, posY:1165, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ movingPlatformHidden:false}},


    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:500, posY:1150, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:214, posY:480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1200, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:930, posY:1150, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:800, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1200, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:990, posY:840, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:990, posY:790, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:990, posY:740, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:214, posY:480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:680, posY:290, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:913, posY:630, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:620, posY:670, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:915, posY:630, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:500, posY:1150, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 1220, 1280, 1220]}},
    {ref:"exit_spooky", name:"exit1",type:"exitLevel",  className:"exit", posX: 1100, posY:242, cellWidth:100, cellHeight:100, numCells:1, bbWidth:50, bbHeight:100, bbOffsetX:100, bbOffsetY:50}
    //{ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:1110, posY:160, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:200, bbOffsetX:60, bbOffsetY:50}
];

var level3_8 = [
    {type:"reference", title:"Tunnel of Glove", ref:"level3_8"},
    {type:"worldInit", worldWidth:1500,  worldHeight:1240},
    {type:"playerInit", posX:60, posY:1120, velX:4, velY:0},
    //{ref:"level3_8_plus", type:"overlayImage", posX:0, posY:0},
    {type:"divWithColour", posX:0, posY:-300, width:1500, height:300, colour:"#2c283c"},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:0, width:1500, height:1240},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:0, width:1500, height:1240},


    {name:"blocker1",type:"blocker", posX:-40 , posY:0 , width:40 , height:1240 },
    {name:"blocker2",type:"blocker", posX:1490 , posY:0 , width:40 , height:1240 },

    {ref:"platform_spooky01", type:"overlayImage", posX:1200, posY:900},
    {ref:"platform_spooky01", type:"overlayImage", posX:800, posY:900},

    {ref:"ghost_train_cars", type:"overlayImage", posX:0, posY:1058},
    {ref:"floor_spooky", type:"overlayImage", posX:0, posY:1120},
    {ref:"floor_spooky", type:"overlayImage", posX:222, posY:1120},
    {ref:"floor_spooky", type:"overlayImage", posX:444, posY:1120},
    {ref:"floor_spooky", type:"overlayImage", posX:666, posY:1120},
    {ref:"floor_spooky", type:"overlayImage", posX:888, posY:1120},
    {ref:"floor_spooky", type:"overlayImage", posX:1110, posY:1120},
    {ref:"floor_spooky", type:"overlayImage", posX:1332, posY:1120},

    {ref:"stand_marker_small", type:"overlayImage", posX:720, posY:1150},
    {ref:"movingPlatformSmall", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformSmall", posX:720, posY:880, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:720, maxX:720, minY:870, maxY:1152, velX:0, velY:1.5, line:{fromX:720, fromY:880, toX:820, toY:880}},

    {ref:"collapsingPlatform", name:"collapsingPlatform1",type:"collapsingPlatform", posX:960, posY:237, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:960, fromY:237, toX:1070, toY:237}},
    {ref:"collapsingPlatform", name:"collapsingPlatform2",type:"collapsingPlatform", posX:850, posY:227, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:850, fromY:227, toX:960, toY:227}},
    {ref:"collapsingPlatform", name:"collapsingPlatform3",type:"collapsingPlatform", posX:740, posY:217, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:740, fromY:217, toX:850, toY:217}},
    {ref:"collapsingPlatform", name:"collapsingPlatform4",type:"collapsingPlatform", posX:630, posY:207, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:630, fromY:207, toX:740, toY:207}},
    {ref:"collapsingPlatform", name:"collapsingPlatform5",type:"collapsingPlatform", posX:520, posY:197, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:520, fromY:197, toX:630, toY:197}},
    {ref:"collapsingPlatform", name:"collapsingPlatform6",type:"collapsingPlatform", posX:410, posY:187, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:410, fromY:187, toX:520, toY:187}},
    {ref:"collapsingPlatform", name:"collapsingPlatform7",type:"collapsingPlatform", posX:300, posY:177, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:300, fromY:177, toX:410, toY:177}},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 1150, 1500, 1150]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[0, 910, 710, 910]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[800, 910, 1500, 910]}},

    {ref:"platform_spooky01", type:"overlayImage", posX:250, posY:900},
    {ref:"platform_spooky01", type:"overlayImage", posX:-150, posY:900},

    {name:"line5",type:"line", edges:{type:"onewayline", points:[580, 580, 840, 580, 950, 473, 975, 460, 1500, 460]}},
    {ref:"track_flat", type:"overlayImage", posX:1335, posY:450},
    {ref:"track_flat", type:"overlayImage", posX:1075, posY:450},
    {ref:"slope_track", type:"overlayImage", posX:830, posY:455},
    {ref:"track_flat", type:"overlayImage", posX:580, posY:580},

    {ref:"stand_marker", type:"overlayImage", posX:170, posY:905},
    {ref:"movingPlatformMedium", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMedium", posX:170, posY:680, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:170, maxX:170, minY:130, maxY:912, velX:0, velY:3, line:{fromX:170, fromY:680, toX:350, toY:680}},
    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:1080, posY:855, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ movingPlatform2:false}},

    {name:"line4",type:"line", edges:{type:"onewayline", points:[0, 180, 200, 180]}},
    {ref:"track_flat", type:"overlayImage", posX:-70, posY:180},

    {ref:"coffin", type:"overlayImage", posX:77, posY:770},
    {ref:"coffin", type:"overlayImage", posX:570, posY:770},
    {ref:"coffin", type:"overlayImage", posX:860, posY:770},
    {ref:"coffin", type:"overlayImage", posX:1340, posY:770},
    {ref:"suit_of_armour", type:"overlayImage", posX:574, posY:351},
    {ref:"suit_of_armour", type:"overlayImage", posX:750, posY:351},


    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:310, posY:1150, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:324, posY:1150, startPosX:324, startPosY:1150, targetPosX:324, targetPosY:1000, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:1, spike:0.15, rest:2, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:310, posY:1150, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:500, posY:1150, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:514, posY:1000, startPosX:514, startPosY:1150, targetPosX:514, targetPosY:1000, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:1, spike:0.15, rest:2, "return":0.3, start:"returning"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:500, posY:1150, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:850, posY:1150, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:864, posY:1000, startPosX:864, startPosY:1150, targetPosX:864, targetPosY:1000, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:1, spike:0.15, rest:2, "return":0.3, start:"returning"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:850, posY:1150, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:1030, posY:1150, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:1044, posY:1150, startPosX:1044, startPosY:1150, targetPosX:1044, targetPosY:1000, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:1, spike:0.15, rest:2, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:1030, posY:1150, width:87, height:24},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:30, posY:100, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:695, posY:515, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1380, posY:1060, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:735, posY:770, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:220, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:220, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:735, posY:770, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:1016, posY:770, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:220, posY:600, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:600, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:690, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:780, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:110, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:30, posY:100, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:580, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"exit_spooky", name:"exit1",type:"exitLevel",  className:"exit", posX:1320, posY:224, cellWidth:100, cellHeight:100, numCells:1, bbWidth:100, bbHeight:200, bbOffsetX:100, bbOffsetY:50}
];

var level3_7 = [
    {type:"reference", title:"Bouncer says no", ref:"level3_7"},
    {type:"worldInit", worldWidth:1640,  worldHeight:960},
    {type:"playerInit", posX:60, posY:328, velX:4, velY:0},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:-200, width:1640, height:1160},
    //{ref:"level3_7", type:"overlayImage", url:"media/levels/level3_6.gif", posX:0, posY:0, width:1640, height:960},

    {ref:"floor_spooky", type:"overlayImage", posX:0, posY:870},
    {ref:"floor_spooky", type:"overlayImage", posX:222, posY:870},
    {ref:"floor_spooky", type:"overlayImage", posX:444, posY:870},
    {ref:"floor_spooky", type:"overlayImage", posX:666, posY:870},
    {ref:"floor_spooky", type:"overlayImage", posX:888, posY:870},
    {ref:"floor_spooky", type:"overlayImage", posX:1110, posY:870},
    {ref:"floor_spooky", type:"overlayImage", posX:1332, posY:870},
    {ref:"floor_spooky", type:"overlayImage", posX:1554, posY:870},

    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {type:"line", edges:{type:"onewayline", points:[0, 900, 1640, 900]}},
    {type:"line", edges:{type:"onewayline", points:[0, 330, 150, 330]}},
    {type:"line", edges:{type:"onewayline", points:[1460, 530, 1640, 530]}},
    {type:"line", edges:{type:"onewayline", points:[920, 610, 930, 610]}},

    {ref:"platform_spooky01", type:"overlayImage", posX:1460, posY:530},

    {ref:"wall02", type:"overlayImage", posX:920, posY:730},
    {ref:"wall01", type:"overlayImage", posX:920, posY:610},
    {ref:"suit_of_armour",type:"overlayImage", posX:900, posY:394},

    {type:"blocker", posX:-40 , posY:0 , width:40 , height:960 },
    {type:"blocker", posX:1640 , posY:0 , width:40 , height:960 },
    {type:"blocker", posX:920 , posY:612 , width:10 , height:960 },

    {ref:"track_flat_thin",type:"overlayImage", posX:-130, posY:330},

    {ref:"movingPlatformBlank", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformBlank", posX:0, posY:400, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:60, repositionTargets:false, speed:0, minX:0, maxX:420, minY:0, maxY:960, velX:2.5, velY:0, line:{fromX:0, fromY:400, toX:170, toY:400}},
    {ref:"movingPlatformMedium", name:"car1back",type:"attachedImage", width:204, height:179, attachedTo:"movingPlatform1", offsetX:0, offsetY:0, placeBehind:false},

    {ref:"springSmall", type:"bouncer",  className:"spring", posX:190, posY:770, cellWidth:120, cellHeight:128, numCells:4, bounceYAmt:-8.7, bbWidth:120, bbHeight:40, bbOffsetX:4, bbOffsetY:50, speed:0.2},
    {ref:"springSmall", type:"bouncer",  className:"spring", posX:310, posY:770, cellWidth:120, cellHeight:128, numCells:4, bounceYAmt:-9.7, bbWidth:120, bbHeight:40, bbOffsetX:4, bbOffsetY:50, speed:0.2},
    {ref:"springSmall", type:"bouncer",  className:"spring", posX:430, posY:770, cellWidth:120, cellHeight:128, numCells:4, bounceYAmt:-10.7, bbWidth:120, bbHeight:40, bbOffsetX:4, bbOffsetY:50, speed:0.2},
    {ref:"springSmall", type:"bouncer",  className:"spring", posX:550, posY:770, cellWidth:120, cellHeight:128, numCells:4, bounceYAmt:-11.7, bbWidth:120, bbHeight:40, bbOffsetX:4, bbOffsetY:50, speed:0.2},
    {ref:"springSmall", type:"bouncer",  className:"spring", posX:670, posY:770, cellWidth:120, cellHeight:128, numCells:4, bounceYAmt:-11.7, bbWidth:120, bbHeight:40, bbOffsetX:4, bbOffsetY:50, speed:0.2},
    {ref:"springSmall", type:"bouncer",  className:"spring", posX:790, posY:770, cellWidth:120, cellHeight:128, numCells:4, bounceYAmt:-9.7, bbWidth:120, bbHeight:40, bbOffsetX:4, bbOffsetY:50, speed:0.2},

    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:1000, posY:790, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-13.6, bbWidth:100, bbHeight:100, bbOffsetX:0, bbOffsetY:10, speed:0.2},

    {ref:"cobwebsOfDeath", type:"lethalToTouch", className:"cobwebsOfDeath", posX:1320, posY:770, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cobwebsOfDeath", type:"lethalToTouch", className:"cobwebsOfDeath", posX:1480, posY:772, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cobwebsOfDeath", type:"lethalToTouch", className:"cobwebsOfDeath", posX:-100, posY:770, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:490, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:700, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1090, posY:600, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:390, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:490, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:590, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:490, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:600, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1090, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:1090, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:1090, posY:480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1090, posY:580, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:700, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:700, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1090, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},


    {ref:"exit_spooky", name:"exit1",type:"exitLevel",  posX:1480, posY:300, cellWidth:100, cellHeight:100, numCells:1, bbWidth:100, bbHeight:200, bbOffsetX:100, bbOffsetY:50}
];

var level3_6 = [
    {type:"reference", title:"Wheely Scarey", ref:"level3_6"},
    {type:"worldInit", worldWidth:2040,  worldHeight:860},
    {type:"playerInit", posX:60, posY:337, velX:4, velY:0},
    //{ref:"level3_6", type:"overlayImage", url:"media/levels/level3_6.gif", posX:0, posY:0, width:1640, height:960},

    //{type:"divWithColour", posX:0, posY:-100, width:2080, height:100, colour:"#2c283c"},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:-160, width:2080, height:1080},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:-160, width:2080, height:1080},

    {type:"blocker", posX:-30 , posY:0 , width:40 , height:960 },
    {type:"blocker", posX:2030 , posY:0 , width:40 , height:960 },

    {ref:"movingPlatformBlank", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformBlank", posX:770, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:60, repositionTargets:false, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:770, fromY:720, toX:930, toY:720}, rotation:{radius:200, rate:0.015, rotationPosition:Math.PI, centreX:340, centreY:480}},
    {ref:"movingPlatformBlank", name:"movingPlatform3",type:"movingPlatform", className:"movingPlatformBlank", posX:770, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:60, repositionTargets:false, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:770, fromY:720, toX:930, toY:720}, rotation:{radius:200, rate:0.015, rotationPosition:Math.PI*2, centreX:340, centreY:480}},
    {ref:"bigwheelstand_400",type:"overlayImage", posX:230, posY:280},

    {ref:"movingPlatformBlank", name:"movingPlatform4",type:"movingPlatform", className:"movingPlatformBlank", posX:770, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:60, repositionTargets:false, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:770, fromY:720, toX:930, toY:720}, rotation:{radius:200, rate:0.02, rotationPosition:Math.PI, centreX:900, centreY:480}},
    {ref:"movingPlatformBlank", name:"movingPlatform5",type:"movingPlatform", className:"movingPlatformBlank", posX:770, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:60, repositionTargets:false, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:770, fromY:720, toX:930, toY:720}, rotation:{radius:200, rate:0.02, rotationPosition:Math.PI*2, centreX:900, centreY:480}},
    {ref:"bigwheelstand_400",type:"overlayImage", posX:790, posY:280},

    {ref:"movingPlatformBlank", name:"movingPlatform6",type:"movingPlatform", className:"movingPlatformBlank", posX:770, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:60, repositionTargets:false, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:770, fromY:720, toX:930, toY:720}, rotation:{radius:200, rate:0.02, rotationPosition:Math.PI, centreX:1460, centreY:480}},
    {ref:"movingPlatformBlank", name:"movingPlatform7",type:"movingPlatform", className:"movingPlatformBlank", posX:770, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:60, repositionTargets:false, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:770, fromY:720, toX:930, toY:720}, rotation:{radius:200, rate:0.02, rotationPosition:Math.PI*2, centreX:1460, centreY:480}},
    {ref:"bigwheelstand_400",type:"overlayImage", posX:1350, posY:280},

    {ref:"movingPlatformMedium", name:"car1back",type:"attachedImage", width:204, height:179, attachedTo:"movingPlatform7", offsetX:0, offsetY:0, placeBehind:false},
    {ref:"movingPlatformMedium", name:"car1back",type:"attachedImage", width:204, height:179, attachedTo:"movingPlatform6", offsetX:0, offsetY:0, placeBehind:false},
    {ref:"movingPlatformMedium", name:"car1back",type:"attachedImage", width:204, height:179, attachedTo:"movingPlatform4", offsetX:0, offsetY:0, placeBehind:false},
    {ref:"movingPlatformMedium", name:"car1back",type:"attachedImage", width:204, height:179, attachedTo:"movingPlatform5", offsetX:0, offsetY:0, placeBehind:false},
    {ref:"movingPlatformMedium", name:"car1",type:"attachedImage", width:204, height:179, attachedTo:"movingPlatform2", offsetX:0, offsetY:0, placeBehind:false},
    {ref:"movingPlatformMedium", name:"car2",type:"attachedImage", width:204, height:179, attachedTo:"movingPlatform3", offsetX:0, offsetY:0, placeBehind:false},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:400, posY:180, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:960, posY:180, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1520, posY:180, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:360, posY:180, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:440, posY:180, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:690, posY:260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:690, posY:260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:1230, posY:260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1800, posY:260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:400, posY:630, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:960, posY:630, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1520, posY:630, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:480, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:960, posY:630, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1600, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {type:"line", edges:{type:"onewayline", points:[0, 900, 2080, 900]}},
    {type:"line", edges:{type:"onewayline", points:[0, 440, 130, 440]}},

    {ref:"track_flat_thin",type:"overlayImage", posX:-150, posY:440},

    {type:"line", edges:{type:"onewayline", points:[1800, 440, 2080, 440]}},
    {ref:"track_flat_thin",type:"overlayImage", posX:1800, posY:440},

    {ref:"ghostBaddieAnim", type:"npcBaddieInit", className:"ghostBaddieAnim", posX:950, posY:-120, offsetY:30, velX:-0.001, velY:0, cellWidth:150, cellHeight:300, numCells:10, bbWidth:100, bbHeight:200, bbOffsetX:25, bbOffsetY:100, speed:0.16},

    {ref:"exit_spooky", type:"exitLevel",  className:"exit", posX:1887, posY:209, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:100, bbOffsetY:50}
];

var level3_5 = [
    {type:"reference", title:"The High Life", ref:"level3_5"},
    {type:"worldInit", worldWidth:960,  worldHeight:2560},
    {type:"playerInit", posX:50, posY:176, velX:4, velY:0},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:-300, posY:2150, width:1408, height:440},
    //{ref:"level3_5", type:"overlayImage", url:"media/levels/level3_5.gif", posX:0, posY:0, width:1400, height:960},
    //{type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:500, width:1408, height:440},
    {type:"blocker", posX:-40 , posY:0 , width:50 , height:2600 },
    {type:"blocker", posX:940 , posY:0 , width:50 , height:2600 },
    {type:"blocker", posX:642 , posY:182 , width:50 , height:750 },
    {type:"blocker", posX:372 , posY:0 , width:16 , height:750 },
    {type:"blocker", posX:550 , posY:1500 , width:6 , height:470 },

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:300, posY:1300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:850, posY:1000, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:680, posY:480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:490, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:490, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:490, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:490, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:725, posY:820, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:470, posY:1450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:280, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:500, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:721, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:50, posY:1800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:228, posY:1280, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:880, posY:1115, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},

    {ref:"frame_divider",type:"overlayImage", posX:350, posY:250},
    {ref:"frame_divider",type:"overlayImage", posX:350, posY:0},

    {type:"line", edges:{type:"onewayline", points:[0, 180, 160, 180]}},
    {type:"line", edges:{type:"onewayline", points:[214, 330, 375, 330]}},
    {type:"line", edges:{type:"onewayline", points:[0, 520, 160, 520]}},
    {type:"line", edges:{type:"onewayline", points:[214, 680, 375, 680]}},
    {type:"line", edges:{type:"onewayline", points:[0, 1970, 575, 1970]}},

    {ref:"track_flat_thin",type:"overlayImage", posX:-100, posY:180},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:190, posY:325},
    {ref:"track_flat_thin",type:"overlayImage", posX:-100, posY:515},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:190, posY:680},

    {type:"line", edges:{type:"onewayline", points:[640, 180, 780, 180]}},
    {type:"line", edges:{type:"onewayline", points:[785, 360, 960, 360]}},
    {type:"line", edges:{type:"onewayline", points:[640, 570, 785, 570]}},
    {type:"line", edges:{type:"onewayline", points:[785, 765, 960, 765]}},

    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:620, posY:180},
    {ref:"track_flat_thin",type:"overlayImage", posX:770, posY:360},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:620, posY:570},
    {ref:"track_flat_thin",type:"overlayImage", posX:770, posY:760},

    {ref:"frame_divider",type:"overlayImage", posX:620, posY:440},
    {ref:"frame_divider",type:"overlayImage", posX:620, posY:170},

    {type:"line", edges:{type:"onewayline", points:[0, 900, 660, 900]}},
    {ref:"track_flat_thin",type:"overlayImage", posX:380, posY:900},
    {ref:"track_flat_thin",type:"overlayImage", posX:130, posY:900},
    {ref:"track_flat_thin",type:"overlayImage", posX:-120, posY:900},

    {ref:"stand_marker", type:"overlayImage", posX:420, posY:899},
    {ref:"movingPlatformMedium", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:420, posY:150, cellWidth:180, cellHeight:60, numCells:1, bbWidth:180, bbHeight:60, speed:0, minX:420, maxX:420, minY:50, maxY:902, velX:0, velY:5, line:{fromX:420, fromY:150, toX:590, toY:150}},


    {type:"line", edges:{type:"onewayline", points:[223, 2170, 960, 2170]}},
    {ref:"track_flat_thin",type:"overlayImage", posX:720, posY:2170},
    {ref:"track_flat_thin",type:"overlayImage", posX:460, posY:2170},
    {ref:"track_flat_thin",type:"overlayImage", posX:210, posY:2170},
    {ref:"stain_crate", type:"overlayImage", posX:552, posY:2170},
    {ref:"fallingBlockSquare", name:"b1",type:"fallingBlock", className:"", posX:620, posY:1410, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:136, bbOffsetX:0, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"falling"}},
    {ref:"crate", name:"crate",type:"attachedImage", attachedTo:"b1", offsetX:-60, offsetY:-160, placeBehind:true},

    {type:"line", edges:{type:"line", points:[223, 1220, 960, 1220]}},
    {ref:"track_flat_thin",type:"overlayImage", posX:720, posY:1220},
    {ref:"track_flat_thin",type:"overlayImage", posX:460, posY:1220},
    {ref:"track_flat_thin",type:"overlayImage", posX:210, posY:1220},

    {ref:"frame_divider",type:"overlayImage", posX:550, posY:1505},

    {type:"line", edges:{type:"onewayline", points:[0, 1960, 575, 1960]}},
    {ref:"track_flat_thin",type:"overlayImage", posX:320, posY:1960},
    {ref:"track_flat_thin",type:"overlayImage", posX:60, posY:1960},
    {ref:"track_flat_thin",type:"overlayImage", posX:-200, posY:1960},
    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:250, posY:1875, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-14.8, bbWidth:100, bbHeight:100, bbOffsetX:0, bbOffsetY:10, speed:0.2},

    {ref:"stand_marker", type:"overlayImage", posX:18, posY:1959},
    {ref:"movingPlatformMedium", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMedium", posX:18, posY:1160, cellWidth:180, cellHeight:60, numCells:1, bbWidth:180, bbHeight:60, speed:0, minX:18, maxX:18, minY:1160, maxY:1962, velX:0, velY:5, line:{fromX:18, fromY:1160, toX:198, toY:1160}},

    {type:"line", edges:{type:"onewayline", points:[0, 2500, 960, 2500]}},
    {ref:"track_flat_thin",type:"overlayImage", posX:720, posY:2500},
    {ref:"track_flat_thin",type:"overlayImage", posX:460, posY:2500},
    {ref:"track_flat_thin",type:"overlayImage", posX:210, posY:2500},
    {ref:"track_flat_thin",type:"overlayImage", posX:-50, posY:2500},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:260, posY:320, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:274, posY:320, startPosX:274, startPosY:320, targetPosX:274, targetPosY:160, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:260, posY:320, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:30, posY:510, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:44, posY:510, startPosX:44, startPosY:510, targetPosX:44, targetPosY:350, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:30, posY:510, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:260, posY:676, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:274, posY:676, startPosX:274, startPosY:676, targetPosX:274, targetPosY:510, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:260, posY:676, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:850, posY:350, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:864, posY:350, startPosX:864,  targetPosX:864, startPosY:350, targetPosY:190, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:850, posY:350, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:850, posY:760, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:864, posY:760, startPosX:864,  targetPosX:864, startPosY:760, targetPosY:600, offsetY:160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:50, bbOffsetX:0, bbOffsetY:250, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:850, posY:760, width:87, height:24},


    {ref:"exit2", type:"exitLevel",  className:"exit", posX:700, posY:2230, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:150, bbOffsetY:50}
];

var level3_4 = [
    {type:"reference", title:"Roller Ghoster", ref:"level3_4"},
    {type:"worldInit", worldWidth:1920,  worldHeight:1280},
    {type:"playerInit", posX:140, posY:1178, velX:4, velY:0},
    //{ref:"level3_4", type:"overlayImage", url:"media/levels/level3_4.gif", posX:0, posY:0, width:1400, height:960},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:-220, posY:900, width:1408, height:440},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:1208, posY:900, width:1408, height:440},
    {type:"blocker", posX:0 , posY:0 , width:40 , height:2000 },
    {type:"blocker", posX:1900 , posY:0 , width:40 , height:2000 },
    {type:"blocker", posX:1490 , posY:1550 , width:40 , height:400 },

    {ref:"coaster_frame01",type:"overlayImage", posX:1000, posY:700},
    {ref:"coaster_frame01",type:"overlayImage", posX:1000, posY:155},
    {ref:"coaster_frame01",type:"overlayImage", posX:1000, posY:450},


    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:192, posY:604, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1050, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1450, posY:850, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:50, posY:1120, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:50, posY:315, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1700, posY:60, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:720, posY:1120, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:720, posY:850, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:720, posY:300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:150, posY:520, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:150, posY:670, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:150, posY:820, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:180, posY:100, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:130, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:80, posY:300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},

    {type:"line", edges:{type:"onewayline", points:[0, 1180, 1920, 1180]}},
    {ref:"track_flat", type:"overlayImage", posX:1690, posY:1180},
    {ref:"track_flat", type:"overlayImage", posX:1430, posY:1180},
    {ref:"track_flat", type:"overlayImage", posX:1170, posY:1180},
    {ref:"track_flat", type:"overlayImage", posX:910, posY:1180},
    {ref:"track_flat", type:"overlayImage", posX:750, posY:1180},
    {ref:"track_flat", type:"overlayImage", posX:490, posY:1180},
    {ref:"track_flat", type:"overlayImage", posX:230, posY:1180},
    {ref:"track_flat", type:"overlayImage", posX:-30, posY:1180},

    {type:"line", edges:{type:"onewayline", points:[520, 965, 1920, 965]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1770, posY:965},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1520, posY:965},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1270, posY:965},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1020, posY:965},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:770, posY:965},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:520, posY:965},



    {type:"line", edges:{type:"onewayline", points:[520, 690, 1920, 690]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1770, posY:690},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1520, posY:690},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1270, posY:690},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1020, posY:690},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:770, posY:690},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:520, posY:690},

    {ref:"wolfmanBaddieAnim", name:"baddie", type:"npcBaddieInit", className:"wolfmanBaddieAnim", posX:1500, posY:300, offsetY:25, velX:2.3, velY:0, cellWidth:150, cellHeight:300, numCells:4, bbWidth:80, bbHeight:200, bbOffsetX:25, bbOffsetY:0, speed:0.4},
    {ref:"wall01", type:"overlayImage", posX:1230, posY:426},
    {ref:"wall01", type:"overlayImage", posX:1230, posY:536},
    {type:"blocker", posX:1220 , posY:500 , width:100 , height:200 },

    {type:"line", edges:{type:"onewayline", points:[520, 420, 1920, 420]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1770, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1520, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1270, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1020, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:770, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:520, posY:420},

    {type:"line", edges:{type:"onewayline", points:[520, 174, 1920, 174]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1770, posY:174},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1520, posY:174},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1270, posY:174},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1020, posY:174},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:770, posY:174},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:520, posY:174},

    {type:"line", edges:{type:"onewayline", points:[0, 420, 250, 420]}},
    {ref:"track_flat", type:"overlayImage", posX:-30, posY:420},

    {ref:"stand_marker", type:"overlayImage", posX:340, posY:1180},
    {ref:"movingLeverPlatformMedium", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:340, posY:930, cellWidth:180, cellHeight:60, numCells:1, bbWidth:180, bbHeight:60, speed:0, minX:340, maxX:340, minY:100, maxY:1200, velX:0, velY:5, line:{fromX:340, fromY:930, toX:520, toY:930}},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:900, posY:1180, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:912, posY:1370, startPosX:912, startPosY:1370, targetPosX:912, targetPosY:1230, offsetY:0, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:66, bbHeight:100, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:900, posY:1180, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:930, posY:413, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:944, posY:600, startPosX:944, startPosY:600, targetPosX:944, targetPosY:460, offsetY:0, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:100, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:930, posY:413, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:1170, posY:413, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:1184, posY:600, startPosX:1184, startPosY:600, targetPosX:1184, targetPosY:460, offsetY:0, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:100 , bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:930, posY:413, width:87, height:24},

    //{ref:"doorBlocker", name:"doorBlockerold",type:"doorBlocker", className:"doorBlocker", posX:1180 , posY:780 , width:150 , height:200,cellWidth:150, cellHeight:200, numCells:2, bbOffsetX:100, bbWidth:100, bbHeight:200 },
    {ref:"doorBlocker2", name:"doorBlocker1",type:"doorBlocker", className:"doorBlocker", posX:1180 , posY:790 , width:150 , height:200,cellWidth:150, cellHeight:200, numCells:2, bbOffsetX:80, bbWidth:60, bbHeight:200 },


    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:1720, posY:1124, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ movingPlatform1:false}},
    {ref:"switch", name:"switch2",type:"switch", className:"switch", posX:1720, posY:370, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ doorBlocker1:true}},

    {ref:"exit2", type:"exitLevel",  className:"exit", posX:1640, posY:695, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:100, bbOffsetY:50}
];

var level3_3 = [
    {type:"reference", title:"The Big Dipper Tripper", ref:"level3_3"},
    {type:"worldInit", worldWidth:1920,  worldHeight:1920},
    {type:"playerInit", posX:1080, posY:1130, velX:4, velY:0},
    //{ref:"level3_3", type:"overlayImage", url:"media/levels/level3_3.gif", posX:0, posY:0, width:1400, height:960},

    {type:"blocker", posX:0 , posY:0 , width:40 , height:2000 },
    {type:"blocker", posX:1900 , posY:0 , width:40 , height:2000 },
    {type:"blocker", posX:1490 , posY:1550 , width:40 , height:400 },

    {ref:"coaster_frame01", type:"overlayImage", posX:1060, posY:300},
    {ref:"coaster_frame01", type:"overlayImage", posX:1060, posY:600},
    {ref:"coaster_frame01", type:"overlayImage", posX:1060, posY:900},
    {ref:"coaster_frame01", type:"overlayImage", posX:1060, posY:1200},
    {ref:"coaster_frame01", type:"overlayImage", posX:1060, posY:1500},
    {ref:"coaster_frame01", type:"overlayImage", posX:1060, posY:1800},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:50, posY:1385, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:50, posY:1715, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:804, posY:15, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:950, posY:660, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:804, posY:15, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:100, posY:930, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:1255, posY:915, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:950, posY:660, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:100, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:100, posY:100, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:100, posY:930, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:100, posY:1715, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:804, posY:15, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:804, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:50, posY:1715, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},


    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {type:"line", edges:{type:"onewayline", points:[0, 1858, 1920, 1858]}},
    {ref:"track_flat", type:"overlayImage", posX:1690, posY:1860},
    {ref:"track_flat", type:"overlayImage", posX:1430, posY:1860},
    {ref:"track_flat", type:"overlayImage", posX:1170, posY:1860},
    {ref:"track_flat", type:"overlayImage", posX:910, posY:1860},
    {ref:"track_flat", type:"overlayImage", posX:750, posY:1860},
    {ref:"track_flat", type:"overlayImage", posX:490, posY:1860},
    {ref:"track_flat", type:"overlayImage", posX:230, posY:1860},
    {ref:"track_flat", type:"overlayImage", posX:-30, posY:1860},

    {type:"line", edges:{type:"onewayline", points:[955, 1140, 1920, 1140]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1700, posY:1140},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1450, posY:1140},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1200, posY:1140},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:950, posY:1140},

    {type:"line", edges:{type:"onewayline", points:[0 , 1140, 780, 1140]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:490, posY:1140},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:230, posY:1140},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:-30, posY:1140},

    {type:"line", edges:{type:"onewayline", points:[265 , 780, 1920, 780]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1770, posY:780},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1520, posY:780},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1270, posY:780},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1020, posY:780},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:770, posY:780},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:520, posY:780},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:265, posY:780},

    {type:"line", edges:{type:"onewayline", points:[265 , 390, 675, 390]}},
    //{ref:"track_flat_extrathin", type:"overlayImage", posX:770, posY:390},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:395, posY:390},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:265, posY:390},

    {type:"line", edges:{type:"onewayline", points:[960 , 390, 1920, 390]}},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1710, posY:390},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1460, posY:390},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:1210, posY:390},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:960, posY:390},

    {ref:"wall01", type:"overlayImage", posX:1450, posY:1566},
    {ref:"wall02", type:"overlayImage", posX:1450, posY:1715},

    {type:"line", edges:{type:"onewayline", points:[1300, 1535, 1700, 1535]}},
    //{ref:"track_flat_thin", type:"overlayImage", posX:1800, posY:1535},
    {ref:"track_flat_thin", type:"overlayImage", posX:1450, posY:1535},
    {ref:"track_flat_thin", type:"overlayImage", posX:1300, posY:1535},

    {ref:"stand_marker", type:"overlayImage", posX:1160, posY:1860},
    {ref:"movingPlatformMedium", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:1160, posY:1500, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:1160, maxX:1160, minY:1500, maxY:1864, velX:0, velY:2, line:{fromX:1160, fromY:1500, toX:1340, toY:1500}},

    {type:"line", edges:{type:"onewayline", points:[0, 1535, 1185, 1535]}},
    {ref:"track_flat_thin", type:"overlayImage", posX:910, posY:1535},
    {ref:"track_flat_thin", type:"overlayImage", posX:750, posY:1535},
    {ref:"track_flat_thin", type:"overlayImage", posX:490, posY:1535},
    {ref:"track_flat_thin", type:"overlayImage", posX:230, posY:1535},
    {ref:"track_flat_thin", type:"overlayImage", posX:-30, posY:1535},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:1388, posY:774, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:1400, posY:970, startPosX:1400, startPosY:970, targetPosX:1400, targetPosY:800, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:66, bbHeight:100, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:1388, posY:774, width:87, height:24},

    {ref:"stand_marker", type:"overlayImage", posX:800, posY:1535},
    {ref:"stand_marker", type:"overlayImage", posX:1200, posY:1137},
    {ref:"stand_marker", type:"overlayImage", posX:1200, posY:780},
    {ref:"stand_marker", type:"overlayImage", posX:40, posY:1137},
    {ref:"movingPlatformMedium", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMedium", posX:800, posY:1130, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:800, maxX:800, minY:1080, maxY:1537, velX:0, velY:2, line:{fromX:800, fromY:1130, toX:980, toY:1130}},
    {ref:"movingPlatformMedium", name:"movingPlatform3",type:"movingPlatform", className:"movingPlatformMedium", posX:1200, posY:790, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:1200, maxX:1200, minY:740, maxY:1170, velX:0, velY:2, line:{fromX:1200, fromY:790, toX:1380, toY:790}},
    {ref:"movingPlatformMedium", name:"movingPlatform4",type:"movingPlatform", className:"movingPlatformMedium", posX:40, posY:740, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:40, maxX:40, minY:250, maxY:1142, velX:0, velY:5, line:{fromX:40, fromY:740, toX:220, toY:740}},
    {ref:"doorBlocker2", name:"doorBlocker1",type:"doorBlocker", className:"doorBlocker", posX:1400 , posY:1368 , width:150 , height:200,cellWidth:150, cellHeight:200, numCells:2, bbOffsetX:100, bbWidth:100, bbHeight:200 },
    {ref:"doorBlocker2", name:"doorBlocker2",type:"doorBlocker", className:"doorBlocker", posX:1000 , posY:610 , width:150 , height:200,cellWidth:150, cellHeight:200, numCells:2, bbOffsetX:100, bbWidth:30, bbHeight:200 },

    {ref:"stain_crate", type:"overlayImage", posX:725, posY:780},
    {ref:"fallingBlockSquare", name:"b1",type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:790, posY:250, offsetY:36, cellWidth:136, cellHeight:136, numCells:1, bbWidth:180, bbHeight:136, bbOffsetX:20, bbOffsetY:-100, seq:{wait:0.1, hoist:2.8, rest:0.1, start:"falling"}},
    {ref:"crate", name:"crate",type:"attachedImage", url:"media/elements/crate.png", width:221, height:194, attachedTo:"b1", offsetX:-50, offsetY:-170, placeBehind:false},


    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:1740, posY:1085, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ movingPlatform3:false}},
    {ref:"switch", name:"switch2",type:"switch", className:"switch", posX:1740, posY:723, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ doorBlocker2:true}},
    {ref:"switch", name:"switch3",type:"switch", className:"switch", posX:1740, posY:330, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:true, switchTargets:{ doorBlocker1:true}},
    {ref:"exit2", type:"exitLevel",  className:"exit", posX:1550, posY:1590, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:200, bbOffsetX:100, bbOffsetY:150}

];

var level3_2 = [
    {type:"reference", title:"Too Cool for Ghoul", ref:"level3_2"},
    {type:"worldInit", worldWidth:1400,  worldHeight:960},
    {type:"playerInit", posX:100, posY:850, velX:4, velY:0},
    //{ref:"level3_2", type:"overlayImage", url:"media/levels/level3_2.gif", posX:0, posY:0, width:1400, height:960},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:500, width:1408, height:440},

    {type:"divWithColour", posX:0, posY:-100, width:1500, height:100, colour:"#2c283c"},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:0, width:1400, height:960},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:0, width:1400, height:960},

    {ref:"ghost_train_cars", type:"overlayImage", posX:0, posY:1058},
    {ref:"floor_spooky", type:"overlayImage", posX:0, posY:840},
    {ref:"floor_spooky", type:"overlayImage", posX:222, posY:840},
    {ref:"floor_spooky", type:"overlayImage", posX:444, posY:840},
    {ref:"floor_spooky", type:"overlayImage", posX:666, posY:840},
    {ref:"floor_spooky", type:"overlayImage", posX:888, posY:840},
    {ref:"floor_spooky", type:"overlayImage", posX:1110, posY:840},
    {ref:"floor_spooky", type:"overlayImage", posX:1332, posY:840},

    {ref:"stand_marker_small", type:"overlayImage", posX:665, posY:862},

    {type:"blocker", posX:-20, posY:0 , width:40 , height:960 },
    {type:"blocker", posX:1380 , posY:0 , width:40 , height:960 },

    {ref:"stain_barrel", type:"overlayImage", posX:260, posY:852},
    {ref:"stain_barrel", type:"overlayImage", posX:396, posY:850},
    {ref:"stain_barrel", type:"overlayImage", posX:532, posY:853},
    {ref:"stain_barrel", type:"overlayImage", posX:748, posY:850},
    {ref:"stain_barrel", type:"overlayImage", posX:884, posY:854},
    {ref:"stain_barrel", type:"overlayImage", posX:1020, posY:852},
    {ref:"fallingBlockSquare", name:"b1", type:"fallingBlockRoofed", className:"ghost_on_board", posX:260, posY:800, offsetY:36, minY:600, maxY:860, onlyKillIfFallingOnto:true, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:100, bbOffsetX:0, bbOffsetY:-100, seq:{wait:0.1, hoist:2.8, rest:0.1, start:"falling"}},
    //{ref:"impactSmoke_250x40", name:"impactSmoke1",type:"triggeredAnim", trigger:"b1", posX:210, posY:825},

    {ref:"fallingBlockSquare", name:"b2", type:"fallingBlockRoofed", className:"ghost_on_board", posX:396, posY:760, offsetY:36, minY:600, maxY:860, onlyKillIfFallingOnto:true, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:100, bbOffsetX:0, bbOffsetY:-100, seq:{wait:0.1, hoist:2.8, rest:0.1, start:"falling"}},
    //{ref:"impactSmoke_250x40", name:"impactSmoke2",type:"triggeredAnim", trigger:"b2", posX:346, posY:825},

    {ref:"fallingBlockSquare", name:"b3", type:"fallingBlockRoofed", className:"ghost_on_board", posX:532, posY:720, offsetY:36, minY:600, maxY:860, onlyKillIfFallingOnto:true, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:100, bbOffsetX:0, bbOffsetY:-100, seq:{wait:0.1, hoist:2.8, rest:0.1, start:"falling"}},
    //{ref:"impactSmoke_250x40", name:"impactSmoke3",type:"triggeredAnim", trigger:"b3", posX:492, posY:825},

    {ref:"fallingBlockSquare", name:"b4", type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:748, posY:680, offsetY:36, minY:600, maxY:860, onlyKillIfFallingOnto:true, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:100, bbOffsetX:0, bbOffsetY:-100, seq:{wait:0.1, hoist:2.8, rest:0.1, start:"falling"}},
    //{ref:"impactSmoke_250x40", name:"impactSmoke4",type:"triggeredAnim", trigger:"b4", posX:698, posY:825},

    {ref:"fallingBlockSquare", name:"b5", type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:884, posY:640, offsetY:36, minY:600, maxY:860, onlyKillIfFallingOnto:true, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:100, bbOffsetX:0, bbOffsetY:-100, seq:{wait:0.1, hoist:2.8, rest:0.1, start:"falling"}},
    //{ref:"impactSmoke_250x40", name:"impactSmoke5",type:"triggeredAnim", trigger:"b5", posX:834, posY:825},

    {ref:"fallingBlockSquare", name:"b6", type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:1020, posY:600, offsetY:36, minY:600, maxY:860, onlyKillIfFallingOnto:true, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:100, bbOffsetX:0, bbOffsetY:-100, seq:{wait:0.1, hoist:2.8, rest:0.1, start:"falling"}},
    //{ref:"impactSmoke_250x40", name:"impactSmoke6",type:"triggeredAnim", trigger:"b6", posX:970, posY:825},

    {ref:"ghost_on_board136_1", name:"cageBehind",type:"attachedImage", url:"media/elements/ghost-on-board136", width:251, height:210, attachedTo:"b1", offsetX:0, offsetY:-136, placeBehind:false},
    {ref:"ghost_on_board136_2", name:"cageBehind",type:"attachedImage", url:"media/elements/ghost-on-board136", width:251, height:210, attachedTo:"b2", offsetX:0, offsetY:-136, placeBehind:false},
    {ref:"ghost_on_board136_1", name:"cageBehind",type:"attachedImage", url:"media/elements/ghost-on-board136", width:251, height:210, attachedTo:"b3", offsetX:0, offsetY:-136, placeBehind:false},

    {ref:"ghost_on_board136_2", name:"cageBehind",type:"attachedImage", url:"media/elements/ghost-on-board136", width:251, height:210, attachedTo:"b4", offsetX:0, offsetY:-136, placeBehind:false},
    {ref:"ghost_on_board136_1", name:"cageBehind",type:"attachedImage", url:"media/elements/ghost-on-board136", width:251, height:210, attachedTo:"b5", offsetX:0, offsetY:-136, placeBehind:false},
    {ref:"ghost_on_board136_2", name:"cageBehind",type:"attachedImage", url:"media/elements/ghost-on-board136", width:251, height:210, attachedTo:"b6", offsetX:0, offsetY:-136, placeBehind:false},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:330, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:260, posY:320, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1320, posY:330, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:900, posY:330, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:690, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1320, posY:330, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:690, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:640, posY:325, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1310, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:930, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:790, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1065, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:440, posY:720, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:790, posY:720, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1065, posY:720, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {type:"line", edges:{type:"onewayline", points:[0, 860, 1400, 860]}},
    {type:"line", edges:{type:"onewayline", points:[0, 575, 250, 575]}},
    //{type:"line", edges:{type:"onewayline", points:[668, 575, 804, 575]}},
    {type:"line", edges:{type:"onewayline", points:[460, 420, 1180, 420]}},
    {ref:"stand_marker", type:"overlayImage", posX:1200, posY:862},
    {ref:"movingPlatformMedium", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:1200, posY:510, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:1200, maxX:1200, minY:350, maxY:861, velX:0, velY:2, line:{fromX:1200, fromY:510, toX:1380, toY:510}},

    {ref:"track_flat_extrathin", type:"overlayImage", posX:940, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:700, posY:420},
    {ref:"track_flat_extrathin", type:"overlayImage", posX:460, posY:420},
    {ref:"coffin",type:"overlayImage", posX:600, posY:286},

    {ref:"track_flat_extrathin", type:"overlayImage", posX:-20, posY:575},
    {ref:"exit_spooky", type:"exitLevel",  className:"exit", posX:-10, posY:348, cellWidth:163, cellHeight:294, numCells:1, bbWidth:50, bbHeight:100, bbOffsetX:0, bbOffsetY:0},
    {ref:"suit_of_armour",type:"overlayImage", posX:150, posY:342}

];

var level3_1 = [
    {type:"reference", title:"Overhang", ref:"level3_1"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:80, posY:740, velX:4, velY:0},
    //{type:"divWithColour", posX:0, posY:-250, width:1500, height:250, colour:"#2c283c"},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:-200, width:1280, height:1160},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:-200, width:1280, height:1160},
    //{ref:"level3_1", type:"overlayImage", url:"media/levels/level3_1.gif", posX:0, posY:0, width:1280, height:960},


    {name:"blocker1",type:"blocker", posX:0 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1240 , posY:0 , width:40 , height:960 },
    {name:"blocker3",type:"blocker", posX:0 , posY:812 , width:233 , height:300 },

    {ref:"platform_spooky01",type:"overlayImage", posX:1060, posY:316},

    {ref:"exit_spooky", name:"exit1",type:"exitLevel",  className:"exit", posX:1120, posY:88, cellWidth:100, cellHeight:100, numCells:1, bbWidth:100, bbHeight:200, bbOffsetX:100, bbOffsetY:50},
    {ref:"suit_of_armour",type:"overlayImage", posX:1060, posY:88},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:560, posY:160, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:990, posY:160, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:300, posY:160, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:560, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:866, posY:160, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:300, posY:160, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},


    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:360, posY:465, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:614, posY:465, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:870, posY:465, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:360, posY:730, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:614, posY:730, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:870, posY:730, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:560, posY:460, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:866, posY:460, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:300, posY:460, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},


    //{ref:"platform_dodgems", type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:1030, posY:440, width:464, height:148},
    {ref:"movingPlatformMedium", name:"movingPlatform5",type:"movingPlatform", className:"movingPlatformMedium", posX:930, posY:260, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:235, maxX:1280, minY:260, maxY:810, velX:0, velY:3.5, line:{fromX:930, fromY:260, toX:1110, toY:260}},
    {ref:"movingPlatformMedium", name:"movingPlatform5",type:"movingPlatform", className:"movingPlatformMedium", posX:790, posY:310, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:235, maxX:1280, minY:260, maxY:810, velX:0, velY:-3.25, line:{fromX:790, fromY:310, toX:970, toY:310}},
    {ref:"movingPlatformMedium", name:"movingPlatform4",type:"movingPlatform", className:"movingPlatformMedium", posX:650, posY:610, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:235, maxX:1280, minY:260, maxY:810, velX:0, velY:3, line:{fromX:650, fromY:610, toX:830, toY:610}},
    {ref:"movingPlatformMedium", name:"movingPlatform3",type:"movingPlatform", className:"movingPlatformMedium", posX:510, posY:410, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:235, maxX:1280, minY:260, maxY:810, velX:0, velY:2.75, line:{fromX:510, fromY:410, toX:690, toY:410}},
    {ref:"movingPlatformMedium", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMedium", posX:370, posY:810, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:235, maxX:570, minY:260, maxY:810, velX:0, velY:-2.5, line:{fromX:370, fromY:810, toX:550, toY:810}},
    {ref:"movingPlatformMedium", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:230, posY:410, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:235, maxX:570, minY:260, maxY:810, velX:0, velY:2, line:{fromX:230, fromY:410, toX:410, toY:410}},

    {ref:"cobwebsOfDeath", type:"lethalToTouch", className:"cobwebsOfDeath", posX:-40, posY:830, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cobwebsOfDeath", type:"lethalToTouch", className:"cobwebsOfDeath", posX:300, posY:830, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cobwebsOfDeath", type:"lethalToTouch", className:"cobwebsOfDeath", posX:990, posY:830, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cobwebsOfDeath", type:"lethalToTouch", className:"cobwebsOfDeath", posX:660, posY:830, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},


    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 900, 1250, 900]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[25, 750, 235, 750]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1070, 325, 1280, 325]}},

    {ref:"platform_spooky01",type:"overlayImage", posX:-200, posY:750},
    {ref:"hypnotists_tent", type:"overlayImage", url:"media/elements/hypnotists_tent.png", posX:-100, posY:400}

];


/***********************************************************************************************
 STAGE 2
 ************************************************************************************************/

var level2_10 = [
    {type:"reference", title:"Heavy Meddle", ref:"level2_10"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:800, posY:887, velX:-4, velY:0},

    {ref:"coaster_frame01",type:"overlayImage", posX:1010, posY:210},
    {ref:"coaster_frame01",type:"overlayImage", posX:1010, posY:519},
    {ref:"coaster_frame01",type:"overlayImage", posX:1010, posY:828},
    {ref:"track_flat",type:"overlayImage", posX:1030, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:820, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:610, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:400, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:190, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:-20, posY:890},

    {ref:"slope_track",type:"overlayImage", posX:1010, posY:760},
    {ref:"slope_track_left",type:"overlayImage", posX:974, posY:622},
    {ref:"slope_track",type:"overlayImage", posX:1030, posY:480},
    {ref:"slope_track_left",type:"overlayImage", posX:1010, posY:343},
    {ref:"slope_track",type:"overlayImage", posX:1030, posY:205},
    {ref:"wall02",type:"overlayImage", posX:1000, posY:70},
    {ref:"slope_track_left",type:"overlayImage", posX:1010, posY:66},

    {ref:"track_flat_tiny",type:"overlayImage", posX:1222, posY:510},
    {ref:"track_flat_tiny",type:"overlayImage", posX:1223, posY:225},
    {ref:"track_flat_tiny",type:"overlayImage", posX:1203, posY:780},

    {ref:"track_flat_tiny",type:"overlayImage", posX:996, posY:650},
    {ref:"track_flat_tiny",type:"overlayImage", posX:1040, posY:364},

    {type:"blocker", posX:-20 , posY:0 , width:40 , height:1000 },
    {type:"blocker", posX:1270 , posY:0 , width:40 , height:1000 },
    {type:"blocker", posX:1010 , posY:120 , width:10 , height:600 },

    {name:"protectorline",type:"line", edges:{type:"onewayline", points:[559, 109, 571, 109]}},
    {type:"blocker", posX:560 , posY:110 , width:10 , height:500 },

    {type:"blocker", posX:300 , posY:329 , width:50 , height:141 },

    {name:"line1",type:"line", edges:{type:"line", points:[0, 900, 1020, 900, 1145, 780, 1240, 768]}},
    {name:"line1",type:"line", edges:{type:"line", points:[ 1052, 648, 1125, 646, 1240, 772, 1280, 772]}},
    {name:"line1",type:"line", edges:{type:"line", points:[ 1010, 650, 1052, 650, 1165, 500, 1240, 498]}},
    {name:"line1",type:"line", edges:{type:"line", points:[ 1056, 330,1110, 355, 1160, 363, 1240, 502, 1280, 502]}},
    {name:"line1",type:"line", edges:{type:"line", points:[ 1010, 334, 1056, 334, 1164, 210, 1246, 210]}},
    {name:"line1",type:"line", edges:{type:"line", points:[ 1030, 67, 1127, 80, 1246, 212, 1280, 212]}},
    {name:"line1",type:"line", edges:{type:"line", points:[ 775, 106, 1030, 108]}},

    {name:"line2",type:"line", edges:{type:"onewayline", points:[550, 600, 1030, 600]}},
    {name:"protector",type:"line", edges:{type:"onewayline", points:[291, 292, 356, 328]}},


    {name:"line4",type:"line", edges:{type:"onewayline", points:[1293, 332, 1500, 332]}},
    {name:"line5",type:"line", edges:{type:"onewayline", points:[300, 460, 500, 460]}},

    {ref:"doorBlocker2", name:"doorBlocker",type:"doorBlocker", className:"doorBlocker", posX:548 , posY:720 , width:150 , height:200,cellWidth:150, cellHeight:200, numCells:2, bbOffsetX:0, bbWidth:160, bbHeight:200 },

    {ref:"track_flat",type:"overlayImage", posX:740, posY:580},
    {ref:"track_flat",type:"overlayImage", posX:530, posY:580},


    {name:"line3",type:"line", edges:{type:"onewayline", points:[0, 630, 430, 630]}},
    {ref:"track_flat",type:"overlayImage", posX:180, posY:630},
    {ref:"track_flat",type:"overlayImage", posX:-30, posY:630},

    //{ref:"frame_divider",type:"overlayImage", posX:990, posY:106},
    {ref:"cagefront01", name:"cage1", type:"cage", className:"cage", posX:760, posY:200, cellWidth:252, cellHeight:677, numCells:1, bbWidth:256, bbHeight:256, bbOffsetX:0, bbOffsetY:400,  start:"waiting", cageTargets:{baddie:true}},
    {ref:"cageback01", name:"cageBehind",type:"attachedImage", url:"media/elements/cageback01.png", width:251, height:210, attachedTo:"cage1", offsetX:0, offsetY:-210, placeBehind:true},

    {ref:"sign_trapvillain", type:"overlayImage", posX:810, posY:-350},

    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:300, posY:450},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:300, posY:450},


    {ref:"track_flat_extrathin",type:"overlayImage", posX:770, posY:108},
    {ref:"collapsingPlatform", name:"collapsingPlatform2", type:"collapsingPlatform", posX:645, posY:108, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:13, respondToNPC:["baddie"], line:{fromX:655, fromY:108, toX:775, toY:108}},
    {ref:"collapsingPlatform", name:"collapsingPlatform1", type:"collapsingPlatform", posX:535, posY:108, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:13, respondToNPC:["baddie"], line:{fromX:535, fromY:108, toX:655, toY:108}},

    {ref:"frame_divider",type:"overlayImage", posX:520, posY:106},

    {ref:"wall01",type:"overlayImage", posX:290, posY:300},
    {ref:"track_flat",type:"overlayImage", posX:734, posY:-340},


    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:285, posY:570, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:36, bbOffsetX:30, bbOffsetY:30, speed:0, isOn:false, switchTargets:{ doorBlocker:true}},
    {ref:"switch", name:"switch2",type:"switch", className:"switch", posX:390, posY:400, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:36, bbOffsetX:30, bbOffsetY:30, speed:0, isOn:false, switchTargets:{ cage1:false}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:380, posY:0, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:380, posY:240, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:380, posY:340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:1050, posY:730, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1050, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1180, posY:0, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},


    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:1200, posY:640, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:151, posY:195, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:410, posY:300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:525, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:600, posY:0, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:490, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:500, posY:0, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:600, posY:0, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:700, posY:0, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"collapsingPlatform", name:"collapsingPlatform3", type:"collapsingPlatform", posX:400, posY:108, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:12, respondToNPC:["baddie"], line:{fromX:400, fromY:108, toX:560, toY:108}},
    {ref:"collapsingPlatform", name:"collapsingPlatform4", type:"collapsingPlatform", posX:290, posY:108, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:12, respondToNPC:["baddie"], line:{fromX:290, fromY:108, toX:400, toY:108}},
    //{ref:"collapsingPlatform165", name:"collapsingPlatform1", type:"collapsingPlatform", posX:0, posY:108, cellWidth:165, cellHeight:150, numCells:4, bbWidth:165, bbHeight:150, steps:4, stepCount:8, respondToNPC:["baddie"], line:{fromX:0, fromY:108, toX:151, toY:108}},
    {ref:"wolfmanBaddieAnim", name:"baddie", type:"npcBaddieInit", className:"wolfmanBaddieAnim", posX:300, posY:500, offsetY:12, velX:3.3, velY:0, cellWidth:150, cellHeight:300, numCells:4, bbWidth:80, bbHeight:200, bbOffsetX:25, bbOffsetY:0, speed:0.2},

    {ref:"exit2", type:"exitLevel",  className:"exit", posX:10, posY:-700, cellWidth:100, cellHeight:100, numCells:2, bbWidth:100, bbHeight:100, bbOffsetX:0, bbOffsetY:50}
];

var level2_9 = [
    {type:"reference", title:"Wheel of Wild", ref:"level_placeholder"},
    {type:"worldInit", worldWidth:2048,  worldHeight:960},
    {type:"playerInit", posX:40, posY:860, velX:4, velY:0},
//	{ref:"level2_9_full", type:"overlayImage",  posX:0, posY:0},

    {ref:"coaster_frame01", type:"overlayImage", posX:910, posY:400},
    {ref:"coaster_frame01", type:"overlayImage", posX:1185, posY:400},
    {ref:"coaster_frame01", type:"overlayImage", posX:910, posY:700},
    {ref:"coaster_frame01", type:"overlayImage", posX:1185, posY:700},

    {ref:"bigwheelstand_400", type:"overlayImage", posX:985, posY:450},

    {ref:"frame01", type:"overlayImage", posX:1720, posY:490},
    //{ref:"track_flat", type:"overlayImage", posX:1970, posY:880},
    //{ref:"track_flat", type:"overlayImage", posX:1720, posY:880},
    {ref:"track_flat", type:"overlayImage", posX:1470, posY:880},
    {ref:"track_flat", type:"overlayImage", posX:1220, posY:880},
    {ref:"track_flat", type:"overlayImage", posX:970, posY:880},
    {ref:"track_flat", type:"overlayImage", posX:720, posY:880},
    {ref:"track_flat", type:"overlayImage", posX:470, posY:880},
    {ref:"track_flat", type:"overlayImage", posX:220, posY:880},
    {ref:"track_flat", type:"overlayImage", posX:-30, posY:880},

    {ref:"stand_marker_large", type:"overlayImage", posX:1050, posY:880},

    {ref:"stain_barrel", type:"overlayImage", posX:250, posY:870},
    {ref:"fallingBarrel", name:"b1",type:"fallingBlock", className:"fallingBarrel", posX:250, posY:625, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:1, start:"resting"}},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"b1", posX:200, posY:850},

    {ref:"coaster_frame01", type:"overlayImage", posX:170, posY:150},

    {ref:"movingPlatformWide", name:"movingPlatform1",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:0, maxX:1920, minY:0, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:1000, toY:720}, rotation:{radius:250, rate:0.015, rotationPosition:0*2*Math.PI, centreX:1040, centreY:631}},
    {ref:"movingPlatformWide", name:"movingPlatform2",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:0, maxX:1920, minY:0, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:1000, toY:720}, rotation:{radius:250, rate:0.015, rotationPosition:0.25*2*Math.PI, centreX:1040, centreY:631}},
    {ref:"movingPlatformWide", name:"movingPlatform3",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:0, maxX:1920, minY:0, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:1000, toY:720}, rotation:{radius:250, rate:0.015, rotationPosition:0.50*2*Math.PI, centreX:1040, centreY:631}},
    {ref:"movingPlatformWide", name:"movingPlatform4",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:0, maxX:1920, minY:0, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:1000, toY:720}, rotation:{radius:250, rate:0.015, rotationPosition:0.75*2*Math.PI, centreX:1040, centreY:631}},

    {ref:"movingPlatformSmall", name:"movingPlatform5",type:"movingPlatform", className:"movingPlatformSmall", posX:460, posY:580, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:0, maxX:2050, minY:580, maxY:882, velX:0, velY:2.5, line:{fromX:480, fromY:580, toX:580, toY:580}},

    {ref:"movingPlatformSmall", name:"movingPlatform6",type:"movingPlatform", className:"movingPlatformSmall", posX:1660, posY:440, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:0, maxX:2050, minY:440, maxY:882, velX:0, velY:2.5, line:{fromX:1660, fromY:440, toX:1760, toY:440}},

    {ref:"blocker01", type:"overlayImage", posX:530, posY:520},
    {ref:"coasterCars", type:"overlayImage", posX:530, posY:790},

    {ref:"switch", name:"switch3",type:"switch", className:"switch", posX:730, posY:570, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:30, bbHeight:66, speed:0,  bbOffsetX:30, bbOffsetY:20, isOn:false, switchTargets:{ movingPlatform1:false, movingPlatform2:false, movingPlatform3:false, movingPlatform4:false}},

    {ref:"track_flat", type:"overlayImage", posX:560, posY:630},

    {name:"blocker1",type:"blocker", posX:-40 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:2050 , posY:0 , width:40 , height:960 },
    {name:"blocker3",type:"blocker", posX:570 , posY:632 , width:258 , height:632 },
    {name:"blocker3",type:"blocker", posX:1762 , posY:492 , width:400 , height:500 },

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:1600, posY:600, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1600, posY:700, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1600, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:490, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:900, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1600, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:483, posY:607, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:1600, posY:790, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1600, posY:740, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:483, posY:700, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:1600, posY:700, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1600, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:483, posY:700, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:483, posY:600, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1600, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 880, 2050, 880]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[568, 630, 830, 630]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1720, 490, 2050, 490]}},

    {ref:"wolfmanBaddieAnim", type:"npcBaddieInit", className:"wolfmanBaddieAnim", posX:1770, posY:300, offsetY:30, velX:-1.1, velY:0, cellWidth:150, cellHeight:300, numCells:10, bbWidth:100, bbHeight:200, bbOffset:25, bbOffsetY:100, speed:0.2},

    {ref:"exit2", type:"exitLevel",  className:"exit", posX:1800, posY:220, cellWidth:100, cellHeight:100, numCells:2, bbWidth:100, bbHeight:250, bbOffsetX:200, bbOffsetY:50}

];

var level2_7 = [
    {type:"reference", title:"The Big Bounce Theory", ref:"level2_7"},
    {type:"worldInit", worldWidth:1280,  worldHeight:1920},
    {type:"playerInit", posX:80, posY:1566, velX:4, velY:0},

    //{ref:"level2_7_full", type:"overlayImage", url:"media/levels/level2_7_full.png", posX:0, posY:0, width:1280, height:1920},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:-100, posY:1500, width:1408, height:440},

    {ref:"track_flat_thin",type:"overlayImage", posX:920, posY:1220},

    {ref:"frame01",type:"overlayImage", posX:920, posY:700},
    {ref:"frame01",type:"overlayImage", posX:620, posY:1530},
    {ref:"frame01",type:"overlayImage", posX:620, posY:1160},

    {ref:"track_flat",type:"overlayImage", posX:380, posY:1786},
    {ref:"track_flat",type:"overlayImage", posX:190, posY:1786},
    {ref:"frame01",type:"overlayImage", posX:-120, posY:1560},

    {name:"blocker1",type:"blocker", posX:0 , posY:0 , width:40 , height:1920 },
    {name:"blocker2",type:"blocker", posX:1240 , posY:0 , width:40 , height:1920 },
    {name:"blocker3",type:"blocker", posX:0 , posY:1572 , width:233 , height:500 },
    {name:"blocker4",type:"blocker", posX:632 , posY:1202 , width:216 , height:800 },
    {name:"blocker5",type:"blocker", posX:940 , posY:682 , width:50 , height:600 },

    {ref:"track_flat",type:"overlayImage", posX:1110, posY:680},
    {ref:"track_flat",type:"overlayImage", posX:900, posY:680},
    //{ref:"track_flat",type:"overlayImage", posX:730, posY:680},
    {ref:"movingPlatformMedium", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:235, posY:680, cellWidth:180, cellHeight:60, numCells:1, bbWidth:105, bbHeight:60, speed:0, minX:230, maxX:770, minY:680, maxY:680, velX:2, velY:0, line:{fromX:235, fromY:680, toX:415, toY:680}},

    {ref:"track_flat",type:"overlayImage", posX:-10, posY:680},

    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:280, posY:1700, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-14.8, bbWidth:100, bbHeight:100, bbOffsetX:0, bbOffsetY:10, speed:0.2},
    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:740, posY:1080, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-14.5, bbWidth:100, bbHeight:100, bbOffsetX:30, bbOffsetY:10, speed:0.2},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 1800, 1250, 1800]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[25, 680, 270, 680]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[25, 1570, 235, 1570]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[630, 1200, 640, 1170, 951, 1170]}},
    {name:"line5",type:"line", edges:{type:"line", points:[930, 680, 1280,680]}},

    {ref:"exit2", name:"exit1",type:"exitLevel",  className:"exit", posX:990, posY:409, cellWidth:100, cellHeight:100, numCells:2, bbWidth:50, bbHeight:200, bbOffsetX:180, bbOffsetY:150},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:440, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:150, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1100, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:340, posY:1060, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:540, posY:1060, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:340, posY:1260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:340, posY:1260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:440, posY:570, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:745, posY:900, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:550, posY:1340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:505, posY:1710, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:250, posY:1000, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:100, posY:1260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:150, posY:580, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:610, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16}

];


var level2_6 = [
    {type:"reference", title:"Boing Boing", ref:"level2_6"},
    {type:"worldInit", worldWidth:1500,  worldHeight:960},
    {type:"playerInit", posX:80, posY:440, velX:4, velY:0},
    //{ref:"level2_6_full", type:"overlayImage", url:"media/levels/level2_6_full.png", posX:0, posY:0, width:1280, height:960},
    {type:"divWithColour", posX:0, posY:-430, width:1500, height:40, colour:"#2c283c"},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:-400, width:1500, height:1260},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:-400, width:1500, height:1260},
    {ref:"frame01",type:"overlayImage", posX:1170, posY:460},
    {ref:"frame01",type:"overlayImage", posX:860, posY:744},
    {ref:"frame01",type:"overlayImage", posX:550, posY:460},
    {ref:"frame01",type:"overlayImage", posX:240, posY:744},
    {ref:"frame01",type:"overlayImage", posX:-70, posY:464},
    {ref:"wood01",type:"overlayImage", posX:596, posY:510},
    {ref:"wood01",type:"overlayImage", posX:1210, posY:675},
    {name:"blocker1",type:"blocker", posX:-20 , posY:0 , width:60 , height:960 },
    {name:"blocker2",type:"blocker", posX:1480 , posY:0 , width:60 , height:960 },
    {name:"blocker3",type:"blocker", posX:0 , posY:476 , width:280 , height:400 },
    {name:"blocker4",type:"blocker", posX:555, posY:476 , width:335 , height:600 },
    {name:"blocker5",type:"blocker", posX:1176, posY:476 , width:400 , height:600 },

    {ref:"stain_crate",type:"overlayImage", posX:595, posY:459},
    {ref:"fallingBlockSquare", name:"b3",type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:660, posY:200, offsetY:36, cellWidth:136, cellHeight:136, numCells:1, bbWidth:180, bbHeight:136, bbOffsetX:20, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"waiting"}},
    {ref:"crate_spooky", name:"crate",type:"attachedImage", attachedTo:"b3", offsetX:-50, offsetY:-170, placeBehind:false},

    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:300, posY:660, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-13.8, bbWidth:200, bbHeight:100, bbOffsetX:0, bbOffsetY:10, speed:0.2},
    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:920, posY:660, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-13.5, bbWidth:200, bbHeight:100, bbOffsetX:0, bbOffsetY:10, speed:0.2},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 754, 1250, 754]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[0, 313, 190, 313,  222, 340]}},
    {name:"line4",type:"line", edges:{type:"line", points:[0, 474, 285, 474, 290, 477]}},
    {name:"line5",type:"line", edges:{type:"line", points:[545, 480, 551, 474, 890, 474, 899, 480]}},
    {name:"line6",type:"line", edges:{type:"line", points:[1167, 480, 1170, 474, 1500, 474]}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:640, posY:-60, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:680, posY:-60, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:720, posY:-60, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:1200, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1280, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1360, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:385, posY:210, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:200, posY:190, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1000, posY:210, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:680, posY:-60, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:950, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1350, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:630, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:670, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:710, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"track_flat_extrathin",type:"overlayImage", posX:-30, posY:310},

    //{ref:"exit2", name:"exit1",type:"exitLevel",  className:"exit", posX:-100, posY:30, cellWidth:100, cellHeight:100, numCells:2, bbWidth:60, bbHeight:250, bbOffsetX:100, bbOffsetY:100}
    {ref:"exit_spooky", name:"exit1",type:"exitLevel",  className:"exit", posX: 0, posY:80, cellWidth:100, cellHeight:100, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:50, bbOffsetY:50}
];



var level2_5 = [
    {type:"reference", title:"Hidden Depths", ref:"level2_5"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:50, posY:300, velX:4, velY:0},
    //{ref:"level2_5_full", type:"overlayImage", url:"media/levels/level2_5_full.png", posX:0, posY:0, width:1280, height:960},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:-500, width:1280, height:1200},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:-500, width:1280, height:1200},

    {type:"divWithColour", posX:0, posY:700, width:1280, height:700, colour:"#3d5c65"},

    {name:"blocker1",type:"blocker", posX:-40 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1270 , posY:0 , width:40 , height:960 },
    {name:"blocker3",type:"blocker", posX:25 , posY:350 , width:200 , height:600 },
    {name:"blocker3",type:"blocker", posX:1022 , posY:312 , width:200 , height:800 },
    {ref:"frame01",type:"overlayImage", posX:1000, posY:800},
    {ref:"frame01",type:"overlayImage", posX:1000, posY:310},
    //{ref:"collapsingPlatform165", name:"collapsingPlatform3",type:"collapsingPlatform", posX:880, posY:350, cellWidth:165, cellHeight:150, numCells:4, bbWidth:165, bbHeight:150, steps:4, stepCount:7, line:{fromX:1000, fromY:350, toX:1100, toY:350}},
    {ref:"collapsingPlatform", name:"collapsingPlatform1",type:"collapsingPlatform", posX:770, posY:350, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:790, fromY:350, toX:1000, toY:350}},
    {ref:"collapsingPlatform", name:"collapsingPlatform2",type:"collapsingPlatform", posX:660, posY:350, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:680, fromY:350, toX:790, toY:350}},
    {ref:"collapsingPlatform", name:"collapsingPlatform3",type:"collapsingPlatform", posX:550, posY:350, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:570, fromY:350, toX:680, toY:350}},
    {ref:"collapsingPlatform", name:"collapsingPlatform4",type:"collapsingPlatform", posX:440, posY:350, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:460, fromY:350, toX:572, toY:350}},
    {ref:"collapsingPlatform", name:"collapsingPlatform5",type:"collapsingPlatform", posX:330, posY:350, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:350, fromY:350, toX:462, toY:350}},
    {ref:"collapsingPlatform", name:"collapsingPlatform6",type:"collapsingPlatform", posX:220, posY:350, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:220, fromY:350, toX:352, toY:350}},
    {ref:"frame01",type:"overlayImage", posX:-70, posY:840},
    {ref:"frame01",type:"overlayImage", posX:-70, posY:320},
    {ref:"track_flat_extrathin_small",type:"overlayImage", posX:660, posY:790},

    {name:"line2",type:"line", edges:{type:"onewayline", points:[680, 800, 750, 800]}},
    //{name:"line2",type:"line", edges:{type:"onewayline", points:[0, 880, 1250, 880]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1020, 310, 1240, 310]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[25, 328, 220, 328]}},
    //{name:"line4",type:"line", edges:{type:"onewayline", points:[1100, 218, 1280, 218]}},

    //{ref:"SpringSheet", type:"bouncer",  className:"spring", posX:660, posY:700, cellWidth:100, cellHeight:100, numCells:4, bounceYAmt:-15.7, bbWidth:50, bbHeight:40, bbOffsetX:0, bbOffsetY:50, speed:0.2},
    {ref:"springSmall", type:"bouncer",  className:"spring", posX:660, posY:680, cellWidth:120, cellHeight:128, numCells:4, bounceYAmt:-15.7, bbWidth:120, bbHeight:40, bbOffsetX:4, bbOffsetY:50, speed:0.2},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:670, posY:640, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:700, posY:660, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:730, posY:640, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:800, posY:260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1020, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:700, posY:660, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:490, posY:225, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:630, posY:225, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1000, posY:180, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:670, posY:640, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:730, posY:640, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1000, posY:180, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:800, posY:225, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:840, posY:225, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:880, posY:225, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    //{ref:"exit2", name:"exit1",type:"exitLevel",  className:"exit", posX:1030, posY:40, cellWidth:100, cellHeight:100, numCells:2, bbWidth:50, bbHeight:250, bbOffsetX:180, bbOffsetY:50}
    {ref:"exit_spooky", name:"exit1",type:"exitLevel",  className:"exit", posX: 1110, posY:84, cellWidth:100, cellHeight:100, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:100, bbOffsetY:50}

];

var level2_4 = [
    {type:"reference", title:"Lever Las Vegas", ref:"level2_4"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:50, posY:650, velX:4, velY:0},
    //{ref:"level2_4_full", type:"overlayImage", url:"media/levels/level2_4_full.png", posX:0, posY:0, width:1280, height:960},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:600, width:1408, height:440},

    {ref:"track_flat_extrathin",type:"overlayImage", posX:-70, posY:690},

    {ref:"track_flat",type:"overlayImage", posX:1245, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:985, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:725, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:465, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:205, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:-45, posY:890},

    {name:"blocker1",type:"blocker", posX:0 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1240 , posY:0 , width:40 , height:960 },

    {ref:"stand_marker_small", type:"overlayImage", posX:1155, posY:893},
    {ref:"stand_marker_small", type:"overlayImage", posX:905, posY:893},
    {ref:"stand_marker_small", type:"overlayImage", posX:620, posY:893},
    {ref:"stand_marker_small", type:"overlayImage", posX:375, posY:893},
    {ref:"stand_marker_small", type:"overlayImage", posX:250, posY:893},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:650, posY:836, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:1200, posY:575, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:260, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"movingPlatformSmall", name:"movingPlatform4",type:"movingPlatform", className:"movingPlatformSmall", posX:1155, posY:760, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:1155, maxX:1155, minY:600, maxY:894, velX:0, velY:1.5, line:{fromX:1155, fromY:760, toX:1245, toY:760}},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:966, posY:760},
    {ref:"movingPlatformSmall", name:"movingPlatform3",type:"movingPlatform", className:"movingPlatformSmall", posX:905, posY:760, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:885, maxX:885, minY:745, maxY:894, velX:0, velY:1.5, line:{fromX:885, fromY:760, toX:985, toY:760}},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:703, posY:760},
    {ref:"movingPlatformSmall", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformSmall", posX:620, posY:760, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:620, maxX:620, minY:745, maxY:894, velX:0, velY:1.5, line:{fromX:620, fromY:760, toX:720, toY:760}},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:440, posY:760},
    {ref:"movingPlatformSmall", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformSmall", posX:375, posY:760, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:375, maxX:375, minY:745, maxY:894, velX:0, velY:1.5, line:{fromX:375, fromY:760, toX:475, toY:760}},

    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:890, posY:470},
    {ref:"movingLeverPlatformMedium", name:"movingPlatform6",type:"movingPlatform", className:"movingLeverPlatformMedium", posX:610, posY:468, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:500, maxX:750, minY:468, maxY:468, velX:1.5 , velY:0, line:{fromX:610, fromY:468, toX:790, toY:468}},
    {ref:"track_flat_extrathin_med",type:"overlayImage", posX:330, posY:470},


    {ref:"track_flat_extrathin",type:"overlayImage", posX:897, posY:640},
    {ref:"track_flat_extrathin",type:"overlayImage", posX:637, posY:640},
    {ref:"track_flat_extrathin",type:"overlayImage", posX:377, posY:640},

    {ref:"track_flat_extrathin",type:"overlayImage", posX:1040, posY:320 },

    {ref:"stand_marker_small", type:"overlayImage", posX:960, posY:473},

    {ref:"movingLeverPlatformSmall", name:"movingPlatform7",type:"movingPlatform", className:"movingLeverPlatformSmall", posX:960, posY:330, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:960, maxX:960, minY:250, maxY:470, velX:0, velY:1.5, line:{fromX:960, fromY:330, toX:1060, toY:330}},

    {ref:"collapsingPlatform", name:"collapsingPlatform3",type:"collapsingPlatform", posX:800, posY:320, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:800, fromY:320, toX:910, toY:320}},
    {ref:"collapsingPlatform", name:"collapsingPlatform3",type:"collapsingPlatform", posX:690, posY:320, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:690, fromY:320, toX:800, toY:320}},
    {ref:"collapsingPlatform", name:"collapsingPlatform3",type:"collapsingPlatform", posX:580, posY:320, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:580, fromY:320, toX:690, toY:320}},
    {ref:"collapsingPlatform", name:"collapsingPlatform2",type:"collapsingPlatform", posX:470, posY:320, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:470, fromY:320, toX:580, toY:320}},
    {ref:"collapsingPlatform", name:"collapsingPlatform1",type:"collapsingPlatform", posX:360, posY:320, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:360, fromY:320, toX:470, toY:320}},

    {ref:"track_flat_extrathin_small",type:"overlayImage", posX:280, posY:320 },

    {ref:"movingLeverPlatformSmall", name:"movingPlatform5",type:"movingPlatform", className:"movingLeverPlatformSmall", posX:246, posY:450, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:246, maxX:246, minY:420, maxY:894, velX:0 , velY:2.5, line:{fromX:246, fromY:450, toX:346, toY:450}},
    {ref:"movingPlatformSmall", name:"movingPlatform8",type:"movingPlatform", className:"movingPlatformSmall", posX:200, posY:330, cellWidth:100, cellHeight:20, numCells:1, bbWidth:105, bbHeight:20, speed:0, minX:200, maxX:200, minY:150, maxY:380, velX:0, velY:1.5, line:{fromX:200, fromY:330, toX:305, toY:330}},

    {ref:"track_flat_extrathin",type:"overlayImage", posX:-80, posY:220},

    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:490, posY:840, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:40, bbHeight:66, speed:0,  bbOffsetX:10, bbOffsetY:20, isOn:false, switchTargets:{ movingPlatform5:false}},
    {ref:"switch", name:"switch2",type:"switch", className:"switch", posX:750, posY:840, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:40, bbHeight:66, speed:0,  bbOffsetX:10, bbOffsetY:20, isOn:false, switchTargets:{ movingPlatform6:false}},
    {ref:"switch", name:"switch3",type:"switch", className:"switch", posX:990, posY:840, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:30, bbHeight:66, speed:0,  bbOffsetX:10, bbOffsetY:20, isOn:false, switchTargets:{ movingPlatform7:false}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 892, 1250, 892]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1050, 335, 1240, 330]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[25, 700, 200, 700]}},
    {name:"line5",type:"line", edges:{type:"onewayline", points:[470, 765, 615, 765]}},
    {name:"line6",type:"line", edges:{type:"onewayline", points:[716, 765, 860, 765]}},
    {name:"line7",type:"line", edges:{type:"onewayline", points:[956, 765, 1105, 765]}},
    //{name:"line8",type:"line", edges:{type:"onewayline", points:[1205, 765, 1280, 765]}},
    {name:"line8",type:"line", edges:{type:"onewayline", points:[380, 640, 1160, 640]}},
    {name:"line9",type:"line", edges:{type:"onewayline", points:[350, 478, 515, 468]}},
    {name:"line10",type:"line", edges:{type:"onewayline", points:[900, 468, 1080, 468]}},
    {name:"line11",type:"line", edges:{type:"onewayline", points:[1040, 320, 1280, 320]}},
    {name:"line12",type:"line", edges:{type:"onewayline", points:[295, 335, 365, 335]}},
    {name:"line13",type:"line", edges:{type:"onewayline", points:[25, 230, 210, 230]}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:530, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:770, posY:680, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1025, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:530, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:770, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1025, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:530, posY:680, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:770, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1025, posY:680, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:415, posY:390, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:960, posY:150, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:660, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"exit2", name:"exit1",type:"exitLevel",  className:"exit", posX:-110, posY:-50, cellWidth:100, cellHeight:100, numCells:2, bbWidth:50, bbHeight:250, bbOffsetX:100, bbOffsetY:50}

];

var level2_3 = [
    {type:"reference", title:"A bad crate of affairs", ref:"level2_3"},
    {type:"worldInit", worldWidth:1500,  worldHeight:960},
    {type:"playerInit", posX:80, posY:885, velX:4, velY:0},
    //{ref:"level2_3_full", type:"overlayImage", url:"media/levels/level2_3_full.png", posX:0, posY:0, width:1500, height:960},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:520, width:1408, height:440},


    {ref:"track_flat",type:"overlayImage", posX:1245, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:985, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:725, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:465, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:205, posY:890},
    {ref:"track_flat",type:"overlayImage", posX:-45, posY:890},

    {ref:"blocker01",type:"overlayImage", posX:1280, posY:530},

    {name:"blocker1",type:"blocker", posX:0 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1480 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1350 , posY:462 , width:200 , height:600 },

    {ref:"stain_crate", type:"overlayImage", posX:700, posY:878},
    {ref:"fallingBlockSquare", name:"b3",type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:760, posY:520, offsetY:36, cellWidth:136, cellHeight:136, numCells:1, bbWidth:180, bbHeight:136, bbOffsetX:20, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"waiting"}},
    {ref:"crate", name:"crate",type:"attachedImage", url:"media/elements/crate.png", width:221, height:194, attachedTo:"b3", offsetX:-50, offsetY:-170, placeBehind:false},
    //{ref:"impactSmoke_250x40", name:"impactSmoke1",type:"triggeredAnim", trigger:"b3", posX:660, posY:870},

    {ref:"stain_crate", type:"overlayImage", posX:434, posY:882},
    {ref:"fallingBlockSquare", name:"b2",type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:510, posY:520, offsetY:36, cellWidth:136, cellHeight:136, numCells:1, bbWidth:180, bbHeight:136, bbOffsetX:20, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"falling"}},
    {ref:"crate", name:"crate",type:"attachedImage", url:"media/elements/crate.png", width:221, height:194, attachedTo:"b2", offsetX:-50, offsetY:-170, placeBehind:false},
    //{ref:"impactSmoke_250x40", name:"impactSmoke1",type:"triggeredAnim", trigger:"b2", posX:400, posY:870},

    {ref:"stain_crate", type:"overlayImage", posX:195, posY:880},
    {ref:"fallingBlockSquare", name:"b1",type:"fallingBlockRoofed", className:"fallingBlockSquare", posX:260, posY:520, offsetY:36, cellWidth:136, cellHeight:136, numCells:1, bbWidth:180, bbHeight:136, bbOffsetX:20, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"waiting"}},
    {ref:"crate", name:"crate",type:"attachedImage", url:"media/elements/crate.png", width:221, height:194, attachedTo:"b1", offsetX:-50, offsetY:-170, placeBehind:false},
    //{ref:"impactSmoke_250x40", name:"impactSmoke1",type:"triggeredAnim", trigger:"b1", posX:130, posY:870},

    {ref:"track_flat",type:"overlayImage", posX:-105, posY:450},


    {ref:"track_flat",type:"overlayImage", posX:1330, posY:450},
    {ref:"track_flat",type:"overlayImage", posX:1080, posY:450},

    {ref:"stand_marker", type:"overlayImage", posX:910, posY:890},
    {ref:"movingPlatformMedium",name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:910, posY:440, cellWidth:180, cellHeight:35, numCells:1, bbWidth:180, bbHeight:35, speed:0, minX:910, maxX:910, minY:410, maxY:891, velX:0, velY:2.2, line:{fromX:910, fromY:440, toX:1090, toY:440}},


    {ref:"stain_barrel", type:"overlayImage", posX:1208, posY:452},
    {ref:"fallingBarrel", name:"b4", type:"fallingBlock", className:"fallingBarrel", posX:1200, posY:0, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"falling"}},
    {ref:"impactSmoke_250x40", name:"impactSmoke1",type:"triggeredAnim", trigger:"b4", posX:1145, posY:425},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 890, 1500, 890]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[25, 460, 245, 460]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[1090, 460, 1500, 460]}},
    //{name:"line5",type:"line", edges:{type:"onewayline", points:[910, 460, 982, 460]}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:490, posY:260, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1210, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1310, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:275, posY:250, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:530, posY:250, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:785, posY:250, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:275, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:530, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:785, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:275, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:530, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:785, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:785, posY:250, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:1050, posY:340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1375, posY:340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"exit2", name:"exit1",type:"exitLevel",  className:"exit", posX:-110, posY:170, cellWidth:100, cellHeight:100, numCells:2, bbWidth:50, bbHeight:250, bbOffsetX:100, bbOffsetY:50}

];

var level2_2 = [
    {type:"reference", title:"As one door opens", ref:"level2_2"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:100, posY:840, velX:4, velY:0},
    //{ref:"level2_2_full", type:"overlayImage", url:"media/levels/level2_2_full.png", posX:0, posY:0, width:1280, height:960},

    {type:"divWithColour", posX:0, posY:-200, width:1280, height:200, colour:"#2c283c"},
    //{ref:"spooky_background", type:"divWithBackground", url:"media/elements/spooky_background.png", posX:0, posY:0, width:1280, height:960},
    {ref:"spookyBackground", type:"divBG", posX:0, posY:0, width:1280, height:960},

    //{ref:"track_flat",type:"overlayImage", posX:1120, posY:470},
    //{ref:"track_flat",type:"overlayImage", posX:860, posY:470},
    {ref:"platform_spooky01",type:"overlayImage", posX:1140, posY:464},
    {ref:"platform_spooky01",type:"overlayImage", posX:740, posY:464},
    {ref:"platform_spooky01",type:"overlayImage", posX:340, posY:464},

    {ref:"track_flat",type:"overlayImage", posX:990, posY:883},
    {ref:"track_flat",type:"overlayImage", posX:730, posY:883},
    {ref:"track_flat",type:"overlayImage", posX:470, posY:883},
    {ref:"track_flat",type:"overlayImage", posX:210, posY:883},
    {ref:"track_flat",type:"overlayImage", posX:-50, posY:883},
    {ref:"slope_track",type:"overlayImage", posX:910, posY:747},

    {ref:"stand_marker_small", type:"overlayImage", posX:175, posY:886},
    {ref:"movingPlatformSmall", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformSmall", posX:175, posY:530, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:175, maxX:175, minY:210, maxY:882, velX:0, velY:-2.4, line:{fromX:175, fromY:530, toX:275, toY:530}},
    {ref:"track_flat",type:"overlayImage", posX:-100, posY:250},

    {ref:"portraits",type:"overlayImage", posX:790, posY:280},

    {name:"blocker1",type:"blocker", posX:0 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1240 , posY:0 , width:40 , height:960 },
    {ref:"doorBlocker2", name:"doorBlocker",type:"doorBlocker", className:"doorBlocker", posX:560 , posY:298 , width:150 , height:200,cellWidth:150, cellHeight:200, numCells:2, bbOffsetX:80, bbWidth:70, bbHeight:200 },
    {name:"line1",type:"line", edges:{type:"onewayline", points:[0, 880, 920, 880, 1100, 740,1150, 740]}},
    {name:"line1r",type:"line", edges:{type:"onewayline", points:[918, 878, 1280, 880]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[0, 265, 175, 265]}},
    {name:"line5",type:"line", edges:{type:"onewayline", points:[350, 480, 1280, 480]}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:530, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:950, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1100, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:480, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1210, posY:650, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:500, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:200, posY:430, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:500, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:200, posY:150, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:200, posY:150, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:200, posY:300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:200, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:950, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:1025, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1100, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:1054, posY:690, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:20, bbHeight:20, speed:0, isOn:false, switchTargets:{ doorBlocker:true}},
    {ref:"ghostBaddieAnim", type:"npcBaddieInit", className:"ghostBaddieAnim", posX:900, posY:100, velX:-1.1, velY:0, cellWidth:150, cellHeight:300, numCells:10, bbWidth:100, bbHeight:200, bbOffset:25, bbOffsetY:100, speed:0.1},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:356, posY:884, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:368, posY:1280, startPosX:368, startPosY:1280, targetPosX:368, targetPosY:1130, offsetY:-125, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:250, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:356, posY:884, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:556, posY:884, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:568, posY:1280, startPosX:568, startPosY:1280, targetPosX:568, targetPosY:1130, offsetY:-125, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:250, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:556, posY:884, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:756, posY:884, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:768, posY:1280, startPosX:768, startPosY:1280, targetPosX:768, targetPosY:1130, offsetY:-125, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:250, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:756, posY:884, width:87, height:24},

    //{ref:"spike", type:"spike", className:"spike", posX:870, posY:1299, startPosX:870, startPosY:1300, targetPosX:870, targetPosY:1100, cellWidth:66, cellHeight:393, numCells:1, bbWidth:66, bbHeight:397, bbOffsetX:0, bbOffsetY:-200, seq:{wait:2, spike:0.3, rest:3, "return":1, start:"returning"}},
    //{ref:"exit2", name:"exit1",type:"exitLevel",  className:"exit", posX:-110, posY:-15, cellWidth:100, cellHeight:100, numCells:2, bbWidth:50, bbHeight:250, bbOffsetX:100, bbOffsetY:50}
    {ref:"exit_spooky", name:"exit1",type:"exitLevel",  className:"exit", posX: -10, posY:24, cellWidth:100, cellHeight:100, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:50, bbOffsetY:50}
];

var level2_1 = [
    {type:"reference", title:"Boinks!", ref:"level2_1"},
    {type:"worldInit", worldWidth:1500,  worldHeight:960},
    {type:"playerInit", posX:100, posY:456, velX:4, velY:0},
    //{ref:"level2_1_full", type:"overlayImage", url:"media/levels/level2_1_full.png", posX:0, posY:0, width:1280, height:960},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:-220, posY:500, width:1408, height:440},
    {ref:"frame01",type:"overlayImage", posX:1170, posY:460},
    {ref:"frame01",type:"overlayImage", posX:860, posY:744},
    {ref:"frame01",type:"overlayImage", posX:550, posY:460},
    {ref:"frame01",type:"overlayImage", posX:240, posY:744},
    {ref:"frame01",type:"overlayImage", posX:-70, posY:464},
    {ref:"wood01",type:"overlayImage", posX:596, posY:510},
    {ref:"wood01",type:"overlayImage", posX:1210, posY:675},
    {ref:"hypnotists_tent", type:"overlayImage", url:"media/elements/hypnotists_tent.png", posX:-100, posY:120},

    {ref:"sign_bouncehigher", type:"overlayImage", posX:350, posY:100},

    {name:"blocker1",type:"blocker", posX:-20 , posY:0 , width:40 , height:960 },
    {name:"blocker2",type:"blocker", posX:1500 , posY:0 , width:40 , height:960 },
    {name:"blocker3",type:"blocker", posX:0 , posY:476 , width:283 , height:800 },
    {name:"blocker4",type:"blocker", posX:552 , posY:476 , width:340 , height:800 },
    {name:"blocker5",type:"blocker", posX:1162 , posY:492 , width:220 , height:800 },
    {ref:"stain_barrel", type:"overlayImage", posX:605, posY:462},
    {ref:"stain_barrel", type:"overlayImage", posX:733, posY:465},

    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:300, posY:680, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-11, bbWidth:100, bbHeight:100, bbOffsetX:0, bbOffsetY:10, speed:0.2},
    {ref:"trampoline", type:"bouncer",  className:"springBig", posX:940, posY:680, cellWidth:220, cellHeight:111, numCells:4, bounceYAmt:-11.5, bbWidth:100, bbHeight:100, bbOffsetX:0, bbOffsetY:10, speed:0.2},
    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 754, 1250, 754]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[0, 474, 285, 474]}},
    {name:"line5",type:"line", edges:{type:"onewayline", points:[551, 474, 890, 474]}},
    {name:"line6",type:"line", edges:{type:"onewayline", points:[1160, 490, 1500, 474]}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:400, posY:270, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1030, posY:280, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1230, posY:300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:1030, posY:430, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:500, posY:270, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1030, posY:270, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:350, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:450, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:500, posY:300, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:400, posY:280, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:1030, posY:280, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:900, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:500, posY:290, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:700, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1030, posY:290, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"fallingBarrel", name:"b1",type:"fallingBlock", className:"fallingBarrel", posX:600, posY:400, minY:80, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:4, hoist:1.5, rest:3, start:"falling"}},
    {ref:"impactSmoke_250x40", name:"impactSmoke1",type:"triggeredAnim", trigger:"b1", posX:540, posY:438},
    {ref:"fallingBarrel", name:"b2",type:"fallingBlock", className:"fallingBarrel", posX:740, posY:0, minY:80, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:3, hoist:1.5, rest:4, start:"falling"}},
    {ref:"impactSmoke_250x40", name:"impactSmoke1",type:"triggeredAnim", trigger:"b2", posX:680, posY:438},

    {ref:"exit2", name:"exit1",type:"exitLevel",  className:"exit", posX:1200, posY:190, cellWidth:100, cellHeight:100, numCells:1, bbWidth:40, bbHeight:250, bbOffsetX:170, bbOffsetY:100}
    //{ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:1650, posY:570, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:60, bbOffsetY:50}
];



/***********************************************************************************************
 STAGE 1
 ************************************************************************************************/
var level1_0 = [
    {type:"reference", title:"Introduction level: Learning the ropes", ref:"level1_0"},
    {type:"worldInit", worldWidth:1800,  worldHeight:960},
    {type:"playerInit", posX:200, posY:860, velX:4, velY:0},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:-300, posY:400, width:1408, height:440},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:1108, posY:400, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:472, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:944, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:1336, posY:840, width:473, height:120},


    {ref:"fadedstalls01", type:"overlayImage",  posX:0, posY:550, width:1188, height:232},


    //{ref:"sign_waithere", type:"overlayImage", posX:770, posY:620},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:0, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:462, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:924, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:1386, posY:740, width:462, height:126},

    //{ref:"sign_pressandhold", type:"signAnim",fromX:400, fromY:20, toX:500, toY:320, autostart:true},
    {ref:"sign_pressandhold", type:"overlayImage", posX:500, posY:320},

    {ref:"hypnotists_tent", type:"overlayImage", posX:0, posY:540},

    {ref:"stain_barrel", type:"overlayImage", posX:1010, posY:870},
    {ref:"fallingBarrel", name:"b1",type:"fallingBlock", className:"fallingBarrel", posX:1020, posY:480, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:1, start:"resting"}},

    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"b1", posX:960, posY:843},

    {name:"blocker1",type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {name:"blocker2",type:"blocker", posX:1480 , posY:0 , width:40 , height:0 },
    {name:"blocker3",type:"blocker", posX:70 , posY:700 , width:120 , height:200 },
    //{ref:"movingPlatformWide", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformWide", posX:770, posY:600, cellWidth:270, cellHeight:52, numCells:1, bbWidth:270, bbHeight:52, speed:0, minX:770, maxX:770, minY:280, maxY:882, velX:0, velY:2.9, line:{fromX:770, fromY:600, toX:1040, toY:600}},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:620, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:720, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:820, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:520, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:670, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:820, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:1265, posY:840, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:1265, posY:790, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1265, posY:740, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:1150, posY:740, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:1210, posY:740, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1270, posY:740, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:500, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:790, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1150, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 880, 1800, 880]}},

    {ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:1650, posY:570, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:60, bbOffsetY:50}
];

var level1_1 = [
    {type:"reference", title:"Going Up", ref:"level1_1"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:100, posY:870, velX:4, velY:0},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:400, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:840, width:473, height:120},

    {ref:"fadedstalls01", type:"overlayImage", posX:0, posY:630},
    {ref:"scaffold01", type:"overlayImage", url:"media/elements/scaffold01.png", posX:1150, posY:550, width:124, height:343},
    {ref:"scaffold01", type:"overlayImage", url:"media/elements/scaffold01.png", posX:1150, posY:350, width:124, height:343},

    {ref:"sign_standstill", type:"overlayImage", posX:820, posY:420},

    {ref:"platform_funtime", type:"overlayImage", posX:1040, posY:400},
    {name:"blocker1",type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {name:"blocker2",type:"blocker", posX:1240 , posY:160 , width:40 , height:800 },
    {ref:"stand_marker_large", type:"overlayImage", posX:770, posY:880},
    {ref:"sign_board_here", type:"overlayImage", posX:948, posY:794},

    {ref:"movingPlatformWide", name:"movingPlatform1",type:"movingPlatform", posX:770, posY:600, cellWidth:270, cellHeight:52, numCells:1, bbWidth:270, bbHeight:52, speed:0, minX:770, maxX:770, minY:280, maxY:882, velX:0, velY:2.9, line:{fromX:770, fromY:600, toX:1040, toY:600}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:520, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:740, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:980, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:870, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:870, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:870, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:1080, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:580, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:870, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:640, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:660, posY:520, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:680, posY:640, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:520, posY:510, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:650, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:870, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 880, 1280, 880]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1030, 430, 1280, 430]}},

    {ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:1120, posY:90, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:60, bbOffsetY:50}
];

var level1_2 = [
    {type:"reference", title:"Barrels of Fun", ref:"level1_2"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:100, posY:850, velX:4, velY:0},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:500, width:1408, height:440},
    {ref:"sign_do", type:"overlayImage", url:"media/elements/sign_do.png", posX:440, posY:705, width:264, height:153},
    {ref:"platform_dodgems", type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:963, posY:829, width:464, height:148},
    {ref:"platform_funtime", type:"overlayImage", url:"media/elements/platform_funtime.png", posX:747, posY:840, width:301, height:120},
    {ref:"platform_dodgems", type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:360, posY:829, width:464, height:148},
    {ref:"platform_funtime", type:"overlayImage", url:"media/elements/platform_funtime.png", posX:144, posY:840, width:301, height:120},
    {ref:"platform_funtime", type:"overlayImage", url:"media/elements/platform_funtime.png", posX:-80, posY:840, width:301, height:120},

    {type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {type:"blocker", posX:1240 , posY:160 , width:40 , height:800 },
    {ref:"stain_barrel", type:"overlayImage", posX:325, posY:852},
    {ref:"stain_barrel", type:"overlayImage", posX:565, posY:848},
    {ref:"stain_barrel", type:"overlayImage", posX:810, posY:850},
    {ref:"fallingBarrel", name:"b1",type:"fallingBlock", className:"fallingBarrel", posX:330, posY:480, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"falling"}},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"b1", posX:270, posY:825},
    {ref:"fallingBarrel", name:"b2",type:"fallingBlock", className:"fallingBarrel", posX:568, posY:480, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"waiting"}},
    {ref:"impactSmoke_250x40", name:"smoke2",type:"triggeredAnim", trigger:"b2", posX:510, posY:824},
    {ref:"fallingBarrel", name:"b3",type:"fallingBlock", className:"fallingBarrel", posX:816, posY:480, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:1, start:"waiting"}},
    {ref:"impactSmoke_250x40", name:"smoke3",type:"triggeredAnim", trigger:"b3", posX:755, posY:823},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:265, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:490, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:725, posY:720, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:490, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:725, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:960, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:490, posY:830, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:490, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:490, posY:730, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:930, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:990, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1050, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {type:"line", edges:{type:"onewayline", points:[0, 860, 1280, 860]}},
    {ref:"exit_clown", type:"exitLevel",  className:"exit", posX:1100, posY:530, cellWidth:163, cellHeight:294, numCells:1, bbWidth:50, bbHeight:300, bbOffsetX:30, bbOffsetY:50},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:725, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:990, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1150, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16}
];

var level1_3 = [
    {type:"reference", title:"All Aboard", ref:"level1_3"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:100, posY:850, velX:4, velY:0},
    //{ref:"level1_3_full", type:"overlayImage", url:"media/levels/level1_3_full.png", posX:0, posY:0, width:1280, height:960},
    {ref:"background01", type:"overlayImage", posX:0, posY:400, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", posX:0, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", posX:473, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", posX:946, posY:840, width:473, height:120},

    {ref:"fencetile", type:"overlayImage",  posX:0, posY:730, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", posX:462, posY:730, width:462, height:126},
    {ref:"fencetile", type:"overlayImage",  posX:924, posY:730, width:462, height:126},
    {ref:"fencePosters", type:"overlayImage", posX:1000, posY:740, width:255, height:100},

    {ref:"sign_board_here", type:"overlayImage",  posX:550, posY:780},
    {ref:"stand_marker", type:"overlayImage",  posX:530, posY:885},
    {ref:"bigwheelstand_plus", type:"overlayImage",  posX:300, posY:205},

    {type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {type:"blocker", posX:1240 , posY:160 , width:40 , height:800 },

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:980, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1010, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:980, posY:600, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"movingPlatformMediumRed", name:"movingPlatform1",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:926, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.15*2*Math.PI, centreX:540, centreY:531}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform2",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:926, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.35*2*Math.PI, centreX:540, centreY:531}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform3",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:926, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.55*2*Math.PI, centreX:540, centreY:531}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform4",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:926, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.75*2*Math.PI, centreX:540, centreY:531}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform5",type:"movingPlatform", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:926, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.95*2*Math.PI, centreX:540, centreY:531}},

    {ref:"platform_funtime", type:"overlayImage", url:"media/elements/platform_funtime.png", posX:-92, posY:390, width:301, height:120},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:600, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:600, posY:110, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:600, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:597, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:960, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1110, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:600, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:300, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:910, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:550, posY:510, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:610, posY:510, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:670, posY:510, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {type:"line", edges:{type:"onewayline", points:[0, 880, 1280, 880]}},
    {type:"line", edges:{type:"onewayline", points:[0, 420, 250, 425]}},
    {ref:"exit_clown", type:"exitLevel",  className:"exit", posX:0, posY:100, cellWidth:163, cellHeight:294, numCells:1, bbWidth:30, bbHeight:100, bbOffsetX:0, bbOffsetY:50}
];

var level1_4 = [
    {type:"reference", title:"Up and Over", ref:"level1_4"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:100, posY:868, velX:4, velY:0},

    {ref:"background01",type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:400, width:1408, height:440},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:840, width:473, height:120},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:840, width:473, height:120},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:840, width:473, height:120},

    {ref:"fadedstalls02", type:"overlayImage", posX:-120, posY:450},

    {ref:"stand_marker_small", type:"overlayImage", posX:860, posY:880},
    {ref:"exit_clown",name:"exit1",type:"exitLevel",  className:"exit", posX:530, posY:560,cellWidth:163, cellHeight:294, numCells:1, bbWidth:20, bbHeight:100, bbOffsetX:-30, bbOffsetY:50},


    {ref:"dodgempost",type:"overlayImage", url:"media/elements/dodgempost.png", posX:450, posY:530, width:127, height:386},
    {ref:"sign_do",type:"overlayImage", url:"media/elements/sign_do.png", posX:500, posY:310, width:264, height:153},
    {ref:"platform_dodgems",type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:370, posY:410, width:464, height:148},
    {ref:"platform_funtime",type:"overlayImage", url:"media/elements/platform_funtime.png", posX:970, posY:540, width:301, height:120},
    //{ref:"bedofnails",type:"lethalToTouch", className:"bedOfNails", posX:1010, posY:520, cellWidth:252, cellHeight:62, numCells:1,  bbWidth:252, bbHeight:62, speed:0.0},
    {name:"blocker1",type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {name:"blocker1",type:"blocker", posX:462 , posY:452 , width:20 , height:500 },
    {name:"blocker2",type:"blocker", posX:1240 , posY:160 , width:40 , height:800 },

    {ref:"stand_marker", type:"overlayImage", posX:270, posY:880},
    {ref:"movingPlatformMedium",name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:270, posY:600, cellWidth:180, cellHeight:35, numCells:1, bbWidth:180, bbHeight:35, speed:0, minX:270, maxX:270, minY:340, maxY:882, velX:0, velY:2.2, line:{fromX:270, fromY:600, toX:450, toY:600}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:622, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1087, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1160, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:450, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:840, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1160, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:330, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:870, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:870, posY:820, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:590, posY:780, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:840, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1160, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:1087, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:780, posY:620, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1160, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"movingPlatformSmall",name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformSmall", posX:860, posY:600, cellWidth:100, cellHeight:20, numCells:1, bbWidth:260, bbHeight:32, speed:0, minX:860, maxX:860, minY:400, maxY:882, velX:0, velY:2.2, line:{fromX:860, fromY:600, toX:960, toY:600}},

    {ref:"stain_barrel", type:"overlayImage", posX:595, posY:433},
    {ref:"fallingBarrel", name:"b1",type:"fallingBlock", className:"fallingBarrel", posX:590, posY:180, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:1, start:"waiting"}},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"b1", posX:532, posY:414},

    {ref:"boxinghole", type:"overlayImage", posX:700, posY:880},
    {ref:"boxingglove", type:"spike", posX:714, posY:1300, startPosX:714, startPosY:1300, targetPosX:714, targetPosY:1160, offsetY:-160, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:250, bbOffsetX:0, bbOffsetY:-280, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", posX:700, posY:880},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 880, 1280, 880]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1050, 330, 1240, 330]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[460, 450, 820, 450]}},
    {name:"line5",type:"line", edges:{type:"onewayline", points:[980, 562, 1280, 562]}}

];


var level1_5 = [
    {type:"reference", title:"It's Behind You", ref:"level1_5"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:50, posY:875, velX:4, velY:0},
    {ref:"background01", type:"overlayImage", posX:0, posY:400},
    {ref:"floortile", type:"overlayImage", posX:0, posY:840},
    {ref:"floortile", type:"overlayImage", posX:473, posY:840},
    {ref:"floortile", type:"overlayImage", posX:946, posY:840},
    {ref:"fadedstalls02", type:"overlayImage", posX:-40, posY:460},

    {name:"line1", type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2", type:"line", edges:{type:"onewayline", points:[0, 880, 1280, 880]}},

    {ref:"platform_dodgems", type:"overlayImage", posX:980, posY:300},
    {name:"line6", type:"line", edges:{type:"onewayline", points:[1020, 330, 1250, 330]}},

    {ref:"platform_funtime", type:"overlayImage", posX:560, posY:470},
    {name:"line5", type:"line", edges:{type:"onewayline", points:[600, 500, 857, 500]}},
    {ref:"platform_snacks", type:"overlayImage", posX:440, posY:450},
    {ref:"platform_snacks", type:"overlayImage", posX:320, posY:450},
    {name:"line4", type:"line", edges:{type:"onewayline", points:[350, 540, 600, 540]}},
    {ref:"platform_funtime", type:"overlayImage", posX:85, posY:520},
    {name:"line3", type:"line", edges:{type:"onewayline", points:[115, 550, 350, 550]}},

    {ref:"zombieBaddieAnim", type:"npcBaddieInit", className:"zombieBaddieAnim", posX:855, posY:-80, offsetY:25, velX:-1.45, velY:0, cellWidth:150, cellHeight:300, numCells:10, bbWidth:100, bbHeight:200, bbOffsetX:20, bbOffsetY:50, speed:0.1},

    {type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {type:"blocker", posX:1240 , posY:160 , width:40 , height:800 },

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:306, posY:884, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:318, posY:1280, startPosX:318, startPosY:1280, targetPosX:318, targetPosY:1120, offsetY:-125, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:250, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:306, posY:884, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:532, posY:884, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:544, posY:1280, startPosX:544, startPosY:1280, targetPosX:544, targetPosY:1120, offsetY:-125, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:250, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:3, "return":0.3, start:"resting"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:532, posY:884, width:87, height:24},

    {ref:"boxinghole", type:"overlayImage", url:"media/elements/boxinghole.png", posX:758, posY:884, width:87, height:24},
    {ref:"boxingglove", type:"spike", className:"boxingGlove", posX:770, posY:1280, startPosX:770, startPosY:1280, targetPosX:770, targetPosY:1120, offsetY:-125, cellWidth:62, cellHeight:250, numCells:1, cropDiv:true,  bbWidth:62, bbHeight:250, bbOffsetX:0, bbOffsetY:0, seq:{wait:2, spike:0.15, rest:2.5, "return":0.3, start:"spiking"}},
    {ref:"boxinghole_overlay", type:"overlayImage", url:"media/elements/boxinghole_overlay.png", posX:758, posY:884, width:87, height:24},

    {ref:"stand_marker", type:"overlayImage", posX:865, posY:880},
    {ref:"movingPlatformMedium", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMedium", posX:865, posY:600, cellWidth:180, cellHeight:35, numCells:1, bbWidth:180, bbHeight:35, speed:0, minX:865, maxX:865, minY:278, maxY:882, velX:0, velY:2.9, line:{fromX:865, fromY:600, toX:1025, toY:600}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:240, posY:460, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:450, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:680, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},


    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:660, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:895, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1030, posY:250, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:425, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:650, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:920, posY:250, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:850, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:900, posY:190, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:950, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:1120, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:650, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:680, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},


    {ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:1116, posY:00, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:60, bbOffsetY:50}

];

var level1_6 = [
    {type:"reference", title:"Don't Look Down", ref:"level1_6"},
    {type:"worldInit", worldWidth:2224,  worldHeight:1200},
    {type:"playerInit", posX:80, posY:486, velX:4, velY:0},
    {ref:"background01",type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:640, width:1408, height:440},
    {ref:"background01",type:"overlayImage", url:"media/elements/background01_tile.png", posX:1408, posY:640, width:1408, height:440},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:1080, width:473, height:120},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:1080, width:473, height:120},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:1080, width:473, height:120},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:1419, posY:1080, width:473, height:120},
    {ref:"floortile",type:"overlayImage", url:"media/elements/floortile.png", posX:1892, posY:1080, width:473, height:120},

    {ref:"movingPlatformMedium",name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMedium", posX:1315, posY:510, cellWidth:180, cellHeight:35, numCells:1, bbWidth:180, bbHeight:35, speed:0, minX:1100, maxX:1230, minY:500, maxY:500, velX:-1.5, velY:0, line:{fromX:1315, fromY:510, toX:1515, toY:510}},

    //{ref:"platform_snacks",type:"overlayImage", url:"media/elements/platform_snacks.png", posX:970, posY:420, width:213, height:200},
    //{ref:"platform_funtime",type:"overlayImage", url:"media/elements/platform_funtime.png", posX:780, posY:480, width:301, height:120},
    //{ref:"platform_snacks",type:"overlayImage", url:"media/elements/platform_snacks.png", posX:660, posY:420, width:213, height:200},
    {ref:"track_flat_thin",type:"overlayImage", posX:846, posY:494 },
    {ref:"track_flat_thin",type:"overlayImage", posX:700, posY:494 },

    {ref:"movingPlatformMediumRed",name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMediumRed", posX:390, posY:500, cellWidth:180, cellHeight:35, numCells:1, bbWidth:180, bbHeight:35, speed:0, minX:390, maxX:570, minY:500, maxY:500, velX:1.5, velY:0, line:{fromX:390, fromY:500, toX:590, toY:500}},

    //{ref:"movingPlatformSmall",name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformSmall", posX:546, posY:500, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:390, maxX:650, minY:500, maxY:500, velX:1.5, velY:0, line:{fromX:546, fromY:500, toX:646, toY:500}},
    {ref:"movingPlatformSmall",name:"movingPlatform3",type:"movingPlatform", className:"movingPlatformSmall", posX:1885, posY:756, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:1785, maxX:1900, minY:756, maxY:756, velX:1.5, velY:0, line:{fromX:1885, fromY:756, toX:1985, toY:756}},

    {ref:"track_flat",type:"overlayImage", posX:130, posY:494 },
    {ref:"track_flat",type:"overlayImage", posX:-100, posY:494 },



    {ref:"platform_dodgems",type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:1365, posY:720, width:464, height:168},
    {type:"blocker", posX:0 , posY:0 , width:40 , height:1200 },

    {ref:"cactus_x3",name:"bedOfNails1", type:"lethalToTouch", className:"bedOfNails", posX:1650, posY:1030, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:500, bbHeight:50, speed:0.0},

    {ref:"cactus_x3",name:"bedOfNails2", type:"lethalToTouch", className:"bedOfNails", posX:220, posY:980, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:500, bbHeight:50, speed:0.0},
    {ref:"cactus_x3",name:"bedOfNails4", type:"lethalToTouch", className:"bedOfNails", posX:620, posY:980, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:500, bbHeight:50, speed:0.0},
    {ref:"cactus_x3",name:"bedOfNails6", type:"lethalToTouch", className:"bedOfNails", posX:1126, posY:980, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:500, bbHeight:50, speed:0.0},
    {ref:"cactus_x3",name:"bedOfNails7", type:"lethalToTouch", className:"bedOfNails", posX:1326, posY:980, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:500, bbHeight:50, speed:0.0},

    {ref:"stain_barrel", type:"overlayImage", posX:225, posY:491},
    {ref:"stain_barrel", type:"overlayImage", posX:766, posY:492},
    {ref:"stain_barrel", type:"overlayImage", posX:969, posY:493},
    {ref:"stain_barrel", type:"overlayImage", posX:1644, posY:743},
    {ref:"fallingBarrel",name:"block1", type:"fallingBlock", className:"fallingBarrel", posX:220, posY:180, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:1, start:"falling"}},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"block1", posX:162, posY:465},
    {ref:"fallingBarrel",name:"block2", type:"fallingBlock", className:"fallingBarrel", posX:760, posY:180, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:2, start:"waiting"}},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"block2", posX:704, posY:464},
    {ref:"fallingBarrel",name:"block3", type:"fallingBlock", className:"fallingBarrel", posX:960, posY:180, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:2, start:"waiting"}},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"block3", posX:906, posY:462},
    {ref:"fallingBarrel",name:"block4", type:"fallingBlock", className:"fallingBarrel", posX:1644, posY:400, cellWidth:118, cellHeight:571, numCells:1, bbWidth:118, bbHeight:571, bbOffsetX:0, bbOffsetY:-100, seq:{wait:1, hoist:2, rest:2, start:"waiting"}},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"block4", posX:1589, posY:717},

    {ref:"track_flat", type:"overlayImage", posX:1510, posY:83},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:1490, posY:470, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1500, posY:580, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:2015, posY:690, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:520, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1500, posY:580, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:2030, posY:840, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:520, posY:440, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:520, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:520, posY:360, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:2000, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:2015, posY:810, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:2030, posY:860, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:406, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:1110, posY:380, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1780, posY:640, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {name:"line1", type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2", type:"line", edges:{type:"onewayline", points:[0, 500, 420, 500]}},
    {name:"line3", type:"line", edges:{type:"onewayline", points:[720, 500, 1126, 500]}},
    {name:"line4", type:"line", edges:{type:"onewayline", points:[1400, 756, 1800, 750]}},
    {name:"line4", type:"line", edges:{type:"onewayline", points:[0, 1100, 2250, 1100]}},
    {ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:2100, posY: 790, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:60, bbOffsetY:50}

];

var level1_7 = [
    {type:"reference", title:"This Town Ain't Big Enough", ref:"level1_7"},
    {type:"worldInit", worldWidth:1744,  worldHeight:960},
    {type:"playerInit", posX:250, posY:840, velX:4, velY:0},
    //{type:"overlayImage", url:"media/levels/level1_7_full.png", posX:0, posY:0, width:1744, height:960},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:400, width:1408, height:440},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:1408, posY:400, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:1419, posY:840, width:473, height:120},

    {type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {type:"blocker", posX:1730 , posY:0 , width:30 , height:1200 },
    {type:"blocker", posX:1275 , posY:522 , width:30 , height:700 },
    {ref:"platform_dodgems", type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:1420, posY:490, width:464, height:168},
    {ref:"platform_funtime", type:"overlayImage", url:"media/elements/platform_funtime.png", posX:1200, posY:500, width:301, height:120},

    {ref:"collapsingPlatform", name:"collapsingPlatform1",type:"collapsingPlatform", posX:1100, posY:515, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:1140, fromY:520, toX:1250, toY:520}},
    {ref:"collapsingPlatform", name:"collapsingPlatform2",type:"collapsingPlatform", posX:990, posY:515, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:1030, fromY:520, toX:1140, toY:520}},
    {ref:"collapsingPlatform", name:"collapsingPlatform3",type:"collapsingPlatform", posX:880, posY:515, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:920, fromY:520, toX:1030, toY:520}},
    {ref:"collapsingPlatform", name:"collapsingPlatform4",type:"collapsingPlatform", posX:770, posY:515, cellWidth:165, cellHeight:150, numCells:5, bbWidth:165, bbHeight:150, steps:5, stepCount:7, line:{fromX:810, fromY:520, toX:920, toY:520}},

    {ref:"cactus_x3", type:"lethalToTouch", className:"cactus_x3", posX:690, posY:720, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cactus_x3", type:"lethalToTouch", className:"cactus_x3", posX:890, posY:720, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cactus_x3", type:"lethalToTouch", className:"cactus_x3", posX:1090, posY:720, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},
    {ref:"cactus_x3", type:"lethalToTouch", className:"cactus_x3", posX:1290, posY:720, cellWidth:200, cellHeight:50, numCells:1,  bbWidth:400, bbHeight:10, speed:0.0},


    {ref:"stairs3", type:"overlayImage", posX:322, posY:400},

    {ref:"stain_crate", type:"overlayImage", posX:1244, posY:512},

    {ref:"fallingBlockSquare", name:"b1",type:"fallingBlock", className:"fallingBlockSquare", posX:1280, posY:100, cellWidth:136, cellHeight:136, numCells:1, bbWidth:136, bbHeight:136, bbOffsetX:0, bbOffsetY:-100, seq:{wait:2, hoist:2, rest:3, start:"resting"}},
    {ref:"crate", name:"crate",type:"attachedImage", url:"media/elements/crate.png", width:221, height:194, attachedTo:"b1", offsetX:-50, offsetY:-170, placeBehind:false},
    {ref:"impactSmoke_250x40", name:"smoke1",type:"triggeredAnim", trigger:"b1", posX:1180, posY:500},

    {ref:"zombieBaddieAnim", type:"npcBaddieInit", className:"zombieBaddieAnim", posX:150, posY:-580, offsetY:36, velX:1.5, velY:0, cellWidth:200, cellHeight:300, numCells:10, bbWidth:80, bbHeight:300, bbOffset:0, bbOffsetY:0, speed:0.3},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:1290, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1340, posY:400, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1390, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:750, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:950, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1150, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:800, posY:470, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:800, posY:420, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:800, posY:370, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:1410, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:1460, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1510, posY:410, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:520, posY:560, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:580, posY:500, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:640, posY:440, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {name:"line1", type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2", type:"line", edges:{type:"onewayline", points:[0, 870, 370, 870, 770, 520, 810, 520]}},
    //{name:"line3", type:"line", edges:{type:"onewayline", points:[720, 500, 1126, 500]}},
    {name:"line4", type:"line", edges:{type:"onewayline", points:[1250, 520, 1800, 520]}},
    {name:"line5", type:"line", edges:{type:"onewayline", points:[0, 900, 2250, 900]}},
    {ref:"exit_clown", type:"exitLevel",  className:"exit", posX:1590, posY:190, cellWidth:100, cellHeight:100, numCells:1, bbWidth:10, bbHeight:200, bbOffsetX:60, bbOffsetY:100}
];


var level1_8 = [
    {type:"reference", title:"Unbe-lever-ble", ref:"level1_8"},
    {type:"worldInit", worldWidth:1280,  worldHeight:960},
    {type:"playerInit", posX:100, posY:854, velX:4, velY:0},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:400, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:840, width:473, height:120},
    //{type:"overlayImage", url:"media/levels/level1_1_test.png", posX:0, posY:0, width:1280, height:960},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:0, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:462, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:924, posY:740, width:462, height:126},
    {ref:"fencePosters", type:"overlayImage", posX:1000, posY:750, width:255, height:100},
    {ref:"platform_dodgems", type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:1020, posY:466, width:464, height:168},
    {name:"blocker1",type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {name:"blocker2",type:"blocker", posX:1240 , posY:160 , width:40 , height:800 },
    {ref:"stand_marker", type:"overlayImage", posX:707, posY:880},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:1160, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:950, posY:350, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:750, posY:250, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:1170, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:745, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:915, posY:340, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:540, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:745, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:915, posY:430, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:620, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:620, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:620, posY:650, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:640, posY:450, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:535, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:470, posY:650, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"movingLeverPlatformMedium", name:"movingPlatform2",type:"movingPlatform", className:"movingLeverPlatformMedium", posX:876, posY:580, cellWidth:180, cellHeight:35, numCells:1, bbWidth:180, bbHeight:35, speed:0.05, minX:866, maxX:866, minY:450, maxY:660, velX:0, velY:1.3, line:{fromX:876, fromY:580, toX:1056, toY:580}},
    {ref:"movingPlatformMedium", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformMedium", posX:710, posY:660, cellWidth:180, cellHeight:35, numCells:1, bbWidth:180, bbHeight:35, speed:0.05, minX:700, maxX:700, minY:400, maxY:882, velX:0, velY:-2.4, line:{fromX:710, fromY:660, toX:890, toY:660}},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 880, 1280, 880]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1050, 520, 1280, 500]}},
    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:500, posY:820, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:70, bbHeight:60, bbOffsetX:40, bbOffsetY:0, speed:0, isOn:false, switchTargets:{ movingPlatform2:true}},
    //{name:"switch2",type:"switch", className:"switch", posX:750, posY:830, cellWidth:50, cellHeight:60, numCells:2,  bbWidth:50, bbHeight:60, speed:0, isOn:true, switchTargets:{movingPlatform1:true}},
    {ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:1140, posY:170, cellWidth:100, cellHeight:100, numCells:2, bbWidth:70, bbHeight:200, bbOffsetX:80, bbOffsetY:200}
];

var level1_9 = [
    {type:"reference", title:"Eyes In The Sky", ref:"level1_9"},
    {type:"worldInit", worldWidth:1400,  worldHeight:1920},
    {type:"playerInit", posX:100, posY:1834, velX:4, velY:0},
    //{ref:"level1_9_full", type:"overlayImage", url:"media/levels/level1_9_full.png", posX:0, posY:0, width:1400, height:1920},
    //{type:"bouncer",  className:"spring", posX:1040, posY:460, cellWidth:100, cellHeight:100, numCells:4, bounceYAmt:jumpYVel, bbWidth:20, bbHeight:10, bbOffsetX:0, bbOffsetY:50, speed:0.2},
    {type:"blocker", posX:0 , posY:0 , width:40 , height:2000 },
    {type:"blocker", posX:1390 , posY:0 , width:40 , height:2000 },

    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:1360, width:1408, height:440},

    {ref:"floortile", type:"overlayImage", posX:0, posY:1800},
    {ref:"floortile", type:"overlayImage", posX:473, posY:1800},
    {ref:"floortile", type:"overlayImage", posX:946, posY:1800},
    {ref:"floortile", type:"overlayImage", posX:1419, posY:1800},

    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:0, posY:1700, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:462, posY:1700, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:924, posY:1700, width:462, height:126},

    {ref:"stand_marker", type:"overlayImage", posX:825, posY:1848},

    {ref:"bigwheelstand_plus", type:"overlayImage",  posX:320, posY:650},
    {ref:"bigwheelstand_plus", type:"overlayImage",  posX:570, posY:1170},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:882, posY:1480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:630, posY:960, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:630, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:514, posY:1480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:882, posY:1480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1250, posY:1480, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:1320, posY:1750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:730, posY:1150, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:950, posY:750, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:630, posY:760, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:500, posY:1060, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:760, posY:1060, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:550, posY:960, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:710, posY:960, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1000, posY:960, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"movingPlatformMediumRed", name:"movingPlatform7", type:"movingPlatform", className:"movingPlatformMediumRed", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.15*2*Math.PI, centreX:570, centreY:980}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform8",type:"movingPlatform", className:"movingPlatformMediumRed", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.35*2*Math.PI, centreX:570, centreY:980}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform9",type:"movingPlatform", className:"movingPlatformMediumRed", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.55*2*Math.PI, centreX:570, centreY:980}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform10",type:"movingPlatform", className:"movingPlatformMediumRed", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.75*2*Math.PI, centreX:570, centreY:980}},
    {ref:"movingPlatformMediumRed", name:"movingPlatform11",type:"movingPlatform", className:"movingPlatformMediumRed", posX:750, posY:720, cellWidth:180, cellHeight:30, numCells:1, bbWidth:180, bbHeight:30, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:-0.01, rotationPosition:0.95*2*Math.PI, centreX:570, centreY:980}},

    {ref:"movingPlatformMedium", name:"movingPlatform1", type:"movingPlatform", className:"movingPlatformMedium", posX:750, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:0.01, rotationPosition:0, centreX:800, centreY:1500}},
    {ref:"movingPlatformMedium", name:"movingPlatform2",type:"movingPlatform", className:"movingPlatformMedium", posX:750, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:0.01, rotationPosition:0.2*2*Math.PI, centreX:800, centreY:1500}},
    {ref:"movingPlatformMedium", name:"movingPlatform3",type:"movingPlatform", className:"movingPlatformMedium", posX:750, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:0.01, rotationPosition:0.4*2*Math.PI, centreX:800, centreY:1500}},
    {ref:"movingPlatformMedium", name:"movingPlatform4",type:"movingPlatform", className:"movingPlatformMedium", posX:750, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:0.01, rotationPosition:0.6*2*Math.PI, centreX:800, centreY:1500}},
    {ref:"movingPlatformMedium", name:"movingPlatform5",type:"movingPlatform", className:"movingPlatformMedium", posX:750, posY:720, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:790, maxX:820, minY:480, maxY:900, velX:1, velY:1.3, line:{fromX:750, fromY:720, toX:930, toY:720}, rotation:{radius:350, rate:0.01, rotationPosition:0.8*2*Math.PI, centreX:800, centreY:1500}},

    {ref:"zombieBaddieAnim", type:"npcBaddieInit", className:"zombieBaddieAnim", posX:830, posY:-80, offsetY:36, velX:-0.001, velY:0, cellWidth:200, cellHeight:300, numCells:10, bbWidth:100, bbHeight:200, bbOffsetX:20, bbOffsetY:50, speed:0.07},

    {type:"line", edges:{type:"onewayline", points:[0, 1840, 1400, 1840]}},
    {type:"line", edges:{type:"onewayline", points:[0, 850, 250, 850]}},
    {ref:"platform_funtime", type:"overlayImage",  posX:-50, posY:830},
    {ref:"exit_clown", type:"exitLevel",  className:"exit", posX:20, posY:520, cellWidth:100, cellHeight:100, numCells:1, bbWidth:50, bbHeight:300, bbOffsetX:0, bbOffsetY:100}
];


var level1_10S = [
    {type:"reference", title:"Engage The Cage", ref:"level1_10S"},
    {type:"worldInit", worldWidth:1500,  worldHeight:720},
    {type:"playerInit", posX:75, posY:330, velX:4, velY:0},
    //{type:"overlayImage", url:"media/levels/level1_10_full_.png", posX:0, posY:0, width:1500, height:720},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:170, width:1408, height:440},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:1408, posY:170, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:610, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:610, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:610, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:1419, posY:610, width:473, height:120},
    {ref:"fadedstalls02", type:"overlayImage", posX:-480, posY:220},
    {ref:"sign_trapvillain", type:"overlayImage", posX:630, posY:170},
    {ref:"stand_marker_small", type:"overlayImage", posX:1160, posY:660},
    {ref:"movingPlatformSmall", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformSmall", posX:1160, posY:450, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:1160, maxX:1160, minY:250, maxY:662, velX:0, velY:2.9, line:{fromX:1160, fromY:450, toX:1260, toY:450}},

    {ref:"platform_dodgems", type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:1250, posY:290, width:464, height:168},
    {ref:"platform_funtime", type:"overlayImage", url:"media/elements/platform_funtime.png", posX:-90, posY:315, width:301, height:120},
    {ref:"platform_snacks", type:"overlayImage", url:"media/elements/platform_snacks.png", posX:960, posY:230, width:213, height:200},
    {ref:"wall01", type:"overlayImage", url:"media/elements/wall01.png", posX:970, posY:160, width:74, height:180},
    {ref:"wall02", type:"overlayImage", url:"media/elements/wall02.png", posX:970, posY:10, width:74, height:180},
    {ref:"wall02", type:"overlayImage", url:"media/elements/wall02.png", posX:970, posY:-140, width:74, height:180},
    {ref:"wall02", type:"overlayImage", url:"media/elements/wall02.png", posX:970, posY:-290, width:74, height:180},
    {type:"blocker", posX:0 , posY:0 , width:20 , height:750 },
    {type:"blocker", posX:1500 , posY:0 , width:20 , height:750 },
    {type:"blocker", posX:1027 , posY:0 , width:60 , height:350 },


    {name:"line1",type:"line", edges:{type:"line", points:[0, 660, 1500, 660]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 340, 170, 340]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1032, 332, 1150, 332]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[1293, 332, 1500, 332]}},

    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:1180, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:1180, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1280, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:1180, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:1300, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1420, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:663, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:1010, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:1180, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:1180, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:1180, posY:375, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1180, posY:200, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:600, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:663, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:726, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:980, posY:607, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:140, bbHeight:66, speed:0, isOn:false, switchTargets:{ movingPlatform1:false}},
    {ref:"switch", name:"switch2",type:"switch", className:"switch", posX:1240, posY:266, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:80, bbHeight:66, speed:0, isOn:true, switchTargets:{ cage1:false}},

    {ref:"cagefront01", name:"cage1", type:"cage", className:"cage", posX:580, posY:60, cellWidth:252, cellHeight:677, numCells:1, bbWidth:256, bbHeight:256, bbOffsetX:0, bbOffsetY:400,  start:"waiting", cageTargets:{baddie:true}},
    {ref:"zombieBaddieAnim", name:"baddie", type:"npcBaddieInit", className:"zombieBaddieAnim", posX:680, posY:200, offsetY:36, velX:1.2, velY:0, cellWidth:200, cellHeight:300, numCells:10, bbWidth:80, bbHeight:200, bbOffsetX:25, bbOffsetY:0, speed:0.2},


    {ref:"cageback01", name:"cageBehind",type:"attachedImage", url:"media/elements/cageback01.png", width:251, height:210, attachedTo:"cage1", offsetX:0, offsetY:-210, placeBehind:true},
    {ref:"exit2", type:"exitLevel",  className:"exit", posX:10, posY:-700, cellWidth:100, cellHeight:100, numCells:2, bbWidth:100, bbHeight:100, bbOffsetX:0, bbOffsetY:50}
];

var level_test = [
    {type:"reference", title:"***TEST LEVEL***", ref:"level_test"},
    {type:"worldInit", worldWidth:1500,  worldHeight:720},
    {type:"playerInit", posX:375, posY:200, velX:4, velY:0},
    //{type:"overlayImage", url:"media/levels/level1_10_full_.png", posX:0, posY:0, width:1500, height:720},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:0, posY:170, width:1408, height:440},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:1408, posY:170, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:610, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:610, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:610, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:1419, posY:610, width:473, height:120},
    {ref:"platform_dodgems", type:"overlayImage", url:"media/elements/platform_dodgems.png", posX:1250, posY:290, width:464, height:168},
    {ref:"platform_funtime", type:"overlayImage", url:"media/elements/platform_funtime.png", posX:-90, posY:315, width:301, height:120},
    {ref:"platform_snacks", type:"overlayImage", url:"media/elements/platform_snacks.png", posX:960, posY:230, width:213, height:200},

    {type:"blocker", posX:0 , posY:0 , width:20 , height:750 },
    {type:"blocker", posX:1500 , posY:0 , width:20 , height:750 },
    {type:"blocker", posX:1027 , posY:0 , width:60 , height:350 },
    //{ref:"movingPlatformSmall", name:"movingPlatform1",type:"movingPlatform", className:"movingPlatformSmall", posX:1160, posY:450, cellWidth:100, cellHeight:20, numCells:1, bbWidth:100, bbHeight:20, speed:0, minX:1160, maxX:1160, minY:250, maxY:662, velX:0, velY:2.9, line:{fromX:1160, fromY:450, toX:1260, toY:450}},
    {name:"line1",type:"line", edges:{type:"line", points:[0, 660, 1500, 660]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 340, 170, 340]}},
    {name:"line3",type:"line", edges:{type:"onewayline", points:[1032, 332, 1150, 332]}},
    {name:"line4",type:"line", edges:{type:"onewayline", points:[1293, 332, 1500, 332]}},

    {ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:400, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.18},
    {ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:500, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.18},
    {ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:600, posY:550, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.18},

    {ref:"switch", name:"switch1",type:"switch", className:"switch", posX:980, posY:607, cellWidth:140, cellHeight:68, numCells:2,  bbWidth:40, bbHeight:66, bbOffsetX:10, bbOffsetY:20, speed:0, isOn:false, switchTargets:{ movingPlatform1:false}},

    {ref:"exit", type:"exitLevel",  className:"exit", posX:1320, posY:400, cellWidth:100, cellHeight:100, numCells:1, bbWidth:50, bbHeight:230, bbOffsetX:50, bbOffsetY:200}
];

/***********************************************************************************************
 STAGE 1
 ************************************************************************************************/
var level_placeholder = [
    {type:"reference", title:"***PLACEHOLDR LEVEL***", ref:"level_placeholder"},
    {type:"worldInit", worldWidth:1800,  worldHeight:960},
    {type:"playerInit", posX:200, posY:860, velX:4, velY:0},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:-300, posY:400, width:1408, height:440},
    {ref:"background01", type:"overlayImage", url:"media/elements/background01_tile.png", posX:1108, posY:400, width:1408, height:440},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:0, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:473, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:946, posY:840, width:473, height:120},
    {ref:"floortile", type:"overlayImage", url:"media/elements/floortile.png", posX:1339, posY:840, width:473, height:120},


    {ref:"fadedstalls01", type:"overlayImage", url:"media/elements/fadedstalls01.png", posX:0, posY:550, width:1188, height:232},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:0, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:462, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:924, posY:740, width:462, height:126},
    {ref:"fencetile", type:"overlayImage", url:"media/elements/fencetile.png", posX:1386, posY:740, width:462, height:126},

    {ref:"hypnotists_tent", type:"overlayImage", url:"media/elements/hypnotists_tent.png", posX:0, posY:540},
    {ref:"placeholderLevel", type:"overlayImage", posX:200, posY:540},

    {name:"blocker1",type:"blocker", posX:0 , posY:160 , width:40 , height:800 },
    {name:"blocker2",type:"blocker", posX:1480 , posY:0 , width:40 , height:0 },
    {name:"blocker3",type:"blocker", posX:70 , posY:700 , width:120 , height:200 },
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup1",type:"pickup", posX:400, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup2",type:"pickup", posX:800, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"velma", ref:"toffeeapple_pickup", name:"pickup3",type:"pickup", posX:1200, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"scooby", ref:"hotdog_pickup", name:"pickup1",type:"pickup", posX:1400, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup2",type:"pickup", posX:800, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"scooby", ref:"hotdog_pickup", name:"pickup3",type:"pickup", posX:1200, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"shaggy", ref:"burger_pickup", name:"pickup1",type:"pickup", posX:800, posY:840, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup2",type:"pickup", posX:800, posY:790, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"shaggy", ref:"burger_pickup", name:"pickup3",type:"pickup", posX:800, posY:740, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup1",type:"pickup", posX:400, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup2",type:"pickup", posX:800, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"daphne", ref:"cottoncandy_pickup", name:"pickup3",type:"pickup", posX:1200, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {character:"fred", ref:"pop_pickup", name:"pickup1",type:"pickup", posX:400, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup2",type:"pickup", posX:800, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},
    {character:"fred", ref:"pop_pickup", name:"pickup3",type:"pickup", posX:1200, posY:800, cellWidth:60, cellHeight:60, numCells:6,  bbWidth:60, bbHeight:60, speed:0.16},

    {name:"line1",type:"line", edges:{type:"line", points:[0, worldHeight-1, worldWidth+1, worldHeight-1]}},
    {name:"line2",type:"line", edges:{type:"onewayline", points:[0, 880, 1800, 880]}},

    {ref:"exit_clown", name:"exit1",type:"exitLevel",  className:"exit", posX:1650, posY:570, cellWidth:163, cellHeight:294, numCells:1, bbWidth:100, bbHeight:100, bbOffsetX:60, bbOffsetY:50}
];