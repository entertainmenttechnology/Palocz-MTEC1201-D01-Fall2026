let circleSize=50;

function setup() 
{
	createCanvas(500, 500);
	colorMode(HSB);
}

function draw() 
{
	background(127);
	for(let x = circleSize/2; x < width; x += circleSize) {
		for(let y = circleSize/2; y < height; y+= circleSize) {
			let hue = y / width * 255;
			fill(hue, 255, 255);
			circle(x, y, circleSize);
		}
	}



}