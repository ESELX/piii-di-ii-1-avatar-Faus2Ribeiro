
let posX, posY;
let velX, velY;

function setup() {
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');


}

function draw() {
  background(220)

  fill(45);
  quad(130,165,275,165,250,350,155,350);
  fill(255, 216, 201)
  triangle (155,120,175,170,175,120);

  triangle (220,120,225,170,246,120);

  rect(175,130,50,40);

  ellipse(200,100,100,100);
  fill(255)
  triangle(140,85,175,120,200,90);
  fill(255)
  triangle(260,85,220,120,200,90);
  fill(25)
  circle (175,100,20);
  fill(25)
  circle (222,100,20);

  quad (120,135,150,160,180,350,155,350);

  quad (280,135,250,160,225,350,250,350);


  }
