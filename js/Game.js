class Game{
    constructor(){
        this.ready=false;
        this.score=0;
        this.board=new Board();
        this.firstLaunch=true;
        this.snake=new Snake();
        this.fruit=new Fruit();
    }

    rand(){
        // let fruityX,fruityY;
        // do{
        //     fruityX=Math.floor((Math.random()*this.horizontal));
        // }
        // while(this.getBusyFieldsCoords()[0].indexOf(fruityX)===0)
        
        // do{
        //     fruityY=Math.floor((Math.random()*this.vertical));
        // }
        // while(this.getBusyFieldsCoords()[1].indexOf(fruityY)===0)
    
        // return [fruityX,fruityY];
    
        let fruityX,fruityY,fruityPoint;
        let condition=false;
        do{
            
            fruityX=Math.floor((Math.random()*this.horizontal));
            fruityY=Math.floor((Math.random()*this.vertical));
            fruityPoint=[fruityX,fruityY];
    
            // for(let point of this.getBusyFieldsCoords()){
            //     if(point[0]==fruityPoint[0]||point[1]==fruityPoint[1]){
            //         condition=true;
            //     }
                
            // }
        }
        while(condition)
    
        return [fruityX,fruityY];
    
    }
}




