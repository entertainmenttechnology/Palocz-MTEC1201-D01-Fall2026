/*
////////////////////////////////////////////////////
 Demo 1: working with image assets. 
 Demo 2: adds text animation.
 Demo 3: adds mouse response and second image asset. 
 
 Press and hold mouse.
 ///////////////////////////////////////////////////
 
 Go to "files" tab (on OpenProcessing menu to the right, click upper right icon to reveal menu if hidden).
 Upload image assets as indicated. 
 
 Note the use of preload() in this sketch for loading assets before setup() is called. 
 */

//Create a p5.Image object to store image
let tuna; //Declares p5.Image object called tuna
let shark; //Declares p5.Image object called shark

//Creates variables for text animation
let opacity = 0;
let fade = 1;

//Creates variable for fish animation
let fall = 0;

//Load image assets into preload() to avoid asynchronous loading errors
function preload() {
	tuna = loadImage("images/tuna.png"); //Assign image to variable using loadImage() 
	shark = loadImage("images/shark.png");
	//Use preload() only to load assets-- nothing else!
}

//setup() is called AFTER preload() is complete and runs only once
function setup() {
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
	text("FISH!", width / 2, height / 2 - 50); //displays text
	opacity = opacity + fade;
	
	if (opacity > 255 || opacity < 0) 
	{
		fade = -fade;
	}

	if (mouseIsPressed) 
	{
		background(255);
		text("YUM!", width / 2, height / 2 - 70); //displays text
		image(shark, width / 2, height / 2, shark.width/2, shark.height/2);
		image(tuna, width / 2, fall, tuna.width/2, tuna.height/2);
		
		if (fall < height / 2) 
		{
			fall++;
		}
	} 
	else 
	{
		fall = 0;
	}

	print("opacity: " + opacity);
	print("fade: " + fade);
	print("fall: " + fall);
}