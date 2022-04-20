//Nicholas Stepp
//Rocket Patrol Mod
//April 19th, 2022
//Spread out over a few days, took me about 24 hours
//Collaborated with Aaron Gonzales

//What I did:
//Display timer
//Add time on hits
//Patricle emitter on hit
//New faster spaceship (replaced one spaceship for this)
//New assets for everything
//New background

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
//let highScore;
//let newHighScore = false;
//let p1Score;