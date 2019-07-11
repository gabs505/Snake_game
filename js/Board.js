class Board{
    constructor(){
        this.width=680;
        this.height=600;
        this.horizontal=17;
        this.vertical=15;
        this.fields=this.createFields();
        
        
    }

    createFields(){
        let fields=[];
        for(let i=0;i<this.horizontal;i++){
            let col=[]
            for(let j=0;j<this.vertical;j++){
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
        let busy=[];
        for(let column of this.fields){
            for(let field of column ){
                if (field.busy==true){
                    busy.push([field.x,field.y])
              
                }
                
            }
        }
        return busy;
    }      

    
}