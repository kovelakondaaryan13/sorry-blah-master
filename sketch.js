const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1 , box2 , box3 ;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box (100,100,75,75);
    box2 = new Box (200,100,75,75);
    box3 = new Box (300,100,75,75);
}

function draw(){
    background("blue");
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    
    push();
    text("I WILL BE OBLIGED IF U SEE THE BOXES FALLING :",25,75)
    stroke(3);
    textSize(25);
    fill("red");
    pop();
}
