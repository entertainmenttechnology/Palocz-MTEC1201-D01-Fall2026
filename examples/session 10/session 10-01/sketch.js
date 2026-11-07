
/*
  2D Arrays demo
  A modification of the first example, using
  an arrays or arrays to keep track of a list of colors
  for each emotion.
*/

const fontSize = 30;
const smallFont = 24;

// array to keep track of emotion text
let emotions = ["happy", "sad", "angry"];

// keep track of an index inside the emotions array
let emotionIndex = 0;

// array to keep track of potential text colors
let colors = [];

// keep track of index inside the colors arrays
let colorIndex = 0;

function setup() {
	createCanvas(1000, 700);

	// text settings
	textFont("Courier New");
	fill("white");

	// make each element of colors array as an array of color names
	// Check out more color names at https://www.w3schools.com/cssref/css_colors.php
	colors[0] = ["paleGreen", "chartreuse", "springGreen"];
	colors[1] = ["dodgerBlue","deepSkyBlue", "darkTurquoise"];
	colors[2] = ["salmon", "red"];
}

function draw() {
    background("black");

	// draw instruction text
	fill("white");
	textSize(smallFont);
	textStyle(ITALIC);

	textAlign(RIGHT);
	text("press any key to change color", width - 50, 50);

	textAlign(LEFT);
	text("click to switch emotions", 50, 50);


	// draw white "I am feeling" text
	let textX = 350;
	let textY = 175;
	textSize(fontSize);
	textStyle(BOLD);
	text("I am feeling ", textX, textY);

	// use the emotion index to get the list of colors 
	// for that emotion, and the colorIndex to get the
	// color from that list
	let emotionColor = colors[emotionIndex][colorIndex];

	// move textX over to write color after the "I am feeling" text
	textX += 235;

	// draw the emotion text in the current color
	fill(emotionColor);
	textStyle(BOLD);
	text(emotions[emotionIndex], textX, textY);

	// call a user-defined function to draw text 
	// representation of the array state
	drawArrayState();
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

// returns true if index i is not the last index of an array;
// false otherwise
function notLast(i, array) {
	return i < array.length - 1;
}


// draw a representation of array state to 
// the bottom of the screen
function drawArrayState() {
	// set colors
	const eIndexColor = color(200, 0, 200);
	const cIndexColor = color(100, 0, 255);
	const mainColor = "black";
	const highlightColor = color(0, 0, 0, 10);

	// set variables for spacing 
	const xSpace = smallFont * 0.6; //space to allow for each character
	const paddingY = smallFont * 1.5;  //space between each row of text
	const leftMargin = 50; //margin on the left 
	const indent = xSpace * 2; // amount to indent by

	let textY = height - 10 * paddingY; 

	// set font


	fill("240");
	stroke("black");
	strokeWeight(3);
	let backgroundY = textY - paddingY * 1.5;
	rect(0, backgroundY, width, height - backgroundY);


    // draw the values of the index variables 
	textFont("Courier New", smallFont);
	textStyle(BOLD);
	noStroke();
	fill(eIndexColor);
	text("emotionIndex: " + emotionIndex, leftMargin, textY);
	fill(cIndexColor);

	textAlign(RIGHT);
	text("colorIndex: " + colorIndex, width - leftMargin, textY);

	// draw line below the index variables
	textY += paddingY;
	stroke(200);
	line(leftMargin, textY, width - leftMargin, textY);
	textY += paddingY;

	//reset drawing context for text
	textAlign(LEFT);
	textStyle(NORMAL);
	fill(mainColor);
	noStroke();

	// draw the names for emotion and color arrays
	const emotionsLeft = leftMargin;
	const colorsLeft = emotionsLeft + xSpace * 15;
	text("emotions:", emotionsLeft, textY);
	text("colors:", colorsLeft, textY);
	textY += paddingY;

	// draw opening brackets for both arrays 
	text("[", emotionsLeft + indent, textY);
	text("[", colorsLeft + indent, textY);
	textY += paddingY;

	//iterate through and draw element values 
	//index indicators for the arrays
	for(let eI = 0; eI < emotions.length; eI++) {
		textStyle(NORMAL);

		// draw emotion index indicator
		if(eI === emotionIndex) {
		   fill(highlightColor);
		   textStyle(BOLD)
		   noStroke();
		   let hightlightH = xSpace * 2;
		   let highlightY = textY - hightlightH + xSpace/2;
		   let hightlightX = leftMargin - xSpace;
		   let hightlightW = width - hightlightX - 50;
		   rect(hightlightX, highlightY, hightlightW,hightlightH);

		   fill(eIndexColor);
		   text(eI, leftMargin, textY);
		   fill(mainColor)

		}

		// draw the emotion element at index eI
		let emotionText = emotions[eI];
		if(notLast(eI, emotions)) {
				emotionText += ", "
		}
		text(emotionText, emotionsLeft + indent * 2, textY);


		// get list of colors for this emotion
		let colorList = colors[eI];

	    // draw starting bracket for color list
		let textX = colorsLeft + indent * 2;
		textStyle(NORMAL)
		text("[", textX, textY);
		textX += xSpace;

		// draw elements in color list
		for(let cI = 0; cI < colorList.length; cI++) {
			let colorText = colorList[cI];
			textStyle(NORMAL)

			// draw color index indicator
			if(cI === colorIndex && eI === emotionIndex) {
				textStyle(BOLD)
				let cIndexLeft = textX + xSpace * colorText.length / 2;
				let aboveY = textY - paddingY * 0.8;
				fill(cIndexColor);
				text(cI, cIndexLeft, aboveY);
				fill(mainColor);
			}

			// draw the color element
			if(notLast(cI, colorList)) {
				colorText += ", "
			}
			text(colorText, textX, textY);

			//move textX the the right of the text that was just drawn
			textX += xSpace * colorText.length;
		
		}

		// draw ending bracket for color list
		let endText = "]";
		if(notLast(eI, colors)) {
			endText += ",";
		}
		textStyle(NORMAL);
		text(endText, textX, textY);

		// move textY down two lines
		if(notLast(eI, colors)) {
			textY += paddingY * 2;
		}
	}

	// draw closing brackets for both arrays 
	textY += paddingY;
	text("]", emotionsLeft + indent, textY);
	text("]", colorsLeft + indent, textY);
}