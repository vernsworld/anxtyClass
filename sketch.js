
let madDude;

let hand;
let dude;
let dudes = [];
let howManyDudes = 10;

function setup(){
    createCanvas(windowWidth, windowHeight);
    dude = loadImage('assets/dude.png')
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