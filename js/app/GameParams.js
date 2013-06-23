var player;

var bgPosX = 0, bgPosY = 0,
    inputX = 0, inputY = 0,
    currentX = 0, currentY = 0,
    scenePosX=0, scenePosY=0,
    prevScenePosX=0, prevScenePosY=0,
    lastTime=0, thisTime=0;

var ladders=[],	lines=[], hittables = [], switchables = [], images = [], updateables=[], movingPlatforms=[], characters=[],	blockers=[];
var currentLevel=0
var selectedCharacter = 0;

var names = ["shaggy", "scooby", "velma", "fred", "daphne"];
var characterName = "scooby";
var collectedItems=[];//Collected in game
var recordOfCollections = {}; //Record of maximum collected per level for each character: characterName+"_"+levelNum:numCollected
//recordOfCollections["shaggy_2"]=3;
//recordOfCollections["daphne_1"]=2;
//recordOfCollections["velma_1"]=2;
var levelsUnlocked = [];
var inputDown=false, inputLifted=false, inputIsMoving = false,
    isInContact = false, isOnLadder=false;

function initGameState()
{
    //Tewst local storage - if valid then will apply to 'recordOfCollections' and 'levelsUnlocked'
    localStorageManager.retrieveGameData();
}

function initLevelsCompleted(numLevels)
{
    for(var i=0;i<numLevels;i++)
    {
        levelsUnlocked.push(false);
    }
    levelsUnlocked[0]=true;
}