var ball,img,paddle;
function preload() {
ball = loadImage("ball.png");
paddle = loadImage("paddle.png");
}
function setup() {
  createCanvas(500, 500);
ball1 = createSprite(100,200,20,20);
paddle1 = createSprite(400,200,10,120);
ball1.addImage ("ball1",ball); 
ball1.velocityX = -5;

paddle1.addImage("paddle1",paddle);
paddle1.velocityY = -3.5;
}

function draw() {
  background("lightblue");
 
edges = createEdgeSprites();
    ball1.bounceOff(edges[0]);
    ball1.bounceOff(edges[2]);
    ball1.bounceOff(edges[3]);
    ball1.bounceOff(paddle1);
  paddle1.bounceOff(edges[2]);
  paddle1.bounceOff(edges[3]);
  
  
 
  drawSprites();
  }


function randomVelocity()
{
  ball1.velocityY = -4;
}

