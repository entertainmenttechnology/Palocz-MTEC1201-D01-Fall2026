const canvasSize = 700;
let houseSize = 100;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background("blue");
}

function draw() {
  house(20, 50, 100);
  house(100, 100, 50);

  let houseCenter = shiftCenter(canvasSize/2, houseSize);
  house(houseCenter, houseCenter, houseSize);
}

function mousePressed(){
  let houseX = shiftCenter(mouseX, houseSize);
  let houseY = shiftCenter(mouseY, houseSize)
  house(houseX, houseY, houseSize);
  houseSize = 100;
}

function keyPressed() {
  houseSize -= 10;
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
