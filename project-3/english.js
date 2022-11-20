//"so you know english" text sketch
//https://openprocessing.org/sketch/1736454
"use strict";

var x = 0;
var y = 0;
var stepSize = 5.0;

var myFont;
var canvas;

var letters = "So you know English?";
var fontSizeMin = 8;
var angleDistortion = 0.25;

var counter = 0;

function preload(){
    myFont=loadFont('assets/Karla-BoldItalic.ttf');
}

function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

  x = mouseX;
  y = mouseY;
    
  textAlign(LEFT);
    textFont(myFont);
}

function draw() {
	fill(255);
  if (mouseIsPressed && mouseButton == LEFT) {
    var d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + 2*d / 3);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter >= letters.length) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(37,37,37);
}

function keyPressed() {
  if (keyCode == UP_ARROW) angleDistortion += 0.3;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.5;
}