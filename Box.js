class Box extends BaseClass {

    constructor (x,y,width,height){
      super (x,y,width,height);
      
    }
    display(){

      this.body.velocity.y = -2 ;

        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
    
    }