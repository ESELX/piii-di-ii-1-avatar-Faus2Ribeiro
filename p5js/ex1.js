
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

 stroke (0)
 fill(45);
 quad(width/3.1,height/2.4,width/1.45,height/2.4,width/1.6,height/1.1399,width/2.65,height/1.1399);

 fill(255, 216, 201);
 ellipse(width/2,height/4,width/4,height/4);


 fill(255);
 triangle(width/2.84,height/4.7,width/2.28,height/3.32,width/2,height/4.4);
 triangle(width/1.535,height/4.7,width/1.81,height/3.32,width/2,height/4.4);

 noStroke();
 fill(25)
 circle (width/2.28,height/4,15);
 circle (width/1.8,height/4,15);

 stroke (0)
 quad(width/3.33,height/2.96,width/2.66,height/2.5,width/2.22,height/1.14,width/2.66,height/1.14);
 quad(width/1.42,height/2.96,width/1.6,height/2.5,width/1.79,height/1.14,width/1.6,height/1.14);


  }
