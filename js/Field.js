class Field{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.id=`field-${x}-${y}`;
        this.busy=false;
    }

    createHTMLfield(width,height,idx1,idx2){
        let HTMLfield=document.createElement('div');

        HTMLfield.style.width=`${width}px`
        HTMLfield.style.height=`${height}px`
        if((idx1%2===0 && idx2%2!=0)||(idx1%2!=0 && idx2%2===0)){
            HTMLfield.style.backgroundColor="#516c96"
        }
        else{
            HTMLfield.style.backgroundColor="#8dabd9"
        }
                
        HTMLfield.style.position="absolute"
        HTMLfield.style.left=`${this.x*width}px`
        HTMLfield.style.top=`${this.y*height}px`
                
        document.getElementById("board").appendChild(HTMLfield)
    }
}