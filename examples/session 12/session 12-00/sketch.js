/*
Example of class inheritance

<><><><><><><><>
BASIC PSEUDOCODE:


class ParentClass {  //class name is capitalized
  constructor() //constructs the object, like setup()
	methods() // like functions for the class
}

class ChildClass extends ParentClass{  //class name is capitalized
  //constructs the object, like setup()
  constructor() { 
    super(); // calls the constructor method of the parent class
  }
	methods() // like functions for the class
}
*/

let square1;
let circle1;
const shapeSize = 40;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  square1 = new BouncingSquare(width/2, height/2, shapeSize);
  circle1 = new BouncingCircle(width/2, height/2 + shapeSize, shapeSize);
}

function draw() {
  background(220);

  square1.move();
  square1.draw();

  circle1.move();
  circle1.draw();
}

class BouncingShape {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.movingLeft = true;
    this.speed = 3;
  }
  move() {
    if(this.movingLeft) {
      this.x += this.speed;
      if(this.x > width) {
        this.movingLeft = false;
      }
    }
    else {
      this.x -= this.speed;
      if(this.x <= 0) {
        this.movingLeft = true;
      }
    }
  }
  draw() {}
}

class BouncingCircle extends BouncingShape {
   constructor(x, y, size) {
    super(x, y, size);
    this.shapeType="circle";
  }
  draw() {
    circle(this.x, this.y, this.size);
  }
}

class BouncingSquare extends BouncingShape {
   constructor(x, y, size) {
    super(x, y, size);
    this.shapeType="square";
  }
  draw() {
    square(this.x, this.y, this.size);
  }
}


