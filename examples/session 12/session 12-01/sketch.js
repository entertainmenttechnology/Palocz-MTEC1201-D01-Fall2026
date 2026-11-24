/*
Example of loading, triggering, and looping sound files
<><><><><><><><>
CONTROLS:
A - MUTE DRUMS
S - MUTE BASS
CLICK MOUSE - PLAY STRING

See reference for p5.SoundFile methods and examples: https://p5js.org/reference/p5.sound/ 
*/

//declare object for storing my audio files
let drumLoop;
let bass;
let string;

//booleans for muting volume of audio files
let drumMute = false;
let bassMute = false;

function preload() //loading mp3 files into objects
{
	drumLoop = loadSound('audio/drumLoop.mp3');
	bass = loadSound('audio/bass.mp3');
	string = loadSound('audio/string.mp3');
}

function setup() 
{
	createCanvas(600, 600);
	strokeWeight(3);
	
	//begin LOOPED playback, see:
	//https://p5js.org/reference/p5.SoundFile/loop/
	drumLoop.loop();
	bass.loop();
}

function draw() 
{
	background(127);
	
	if (drumMute)
	{
		drumLoop.amp(0.0); //set volume to 0.0, no sound
	}
	else
	{
		drumLoop.amp(1.0); //set volume to max value of 1.0
		fill(64, 200, 255); // draw blue rectangle if unmuted
		rect(0, height/2, width, height);
	}
	
	if (bassMute) 
	{
		bass.amp(0.0); //set volume to 0.0, no sound
	}
	else
	{
		bass.amp(1.0); //set volume to max value of 1.0
		fill(255, 127, 0); //draw orange rectangle if unmuted
		rect(0, 0, width, height/2);
	}
	
	if (string.isPlaying()) //if string file is currently playing...
	{
		for (let i = 0; i < width; i += 10) //draw lines from mouse position to center at regular interval
		{
			line(mouseX, mouseY, i, height/2); 
		}
	}
	
}

function keyPressed()
{
	if (key === 'a')
	{
		drumMute = !drumMute; //switch drum volume on/off (mute)
	}
	else if (key === 's')
	{
		bassMute = !bassMute; //switch drum volume on/off (mute)
	}
}

function mousePressed()
{
		string.play(); //play string file when mouse is pressed
}