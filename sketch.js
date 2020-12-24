
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600, 100, 200, 50);

	bob1 = new Bob(500, 300, 40);
	bob2 = new Bob(550, 300, 20);
	bob3 = new Bob(600, 300, 20);
	bob4 = new Bob(650, 300, 20);
	bob5 = new Bob(700, 300, 20);

	rope1 = new Rope(bob1.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.draw();

  bob1.draw();
  bob2.draw();
  bob3.draw();
  bob4.draw();
  bob5.draw();

  rope1.draw();

}



