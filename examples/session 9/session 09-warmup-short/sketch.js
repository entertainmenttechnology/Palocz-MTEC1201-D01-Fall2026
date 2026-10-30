const canvasSize = 300;
let rSize = canvasSize - 2;
let flip = false;

function setup() {
	createCanvas(canvasSize, canvasSize);
	strokeWeight(2);
	fill("white");
	background("white");
}

function draw() {
	let smallSize = rSize * 2 / 3;
	nestedRect(1, 1, rSize, smallSize);
	nestedRect(1, 1, smallSize, rSize);
	
	fill("black");
	rect(1, 1, smallSize, smallSize);

	rSize = smallSize;

}

function nestedRect(x, y, w, h) {
	fill("white");
	rect(x, y, w, h);
}