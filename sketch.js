const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var g1;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;


  g1 = new ground (400,790,800,20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new plinko(j,75));
  }

  for (var j = 15;j <=width-10; j=j+50)
  {
    plinkos.push(new plinko(j,175));
  }

  for (var j = 40;j <=width; j=j+50)
  {
    plinkos.push(new plinko(j,275));
  }

  for (var j = 15;j <=width-10; j=j+50)
  {
    plinkos.push(new plinko(j,375));
  }
  
  Engine.run(engine);
}



function draw() {
  background("black");
  Engine.update(engine);  
  g1.display();

if(frameCount%60===0){
  particles.push(new particle(random(20,450),10,10));
}

for(var j = 0; j < particles.length; j++){
  particles[j].display();
}

for(var k = 0; k < divisions.length; k++){
  divisions[k].display();
}

for(var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}

  drawSprites();
}