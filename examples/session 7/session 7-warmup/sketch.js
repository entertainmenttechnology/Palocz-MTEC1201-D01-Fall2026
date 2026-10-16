let canvasSize = 500;
let currentScene = 0;
let numScenes = 2;

function setup() { 
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(0);
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

}

function drawScene0() {

}

function drawScene1() {
  
}



