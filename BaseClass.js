class BaseClass{

constructor(x,y,r){

var options ={

    timeScale : 0.8


}

this.body = Bodies.circle(x,y,r,options);
this.r = r;

this.image = loadImage("images/base.png");

World.add(world,this.body);


}

display(){
  var pos = this.body.position;
 push();
imageMode(CENTER);
translate(pos.x,pos.y);
image(this.image,0,0,this.r,this.r);
pop();

}



}