class Ball {
  constructor(x,y,r){
    var options = {
        isStatic : false,
        restitution : 1,
        density : 0.8,
        friction : 0
    }
    this.x = x;
    this.y = y;
    this.r = 50;
    this.body = Bodies.circle(x,y,50,options);
    
    World.add(world,this.body)
  }
  display(){
    //  console.log();
    var pos = this.body.position
    push();
    translate (pos.x, pos.y);
    fill(232,42,254);
    ellipse(0,0,50,50);
    pop();
    }
}