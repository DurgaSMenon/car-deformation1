var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400); 

  speed=random(50,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="225";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=("blue");

}

function draw() {
background(0);  

if(wall.x-car.x< (wall.width+car.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;

   if(deformation>180){
       car.shapeColor=("red");
   }

   if(deformation<180){
       car.shapeColor=("yellow")
   }

     if(deformation<80){
        car.shapeColor=("green")
     }
}

drawSprites();
}