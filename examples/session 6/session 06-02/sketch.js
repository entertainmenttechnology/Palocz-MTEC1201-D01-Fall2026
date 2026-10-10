/*
////////////////////////////////////////////////////////////////////
// Demo: working with image assets. This one adds text animation.	//
////////////////////////////////////////////////////////////////////
 
 Go to "files" tab (on OpenProcessing menu to the right-- click upper right icon to reveal menu if hidden).
 Upload image assets as indicated. 
 
 Note the use of preload() in this sketch for loading assets before setup() is called. 
 */

//Create a p5.Image object to store image
let tuna; //Declares p5.Image object called tuna

//Creates variables for text animation
let opacity = 0;
let fade = 1;

//Load image assets into preload() to avoid asynchronous loading errors
function preload() 
{
	tuna = loadImage("images/tuna.png"); //Assign image asset to p5.Image object using loadImage() 
	//Use preload() only to load assets & nothing else!
}

//setup() is called AFTER preload() is complete and runs one time only
function setup() 
{
	createCanvas(500, 500);
	background(255);
	imageMode(CENTER); //draws images from center point
	textAlign(CENTER); //draws text from centerpoint
	textSize(88); //sets size of text
}

//draw() runs continuously after preload() and setup() are complete
function draw() 
{
	background(255);

	//text display and animation
	fill(opacity);
	text("FISH!", width / 2, height / 4); //displays text
	opacity = opacity + fade;
	
	if (opacity > 255 || opacity < 0) 
	{
		fade = -fade;
	}

	//display image with image() 
	//image (name of image, x location, y location);
	image(tuna, width / 2, height / 2); // center fish

	//add .width and .height to modify size of image 
	image(tuna, width / 5, height - height / 5, tuna.width / 2, tuna.height / 2); //left fish
	image(tuna, width - width / 4, height - height / 3, tuna.width / 2, tuna.height / 2); //right fish
	
	print ("opacity: " + opacity);
  print ("fade: " + fade);
}