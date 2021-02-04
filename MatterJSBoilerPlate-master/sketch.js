
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var engine,world,ground,boy;

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,690,1200,20);

	boy=new Boy(150,635,200,200);

	stone=new Stone(135,635);

	tree=new Tree(800,635,500,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  stone.display();
  boy.display();
  tree.display();
 
}



