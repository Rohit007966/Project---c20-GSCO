var car ;
var wall ;
var speed ;
var weight ;

function setup() {
  createCanvas(1000,1000);
 
 car = createSprite(50,100,50,50);
 car.shapeColor = "green"; 
 
 car2 = createSprite(50,300,50,50);
 car2.shapeColor = "yellow"; 
 
 car3 = createSprite(50,500,50,50);
 car3.shapeColor = "red"; 
 
 
 
 wall = createSprite(800,100,10,100);
 wall2 = createSprite(800,300,10,100);
 wall3 = createSprite(800,500,10,100);


speed = random(55,90)
weight = random(400,1500)

}

function draw() {
  background(255,255,255);  
 
 car.velocityX = speed;

 car2.velocityX = speed;
 
 car3.velocityX = speed;

 

 car.collide(wall);

 car2.collide(wall);

 car3.collide(wall);

 if(wall.x-car.x <(car.width + wall.width)/2){
   car.velocityX=0;
   var deformation = 0.5 *weight * speed* speed/22500;
   if(deformation > 180){
     car.shapeColor = color(255,0,0);
    ;
   
    }
   if(deformation < 180 && deformation > 100){
     car.shapeColor = color(230,230,0);
     
   }
   if(deformation < 100){
     car.shapeColor = color(0,255,0);
    
   }
  }

  if(wall.x-car2.x <(car2.width + wall.width)/2){
    car2.velocityX=0;
    var deformation = 0.5 *weight * speed* speed/22500;
    if(deformation > 180){
      car2.shapeColor = color(255,0,0);
     ;
    
     }
    if(deformation < 180 && deformation > 100){
      car2.shapeColor = color(230,230,0);
      
    }
    if(deformation < 100){
      car2.shapeColor = color(0,255,0);
     
    }
   }


   if(wall.x-car3.x <(car3.width + wall.width)/2){
    car3.velocityX=0;
    var deformation = 0.5 *weight * speed* speed/22500;
    if(deformation > 180){
      car3.shapeColor = color(255,0,0);
     ;
    
     }
    if(deformation < 180 && deformation > 100){
      car3.shapeColor = color(230,230,0);
      
    }
    if(deformation < 100){
      car3.shapeColor = color(0,255,0);
     
    }
   }
 
 
 
 
 
 
 
 
 drawSprites();
}