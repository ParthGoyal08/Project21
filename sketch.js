var bullet,wall, thickness,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,20,10);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white")
}

function draw() {
  background("black");  
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
  }
  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
  drawSprites();
}
function hascollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}