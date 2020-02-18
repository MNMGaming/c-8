var pyramid = [];
var rows = 5;

function setup() { 
  createCanvas(800, 600);
  for (var j = 0; j < rows; j++) {
    for (var i = -j; i <= j; i++) {
			pyramid.push(new Block(width/2 + i * 10, height/2 + j * 20));
    }
  }
} 

function draw() { 
  background(51);
  for (var i = 0; i < pyramid.length; i++) {
    var block = pyramid[i];
    block.update();
    block.checkEdges();
    block.show();
  }
}