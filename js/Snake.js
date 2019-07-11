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
        // elements[2].last=true;
        return elements;
    }

    // parametr fields-pola planszy, zbiór obiektów Field
    renderHTMLsnake(fields)
    {
        for(let [idx,element] of this.body.entries()){
            
            let el=element.createHTMLelement(fields);
            
        }
    }
}