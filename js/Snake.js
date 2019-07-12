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
    renderHTMLsnake(fields,direction)
    {
        for(let [idx,element] of this.body.entries()){
            let el=element.createHTMLelement(fields);
            if(idx===0&&direction=="right"){
                el.style.borderRadius="0px 20px 20px 0px";

            }
            else if(idx===0&&direction=="down"){
                el.style.borderRadius="0px 0px 20px 20px";

            }
            else if(idx===0&&direction=="left"){
                el.style.borderRadius="20px 0px 0px 20px";

            }
            else if(idx===0&&direction=="up"){
                el.style.borderRadius="20px 20px 0px 0px";

            }
            

        
        }
    }
}