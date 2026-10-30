/*
<><><><><><><><><><><><><><><><><><><><><><><><>
 FOR LOOPS
 _______________________________________________
 FOR LOOP STRUCTURE:
 
 for (initialize; boolean test; increment)
 {
   //statements;
 }
 _______________________________________________
 Reference:
 https://p5js.org/reference/p5/for/
 <><><><><><><><><><><><><><><><><><><><><><><><>
 */

 function setup() 
 {
   createCanvas(700, 700);
   background(200);
 }
 
 function draw() 
 {
   // for loop printing values of i to console
   /*
   for (let i = 1; i <= 10; i = i + 1) 
   {
     print(i);
   }
   */
 
   //for loop drawing vertical lines from left to right
   for (let i = 0; i < width; i = i + 50) 
   {
     line(i, 0, i, height);
   }
 
   //for loop drawing horizontal lines from top to bottom
   for (let i = 0; i < height; i = i + 50) 
   {
     line(0, i, width, i);
   }
 }