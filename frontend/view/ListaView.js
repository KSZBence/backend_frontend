import ListaSorView from "./ListaSorView.js";

class ListaView {
    constructor(szuloElem, lista) {
        this.szuloElem = szuloElem;
        this.lista = lista;
        this.szuloElem.append("<table class='table table-bordered'></table>");
        this.tabla = this.szuloElem.children("table");

    }

    megjelenites() {
        this.fejlec(this.lista[0]);
        this.lista.forEach((elem, index) => {
            new ListaSorView(elem, this.tabla, index);
        });
    }

    fejlec(elem) {
        let s = "<tr>";
        for (let index = 0; index < Object.keys(elem).length; index++) {
            s += "<th>" + Object.keys(elem)[index] + "</th>";
           }
    
          s+= '<th>kesz</th><th>kuka</th></tr>'
          this.tabla.append(s);
    }
}
export default ListaView;
