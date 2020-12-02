var mr,fr;

function setup() {
  createCanvas(800,400);
  mr=createSprite(400,200,50,60);
  mr.shapeColor="yellow"
  mr.debug=true;
  fr=createSprite(400,300,50,60); 
   fr.shapeColor="red";
   fr.debug=true

}

function draw() {
  background("lightblue");  
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  if(mr.x-fr.x<fr.width/2+mr.width/2 && 
   fr.x-mr.x<fr.width/2+mr.width/2 &&
   mr.y-fr.y<fr.width/2+mr.width/2 && 
    fr.y-mr.y<fr.width/2+mr.width/2 ){
    mr.shapeColor="red";
    fr.shapeColor="red";
  }else{
    mr.shapeColor="green";
    fr.shapeColor="green";
  }

  drawSprites();
}