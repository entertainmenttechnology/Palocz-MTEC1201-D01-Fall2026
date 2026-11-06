/*
	Demo for using for loops to fill and iterate through an array
*/

// number of points to start with
const numPoints = 10;

// size of the circles to draw
const diameter = 20;

// arrays to track the x and y coordinates of the circles
let pointsX = [];
let pointsY = [];

function setup() 
{
	createCanvas(800, 800);

	// fill the pointsX and pointsY arrays with random values
	for(let i = 0; i < numPoints; i ++) {
		pointsX[i] = random(0, width);
		pointsY[i] = random(0, height);
	}

}
function draw() {
	background("white");

	// iterate through the arrays of points
	for(let i = 0; i < pointsX.length; i++) {
		// use the index i to access the x and y values in the arrays.
		let circleX = pointsX[i];
		let circleY = pointsY[i];

		// use blue as the default fill color
		fill("blue");

		// get distance between mouse and the circle center
		let distance = dist(mouseX, mouseY, circleX, circleY);
		
		// if distance is smaller than the circle radius, 
		// the mouse is inside the circle
		if(distance < diameter/2) {
			fill("red");
		}

		// draw the circle
		circle(circleX, circleY, diameter);
	}

}
 
// when the mouse is pressed, delete a circle if the mouse is inside 
function mousePressed() {
	for(let i = 0; i < pointsX.length; i++) {
		// get distance between the mouse and the circle center
		let distance = dist(mouseX, mouseY, pointsX[i], pointsY[i]);
		
		// check if the mouse is inside the circle
		if(distance < diameter/2) {
			// modify the arrays to remove the elements at index i
			// splice takes an index (i) and number of elements to delete (1)
			pointsX.splice(i,1);
			pointsY.splice(i,1);
		}
	}
}

// when a key is pressed, add a new circle at a random point
function keyPressed() {
   // push a new random value into pointsX and pointsY
   pointsX.push(random(0, width));
   pointsY.push(random(0, height));
	
}
