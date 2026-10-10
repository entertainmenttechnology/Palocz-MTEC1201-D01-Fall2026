/*
////////////////////////////////////////////
//		Demo: working with image assets.		//
////////////////////////////////////////////
 
 Note the use of preload() in this sketch for loading assets before setup() is called. 
 */

//Create a p5.Image object to store image
let tuna; //Declares p5.Image object called tuna

//Load image assets into preload() to avoid asynchronous loading errors
function preload() //Use preload() only to load assets -- nothing else!
{
	tuna = loadImage("images/tuna.png"); //Assign image asset to p5.Image object using loadImage() 
}

//setup() is called AFTER preload() is complete, and runs only once
function setup() 
{
	createCanvas(500, 500);
	background(255);
	imageMode(CENTER); //draws images from center point
}

//draw() runs continuously after preload() and setup() are complete
function draw() 
{
	background(0);

	//display image with image() 
	//image (name of image, x location, y location);
	image(tuna, mouseX, mouseY, tuna.width/2, tuna.height/2); // center tuna

	//add .width and .height to modify size of image 
	// image(tuna, width / 5, height - height / 5, tuna.width / 2, tuna.height / 2); //left tuna
	// image(tuna, width - width / 4, height - height / 3, tuna.width / 2, tuna.height / 2); //right tuna	
}