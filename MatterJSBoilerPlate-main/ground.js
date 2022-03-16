class Ground{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
      
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        var groundPause=this.body.position
        push()
        translate(groundPause.x,groungPause.y)
        rectMode(CENTER)
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop()
    }

}