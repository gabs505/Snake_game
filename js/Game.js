class Game{
    constructor(){
        this.mainInterval = [];
        this.ready=false;
        this.score=0;
        this.snake=new Snake();
        this.board=new Board();
        this.fruit=this.createFruit();
        
        this.firstLaunch=true;
        this.gameSpeed=100;
        this.direction='right';
        
        
    }

    

    
    initGame(){
        this.board.renderHTMLboard();
        this.snake.renderHTMLsnake(this.board.fields);
    }
    rand(){
    
        let fruityX,fruityY,fruityPoint;
        let condition=false;
        do{ 
            fruityX=Math.floor((Math.random()*this.board.horizontal));
            fruityY=Math.floor((Math.random()*this.board.vertical));
            console.log(fruityX);
            fruityPoint=[fruityX,fruityY];
        }
        while(condition)
        
        return fruityPoint;
    
    }

    createFruit(){
        let fruityCoords=this.rand();
        
        let fruit=new Fruit(fruityCoords[0],fruityCoords[1]);
        fruit.createHTMLfruit();

        return fruit;
    }

    
 

  snakeEatsFruit(snakeBody,fruit){
        
        let newFruit;
        if((snakeBody[0].posX/40==fruit.x)&&(snakeBody[0].posY/40==fruit.y)){
            
            
            let x=snakeBody[snakeBody.length-1].posX-40;
            let y=snakeBody[snakeBody.length-1].posY;
            let element=new Element(x,y);
            snakeBody.push(element);
            element.createHTMLelement(this.board.fields);
            document.getElementById("fruity-board").innerHTML="";
            let fruityCoords=this.rand();
            newFruit=new Fruit(fruityCoords[0],fruityCoords[1]);
            newFruit.createHTMLfruit();
            this.fruit=newFruit;
            
            this.fruit.x=newFruit.x;
            this.fruit.y=newFruit.y;
    
            console.log(1);
        }
        
    
    }



handleKeyPressed(e){
    var that=this;
    
    // if(e.key==="Control"){
    //     for (let i = 1; i < 30; i++){
    //     let snakeBody = that.snake.body;
    //     let x=snakeBody[snakeBody.length-i].posX-40;
    //     let y=snakeBody[snakeBody.length-i].posY;
    //     let element=new Element(x,y);
    //     snakeBody.push(element);
    //     element.createHTMLelement(that.board.fields);
    //     }
    // }

    if(e.key==="ArrowRight"){
        if (that.direction != 'left'){
        that.direction = 'right';
        }   
    }
    else if(e.key==="ArrowLeft"){
        if (that.direction != 'right'){
            that.direction = 'left';
        }
    }
    else if(e.key==="ArrowDown"){
        if (that.direction != 'up'){
        that.direction = 'down';
        }
        
    }
    else if(e.key==="ArrowUp"){
        if (that.direction != 'down'){
        that.direction = 'up';
        }
    }

    
    
if (that.firstLaunch)
{
        that.mainInterval = setInterval(function(){
            if(that.snake.body[0]!=undefined){
                
                let last=that.snake.body.pop();
                let first=that.snake.body[0];
                that.board.fields[last.posX/40][last.posY/40].busy=false;
                
                
                
                    switch(that.direction){
                        
                        case 'right':
                            if (first.posX<=that.board.width-80){
                            last.posX=that.snake.body[0].posX+40;
                            last.posY=that.snake.body[0].posY;
                            
                            }
                            else{
                                clearInterval(that.mainInterval);
                            }
                        break;
                        case 'left':
                            if(first.posX>=40){
                            last.posX=that.snake.body[0].posX-40;
                            last.posY=that.snake.body[0].posY;
                            }
                            else{
                                clearInterval(that.mainInterval);
                            }
                            
                        break;
                        case 'up':
                            if(first.posY>=40){
                            last.posX=that.snake.body[0].posX;
                            last.posY=that.snake.body[0].posY-40;
                            }
                            else{
                                clearInterval(that.mainInterval);
                            }
                            
                        break;
                        case 'down':
                            if(first.posY<=that.board.height-80){
                            last.posX=that.snake.body[0].posX;
                            last.posY=that.snake.body[0].posY+40;
                            }
                            else{
                                clearInterval(that.mainInterval);
                            }
                            
                        break;
                    }
                    
                    that.board.fields[last.posX/40][last.posY/40].busy=true;
                    
                    that.snake.body.unshift(last);
                    let head=that.snake.body[0];
                    
            
                    document.getElementById("board-upper").innerHTML="";

                    that.snake.renderHTMLsnake(that.board.fields);
                    that.snakeEatsFruit(that.snake.body,that.fruit);
                    console.log(1);
                    
                    
                    
            
                    for(let [i,el] of that.snake.body.entries()){
                        if(i!=0){
                            if(el.posX==head.posX&&el.posY==head.posY){
                                clearInterval(that.mainInterval);
                            }
                        }
                        
                    }
                }
        },that.gameSpeed)
        
        that.firstLaunch = false;
}

        
}


}




