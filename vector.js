let v1 = new p5.Vector(40, 50, 0);
let v2 = new p5.Vector(40, 50, 0);
let v3 = new p5.Vector(50, 50);
let ponyPic;
let apple;
function setup(){
	createCanvas(710, 410);
	ponyPic = loadImage('assets/pony.png');
	apple = loadImage('assets/apple.png')
}

function draw(){
	let mouseVector = new p5.Vector(mouseX, mouseY);
	//constrain the vector to maximum and minimum range give magnitude of 1
	mouseVector.normalize();
	background(200);
	image(ponyPic, v1.x, v1.y, v3.x, v3.y);
	image(apple, v2.x, v2.y, v3.x, v3.y);
	v1.add(mouseVector);
	image(apple, v1.x, v1.y, v3.x, v3.y);

}