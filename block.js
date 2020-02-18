function Block(x, y) {
	this.pos = createVector(x, y);
  this.w = 10;
  this.h = 20;
  this.vel = createVector();
  this.gravity = 0.1;
  this.gravityX = 0;
  this.restitution = 1;
  this.friction = 0.75;
  
  this.update = function() {
    this.vel.add(this.gravityX, this.gravity);
    this.pos.add(this.vel);
  }
  
  this.checkEdges = function() {
		if (this.pos.y > height-this.h/2) {
      this.pos.y = height-this.h/2;
			this.vel.y *= -this.restitution;
      this.vel.mult(1-(this.friction/3));
    }
  }
  
  this.checkContact = function(other) {
		//if (this.pos.x > oth
  }
  
  this.show = function() {
		fill(255);
    stroke(255);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }
}