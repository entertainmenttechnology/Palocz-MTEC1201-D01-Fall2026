/*
Another demo on arrays.
Loads images into an array and displays a random image with mouse press.
*/

let fish = [];  // declares empty array 

let whichFish = 0; // creates variable for tracking position in fish array

function setup() 
{
  createCanvas(1000, 800); 
  imageMode(CENTER); 

	//loading each image into array individually
  fish[0] = loadImage ("images/goldfish.png");
  fish[1] = loadImage ("images/shark.png");
  fish[2] = loadImage ("images/trout.png");
  fish[3] = loadImage ("images/tuna.png");
  fish[4] = loadImage ("images/herring.png");
}

function draw() 
{
  background(0, 64, 255); //clear background with blue

  //draw selected image from array at center of screen, at the original image size
  image(fish[whichFish], width/2, height/2, fish[whichFish].width, fish[whichFish].height);
}

function mousePressed() 
{
  whichFish = int(random(fish.length)); //need int() conversion as random returns a floating decimal value
	print(whichFish);                     //print current array index to console  
  print(fish[whichFish]);               //print currently selected image object info to console
}