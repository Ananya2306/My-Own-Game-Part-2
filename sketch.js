const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//var gameState = "serve";
var tank ,tankUp,tankDown, tankLeft, tankRight;
var canvas,bg;
var e1,w1;
function preload(){
bg = loadImage("images/bg1.png");
  tankUp = loadImage("images/tankGU.png");
  tankDown = loadImage("images/tankGD.png");
  tankLeft = loadImage("images/tankGL.png");
  tankRight = loadImage("images/tankGR.png");

  en1 = loadImage("images/tankW1.png");
  en2 = loadImage("images/tankW2.png");
}

function setup() {
   canvas = createCanvas(1364,624);
   engine = Engine.create();
   world = engine.world;

  tank = createSprite(40, 565, 0.5, 0.5);
  //tank.shapeColor = "red";
  tank.addImage(tankRight);
  tank.scale = 0.15;
// x , y position 
  //size change = 115 , 400
  // size = 220 , 395
  // size change = 175 , 340
  // size = 180 , 340
  // size = 105 , 335
  // size = 475 , 225
  // size = 515 , 275
  // size = 600 , 275
  // size = 640 , 335
  // 730 , 335
  // 775 , 280
  // 775 , 390
  // 975 , 400
  // 1035 , 400
  // 1120 , 400
  // 1150 , 510
  // 1245 , 510
  // 1275 , 50 
  // final = 1350 , 50



e1 = createSprite(110,150,0.5,0.5);
e1.addImage(en1);
e1.scale = 0.24;

e2 = createSprite(105,330,0.5,0.5);
e2.addImage(en2);
e2.scale = 0.24;

e3 = createSprite(495,220,0.5,0.5);
e3.addImage(en1);
e3.scale = 0.24;

e4 = createSprite(745,335,0.5,0.5);
e4.addImage(en2);
e4.scale = 0.24;

e5 = createSprite(620,400,0.5,0.5);
e5.addImage(en1);
e5.scale = 0.15;

e6 = createSprite(1130,400,0.5,0.5);
e6.addImage(en2);
e6.scale = 0.15;

e7 = createSprite(1100,280,0.5,0.5);
e7.addImage(en1);
e7.scale = 0.15;

  //e1 = new Enemy(150,175,100,100);
/*
  w1 = new Wall(40,274,70,550);
  w2 = new Wall(680,20,1350,40);
  w3 = new Wall(680,605,1370,40);
  w4 = new Wall(1330,340,70,550);
  w5 = new Wall(620,540,450,40);
  w6 = new Wall(165,510,60,200);
  w7 = new Wall(130,370,130,40);
  w8 = new Wall(295,530,60,150);
  w9 = new Wall(235,425,200,40);*/
}

function draw() {
  background(bg);
/*
  if(gameState === "serve"){

    text("Of which gang you want to make your Tank?",200,200);
  }
*/  Engine.update(engine);
/*
w1.display();
w2.display();
w3.display();
w4.display();
w5.display();
w6.display();
w7.display();
w8.display();
w9.display();
*/

//w1.visiblity = false;


if(keyDown(UP_ARROW)){
    tank.y-=5;
    tank.addImage(tankUp);
    tank.scale = 0.15;
 }
 if(keyDown(DOWN_ARROW)){
  tank.y+=5;
  tank.addImage(tankDown);
  tank.scale = 0.15;
}
if(keyDown(RIGHT_ARROW)){
  tank.x+=5;
  tank.addImage(tankRight);
  tank.scale = 0.15;
}
if(keyDown(LEFT_ARROW)){
  tank.x-=5;
  tank.addImage(tankLeft);
  tank.scale = 0.15;
}
console.log(tank.x);
console.log(tank.y);

/*
if(tank.collide(w1)){
  tank.x = 40;
  tank.y = 540;
}
*/
  drawSprites();
  /*(fill(0); 
  textStyle("bold");
  textSize(24);
text(" ~ ~ ~ ~ Press Arrow Keys to Move the Tank ~ ~ ~ ~ ",700,50); 

*/

}