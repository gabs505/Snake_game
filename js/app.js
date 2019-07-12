let game=new Game();

document.getElementById("start").addEventListener("click",function(){
    this.style.display="none";
    
    
    document.getElementById("difficulty").style.display="block";

    

})

document.getElementById("easy").addEventListener("click",function(){
    document.getElementById("difficulty").style.display="none";
    document.getElementById("play-area").style.opacity=1;
    game.initGame(200);
    
})

document.getElementById("intermediate").addEventListener("click",function(){
    document.getElementById("difficulty").style.display="none";
    document.getElementById("play-area").style.opacity=1;
    game.initGame(100);
})

document.getElementById("hard").addEventListener("click",function(){
    document.getElementById("difficulty").style.display="none";
    document.getElementById("play-area").style.opacity=1;
    game.initGame(50);
})

document.addEventListener("keydown",function(e){
    game.handleKeyPressed(e)
})



