var Creepy;
var Slender;
var Nun;
var Jumpscare;
var value = 0;

function preload(){
  Creepy = loadSound('Assets/creepy-background-daniel_simon.mp3');
  Slender = loadImage('Assets/Slenderman.jpg');
  Nun = loadImage('Assets/Nun.jpg');
  Jumpscare = loadSound('Assets/Jumpscare Sound Effect.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  setMoveThreshold(3);
}

function draw() {
  image(Slender,0,0,windowWidth,windowHeight);
  textFont('Creepster');
  textAlign(CENTER);
  push();
  fill(0);
  textSize(100);
  text('Turn on sound',width/2,height/4);
  text('Do not move',width/2,height/3*2);
  text('the device!!',width/2,height/4*3);
  pop();
  push();
  fill(196, 1, 1);
  textSize(90);
  text(value,width/2,height/2+30);
  pop();
  if (value > 20) {
    Nun.filter("invert");
    image(Nun,0,0,windowWidth,windowHeight);
    Creepy.stop();
    push();
    fill(132, 1, 1);
    textAlign(CENTER);
    textSize(180);
    text('I told you',width/2,height/5*4);
    pop();
  }
}

function deviceMoved() {
  value ++;
  Creepy.play();
  if (value > 20) {
    Jumpscare.play();
  }
}
