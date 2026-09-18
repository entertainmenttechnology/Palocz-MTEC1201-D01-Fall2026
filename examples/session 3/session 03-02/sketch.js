/*
<><><><><><><><><><><><><><>
	"DRAWING WITH PMOUSE"
	
	introducing...
	- pmouseX, pmouseY
<><><><><><><><><><><><><><>
*/

function setup() 
{
	createCanvas(800, 600);
	
	background(127);	//move this line to draw() and see what happens
}

function draw() 
{
	stroke(200, 255, 100);
	
	strokeWeight(10);
	
	line(mouseX, mouseY, pmouseX, pmouseY);
}