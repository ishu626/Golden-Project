var riverbg, river
var boat, boatimg
var block1, block2


function preload(){
  riverbg=loadImage('Riverbg.jpg');
  boatimg=loadImage('boat.png');
}
function setup(){
  
  createCanvas(displayWidth - 20, displayHeight - 30);

  river=createSprite(displayWidth/2, displayHeight/2);
  river.x=river.width/2;
  river.addImage(riverbg);
  boat=createSprite(75,displayHeight/2);
  boat.addImage(boatimg);
  boat.scale=0.2;
  river.scale=5.0; 
  river.velocityX=-3;

  block1=createSprite(75,75,75,50)
  block2=createSprite(75,displayHeight-150,75,50)
}
function draw(){
  background("green");
//creating Infinite BG
if (river.x<0){
  river.x=river.width/2+210;
}
//vertical movement
boat.y=mouseY;
boat.collide(block1);
boat.collide(block2);

  drawSprites();
}

