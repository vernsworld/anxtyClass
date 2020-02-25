
/* Coding Challenge 2

Take this code that gives a basic bouncing ball and change it in 2 major ways


1)refactor it so that you have a ball class, and write a draw loop 
that has many bouncing balls. 

2) instead of a ball change it into a more interesting shape, or a picture or something
also change the name of your class to reflect your sketch better
*/


// //add the current speed to the location
// x = x + xspeed;
// y = y + yspeed;

// if ((x > width) || (x < 0)) {
// 	xspeed = xspeed * -1;
// }

// if ((y > height) || (y < 0)) {
// 	yspeed = yspeed * -1;
// }




let ponyBall;

let hand;
let dude;
let balls = [];
let howManyBalls = 10;

function setup(){
	createCanvas(windowWidth, windowHeight);
	dude = loadImage('assets/dude.png')
	ponyBall = new Ball();

	for (let i = 0; i < howManyBalls; i++){
		balls[i] = new Ball();
	}

}

function draw(){
		background(255);

	ponyBall.display();
	ponyBall.move();
	for (let i = 0; i < howManyBalls; i++){
		balls[i].move();
		balls[i].display();
	}

}

class Ball {
	constructor(){
		//give ball a location
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(0,1);
		this.yspeed = random(0,1);
	}
	display(){
		image(dude, this.x, this.y);
	}
	move(){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

		if ((this.x > width) || (this.x < 0)) {
		this.xspeed = this.xspeed * -1;
	}

		if ((this.y > height) || (this.y < 0)) {
			this.yspeed = this.yspeed * -1;
		}
	}

}