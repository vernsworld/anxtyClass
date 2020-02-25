allPancakeRed = 160  //amount of red 
allPancakeGreen = 10; //amount of green

function setup(){
    createCanvas(400, 400);


}

function draw(){
    ponyPancake(0, 0);
    ponyPancake(300, 100);
    ponyPancake(200, 200);

}

function ponyPancake(pancakeY, pancakeColor){
    //PANCAKE FILL SEE NOTES BELOW
    fill(allPancakeRed, allPancakeGreen, pancakeColor); 
    //using local variable for blue, global variable for red 
    //and green, they are called at top of code
    for(let i = 0; i < 3; i++){
      ellipse(width/2+(i*10), pancakeY, 100, 50);
    }
}