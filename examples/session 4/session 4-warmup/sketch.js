const canvasSize = 700;
function setup() {
  createCanvas(canvasSize, canvasSize);
  background("lightgrey");
  stroke("blue");
}

function draw() {
  strokeWeight(5);

  let percentDown = mouseY / canvasSize;
  let length = percentDown * canvasSize;

  let lineCenter = canvasSize/2;
  let lineLeft = lineCenter - length/2;
  let lineRight = lineCenter + length/2;

  line(lineLeft, mouseY, lineRight, mouseY);

}

function mousePressed() {
  stroke("red");
}

function keyPressed() {
  stroke("blue");
}
