/* global createCanvas, background, ellipse, rect, noFill, strokeWeight, stroke, arc, triangle, sqrt, fill */

function setup() {
  // Code here runs only once
  createCanvas(800, 600);
}

function draw() {
  // Code here runs continuously
  background(220);
  noFill();
  strokeWeight(5);
  
  //notes
  //top left
  //3*3.14/4,7*3.14/4
  
  //top right
  //3.14+3.14/4,6.28+3.14/4
  
  //bottom left
  //3.14/4, 3.14+3.14/4
  
  //bottom right
  //-3.14/4, 3*3.14/4
  
  //blue
  //stroke(8,133,199);
  
  //yellow
  //stroke(251,177,50);
  
  //black
  //stroke(0,0,0);
  
  //green
  //stroke(28,139,60)
  
  //red
  //stroke(237,51,78)
  
  
  //interlinking rings
  stroke(8,133,199);
  arc(50, 50, 50, 50, 3.14/4, 3.14+3.14/4);
  stroke(0,0,0);
  arc(110,50,50,50,3*3.14/4,7*3.14/4)
  stroke(237,51,78)
  arc(170, 50, 50, 50,3*3.14/4,7*3.14/4);
  stroke(251,177,50);
  ellipse(80, 75, 50, 50);
  stroke(8,133,199);
  arc(50, 50, 50, 50, 3.14+3.14/4,6.28+3.14/4);
  stroke(28,139,60)
  arc(140, 75, 50, 50,3.14+3.14/4,6.28+3.14/4);
  stroke(0,0,0);
  arc(110,50,50,50,-3.14/4, 3*3.14/4)
  stroke(28,139,60)
  arc(140, 75, 50, 50,3.14/4, 3.14+3.14/4);
  stroke(237,51,78)
  arc(170, 50, 50, 50,-3.14/4, 3*3.14/4);
  
  //non interlinking olympic rings
  /*
  stroke(8,133,199);
  ellipse(50, 50, 50, 50);
  stroke(251,177,50);
  ellipse(80, 75, 50, 50);
  stroke(0,0,0);
  ellipse(110, 50, 50, 50);
  stroke(28,139,60)
  ellipse(140, 75, 50, 50);
  stroke(237,51,78)
  ellipse(170, 50, 50, 50);
  */
  
  //logo
  noFill();
  strokeWeight(1);
  stroke(200, 0, 0)
  fill(200, 0, 0)
  triangle(200, 200,200,300,200+150/sqrt(3),350);
  
  stroke(255, 174, 66)
  fill(255, 174, 66)
  triangle(200, 200,200,300,200-150/sqrt(3),350);
  
  stroke(230, 0, 0)
  fill(230, 0, 0)
  triangle(200, 300,200-150/sqrt(3),350,200+150/sqrt(3),350);
  
  
}
