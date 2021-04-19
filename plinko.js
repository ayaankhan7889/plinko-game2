class plinko{
    constructor (x,y){
        var options={
            isStatic:true,
            restitution:1,
            friction:0.5,
        }
        
        this.r = 10
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world, this.body);
        
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        ellipseMode(RADIUS);
        strokeWeight(5)
        fill("white")
        ellipse(0,0,this.r,this.r)
        pop();
      }
    
}






