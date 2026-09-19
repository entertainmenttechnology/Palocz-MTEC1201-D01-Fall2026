const canvasSize = 600;
let rectWidth;
let rectHeight;
let rectY;
let rectX;
const squareSize = 50;

function setup() {
  createCanvas(canvasSize, canvasSize * 1.5);
  
  rectWidth = 20;
  rectHeight = 50;
  rectY = 0;
}

function draw() {
  background(240, 240, 255);

  fill("white");
  rectX = canvasSize/2 - rectWidth/2;
  rect(rectX, rectY, rectWidth, rectHeight);

  fill("black");
  square(mouseX- squareSize/2, mouseY - squareSize/2, squareSize);
}

function mousePressed() {
  rectWidth += 20;
}

function keyPressed() {
  rectWidth -= 20;
  print(key);
}
