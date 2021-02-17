const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,box;

function setup() {
  createCanvas(400,400);
 engine= Engine.create();
 world= engine.world;
 ground=new Ground(200,380,400,10);
 box1=new Box(225,50,100,30);
 box2=new Box(200,100,40,80);
 console.log(ground);
 

}

function draw() {
  background(0);
  Engine.update(engine)
 ground.display()
box1.display()
box2.display()


}


