class Ball2 {
    constructor(x,y,r){
      var options = {
          isStatic : false,
      }
      this.x = x;
      this.y = y;
      this.r = 50;
      this.body = Bodies.circle(x,y,50,options);
      
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      push();
      translate (pos.x, pos.y);
      fill(232,42,254);
      ellipse(0,0,50,50);
      pop();
      }
  }