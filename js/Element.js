class Element{
    constructor(posX=120,posY=120){
        // this.nr=nr;
        // this.id=`element-${nr}`
        // this.last=last;
        this.posX=posX;
        this.posY=posY;
        this.id=`element-${posX}-${posY}`;
    }

    createHTMLelement(fields){
        let element=document.createElement("div");
        element.style.width="40px";
        element.style.height="40px";
        element.style.backgroundColor="green";
        element.style.position="absolute";
        element.style.left=`${this.posX}px`;
        element.style.top=`${this.posY}px`;

        let x=this.posX/40;
        let y=this.posY/40;
        fields[x][y].busy=true;
        


        // if(this.last==true){
        //     element.style.borderRadius="25px 0px 0px 25px"
        // }
        // if(this.nr==0){
            
        //     element.style.borderRadius="0px 10px 10px 0px"

        // }
        document.getElementById("board-upper").appendChild(element);

        return element;

    }
}