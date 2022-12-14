var cachorroloko;

function setup() {
  createCanvas(1024,728)
  cachorroloko=createSprite(100,90,10,100)
    cachorroloko.shapeColor="green";
}

function draw() 

{
  background(30);
drawSprites();
if (keyDown("left")) {
  cachorroloko.x -=3
  
}

if (keyDown("right")) {
  cachorroloko.x +=3
} 
if (keyDown("up")) {
  cachorroloko.y -=3
}
if(keyDown("down")) {
  cachorroloko.y +=3
}
}




