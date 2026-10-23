let canvasSize = 500;
let currentScene = 0;
let numScenes = 2;

let hue = 0;
const maxHue = 360;

function setup() { 
  createCanvas(canvasSize, canvasSize);
  fill("white");
  textSize(30);
  textAlign(CENTER);
  colorMode(HSB);
}

function draw() {
  if(currentScene === 0) {
    drawScene0();
  }
  else if(currentScene === 1) {
    drawScene1();
  }
}

function mousePressed() {
  currentScene++;
  if(currentScene >= numScenes) {
    currentScene = 0;
  }
  if(currentScene === 1) {
    background(0);
    fill(0, 0, 255);
    text("press a key and move your mouse", width/2, 40);
    text("press mouse to end", width/2, height - 20);
  }

}

function drawScene0() {
    background(200, 20, 250);
    fill(0, 0, 0);
    text("press the mouse to start", width/2, height/2);
}

function drawScene1() {
  let topBound = 70;
  let bottomBound = height - 50;
  if(keyIsPressed && mouseY > topBound && mouseY < bottomBound) {
    fill(hue, 255, 255);
    text(key, mouseX, mouseY);
    hue = hue + 1 % maxHue;
  }
  
}



