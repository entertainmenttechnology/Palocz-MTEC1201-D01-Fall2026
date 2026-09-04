/*
////////////////////////////
//			"GardenScape"			//
//			by Ian Pokorny		//
////////////////////////////

Demo: Drawing w/ 2D Primitives
*/

function setup() {
	//set canvas size
	createCanvas(1280, 720);
	
	//use first 2 parameters of rect() as center position
	rectMode(CENTER); 
	
	//set background color
	background(20, 100, 220);
	
	//sun
	fill(255, 200, 0);
	ellipse(200, 100, 100, 100);
	
	//ground
	fill(150, 200, 50);
	quad(20, 700, 200, 480, 1080, 480, 1260, 700);
	
	//glass structure
	fill(0, 200, 200, 127); //set alpha to 127, or 50%
	rect(550, 450, 200, 100);
	rect(625, 500, 200, 100);
	line(450, 400, 525, 450);
	line(650, 400, 725, 450);
	
	//left tree trunk
	fill(150, 120, 50);
	rect(350, 400, 20, 400);
	
	//left tree foliage
	fill(50, 180, 80);
	stroke(0, 100, 80);
	rect(350, 540, 400, 20);
	rect(350, 500, 300, 20);
	rect(350, 470, 200, 20);
	rect(350, 440, 150, 20);
	rect(350, 400, 124, 20);
	rect(350, 370, 100, 20);
	rect(350, 330, 80, 20);
	rect(350, 300, 70, 20);
	rect(350, 270, 60, 20);
	rect(350, 240, 35, 20);
	rect(350, 210, 25, 20);
	
	//right tree trunk
	stroke(0);
	fill(150, 100, 100);
	rect(800, 500, 20, 40);
	
	//right elliptical foliage
	fill(100, 50, 0);
	ellipse(800, 430, 100, 60);
	fill(200, 200, 0);
	ellipse(810, 450, 100, 60);
	fill(200, 100, 0);
	ellipse(780, 450, 100, 60);
	fill(180, 200, 0);
	ellipse(790, 430, 70, 40);
	
	//pyramid
	fill(200, 200, 200);
	triangle(1000, 500, 940, 480, 1010, 410);
	fill(100, 100, 100);
	triangle(1000, 500, 1080, 480, 1010, 410);	
}
