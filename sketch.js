var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=color("coral");
  wall=createSprite(1500,200,60,200);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background("white");  
  if(wall.x-car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;
    deformation=(weight*speed*speed*0.5)/22500;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}