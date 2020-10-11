function setup() {
  createCanvas(displayWidth-10, displayHeight-20,WEBGL);
}

function draw() {
  background('sienna');
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
    if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  torus(260, 340, 2, 80);
}