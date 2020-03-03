let v1 = new p5.Vector(40, 50, 0);
let v2 = new p5.Vector(40, 50, 0);
let v3 = new p5.Vector(100, 100, -1);



let madDude;

let hand;
let dude;
let dudes = [];
let howManyDudes = 10;

function setup(){
	createCanvas(windowWidth, windowHeight);
	dude = loadImage('assets/dude.png')
	hand = loadImage('assets/hand.png')
	madDude = new Angry();

	for (let i = 0; i < howManyDudes; i++){
		dudes[i] = new Angry();
	}

}

function draw(){
		background(255);

	madDude.display();
	madDude.move();
	for (let i = 0; i < howManyDudes; i++){
		dudes[i].move();
		dudes[i].display();
	}

	let mouseVector = new p5.Vector(mouseX, mouseY);
	//constrain the vector to maximum and minimum range give magnitude of 1
	mouseVector.normalize();

	image(dude, v1.x, v1.y, v3.x, v3.y);
	image(dude, v2.x, v2.y, v3.x, v3.y);
	v1.add(mouseVector);
	//image(hand, v1.x, v1.y, v3.x, v3.y);

}

class Angry {
	constructor(){
		//give ball a location
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(0,1);
		this.yspeed = random(0,1);
	}
	display(){
		image(hand, this.x, this.y);
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