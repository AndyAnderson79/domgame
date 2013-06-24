var player;
var bgPosX = 0;
var bgPosY = 0;
var inputX = 0;
var inputY = 0;
var currentX = 0;
var currentY = 0;
var scenePosX = 0;
var scenePosY = 0;
var prevScenePosX = 0;
var prevScenePosY = 0;
var lastTime = 0;
var thisTime = 0;
var ladders = [];
var lines = [];
var hittables = [];
var switchables = [];
var images = [];
var updateables = [];
var movingPlatforms = [];
var characters = [];
var blockers = [];
var currentLevel = 0;
var selectedCharacter = 0;
var names = ["shaggy", "scooby", "velma", "fred", "daphne"];
var characterName = "scooby";
var collectedItems = [];
var recordOfCollections = {};
var levelsUnlocked = [];
var inputDown = false;
var inputLifted = false;
var inputIsMoving = false;
var isInContact = false;
var isOnLadder = false;

function initGameState()
{
    localStorageManager.retrieveGameData();
}

function initLevelsCompleted(numLevels)
{
    for (var i = 0; i < numLevels; i++) levelsUnlocked.push(false);

    levelsUnlocked[0]=true;
}