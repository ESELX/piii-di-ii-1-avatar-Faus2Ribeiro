
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

  stroke(0);
  fill(45);
  quad(width/3.07,height/2.42, width/1.45,height/2.42, width/1.6,height/1.14, width/2.58,height/1.14);
  fill(255, 216, 201)
  ellipse(width/2, height/4, width/5,height/3.7);
  fill(255);
  triangle(width/2.85,height/4.7, width/2.28,height/3.33, width/2,height/4.44);
  triangle(width/1.53,height/4.7, width/1.81,height/3.33, width/2,height/4.44);
  noStroke();
  fill(25)
  circle (width/2.28,height/4,width/25);
  circle (width/1.80,height/4,width/25);
  quad(width/3.33,height/2.96, width/2.66,height/2.5, width/2.22, height/1.14, width/2.58, height/1.14);
  quad(width/1.42, height/2.96, width/1.6,height/2.5, width/1.77,height/1.14, width/1.6, height/1.14);

  }
