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
	let rWidth;
	let rHeight;

	if(!flip) {
		rWidth = rSize;
		rHeight = applyRatio(rSize);
	} 
  	else {
		rHeight = rSize;
		rWidth = applyRatio(rSize);
	}

	nestedRect(1, 1, rWidth, rHeight);

	if(flip) {
		rSize = applyRatio(rSize);
	}
	flip = !flip;
}

function applyRatio(a) {
  return a * 2 / 3;
}

function nestedRect(x, y, w, h) {
	fill("white");
	rect(x, y, w, h);

	fill("black");
	if(w < h) {
		rect (x, y, w, w);
	} else {
		rect (x, y, h, h);
	}
}