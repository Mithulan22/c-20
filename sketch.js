var fixedRect,movingRect, rect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect1=createSprite( 300,300,50,10)
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect,rect1)){
    
    movingRect.shapeColor="blue";
    rect1.shapeColor="blue" 
  }
  else 


  if (isTouching(movingRect, fixedRect))

  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
rect1.shapeColor="green";
}

  drawSprites();
}




