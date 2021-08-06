//defining the sprites
var path,Runner,leftsafety,rightsafety,pathImg;


function preload(){
//loading the images and animations

pathImg=loadImage("path.png");
boyImg=loadAnimation("Jake1.png","Jake2.png","Jake3,png","Jake4.png","Jake5.png")

}

function setup(){
  createCanvas(400,400);
 
  //creating the path
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.201;

//creating the boy 
boy=createSprite(180,300,30,30);
boy.addAnimation("JakeRunning",boyImg);

//creating the safety for the boy
leftsafety=createSprite(0,0,100,1000);
leftsafety.visible = false;

}

function draw() {
  background(0);

boy.x = World.mouseX;
if(path.y>400){
  path.y = height/2;

}
//creating the edges and colliding the boy to the safety
edges=createEdgesSprites();
boy.collide(leftsafety);
boy.collide(rightsafety);
boy.collide(edges);


  drawSprite();


}
