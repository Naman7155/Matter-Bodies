
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.99,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
  //create a ground
  ground = Bodies.rectangle(100,387,600,20,ground_options);
  //add to world
  World.add(world,ground);

  ball = Bodies.circle(100,10,15,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("lightgreen");

  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,15);

  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,600,20);
}

