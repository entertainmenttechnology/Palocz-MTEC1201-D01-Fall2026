/*
 Another demo for arrays.
 Load images into an array and 
 displays a random image with mouse press.
*/

let fishImages = [];  // declares empty array 

let whichFish = 0; // creates variable for tracking position in fish array

function setup() 
{
  createCanvas(1000, 800); 
  imageMode(CENTER); 

	//loading each image into array individually
  fishImages[0] = loadImage ("images/goldfish.png");
  fishImages[1] = loadImage ("images/shark.png");
  fishImages[2] = loadImage ("images/trout.png");
  fishImages[3] = loadImage ("images/tuna.png");
  fishImages[4] = loadImage ("images/herring.png");
}

function draw() 
{
  background(0, 64, 255); //clear background with blue

  //draw selected image from array at center of screen, at the original image size
  let fishImage = fishImages[whichFish]
  image(fishImage, width/2, height/2, fishImage.width, fishImage.height);
}

function mousePressed() 
{
  // get a random index value starting from 1 (the second index)
  // needs int() conversion as random returns a floating decimal number
  let randomIndex = int(random(1, fishImages.length)); 

  // if we got the same value as the current whichFish, swap it 
  // with the first index (0) to avoid repeats 
  if(randomIndex === whichFish) {
    randomIndex = 0;
  }

  // set whichFish to our new random index
  whichFish = randomIndex; 

	print(whichFish);              //print current array index to console  
  print(fishImages[whichFish]);  //print currently selected image object info to console
}