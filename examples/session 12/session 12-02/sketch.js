/*
SOUND Example w/:
- loading, re-triggering, and looping sound files.
- adjusting playback rate of audio 
<><><><><><><><>
CONTROLS:
A - MUTE
S - MUTE
Q - START / RETRIGGER
W - STOP
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
	strokeWeight(2);
}

function draw() 
{
	background(127);
	
	let pitch = constrain(mouseY, 0, height); //limiting pitch from 0 to height
	pitch = map(pitch, 0, height, 0.05, 2); //mapping pitch from 0.05 to 2
	
	//adjusting the playback rate of sound file, see:
	//https://p5js.org/reference/p5.SoundFile/rate/
	string.rate(pitch);
	//NOTE: .rate values below 0 will make the file play backwards. A rate of 2 is twice as fast as original speed
	
	//moved mute and line display from previous demo to functions
	mutes();
	linesDisplay();
}

function mutes()
{
	if (drumMute)
	{
		drumLoop.amp(0.0);
	}
	else
	{
		drumLoop.amp(1.0);
		fill(64, 200, 255);
		rect(0, height/2, width, height);
	}
	
	if (bassMute)
	{
		bass.amp(0.0);
	}
	else
	{
		bass.amp(1.0);
		fill(255, 127, 0);
		rect(0, 0, width, height/2);
	}
}

function linesDisplay()
{
	if (string.isPlaying())
	{
		for (let i = 0; i < width; i += 10)
		{
			line(mouseX, mouseY, i, height/2);
		}
	}
}

function keyPressed()
{
	if (key === 'a')
	{
		drumMute = !drumMute;
	}
	else if (key === 's')
	{
		bassMute = !bassMute;
	}
	else if (key === 'q')
	{
		//stop playback, then start loop playback from beginning of file
		drumLoop.stop();
		bass.stop();
		drumLoop.loop();
		bass.loop();
	}
	else if (key === 'w')
	{	
		//stop playback
		drumLoop.stop();
		bass.stop();
	}
}

function mousePressed()
{
	string.play();
}