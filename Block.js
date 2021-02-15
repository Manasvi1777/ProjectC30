class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution:0.4,
          friction:1,
          //isStatic:true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
      this.Visibility=255;
      this.col = {r:random(255),g:random(255),b:random(255)}
    }
    display(){
      if (this.body.speed<5){
       rectMode(CENTER);
       fill(this.col.r,this.col.g,this.col.b);
       noStroke();
       rect(this.body.position.x,this.body.position.y, this.width, this.height);
      }
      else{
        rectMode(CENTER);
        noStroke();
        fill(this.col.r,this.col.g,this.col.b,this.Visibility);
        this.Visibility-=5;
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        World.remove(world, this.body);
     /*push();
     this.Visiblity = this.Visiblity - 5;
     fill(255,this.Visiblity);
     rect(this.body.position.x, this.body.position.y,width,height);
     pop();*/
      }
    }
  }