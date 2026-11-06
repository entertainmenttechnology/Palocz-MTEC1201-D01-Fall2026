/*
Another Array Demo
- using math function to generate values to be stored in array
- using repeating timer to choose values randomly from an array
*/

let arrayVal = []; //array for storing my calculated values

//timer variables
let currentTime = 0; 
let prevTime = 0;
let timer = 1000;

//color variables
let r = 0;
let g = 0;
let b = 0;

//rectangle variables
let w = 0;
let h = 0;

function setup() 
{
	createCanvas(600, 600);
	rectMode(CENTER);
	
	//using for loop, populate array with the squares of 4 thru 12
	for (let i = 4; i <= 12; i++)
	{
		arrayVal[i - 4] = pow(i, 2); //sub i by 4 so 1st array element is addressed
		
		//print array values to console:
		print("arrayVal[" + (i-4) + "] = " + arrayVal[i-4]);
	}
}

function draw() 
{
	currentTime = millis(); //keep track of elapsed time
	
	if (currentTime - prevTime >= timer) //if 1 sec has passed since last timer triggered
	{
		prevTime = currentTime; //set previous time to the current time when timer triggered
		
		//choose a random element from array
		r = arrayVal[int(random(arrayVal.length))]; 
		g = arrayVal[int(random(arrayVal.length))];
		b = arrayVal[int(random(arrayVal.length))];
		
		//choose a random element from array, but limit choices further
		w = arrayVal[int(random(4, arrayVal.length - 1))];
		h = arrayVal[int(random(1, arrayVal.length - 2))];
	}
	
	background(r, g, b);
	fill(b, r, g); //switching order of RGB, just for fun!
	rect(width/2, height/2, w, h);
}