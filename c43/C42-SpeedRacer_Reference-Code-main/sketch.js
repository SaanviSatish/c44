var canvas;
var backgroundImage, rocket1_img, rocket2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image; 
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; 
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/Whjr.spaceBg.jpg");
  rocket1_img = loadImage("./assets/Whjr.rocket1.jpg");
  rocket2_img = loadImage("./assets/Whjr.rocket2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); 
  obstacle2Image = loadImage("./assets/obstacle2.png"); 
  blastImage = loadImage("./assets/blast.png"); //C42 //SA
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
