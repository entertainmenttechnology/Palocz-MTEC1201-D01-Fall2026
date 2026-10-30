const canvasSize = 300;
let rSize = canvasSize - 2;
let flip = false;
let fillSquares = "white";

function setup() {
	createCanvas(canvasSize, canvasSize);
	strokeWeight(2);
	fill("white");
	colorMode(HSB);
}

function draw() {
	background("white");
	rSize = canvasSize - 2;
	for(let loops = 0 ; loops < 10; loops++) {
		let smallSize = rSize * 2 / 3;
		if(mouseIsPressed && mouseX < rSize && mouseY < rSize) {
			let hue = loops * (255/10);
			fillSquares = color(hue, 255, 255);
		} else {
			fillSquares = "white";
		}
		nestedRect(1, 1, rSize, smallSize);
		nestedRect(1, 1, smallSize, rSize);
		
		fill("black");
		rect(1, 1, smallSize, smallSize);

		rSize = smallSize;
	}
}

function nestedRect(x, y, w, h) {
	fill(fillSquares);
	rect(x, y, w, h);
}