var MEDIA_SIZE_RATIO = 1.0;
var worldWidth = 1920;
var worldHeight = 2580;
var SCREEN_WIDTH = 960;
var SCREEN_HEIGHT = 640;
var HALF_SCREEN_WIDTH = SCREEN_WIDTH * 0.5;
var HALF_SCREEN_HEIGHT = SCREEN_HEIGHT - 200;
var EXTENT_MINX = 0;
var EXTENT_MAXX = SCREEN_WIDTH;
var EXTENT_MINY = 0;
var EXTENT_MAXY = 640;
var FPS = 60;
var FRAME_TIME = 1000 / FPS;
var FPSMultiplier = 60 / FPS;
var velocityAmt = 0.4 * FPSMultiplier; // Vel amount for l/r movement
var jumpYVel = -12 * FPSMultiplier; // Calcs to equate velocities and feel across different fps
var ladderSpeed = 3 * FPSMultiplier;
var RENDER_RATIO = 1.0;

// keycodes
var SKY_TILE_WIDTH = 597;
var SPACE = 32;
var LEFT = 37;
var RIGHT = 39;
var UP = 38;
var DOWN = 40;
var ENTER = 13;

// control flags
var leftIsDown = false;
var rightIsDown = false;
var jumpIsDown = false;
var jumpLeftIsDown = false;
var jumpRightIsDown = false;
var upIsDown = false;
var downIsDown = false;

// dev
var doScroll = true;
var doDebug = true;
var doTrace = true;
var audioOn = false;
var CONTROL_TYPE = "rings";