/*
<><><><><><><><><><><><><><><><><><><><><><><>
<>	"CONDITIONAL STATEMENTS"				<>
<>	a demo by Ian Pokorny					<>
<>__________________________________________<>
<> * move mouse to change shape				<>
<> * click mouse to change background color <>
<><><><><><><><><><><><><><><><><><><><><><><>

A brief example of Conditional Statements:
__________________________________________
if (boolean test 1)
{
	//code here runs if test 1 is TRUE
}
else if (boolean test 2)
{
	//code here runs if test 2 is TRUE
}
else
{
	//code here runs if all tests FALSE
}
__________________________________________
*/

//declaring global variables
let r = 255;
let g = 255;
let b = 255;


function setup() //runs only once
{
	createCanvas(600, 600);
	rectMode(CENTER);
}

function draw() //runs continuously, loops forever
{
	background(r, g, b);
	
	if (mouseX > width / 2)
	{
		fill(255, 0, 0);
		ellipse(width / 2, height / 2, 100, 100);
		print("TEST 1 is TRUE");
	}
	else if (mouseY > height / 2)
	{
		fill(0);
		rect(width / 2, height / 2, 100, 100);
		print("TEST 2 is TRUE");
	}
	else
	{
		fill(255);
		rect(width / 2, height / 2, 100, 100);
		print("TEST 1 & TEST 2 are both FALSE");
	}
}

function mousePressed() //runs once, only when mouse pressed
{
	r = random(0, 255);
	g = random(50, 200);
	b = random(100, 255);
	
	print("RED: " + r);
	print("GREEN: " + g);
	print("BLUE: " + b);
}