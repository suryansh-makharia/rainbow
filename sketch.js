var Size = 0;


function setup() {
createCanvas(640,360);
colorMode(HSB);
noFill();
strokeWeight(3);
}

function draw() {
  background('lightskyblue');
  translate(width/2,height);
  Rainbow();
  Size+=0.5;
  }
 function Rainbow(){
   var start = Size;
   var end = start + 100;
     for (var radius = start; radius < end; radius++) {
     var col = map(radius, start, end, 288, 0);
     stroke(col, 100, 100);
    ellipse(0, 0, radius);
  }
}