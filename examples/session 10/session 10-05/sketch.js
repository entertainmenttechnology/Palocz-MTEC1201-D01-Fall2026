/*
Yet Another Demo on Arrays.

Using for loops to fill and iterate through arrays.
Using push() to add new values to arrays on mouse press.
*/

const startPoints = 4; //number of points to start with in the arrays
const maxLineW = 20; // maximum width of the random lines

let pointX = []; //declare array called pointX
let pointY = []; //declare array called pointY
let strokeW = []; //declare array for stroke weights

let move = 5; // variable for point movement

function setup() 
{
    createCanvas(800, 600);

  	//initializing the array with for loop and random numbers
	for (let i = 0; i < startPoints; i++) 
	{
		pointX[i] = random(width);
		pointY[i] = random(height);
		strokeW[i] = random(1, maxLineW);
	}
}

function draw() 
{
	background(0);

	//iterate through array and draw/move lines
	for (let i = 0; i < pointX.length; i++)
	{
    	strokeWeight(strokeW[i]); //set stroke weight from array
		
		// set color with transparency depending on stroke weight
		let alpha = map(strokeW[i], 1, maxLineW, 100, 50);
		stroke(255, 0, 0, alpha); 

    	//draw line from point to center of canvas
    	line(pointX[i], pointY[i], width/2, height/2);

		// if outer points go too far off canvas, 
		// move in the other direction
		let movedX = pointX[i] + move;
		if (movedX > width * 2 || movedX < -width ) 
		{
			move = -move;
		} 
		else 
		{
			// otherwise, update the point's X to include movement
			pointX[i] = movedX;
		}
  	}
}

function mousePressed()
{
	// the push() array method adds new values to the end of an array
	pointX.push(mouseX);
	pointY.push(mouseY);
	strokeW.push(random(1, 20));

	//print the new length of the pointX array to the console for monitoring
	print("Array Length = " + pointX.length);
}