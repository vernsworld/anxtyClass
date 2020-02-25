
let buckwheatPancake; 
let sourDoughPancake;

let pancakes = [];

function setup() {
  createCanvas(710, 400);
  // Create object
  buckwheatPancake = new PonyPancake();
 //  sourDoughPancake = new PonyPancake();
 // //making 100 unnamed instances of class PonyPancake
 //  for (let i = 0; i < 100; i++){
 //    pancakes[i] = PonyPancake();
 //  }
}

function draw() {
  background(50, 89, 100);
  buckwheatPancake.move();
  buckwheatPancake.display();

  // sourDoughPancake.move();
  // sourDoughPancake.display();

  // for (let i = 0 ; i < 100; i ++){
  //   pancakes[i].move();
  //   pancakes[i].display();
  // }
}

// Jitter class
class PonyPancake {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
}  }
