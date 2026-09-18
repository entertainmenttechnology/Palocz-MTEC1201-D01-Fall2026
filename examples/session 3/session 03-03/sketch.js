/*
<><><><><><><><><><><><><><><><><><><><><>
	USING VARIABLES

	Introducing...
	- Data Types
	- Variables
	- Constants
	- Operators
	- mousePressed()
	- keyPressed()

	Press Mouse to change background color
<><><><><><><><><><><><><><><><><><><><><>
*/

//DECLARING GLOBAL VARIABLES:
//globally scoped variables declared outside of setup() and draw() can be used anywhere in sketch.

let num = 100;		//creates a variable called num, and assigns a value of 100, a Number data type.
let ellipseHeight = 50;	//creates a variable called ellipseHeight and assigns a value of 50;
let grow = 0.5;		//creates a variable called grow and assigns a value of 0.5;
let xLocation = 0;

//declaring variables for background color
let r = 0;
let g = 0;
let b = 0;

//DECLARING GLOBAL CONSTANTS:
//unlike variables, constants cannot be reassigned after declaration.
//like variables, globally scoped constants declared outside of setup() and draw() can be used anywhere.

const centerPosX = 400;
const centerPosY = 300;

function setup() //runs only once.
{
	createCanvas(800, 600);
	let example = 75; //QUESTION: will I be able to use this variable in draw()?
}

function draw() //draw runs forever, unless event function is called.
{
	background(r, g, b);
	
	ellipse (mouseX / 2, mouseY - 200, num, ellipseHeight + 100);
	
	rectMode(CENTER);
	rect(mouseX * 0.5, mouseY, grow, grow);
	
	ellipse(xLocation, height / 2, width / 4, width / 4);
	
	//increment by 1, written 3 different ways:
	//xLocation = xLocation + 1;
	//xLocation += 1;
	xLocation++;
	
	//decrement by 1, written 3 different ways:
	//xLocation = xLocation - 1;
	//xLocation -= 1;
	//xLocation--;
	
	grow += 0.5; //same as grow = grow + 0.5;
	
	//use print() or console.log() to print to console
	//print(num);
	//print(grow);
	//print(xLocation);
	//console.log(xLocation);
}

function mousePressed() //code block runs once, only when moused is pressed, then returns to draw() loop.
{
	r++;
	g+=20;
	b+=10;
}

function keyPressed() //code block runs once, only when key is pressed, then returns to draw() loop.
{
	//put some cool code here that will respond to key press
}