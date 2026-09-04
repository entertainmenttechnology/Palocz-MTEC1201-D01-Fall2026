/*
////////////////////////////
//	Getting to Know p5.js	//
//	Demo by Ian Pokorny		//
////////////////////////////

Reference can be found here:
https://p5js.org/reference/
*/

//This is a comment: use them to make your code more readable.

/*
	This is also a comment.
	It can span multiple lines of code.
*/

function setup() {
	//you must include setup function to run code.
	//only include ONE setup function per sketch.
	
	// Set size of canvas area with Width & Height
	createCanvas(800, 600);
	//Canvas size defaults to 100 x 100 if not set.
	
	//change background color with Red, Green, Blue values 0-255
	background(127, 0, 25);
	
	//drawing a line
	line(0, 0, 400, 400);
	
	//line function needs starting point and ending point parameters
	//line(x1, y1, x2, y2);
	
	//lets draw another line...
	line(500, 50, 10, 300); //point1 = (500, 50), point2 = (10, 300) 
	
	//drawing a triangle
	triangle(500, 300, 600, 600, 200, 400);
	//triangle (x1, y1, x2, y2, x3, y3);
	
	//drawing a rectangle
	rect(100, 400, 400, 200);
	//rect (x, y, width, height);
	
	//drawing a quadrilateral
	quad(100, 100, 200, 100, 300, 300, 300, 400);
	
	//changing the fill color
	fill(100, 200, 50);
	
	//changing the stroke color
	stroke (200, 10, 100);
	
	//changing the stroke weight
	strokeWeight(20);
	
	//draw ellipse
	ellipse(400, 300, 200, 200);
	
	//changing the fill color with "alpha" transparency
	fill(0, 5, 140, 127);
	//fill(r, g, b, a);
	
	//remove stroke color & weight
	noStroke();
	
	//draw ellipse
	ellipse(300, 400, 200, 200);
	
} //notice the curly braces that open and close the setup() function
