var bg
var bg2
var score=0;
var start
var que
var ans

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  start = createButton("START")
  start.position(windowWidth/2,windowHeight/2)
  start.size(200,50)

  start.mousePressed(game)
  
}

function draw() {
  background(bg);
  drawSprites();

}

function game(){

  bg = bg2
  start.hide();

  que = createButton("It stores all information");
  que.position(windowWidth/2,windowHeight/2)
  que.size(200,100)

  

}


