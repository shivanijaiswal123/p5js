function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  noStroke();
  fill(250,200,200)
  ellipse(mouseX,mouseY,100,100,100);
  
  fill(250,200,200)
  rect(320,300,70,100);
}

function mousePressed(){
  background(200);
}
