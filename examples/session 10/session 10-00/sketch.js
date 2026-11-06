
/*
  Arrays demo
  Use arrays to keep track of different colors and text
  to display on screen
*/

// array to keep track of emotion text
let emotions = ["happy", "sad", "angry", "hungry"];

// keep track of an index inside the emotions array
let emotionIndex = 0;

// array to keep track of potential text colors
let colors = [];

// keep track of an index inside the colors array
let colorIndex = 0;

function setup() {
	createCanvas(800, 800);
	textSize(30);
	fill("white");

	// add color elements to the colors array
	colors[0] = color(0, 255, 0);
	colors[1] = color(0, 200, 255);
	colors[2] = color(255, 0, 0);
	colors[3] = color(255, 0, 255);
	colors[4] = color(255, 255, 0);
}

function draw() {
    background("black");

	// draw the static text
	fill("white");
	text("I am feeling ", 50, height / 2);

	// use the indices to retrieve elements from the colors and emotions arrays
	// draw the emotion text in the current color
	fill(colors[colorIndex]);
	text(emotions[emotionIndex], 220, height / 2);
}

function mousePressed() {
	// add one to emotionIndex, to show the next emotion in the array
	emotionIndex++;

	// if the emotion index would be out of bounds 
	// (greater than or equal to the length of the array),
	// reset it to 0
	if(emotionIndex >= emotions.length) {
		emotionIndex = 0;
	}
}

function keyPressed() {
	// add one to colorIndex -- 
	// use the mod operator (%) to make colorIndex reset 
	// to zero when it reaches colors.length
	colorIndex = (colorIndex + 1) % colors.length;
}

