let board=new Board();
board.renderHTMLboard();
let snake=new Snake();
snake.renderHTMLsnake(board.fields);

let fruit=board.fruit;
let firstLaunch = true;

document.getElementById("start").addEventListener("click",function(){
    this.style.display="none";
    document.getElementById("play-area").style.opacity="1";
})


function snakeEatsFruit(snakeBody,fruit){
    
    let newFruit;
    if((snakeBody[0].posX/40==fruit.x)&&(snakeBody[0].posY/40==fruit.y)){
        
        
        let x=snakeBody[snakeBody.length-1].posX-40;
        let y=snakeBody[snakeBody.length-1].posY;
        let element=new Element(x,y);
        snakeBody.push(element);
        element.createHTMLelement(board.fields);
        document.getElementById("fruity-board").innerHTML="";
        fruityCoords=board.rand();
        newFruit=new Fruit(fruityCoords[0],fruityCoords[1]);
        newFruit.createHTMLfruit();
        
        board.fruit.x=newFruit.x;
        board.fruit.y=newFruit.y;


    }
    

}


let mainInterval=[];
let direction = 'right';


function handleKeyPressed(e){
    
    if(e.key==="ArrowRight"){
        if (direction != 'left'){
        direction = 'right';
        }   
    }
    else if(e.key==="ArrowLeft"){
        if (direction != 'right'){
            direction = 'left';
        }
    }
    else if(e.key==="ArrowDown"){
        if (direction != 'up'){
        direction = 'down';
        }
        
    }
    else if(e.key==="ArrowUp"){
        if (direction != 'down'){
        direction = 'up';
        }
    }

    
        
    if (firstLaunch){

            
            

        
            mainInterval=setInterval(function(){
            if(snake.body[0]!=undefined){
            
            
            let last=snake.body.pop();
            let first=snake.body[0];
            board.fields[last.posX/40][last.posY/40].busy=false;
            
            
                switch(direction){
                    
                    case 'right':
                        if (first.posX<=board.width-80){
                        last.posX=snake.body[0].posX+40;
                        last.posY=snake.body[0].posY;
                        
                        }
                        else{
                            clearInterval(mainInterval);
                        }
                    break;
                    case 'left':
                        if(first.posX>=40){
                        last.posX=snake.body[0].posX-40;
                        last.posY=snake.body[0].posY;
                        }
                        else{
                            clearInterval(mainInterval);
                        }
                        
                    break;
                    case 'up':
                        if(first.posY>=40){
                        last.posX=snake.body[0].posX;
                        last.posY=snake.body[0].posY-40;
                        }
                        else{
                            clearInterval(mainInterval);
                        }
                        
                    break;
                    case 'down':
                        if(first.posY<=board.height-80){
                        last.posX=snake.body[0].posX;
                        last.posY=snake.body[0].posY+40;
                        }
                        else{
                            clearInterval(mainInterval);
                        }
                        
                    break;
                }

                board.fields[last.posX/40][last.posY/40].busy=true;
                

                

                snake.body.unshift(last);
                let head=snake.body[0];

                document.getElementById("board-upper").innerHTML="";
                snake.renderHTMLsnake(board.fields);

                snakeEatsFruit(snake.body,fruit);


                for(let [i,el] of snake.body.entries()){
                    if(i!=0){
                        if(el.posX==head.posX&&el.posY==head.posY){
                            clearInterval(mainInterval);
                        }
                    }
                    
                }
   
            }
            },100);

        firstLaunch = false;

        

        
        }
   
}


document.addEventListener("keydown",function(e){
    handleKeyPressed(e)
})



