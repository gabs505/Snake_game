class Fruit{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    createHTMLfruit(){
        let fruit = document.createElement('div');
        fruit.setAttribute('id','fruit')
        fruit.style.position="absolute"
        fruit.style.left=`${this.x*40}px`
        fruit.style.top=`${this.y*40}px`
        fruit.style.borderRadius="40px 40px";
        fruit.style.backgroundColor="red"
        fruit.style.width="40px"
        fruit.style.height="40px"
        document.getElementById("fruity-board").appendChild(fruit)
    }
}