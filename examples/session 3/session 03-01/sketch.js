/*
<><><><><><><><><><><><><><><><>
	STATIC vs DYNAMIC

	Introducing...
	- draw() function
	- basic input: mouseX, mouseY
<><><><><><><><><><><><><><><><>
*/

//the code in setup block runs once
function setup() 
{
	createCanvas(800, 600);
	//background(127, 127, 127);
}

//the code in draw block runs repeatedly
function draw() 
{
	background(127, 127, 127);
	
	//a STATIC line
	line (0, 0, 400, 300);
	
	//a DYNAMIC line
	line(400, 300, mouseX, mouseY);
	
	//ellipse following mouse position
	ellipse(mouseX, mouseY, 50, 50);
}