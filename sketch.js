
const Bodies= Matter.Bodies;
const World= Matter.World;
const Engine= Matter.Engine;


var plinkos= [];
var particles= [];
var divisions=[];
var ground1;


function setup() {

  engine= Engine.create();
  world= engine.world

  createCanvas(480, 800);

  ground1= new Ground(width/2, 780, width, 20);

  for(var i=0; i<=480; i=i+80){
    var division1= new Division(i, 670, 10, 200);
    divisions.push(division1);
  }

  for(var x=40; x<=480; x=x+50){
    var plinko1= new Plinko(x, 75, 10);
    plinkos.push(plinko1);
  }

  for(var x=15; x<=480; x=x+50){
    var plinko1= new Plinko(x, 175, 10);
    plinkos.push(plinko1);
  }

  for(var x=40; x<=480; x=x+50){
    var plinko1= new Plinko(x, 275, 10);
    plinkos.push(plinko1);
  }

  for(var x=15; x<=480; x=x+50){
    var plinko1= new Plinko(x, 375, 10);
    plinkos.push(plinko1);
  }

  
}

function draw() {

  background("black");  

  ground1.display();
  
  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

  for(var x=0; x<plinkos.length; x++){
   plinkos[x].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(0, width), 10, 10));
  }
  for(var y=0; y<particles.length; y++){
    particles[y].display();
   }

  drawSprites();

}

















