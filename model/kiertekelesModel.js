class Kiertekel{
    constructor(tomb){
        this.tomb = tomb;
        console.log(this.tomb);
    }

    getVizszintes(){
        let ellx = "";
        this.tomb.forEach((element, index) => {
            ellx += element.ertek;
            if (index%3==2 && index < 8){
                ellx+="ꟷ";
            } 
        });
        return ellx;
    }

    getAtlo(){
        let ell = this.tomb[0].ertek+this.tomb[4].ertek+this.tomb[8].ertek+"ꟷ";
        ell += this.tomb[2].ertek+this.tomb[4].ertek+this.tomb[6].ertek;
        return ell;
    }

    getFuggo(){
        let elly = "";
        for (let index = 0; index < 3; index++) {
            elly += this.tomb[index].ertek+this.tomb[3+index].ertek+this.tomb[6+index].ertek;
            if (index != 2){
                elly+="ꟷ";
            }
        }
        return elly;
    }

    ellenorzes(){
        let ell=this.getVizszintes()+"ꟷ"+this.getAtlo()+"ꟷ"+this.getFuggo();
        let allapot = "";
        if (ell.indexOf("XXX")>=0){
            allapot = "X";
        }else if(ell.indexOf("OOO")>=0){
            allapot = "O";
        }
        return allapot;
    }
}