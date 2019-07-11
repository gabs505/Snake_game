let game=new Game();

document.getElementById("start").addEventListener("click",function(){
    this.style.display="none";
    document.getElementById("play-area").style.opacity="1";
    game.initGame();

    

})



document.addEventListener("keydown",function(e){
    game.handleKeyPressed(e)
})



