function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
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
  torus(mouseX, mouseY, 80, 80);
}