function setup() {
  createCanvas(800, 600,WEBGL);
}

function draw() {
  background('sienna');
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(30, 15);
}