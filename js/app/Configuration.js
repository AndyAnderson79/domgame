
//Jon Howard - @swingpants
//swingpants.com

var MEDIA_SIZE_RATIO = 1.0; //HD=1.0 // SD=0.75;
//World & Screen sizes
var worldWidth=1920, worldHeight=2580,
    SCREEN_WIDTH=960, SCREEN_HEIGHT=640,
    HALF_SCREEN_WIDTH=SCREEN_WIDTH*0.5,
    HALF_SCREEN_HEIGHT=SCREEN_HEIGHT-200;//SCREEN_HEIGHT*0.5;

var EXTENT_MINX = 0, EXTENT_MAXX = SCREEN_WIDTH,
    EXTENT_MINY = 0, EXTENT_MAXY = 640;

function updateGameParams()
{
    return;
    SCREEN_WIDTH = 960 * MEDIA_SIZE_RATIO;
    SCREEN_HEIGHT = 640 * MEDIA_SIZE_RATIO;

    HALF_SCREEN_WIDTH=SCREEN_WIDTH*0.5;
    HALF_SCREEN_HEIGHT=SCREEN_HEIGHT-200*MEDIA_SIZE_RATIO;
}

//if(IS_DESKTOP_BARLESQUE) document.getElementById('cbbc-game-holder').style.height="480px";
/*
 var gameContainer;
 if(!IS_MOBILE_DEVICE)
 {//Within BBC barlesque so desktop
 gameContainer = document.getElementById('cbbc-game-holder');
 gameContainer.style.height = "480px";
 }
 else
 {//build directly on body
 //gameContainer = document.body;
 gameContainer = document.getElementById('gameContainer');
 }
 */
//Dev params
var doScroll=true,
    doDebug=false,
    doTrace=true,
    audioOn=false;

var CONTROL_TYPE = "rings";//buttons or rings. Buttons displayed on screen, rings implicit.

//Game params
var FPS = 60, //Frames per second
    FRAME_TIME = 1000/FPS,
    FPSMultiplier = 60/FPS,
    velocityAmt = 0.4 * FPSMultiplier, //Vel amount for l/r movement
    jumpYVel = -12 * FPSMultiplier, //Calcs to equate velocities and feel across different fps
    ladderSpeed=3* FPSMultiplier;

var RENDER_RATIO = 1.0; //Multiplier to place items on screen based on visual scaling



var SKY_TILE_WIDTH = 597;
//Keycodes
var SPACE = 32,
    LEFT = 37,
    RIGHT = 39,
    UP = 38,
    DOWN = 40,
    ENTER = 13;

//Control flags
var leftIsDown=false, rightIsDown=false, jumpIsDown=false, jumpLeftIsDown=false, jumpRightIsDown=false, upIsDown = false, downIsDown = false;