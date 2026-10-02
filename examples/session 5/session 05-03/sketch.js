/*
	<><><><><><><><><><><><><><><><><>
	<>	KEY PRESSES & CONDITIONALS	<>
	<>			by Ian Pokorny		<>
	<><><><><><><><><><><><><><><><><>
	* Click mouse to randomize fill color & ellipse movement speed
	* Press ENTER to stop/start ellipse movement
	* Press Directional Arrows to move rectangle
	* Press 'a' to fill white, 'A' to fill black
	* Press SHIFT + UP or SHIFT + DOWN to change rectangle size 
*/

//GLOBAL VARIABLE DECLARATION

//ellipse variables
let x = 0;
let y = 0;
let xMove = 0;
let yMove = 0;

//rectangle variables
let rectX = 0;
let rectY = 0;
let size = 100;

//fill color variables
let r = 0;
let g = 255;
let b = 0;

//Boolean to stop/start movement
let stop = false; // we could use a zero here instead

function setup()
{
	createCanvas(700, 700);
	rectMode(CENTER);
	
	//start both shapes at center of canvas
	x = width / 2;
	y = height / 2;
	rectX = width / 2;
	rectY = height / 2;
}

function draw()
{
	background(127);
	fill(r, g, b);
	ellipse(x, y, size, size);
	rect(rectX, rectY, size, size);
	
	if (!stop) //if stop boolean is false...
	{
		//move ellipse position
		x += xMove;
		y += yMove;
	}
	
	//if ellipse is outside of (or equal to) canvas bounds, flip movement direction
	if (x >= width || x <= 0)
	{
		xMove = -xMove;
	}
	
	if (y >= height || y <= 0)
	{
		yMove = -yMove;
	}
	
	//move rectangle position using directional arrows
	if (keyIsDown(LEFT_ARROW))
	{
		rectX--;
	}
	
	if (keyIsDown(RIGHT_ARROW))
	{
		rectX++;
	}
	
	//make sure only DOWN pressed, SHIFT key is NOT pressed
	if (keyIsDown(DOWN_ARROW) && !keyIsDown(SHIFT)) 
	{
		rectY++;
	}
	
	//make sure only UP pressed, SHIFT key is NOT pressed
	if (keyIsDown(UP_ARROW) && !keyIsDown(SHIFT))
	{
		rectY--;
	}
	
	//if SHIFT & UP ARROW pressed...
	if (keyIsDown(UP_ARROW) && keyIsDown(SHIFT))
	{
		size++; //increase rectangle size
	}
	
	//if SHIFT & DOWN ARROW pressed...
	if (keyIsDown(DOWN_ARROW) && keyIsDown(SHIFT))
	{
		size--; //decrease rectangle size
	}
	
}

function mousePressed()
{
	xMove = random(-10, 10);
	yMove = random(-10, 10);
	
	r = random(255);
	g = random(255);
	b = random(255);
}

function keyPressed()
{
	if (key === 'a') //if lower case 'a' key pressed...
	{
		r = 255;
		g = 255;
		b = 255;
	}
	
	if (key === 'A') //if upper case 'A' key pressed...
	{
		r = 0;
		g = 0;
		b = 0;
	}
	
	if (keyCode === ENTER) //if ENTER[RETURN] key pressed...
	{
		stop = !stop; //flip logic of "stop" boolean variable
		// ! is logical NOT operator, flips switch ON or OFF
		// if bool was false, it's now true, or vice-versa
	}
}