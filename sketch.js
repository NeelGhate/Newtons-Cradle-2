//please press space and then alt button .



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1,ball2,ball3,ball4,ball5;
var rope,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ballDiameter = 100;
	startx = 400;
	starty = height/8+500;
	roof = new Roof (400,200,500,30);
	ball1 = new Ball (startx-ballDiameter*2,starty,ballDiameter);
	ball2 = new Ball (startx-ballDiameter,starty,ballDiameter);
	ball3 = new Ball (startx,starty,ballDiameter);
	ball4 = new Ball (startx+ballDiameter,starty,ballDiameter);
	ball5 = new Ball (startx+ballDiameter*2,starty,ballDiameter);
	
	//ballDiameter = ball1.body.radius*2;
	rope =  new Rope (ball1.body, roof.body,-ballDiameter*2,0);
	rope2 =  new Rope (ball2.body, roof.body,-ballDiameter,0);
	rope3 =  new Rope (ball3.body, roof.body,0,0);
	rope4 =  new Rope (ball4.body, roof.body,+ballDiameter,0);
	rope5 = new Rope (ball5.body, roof.body,+ballDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(233);

  //ball3.debug = true;
 // ball3.setCollider("rectangle")

  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
	if(keyCode === 32){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
	}
  

  drawSprites();
 
}








