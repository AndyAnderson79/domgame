var assetList =
{
    rotateToPlay: [
        { name: "rotateToPlay", url: "hd/screens/rotate_to_play_rotated.jpg", type:"image", width: 640, height: 960, left: "0%", top: "0%" }
    ],
    loader: [
        { name: "loading_screen", url: "screens/loading_screen.jpg", type: "screen", width: 960, height: 640},
        { name: "loader_image", url: "screens/loader_bar.png", type: "BGDiv", width: 219, height: 94 },
        { name: "loader_image_loaded", url: "screens/loader_bar_loaded.png", type: "BGDiv", width: 219, height: 94 },
        { name: "percentage", url:"stage_level/percentage.png", type: "BGDiv", width: 35, height: 38, left: "51.5%", top: "62%" },
        { name: "smallNumber", url: "stage_level/number_spritesheet_small.png", type: "BGDiv", width: 33, height: 48, columns: 10, rows: 1, multiple: 2 }
    ],
    ui: [
        // buttons
        //{ name: "homeButton", url:"buttons/button_home_144x144.png", type:"button", width:144, height:72, columns:2, rows:1, left:"5%", top:"5%" },
        { name: "exitButton", url: "buttons/button_exit_144x72.png", type: "button", width: 144, height: 72, columns: 2, rows: 1, left: "5%", top: "5%"},
        //{ name: "pauseHomeButton", url:"buttons/button_home_144x144.png", type:"button", width:144, height:72, columns:2, rows:1, left:"5%", top:"5%" },
        { name: "muteButton", url: "buttons/button_mute_144x144.png", type: "button", width: 144, height: 144, columns: 2, rows: 2, left: "88%", top: "5%" },
        { name: "backButton", url: "buttons/button_back_144x72.png", type: "button", width: 144, height: 72, columns: 2, rows: 1, left: "5%", top: "5%" },
        { name: "helpButton", url: "buttons/button_help_144x72.png", type: "button", width: 144, height: 72, columns: 2, rows: 1, left: "79%", top: "5%" },
        { name: "pauseButton", url: "buttons/button_pause_144x72.png", type: "button", width: 144, height: 72, columns: 2, rows: 1, left: "88%", top: "5%" },
        { name: "restartButton", url: "buttons/button_replay_144x72.png", type: "button", width: 144, height: 72, columns: 2, rows: 1, left: "79%", top: "5%" },
        //{ name: "closeButton", url:"buttons/button_close_144x72.png", type:"button", width:144, height:72, columns:2, rows:1, left:"85%", top:"5%" },
        //{ name: "resumePlay", url:"buttons/resume_play.png", type:"button", width:806, height:92, columns:2, rows:1, left:"40%", top:"68%" },
        //{ name: "nextLevel", url:"buttons/next_level.png", type:"button", width:806, height:91, columns:2, rows:1, left:"40%", top:"75%" },
        //{ name: "selectLevel", url:"buttons/select_level.png", type:"button", width:636, height:72, columns:2, rows:1, left:"52%", top:"58%" },
        //{ name: "retryLevel", url:"buttons/replay_level.png", type:"button", width:634, height:72, columns:2, rows:1, left:"8%", top:"58%" },
        //{ name: "continueButton", url:"buttons/character_continue.png", type:"button", width:610, height:144, columns:2, rows:1, left:"60%", top:"78%" },
        { name: "playButton", url: "buttons/button_play.png", type: "button", width: 560, height: 184, columns: 2, rows: 1, left: "37%", top: "48%" },
        //{ name: "playAgainButton", url:"buttons/play_again.png", type:"button", width:620, height:70, columns:2, rows:1, left:"42%", top:"72%" },
        { name: "howToPlayButton", url: "buttons/how_to_play.png", type: "button", width: 490, height: 95, columns: 2, rows: 1, left: "38%", top: "75%" },
        { name: "stageLeftArrow", url: "buttons/buttons_carousel_arrows.png", type: "button", width: 176, height: 152, columns: 2, rows: 2, left: "22%", top: "82%" },
        { name: "stageRightArrow", url: "buttons/buttons_carousel_arrows.png", type: "button", width: 176, height: 152, columns: 2, rows: 2, left: "63%", top: "82%" },

        // titles
        { name: "game_logo", url: "screens/game_title.png", type: "game_logo", width: 338, height: 120, left: "33%", top: "30%" },
        { name: "title_select_character", url: "characters/title_select_character.png", type: "title", width: 376, height: 71, left: "30%", top: "5%" },
        { name: "leveltitle", url: "stage_level/title_level.png", type: "title", width: 265, height: 72, left: "35%", top: "5%" },
        { name: "stageTitles", url: "stage_level/stage_titles.png", type: "spritesheet", width: 290, height: 138, columns: 1, rows: 3, left: "34%", top: "83%" },
        { name: "characterTitles", url: "stage_level/character_names.png", type: "spritesheet", width: 290, height: 230, columns: 1, rows: 5, left: "34%", top: "83%" },

        // posters
        { name: "poster_red", url: "characters/poster_red.png", type: "BGDiv", width: 319, height: 400 },
        { name: "poster_green", url: "characters/poster_green.png", type: "BGDiv", width: 319, height: 400 },
        { name: "poster_blue", url: "characters/poster_blue.png", type: "BGDiv", width: 319, height: 400 },
        { name: "leftGradient", url: "screens/left_edge_gradient.png", type: "gradient", width: 400, height: 640 },
        { name: "rightGradient", url: "screens/right_edge_gradient.png", type: "gradient", width: 400, height: 640 },

        // backgrounds:
        { name: "start_screen", url: "screens/start_screen.jpg", type: "screen", width: 960, height: 640 },
        { name: "backgroundDiv", url: "elements/duskysky.jpg", type: "BGDiv", width: 960, height: 640 },
        { name: "gameViewport", url: "elements/sky_sm2.png", type: "BGDiv", width: 960, height: 640 },
        { name: "levelTitleTapToGo", url: "stage_level/level_title_holder.png", type: "BGDiv", width: 600, height: 200, left: "-100%", top: "33%" },
        { name: "levelTitleSheet", url: "spritesheets/level_titles2.png", type: "spritesheet", width: 446, height: 900, columns: 1, rows: 30, left: "23%", top: "38%" },

        // character spritesheets
        { name: "shaggy_walkcycle", url: "spritesheets/shaggy_walkcycle.png", type: "spritesheet", width: 960, height: 1200, columns: 12, rows: 8 },
        { name: "shockwave_walkcycle", url: "spritesheets/shockwave_walkcycle.png", type:"spritesheet", width: 960, height: 460, columns: 4, rows: 1 },

        // misc
        { name: "levelBox1", url: "stage_level/level_box_1.png", type: "BGDiv", width: 136, height: 180, columns: 2, rows: 1, multiple: 30 },
        { name: "levelBox2", url: "stage_level/level_box_2.png", type: "BGDiv", width: 136, height: 180, columns: 2, rows: 1, multiple: 10 },
        { name: "levelBox3", url: "stage_level/level_box_3.png", type: "BGDiv", width: 136, height: 180, columns: 2, rows: 1, multiple: 10 },
        { name: "lockedLevel", url: "stage_level/locked_level.png", type: "BGDiv", width: 136, height: 180, columns: 1, rows: 1, multiple: 29 },
        { name: "levelNumber", url: "stage_level/number_spritesheet.png", type: "BGDiv", width: 56, height: 81, columns: 10, rows: 1, multiple: 30 }
    ],
    sounds: [],
    list: [
        { name: "background01", url: "elements/background01_tile.png", type: "background01", width: 1408, height: 440 },
        { name: "exit_clown", url: "elements/exit_clown.png", type: "exitdoor", width: 149, height: 337 },
        { name: "floortile", url: "elements/floortile.png", type: "floortile", width: 473, height: 120 }
    ]
};