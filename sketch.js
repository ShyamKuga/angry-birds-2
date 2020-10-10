
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bingreen
var paper
var ground
var bin
var bin2
var bin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper (10,400,10)
	bingreen = loadImage("dustbingreen.png")
ground = new Ground(400,690,900,20)
bin = new Bin(400,675,150,10)
bin2 = new Bin(480,630,10,100)
bin3 =new Bin(320,630,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(21);
  paper.display()
ground.display()
bin.display()
bin3.display()
bin2.display()
image(bingreen,330,580,140,90)
  drawSprites();
 
}


function keyPressed() {
	console.log(1)
	if (keyCode === UP_ARROW){
		console.log(2)
		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-12})
	}
}


