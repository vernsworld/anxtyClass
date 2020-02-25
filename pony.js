//create new instance of class Pony named (any name)
let ponyPic;
let apple;

let ponies =[];
let howManyPonies = 50;
let whichPony = 0;

let mouseBoxX;
let mouseBoxY;

function setup(){
	createCanvas(710, 410);
	apple = loadImage('assets/apple.png')
	ponyPic = loadImage('assets/pony.png');
	bertha = new Pony();
	
	for (let i = 0; i < howManyPonies; i++){
		ponies[i] = new Pony();
	}
}

function draw(){
	noCursor();
	background(100);
	image(apple, mouseX, mouseY, 50, 50);

	
	for (let i = 0; i < howManyPonies; i++){
		ponies[i].move();
		for (let j = 0; j < howManyPonies; j++){
			if ponies[i] != ponies[j]{
			if (ponies[i].insersects(ponies[j])){
				ponies[i].visible = false;
				ponies[j].visible = false;
				}
			}
		}
		ponies[i].display();
	}

	image(apple, mouseBoxX, mouseBoxY, 50, 50);
	//calling up "intersects" method in the pony class
	//specific pony 5 and seeing if it's going to 
	// intersect with pony 3 (in intersects pony3 is considered other)
	let collision = ponies[5].insersects(ponies[3]);
}

function mousePressed(){
	mouseBoxX = mouseX;
	mouseBoxY = mouseY;
	//select a pony at mouse point
	ponies [whichPony].teleportPony(mouseX, mouseY);
	//make thie pony visible
	ponies [whichPony].makePonyVisible();
	//so this a new pony can have this experience
	whichPony++;
	//keeping it so that the number of ponies may 
	//max out however the max amount will continue to regenerate
	whichPony = whichPony % howManyPonies;
}

class Pony {
	//need constructor function, sets up value for the class
	constructor(){
		//give pony a location
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(0,1);
		this.yspeed = random(0,1);
		this.visible = false;
	}
	//what does the pony look like? where does it go? 
	display(){
		if(this.visible){
			imageMode(CENTER);
			image(ponyPic, this.x, this.y);
		}
	}
	//loop through entire array of ponies, if visible
	//see if they are intersecting with another pony
	//when we call a specific pony...
	intersects(other){
		let d = dist(this.x, this.y, other.x, other.y);
		//if d is less than or equal to 75 return true
		if(d <= 75){
			return true;
		}else{
			return false;
		}
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

		// if ((this.x > mouseBoxX && this.x < (mouseBoxX + 50))&&(this.y > mouseBoxY && this.y < (mouseBoxY + 50))){
		// 	this.xspeed = this.xspeed * 1.5;
		// 	this.yspeed = this.yspeed * 1.25;
		// }
	}

	teleportPony(xLoc, yLoc){
		this.x = xLoc;
		this.y = yLoc;
	}
	makePonyVisible(){
		this.visible = true;
	}
}
