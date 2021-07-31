var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //preloading images
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){

createCanvas(400,400);

//moving background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;

//creating runner running
boy = createSprite(180340,30,30);
boy.scale = 0.08;
boy.addAnimation("JakeRunning",boyImg);

//createing leftBoundary
leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;

//creating rightBoundary
rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;

}

function draw(){

  background(0);
  path.velocityY = 4;

  // runner moving on x-axis with mouse
  boy.x = World.mouseX;
  
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background
  if(pathj.y > 400){
  path.y = height/2;
  }
}