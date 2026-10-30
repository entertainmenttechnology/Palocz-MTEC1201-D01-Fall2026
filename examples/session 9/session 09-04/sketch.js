/*
	Forever Falling Ellipses
*/

let y = 0;

function setup() 
{
	createCanvas(500, 500);
}

function draw() 
{
	background(127);
	
	let diameter = 50;

	for (let x = 0; x <= width; x += diameter) 
	{
		ellipse(x, y, diameter, diameter);
	}

	y++; //y value of ellipse increments after we exit the for loop

	if (y >= height + (diameter/2)) //if ellipse goes below canvas
	{ 
		y = -diameter; //set ellipse y value above canvas
	}

	print("y = : " + y); // print y to console
}