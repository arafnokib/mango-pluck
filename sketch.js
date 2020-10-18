const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var tree;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

   
 
    tree = new Box(800,390,170,300)
    mango = new Mango(774,200);
    stone = new Stone(300,100);


   // log6 = new Log(230,180,80, PI/2);
    chain = new Slingshot(stone.body,{x: 200, y: 100});
}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
  
    background(85);

    ground.display();
  

  
    mango.display();
   // platform.display();
   // log6.display();
    chain.display();   
    stone.display(); 
    chain.display();
    tree.display();
    tree.scale = 3;
    console.log(mouseX);
    console.log(mouseY);



}

function mouseDragged(){
Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    chain.fly();
}