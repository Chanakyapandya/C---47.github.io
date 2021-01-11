const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var world;
var engine;
var sun ; 
var earth , earthOrbitCounter;
var mars , marsOrbitCounter;



function preload() {}
function setup() {
  createCanvas(600,600);




  engine = Engine.create();
  world = engine.world;

 //set gravity
 engine.world.gravity.y = 0;

 
 sun = new Sun(300,300,100);
 earth = new Earth(300,450,45);
 earthOrbitCounter = 0;
 marsOrbitCounter = 0;
 mars = new Mars(20,580,40)

 
 


}

function createOrbit(planet, counter, strength){
  if(counter === 0){
    console.log(counter);

    Matter.Body.setVelocity(planet.body, {x: strength, y: strength * (-1)})

    counter++;
  }
}
function draw() {
  background("black");

  Engine.update(engine);

  sun.display();
  earth.display();
  mars.display();
  
  if(earthOrbitCounter === 0){
    Matter.Body.setVelocity(earth.body, {x: 2.5, y: -2.5})
  }
  if(earthOrbitCounter === 70){
    Matter.Body.setVelocity(earth.body, {x: -2.5, y: -2.5})
  }
  if(earthOrbitCounter === 140){
    Matter.Body.setVelocity(earth.body, {x: -2.5, y: 2.5})
  }
  if(earthOrbitCounter === 210){
    Matter.Body.setVelocity(earth.body, {x: 2.5, y: 2.5})
  }
  if(earthOrbitCounter === 280){
    earthOrbitCounter = 0;
    Matter.Body.setVelocity(earth.body, {x: 2.5, y: -2.5})
  }
  if(earthOrbitCounter === 35){
    Matter.Body.setVelocity(earth.body, {x: 2.5, y: -2.5})
  }
  if(earthOrbitCounter === 105){
    Matter.Body.setVelocity(earth.body, {x: -2.5, y: -2.5})
  }
  if(earthOrbitCounter === 175){
    Matter.Body.setVelocity(earth.body, {x: -2.5, y: 2.5})
  }
  if(earthOrbitCounter === 245){
    Matter.Body.setVelocity(earth.body, {x: 2.5, y: 2.5})
  }



  earthOrbitCounter++
  marsOrbitCounter++
  
}
