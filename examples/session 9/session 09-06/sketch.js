/*
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 Q: How can we create interaction with a for loop?
 
 A: You can sneak a conditional statement into that for loop!
 
 In this example, each individual circle within the line changes color with mouse hover
 <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 */
 function setup() 
 {
   createCanvas(750, 200);
 }
 
 function draw() 
 {
   let diameter = 30;
   let radius = 15;
   
   background(32);
 
   for (let i = 0; i <= width; i += diameter) 
   {
     //if mouse position is within radius of circle...
     if (mouseX > i - radius && mouseX < i + radius && mouseY > height / 2 - radius && mouseY < height / 2 + radius) 
     {
       fill(30, 200, 200); //set fill blue
     } 
     else 
     {
       fill(255);	//set fill white
     }
     ellipse(i, height / 2, diameter, diameter);
   }
 }