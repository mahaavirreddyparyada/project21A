var gameObject2,gameObject1,gameObject3,gameObject4,gameObject5; 

function setup()
{ 
   createCanvas(1200,800);
   gameObject1=createSprite(200,200,50,50);
   gameObject2=createSprite(400,200,50,50);
   gameObject3=createSprite(600,200,50,50);
   gameObject4=createSprite(800,200,50,50);
   
   gameObject1.shapeColor="green";
   gameObject2.shapeColor="green";
   
   gameObject3.shapeColor="green";
   gameObject4.shapeColor="green";

   gameObject5=createSprite(100,200,50,80);
   gameObject5.shapeColor="green";

   gameObject1.debug=true;
   gameObject2.debug=true;
   gameObject3.debug=true;
   gameObject4.debug=true;
   gameObject5.debug=true;


    
   }
 function draw() {
     background(0);

    gameObject5.x=mouseX;
    gameObject5.y=mouseY;

   if(isTouching(gameObject3,gameObject5)){
      
      gameObject3.shapeColor="red";
      gameObject5.shapeColor="red";

      } 

       else{
         gameObject3.shapeColor="green";
         gameObject5.shapeColor="green";
      } 
  
  drawSprites();
 }

 function isTouching(object1,object2){
   if(object1.x-object2.x < object2.width/2 + object1.width/2 &&
      object2.x-object1.x < object2.width/2 +object1.width/2 &&
       object1.y-object2.y < object2.height/2 + object1.height/2 &&
        object2.y-object1.y < object2.height/2 + object1.height/2){
           return true;
        }
        else{
           return false;
        }
 }