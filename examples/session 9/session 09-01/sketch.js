/*
<><><><><><><><><><><><><><><><><><><><>
 WHILE LOOPS
 ________________
 Reference: 
 https://p5js.org/reference/p5/while/
 <><><><><><><><><><><><><><><><><><><><>
 */

 function setup() 
 {
   createCanvas(700, 700);
   rectMode(CENTER);
 }
 
 function draw() 
 {
   background(255, 200, 64);
 
   let x = 50; //LOCAL variable
   
   //while loop drawing ellipses from left to right
   while (x < width) 
   { //code in braces runs if boolean is true
     ellipse(x, height / 2, 75, 75);
     x = x + 100;
   }
 
   let y = 50; //LOCAL variable
   
   //while loop drawing rectangles from top to middle of canvas
   while (y < height / 2) 
   {
     rect(width / 2, y, 50, 50);
     y = y + 75;
   }
 }