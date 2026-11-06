
/*
  Arrays demo
  Use arrays to keep track of different colors and text
  to display on screen
*/

const fontSize = 30;

// array to keep track of emotion text
let emotions = ["happy", "sad", "angry"];

// keep track of an index inside the emotions array
let emotionIndex = 0;

// array to keep track of potential text colors
let colors = [];

// keep track of index inside the colors arrays
let colorIndex = 0;

function setup() {
	createCanvas(800, 800);

	// text settings
	textFont("Courier New", fontSize);
	fill("white");

	// make each element of colors array as an array of color names
	// Check out more color names at https://www.w3schools.com/cssref/css_colors.php
	colors[0] = ["paleGreen", "chartreuse", "springGreen"];
	colors[1] = ["dodgerBlue","deepSkyBlue", "cornflowerBlue", "mediumSlateBlue"];
	colors[2] = ["orangered", "red"];
}

function draw() {
    background("black");

	// draw the static text
	fill("white");
	textStyle(NORMAL)
	text("I am feeling ", 50, 100);

	// use the emotion index to get the array of colors 
	// for that emotion, and the colorIndex to get the
	// color from that list

	let emotionColor = colors[emotionIndex][colorIndex];

	// draw the emotion text in the current color
	fill(emotionColor);
	textStyle(BOLD);
	text(emotions[emotionIndex], 285, 100);
}

function mousePressed() {
	// add one to emotionIndex, to show the next emotion in the array
	emotionIndex++;

	// reset colorIndex to zero to show the first color for that emotion
	colorIndex = 0;

	// if the emotion index would be out of bounds 
	// (greater than or equal to the length of the array),
	// reset it to 0
	if(emotionIndex >= emotions.length) {
		emotionIndex = 0;
	}
}

function keyPressed() {

	// get length of the color array for the current emotoin
	let colorList = colors[emotionIndex];

	// add one to colorIndex -- 
	// use the mod operator (%) to make colorIndex reset 
	// to zero when it reaches the current length of the list
	colorIndex = (colorIndex + 1) % colorList.length;
}