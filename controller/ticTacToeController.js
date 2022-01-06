class TTTController{
    constructor(){
        const tomb=[];
        new Jatekter(tomb);
        const info = new InfoView();
        const kiertekel = new Kiertekel(tomb);
        this.lepes=0;
        $(window).on("kivalaszt", (event)=>{
            console.log(event.detail);
            let aktelem = event.detail;
            if(this.lepes%2==0){
                aktelem.setElem("X");
                info.setKovetkezoJatekos("O játékos következik!");
            }else{
                aktelem.setElem("O");
                info.setKovetkezoJatekos("X játékos következik!");
            }
            this.lepes++;
            console.log(kiertekel.ellenorzes());
            if (kiertekel.ellenorzes() == "X"){
                info.setJatekVege("X NYERT!!!");
                this.jatekVege(tomb);
            }else if (kiertekel.ellenorzes() == "O"){
                info.setJatekVege("O NYERT!!!");
                this.jatekVege(tomb);
            }else if (this.lepes===9){
                info.setJatekVege("DÖNTETLEN!!!");
            }

            if (kiertekel.ellenorzes() == "X" || kiertekel.ellenorzes() == "O" || this.lepes===9){
                info.setKovetkezoJatekos("A JÁTÉKOT FEL LEHET FÜGGESZTENI!");
            }
        })
    }
    jatekVege(tomb){
        tomb.forEach(element=>{
            element.aktiv=false;
        })
    }
}