var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1,side2,side3,side1Body,side2Body,side3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	side1=createSprite(400,649,200,20);
	side1.shapeColor="red";

	side2=createSprite(289,610,20,100);
	side2.shapeColor="red";

	side3=createSprite(511,610,20,100);
	side3.shapeColor="red";

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 side1Body = Bodies.rectangle(400, 649, 200, 20 , {isStatic:true} );
	World.add(world, side1Body);

	side2Body = Bodies.rectangle(289, 610, 20, 100 , {isStatic:true} );
	World.add(world, side2Body);

	side3Body = Bodies.rectangle(511, 610, 20, 100 , {isStatic:true} );
	World.add(world, side3Body);

	
keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  side1=side1Body.position.x
  side1=side1Body.position.y
  side2=side2Body.position.x
  side2=side2Body.position.y
  side3=side3Body.position.x
  side3=side3Body.position.y

 

  
drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
    
  }
}



