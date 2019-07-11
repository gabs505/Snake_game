let board=new Board();
board.renderHTMLboard();
let snake=new Snake();
snake.renderHTMLsnake(board.fields);

let fruit=board.fruit;




function snakeEatsFruit(snakeBody,fruit){
    // console.log(fruit.x);
    // console.log(snakeBody[0].posX);
    // console.log(snakeBody[0].posX!=fruit.x)
    let newFruit;
    if((snakeBody[0].posX/40==fruit.x)&&(snakeBody[0].posY/40==fruit.y)){
    // if(snakeBody[0].posX==fruit.x){
        
        console.log(fruit.x)
        let x=snakeBody[snakeBody.length-1].posX-40;
        let y=snakeBody[snakeBody.length-1].posY;
        let element=new Element(x,y);
        snakeBody.push(element);
        // document.getElementById("board-upper").innerHTML="";
        // snake.renderHTMLsnake(board.fields);
        element.createHTMLelement(board.fields);
        document.getElementById("fruity-board").innerHTML="";
        fruityCoords=board.rand();
        newFruit=new Fruit(fruityCoords[0],fruityCoords[1]);
        newFruit.createHTMLfruit();
        
        board.fruit.x=newFruit.x;
        board.fruit.y=newFruit.y;


    }
    

}


let id1=[];//moving right
let id2=[];//moving left
let id3=[];//moving down
let id4=[];//moving up
function handleKeyPressed(e){
    
    if(e.key==="ArrowRight"){
        clearInterval(id2);
        clearInterval(id3);
        clearInterval(id4);
         mainInterval=setInterval(function(){
            let last=snake.body.pop();
            last.posX=snake.body[0].posX+40;
            last.posY=snake.body[0].posY;
            snake.body.unshift(last);

            
            
        
        document.getElementById("board-upper").innerHTML="";
        snake.renderHTMLsnake(board.fields);

        snakeEatsFruit(snake.body,fruit);
        
        
        },200)
        
        
    }

    else if(e.key==="ArrowLeft"){
        clearInterval(mainInterval);
        clearInterval(id3);
        clearInterval(id4)
        id2=setInterval(function(){
            let last=snake.body.pop();
            last.posX=snake.body[0].posX-40;
            last.posY=snake.body[0].posY;
            snake.body.unshift(last);

            
            
        
        document.getElementById("board-upper").innerHTML="";
        snake.renderHTMLsnake(board.fields);
        snakeEatsFruit(snake.body,fruit);
        

        },200)
        
        
    }

    else if(e.key==="ArrowDown"){
        clearInterval(mainInterval);
        clearInterval(id2);
        clearInterval(id4)
        id3=setInterval(function(){
            let last=snake.body.pop();
            
            last.posX=snake.body[0].posX;
            last.posY=snake.body[0].posY+40;
            snake.body.unshift(last);
            document.getElementById("board-upper").innerHTML="";
            snake.renderHTMLsnake(board.fields);
            snakeEatsFruit(snake.body,fruit);
            
        },200)
        
        
    }

    else if(e.key==="ArrowUp"){
        clearInterval(mainInterval);
        clearInterval(id2);
        clearInterval(id3);
        id4=setInterval(function(){
            let last=snake.body.pop();
            
            last.posX=snake.body[0].posX;
            last.posY=snake.body[0].posY-40;
            snake.body.unshift(last);
            document.getElementById("board-upper").innerHTML="";
            snake.renderHTMLsnake(board.fields);
            snakeEatsFruit(snake.body,fruit);
            
        },200)
        
        
    }
        
        
        
}


document.addEventListener("keydown",function(e){
    handleKeyPressed(e)
})




































// let keydownCounter=0;
// let keyrightCounter=0;
// function handleKeyPressed(e){
    
//     if(e.key==="ArrowRight"){
        
//         for(let [idx,el] of snake.body.entries()){
//             if(keydownCounter==0){
//                 el.posX+=40;
//                 document.getElementById("board-upper").innerHTML="";
//                 snake.renderHTMLsnake();
                
//             }
//             else{
//                 if(idx==0){
//                     el.posX+=40;
//                 }
//                 else{
//                     el.posY=snake.body[idx-1].posY;
//                     el.posX=snake.body[idx-1].posX-40;
//                 }
//             }
            
//         }
//         document.getElementById("board-upper").innerHTML="";
//         snake.renderHTMLsnake();
//         keydownCounter=0;
//     }

//     else if(e.key==="ArrowLeft"){
//         for(let [idx,el] of snake.body.entries()){
//             if(idx==0){
//                 el.posX-=40;
//             }
//             else{
//                 el.posX=snake.body[idx-1].posX-40;
//             }
            
//             document.getElementById("board-upper").innerHTML="";
//             snake.renderHTMLsnake();
//         }
//     }

//     else if(e.key==="ArrowDown"){
//         keydownCounter++;
//         for(let [idx,el] of snake.body.entries()){
//             if(idx==0){
//                 el.posY+=40;
//             }
//             else if(keydownCounter==1){
//                 el.posX+=40;
//             }
//             else{
//                 el.posX=snake.body[idx-1].posX;
//                 el.posY=snake.body[idx-1].posY-40;
//             }
            
            
//         }
//         document.getElementById("board-upper").innerHTML="";
//         snake.renderHTMLsnake();
        
//         console.log(keydownCounter);
//     }
// }

// document.addEventListener("keydown",function(e){
//     setInterval(handleKeyPressed(e),1000);
// })
