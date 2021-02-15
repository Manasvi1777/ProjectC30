class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }

    display()
   {
     if(this.body.speed<3)
     {
       super.display();
     }
   else
    {
      World.remove(world, this.body);
      push();
      this.visibility=this.visibility-8;
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop();
    }
  }
};