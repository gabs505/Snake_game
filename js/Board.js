class Board{
    constructor(){
        this.width=680;
        this.height=600;
        this.horizontal=17;
        this.vertical=15;
        this.fields=this.createFields();
        this.fruit=this.createFruit();
        
    }

    createFields(){
        let fields=[];
        for(let i=0;i<this.horizontal;i++){
            // iteracja po kolumnach
            let col=[]
            for(let j=0;j<this.vertical;j++){
                // iteracja po wierszach
                col.push(new Field(i,j));
                

            }
            fields.push(col);
            
        }
        return fields;
    }

    renderHTMLboard(){
        for(let [idx1,column] of this.fields.entries()){
            for(let [idx2,field] of column.entries()){
                
                let width=this.width/this.horizontal;
                let height=this.height/this.vertical;
                field.createHTMLfield(width,height,idx1,idx2);
                
            }
        }
    }

    getBusyFieldsCoords(){
        // let busyX=[];
        // let busyY=[];
        let busy=[];
        for(let column of this.fields){
            for(let field of column ){
                if (field.busy==true){
                    // if(busyX.indexOf(field.x)===-1){
                        // busyX.push(field.x);
                    // }
                    // if(busyY.indexOf(field.y)===-1){
                        // busyY.push(field.y)
                    // }

                    busy.push([field.x,field.y])
                    
                    
                }
                
            }
        }

        // return [busyX,busyY];
        return busy;
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
    
    createFruit(){
        let fruityCoords=this.rand();
        let fruit=new Fruit(fruityCoords[0],fruityCoords[1]);
        fruit.createHTMLfruit();

        return fruit;
    }
    
        
}