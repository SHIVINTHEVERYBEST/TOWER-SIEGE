const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var block1, block2, block3, block4, block5, block6;
var block7, block8, block9;
var block10, block11, block12, block13, block14, block15;
var block16, block17, block18;
var slingshot;

function preload(){

 
}

function setup(){
createCanvas(800, 800);

engine = Engine.create();
world = engine.world;

polygon = new Polygon(60, 500, 20, 20);
World.add(world, polygon);

block1 = new Box(330, 235, 30, 40);
block2 = new Box(360, 235, 30, 40);
block3 = new Box(390, 235, 30, 40);
block4 = new Box(420, 235, 30, 40);
block5 = new Box(450, 235, 30, 40);

block6 = new Box(360, 195, 30, 40);
block7 = new Box(390, 195, 30, 40);
block8 = new Box(420, 195, 30, 40);

block9 = new Box(390, 155, 30, 40);

block10 = new Box(330, 535, 30, 40);
block11 = new Box(360, 535, 30, 40);
block12 = new Box(390, 535, 30, 40);
block13 = new Box(420, 535, 30, 40);
block14 = new Box(450, 535, 30, 40);

block15 = new Box(360, 495, 30, 40);
block16 = new Box(390, 495, 30, 40);
block17 = new Box(420, 495, 30, 40);

block18 = new Box(390, 455, 30, 40);

slingshot = new SlingShot(polygon.body,{x:60, y:500});


}

function draw(){
background(0);

  

  polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
