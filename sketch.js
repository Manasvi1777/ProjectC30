const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(220+200,340+100,180,20);
    ground2 = new Ground(220+500,340+60,120,20);
    baseGround = new Ground(500,980,1000,20);
    block1 = new Block(185+200,325+110,40,40);
    block2 = new Block(209+200,325+110,40,40);
    block3 = new Block(233+200,325+110,40,40);
    block4 = new Block(257+200,325+110,40,40);
    block5 = new Block(195+200,300+110,40,40);
    block6 = new Block(220+200,300+110,40,40);
    block7 = new Block(245+200,300+110,40,40);
    block8 = new Block(207+200,275+110,40,40);
    block9 = new Block(233+200,275+110,40,40);
    block10 = new Block(220+200,250+110,40,40);
    block12 = new Block(220+472,250+110,40,40);
    block13 = new Block(220+515,250+110,40,40);
    block11 = new Polygon(40+100,330+100,40,40);
    block14 = new Block(220+494,250+65,40,40);

    slingshot = new SlingShot(block11.body,{x:220, y:400});
}

function draw(){
    background("black");
   Engine.update(engine);
   baseGround.display();
    ground.display();
    ground2.display();
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    fill("pink");
    block5.display();
    block6.display();
    block7.display();
    fill("violet");
    block8.display();
    block9.display();
    fill("maroon");
    block10.display();
    fill("white");
    block11.display();
    fill("blue");
    block12.display();
    block13.display();
    fill("pink");
    block14.display();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(block11.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(block11.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}