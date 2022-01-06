class InfoView{
    constructor(){
        this.jatekVegeElem = $(".jatekvege");
        this.kovetkezoJatekos = $(".kovetkezoJatekos");
    }

    setJatekVege(ertek){
        this.jatekVegeElem.html(ertek);
    }

    setKovetkezoJatekos(ertek){
        this.kovetkezoJatekos.html(ertek);
    }
}