const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12;
var ground;

function setup(){
    var canvas = createCanvas(400,350);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(34,390,30,580);
    box2 = new Box(73,390,50,380) ;
    box3 = new Box(120,390,50,500) ;
    box4 = new Box(170,390,50,380) ;
    box5 = new Box(220,390,50,380) ;
    box6 = new Box(260,390,50,380) ;
    box7 = new Box(300,390,50,500) ;
    box8 = new Box(340,390,30,580);
    box9 = new Box(210,186,126,30);
    box10 = new Box(210,156,30,30);
    box11 = new Box(210,127,10,30);
    box12 = new Box(235,118,40,12);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display() ;
   box3.display() ;
   box4.display() ;
   box5.display() ;
   box6.display() ;
   box7.display() ;
   box8.display() ; 
  box9.display() ;
  box10.display() ;
  box11.display() ;
  box12.display() ; 
  
 
}