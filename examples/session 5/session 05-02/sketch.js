/*
	<><><><><><><><><><><><><><><><><><><>
	<>	FUN W/ CONDITIONALS & RANDOM	<>
	<>				by Ian Pokorny		<>
	<><><><><><><><><><><><><><><><><><><>
	* Click mouse to change	ellipse fill & movement
*/

//GLOBAL VARIABLE DECLARATION

//ellipse variables
let x = 0;
let y = 0;
let xMove = 0;
let yMove = 0;

//fill color variables
let r = 0;
let g = 255;
let b = 0;

function setup()
{
	createCanvas(700, 700);
	
	//start ellipse at center of canvas
	x = width / 2;
	y = height / 2;
}

function draw()
{
	background(75);
	fill(r, g, b);
	ellipse(x, y, 100, 100);
	
	//increment X & Y location based on Move amount
	x += xMove; //same as: x = x + xMove
	y += yMove;	//same as: y = y + yMove
	
	//if X or Y position goes beyond bounds of canvas, flip direction
	if (x >= width || x <= 0)
	{
		xMove = -xMove; // reverse X movement direction
	}
	
	if (y >= height || y <= 0)
	{
		yMove = -yMove; //reverse Y movement direction
	}
	
	//print values to the console
	//print("x: " + x + " y: " + y + " xMove: " + xMove + " yMove: " + yMove);
}

function mousePressed() //when mouse is clicked...
{
	//a new random value, from -10 to 10, is returned for xMove & yMove
	xMove = random(-10, 10);
	yMove = random(-10, 10);
	
	//a new random value, from 0 to 255, is returned for r, g, b
	r = random(255);
	g = random(255);
	b = random(255);
}