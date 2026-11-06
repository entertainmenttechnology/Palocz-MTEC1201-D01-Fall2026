/*
  Warm-up example for session 10
  Prompt: Create a visual pattern with loops that only uses points

*/

// number of rows and columns across the canvas
const numRows = 10;

// space between each point
let pointSpace;

function setup() {
    createCanvas(700,700);
    colorMode(HSB);

    // set the space between points based on the canvas width
    pointSpace = width/(numRows + 1);
}

function draw() {
    background("black");

    // figure out how many columns of points to draw
    let numXPoints = mouseX / pointSpace;

    // iterate through each column
    for(let i = 1; i <= numXPoints; i++) {
        // get the size of the point (between 0 and pointSpace)
        let size = pointSpace * i / numXPoints;
        strokeWeight(size);

        // get the x value for the column
        let x = i * width/(numRows + 1);

        //iterate through each row in the column
        for(let j = 1; j <= numRows; j++) {
            // get the y value for the row
            let y = j * height/(numRows + 1);

            // if the mouse is below this row, 
            // break out of the row loop
            if(y > mouseY) {
                break;
            }

            // set color based on the row number
            let hue = j * 360/(numRows);
            stroke(hue, 255, 255);

            // draw the point
            point(x, y);
            
        }
    }
}
