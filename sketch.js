function setup() {
  createCanvas(displayWidth-250, displayHeight-400,WEBGL);
}

function draw() {
  background('#262626');
  stroke(666);
    line(mouseX-850, mouseY-345, pmouseX-950, pmouseY-345);
    if (mouseIsPressed) {
    line(mouseY-345, mouseX-850, pmouseY-345, pmouseX-950);
  } else {
    stroke(255);
  }
}