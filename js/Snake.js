class Snake{
    constructor (){
        this.body=this.createElements();
        this.length=3;
        
    }

    createElements(){
        let elements=[]
        for(let i=0;i<3;i++){
            elements.push(new Element(120-i*40,120));
        }
        return elements;
    }

    // fields-array of board field objects
    renderHTMLsnake(fields)
    {
        for(let [idx,element] of this.body.entries()){
            
            let el=element.createHTMLelement(fields);
            
        }
    }
}