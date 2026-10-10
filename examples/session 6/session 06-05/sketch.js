/* 
Creates simple timers that trigger one time only.

millis() tracks total milliseconds since sketch started.
1000 milliseconds= 1 second.

Background begins as black.
Changes to blue after 2 seconds.
Changes to red after 8 seconds.
*/


let currentTime = 0; //setting up variable to track millis() clock
let timer1 = 2000; //setting up variable for a 2 second timer
let timer2 = 8000; //8 second timer

function setup() 
{
  background(0);
}

function draw() 
{
  currentTime = millis(); //continuously update our currentTime variable

  if (currentTime > timer2) 
	{
    background(255, 0, 0);
    print("TIMER 2 is triggered");
  } 
	else if (currentTime > timer1) 
	{
    background(0, 0, 255);
    print("TIMER 1 is triggered");
  }
	
  print("currentTime = " + currentTime);
}