import ListaView from "./ListaView.js";

class DataView {
    constructor(lista, szuloElem){
        this.szuloElem = szuloElem;
        console.log(lista);
        new ListaView(szuloElem, lista).megjelenites();
    }
}

export default DataView;