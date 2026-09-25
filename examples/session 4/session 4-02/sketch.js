const canvasSize = 700;
let houseSize = 100;
let circleSize = 100;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background("lightgrey");
}

function draw() {
  house(20, 50, 100);
  house(100, 100, 50);

  let houseCenter = shiftCenter(canvasSize/2, houseSize);
  house(houseCenter, houseCenter, houseSize);
}

function mousePressed(){
  let houseSize = random(25,150);
  let houseX = random(canvasSize - houseSize);
  let houseY = random(canvasSize - houseSize);
  house(houseX, houseY, houseSize);
}

function keyPressed() {
  let circleRed = random(50);
  let circleGreen = random(50);
  let circleBlue = random(150, 255);
  print(circleRed, circleGreen, circleBlue);
  fill(circleRed, circleGreen, circleBlue);
  strokeWeight(0);
  circle(mouseX, mouseY, 200);
}

function shiftCenter(coordinate, length) {
  return coordinate - length/2;
}

function house(x, y, size) {
  let roofIn = size / 5;
  let houseRight = x + size;
  fill("lightblue");
  strokeWeight(2);
  square(x, y, size);
  fill("red");
  quad(x, y, 
       houseRight, y,
       houseRight - roofIn, y - roofIn,
       x + roofIn, y - roofIn
       );
}
