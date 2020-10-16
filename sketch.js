
var TEXT=1;
var PLAY=2;
var RUN =3;
var END=0;

var gameState= 1;

var player,ground,obstacle,obstacle_img;


function setup() {
  createCanvas(displayWidth,displayHeight);
 
}

function draw() {
  background(255,255,255);  

  
  
  if(gameState===1){
    text("Hello welcome to Moira's game",displayWidth/2,displayHeight/2)
    text("Press space to start the game",displayWidth/2,displayHeight/2+50)
    //text("text",x,y)
  }
 if(keyDown("space")&& gameState===1){
 gameState = 2
 }

 if(gameState===2){
 player=createSprite(displayWidth/2-400,displayHeight-20, 50, 50);
 ground=createSprite(displayWidth/2,displayHeight-10,displayWidth,10);
 player.collide(ground);
 ground.velocityX=-2;
  if(ground.x<0){
    ground.x=displayWidth/2
  }
  spawnObstacle();

}
  
  drawSprites();
}

function spawnObstacle(){
  if(frameCount%80 === 0){
    obstacle=createSprite(displayWidth,displayHeight-200,20,40)
    obstacle.velocityX=-2
  }
}