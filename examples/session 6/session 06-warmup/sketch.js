let vColor = 0;
let hColor = 0;


function setup() {
  createCanvas(400, 400);
  noStroke();

  colorMode(HSB);
}

function draw() {
  background("white");

  print("vColor", vColor, "hColor", hColor);
  if(mouseIsPressed) {
    vColor++;
    if(vColor > 360) {
      vColor = 0;
    }
  }
  if(keyIsPressed) {
    hColor = (hColor + 1) % 360;

  }

  drawHorizBoxes();
  drawVertBoxes();
  
}

function drawVertBoxes() {
    fill(vColor, 255, 255, 0.5);

    if(mouseX < width/4) {
      rect(0, 0, width/4, height);
    }
    else if(mouseX < width/2) {
      rect(width/4, 0, width/4, height);
    }
    else if(mouseX < 3 * width/4) {
      rect(width/2, 0, width/4, height);
    }
    else {
      rect(width * 3/4, 0, width/4, height)
    }

}

function drawHorizBoxes() {
    fill(hColor, 255, 255, 0.5);

    if(mouseY < height/4) {
      rect(0, 0, width, height/4);
    }
    else if(mouseY < height/2) {
      rect(0, height/4, width, height/4);
    }
    else if(mouseY < 3 * height/4) {
      rect(0, height/2, width, height/4);
    }
    else {
      rect(0, height * 3/4, width, height/4)
    }

}