let canvasSize = 500;

function setup() { 
  createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);
}

function draw() {
  background("lightblue");
  fill(200);
  rect(10, 10, 100, 50);
  push();

  fill(255);
  scale(.5, .5);
  rectMode(CENTER);
  rect(10, 10, 100, 50);


  pop();
  rect(10, 10, 100, 50);
  
}





