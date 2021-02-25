class Chain{
  constructor(bodyA,bodyB){
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.1,
        legth: 1
    } 
    this.chain = new Constraint.create(options);
     World.add(world, this.chain);


  }  
  display()
  {
    stroke(0);
    strokeWeight(7);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    noStroke();  
  }

}