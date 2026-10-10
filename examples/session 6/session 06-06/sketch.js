/*
<><><><><><><><><><><><><><><><>
<>	Demo for repeating timer	<>
<><><><><><><><><><><><><><><><>
*/

let timer = 1000; //setting up timer variable for 1000 millisecond trigger
let currentTime = 0; //tracking millis() clock
let savedTime = 0; // temp saved times, needed for comparison

let ellipseX = 0; //variable for x value of ellipse
let increment = 40;	//variable for increment of x movement
let ellipseSize = 100; //variable for circle diameter

function setup() 
{
	createCanvas(800, 400);
}

function draw() 
{
	currentTime = millis(); //update currentTime in draw so that it is continuously updating
	
	print(currentTime, savedTime, currentTime - savedTime > timer);
	background(255);
	
	ellipse(ellipseX, height / 2, ellipseSize, ellipseSize);

	//if 1 second has passed since last saved time, execute code block
	if (currentTime - savedTime > timer) 
	{
		if (ellipseX > width)
		{
			ellipseX = 0;
		} 
		else 
		{
			ellipseX += increment; //increment ellipseX value
		}
		
		fill(random(255), random(255), random(255)); //change fill to random color
		
		savedTime = currentTime; //assign value of currentTime to savedTime
	}
	
	// print("currentTime: " + int(currentTime));
	// print("savedTime: " + int(savedTime));
}