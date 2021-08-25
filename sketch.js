
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground, rightside,leftside
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
var ball_options = {
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2,
	
}
	//Create the Bodies Here.
ball = Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
	Engine.run(engine);
	ground = new Ground(width/2,690,1600,20)
	rightside = new Ground(1350,620,20,120)
	leftside = new Ground(1150,620,20,120)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
	ground.display()
	rightside.display()
	leftside.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
	}
}



