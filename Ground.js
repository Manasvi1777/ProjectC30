class Ground {
  constructor(x,y,width,height) {
    var ground_options = {
        isStatic: true
    }
   
    this.ground = Bodies.rectangle(x,y,width,height,ground_options);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    World.add(world, this.ground);
  }
  display(){
    noStroke();
    fill(188,67,67);
    var pos =this.ground.position;
    rectMode(CENTER);
    rect(pos.x, pos.y,this.width,this.height);
  }
}
