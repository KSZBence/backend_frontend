import NumberUrlapElem from "./NumberUrlapView.js";
import TextUrlapElem from "./TextUrlapView.js";

class UrlapView {
    #leiro = {}
    #urlapElemLista = []
    #osszesElemValidE = true;
    #urlapAdat = {};

    constructor(szuloElem, leiro) {
        this.szuloElem = szuloElem;
        this.#leiro = leiro;

        szuloElem.append("<form>");
        this.formElem = szuloElem.children("form");

        this.#urlapOsszerak();
        this.submitElem = $("#submit");

        this.submitElem.on("click", (event) => {
            event.preventDefault();

            this.#urlapElemLista.forEach(elem=>{
                this.#osszesElemValidE= true;
                console.log(elem);
                console.log(elem.valid);
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            });

            if (this.#osszesElemValidE) {
                console.log('valid az űrlap');
                //adatgyűjtés űrlapról
                this.#urlapElemLista.forEach(elem =>{
                    console.log(elem);
                    this.#urlapAdat[elem.key] = elem.value;
                })
            } else {
                console.log('nem valid az űrlap');
            }
            this.#esemeny("esemeny");
        })
    }


    #urlapOsszerak() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key], this.formElem));
                    break;
                case "number":
                    this.#urlapElemLista.push(new NumberUrlapElem(key, this.#leiro[key], this.formElem));
                    break;
                default:
                    console.log("ez az ürlapelem még nem készült el");
                    break;
            }
        }
        let txt = `<button class="btn  btn-dark" type="submit" id="submit">Ok</button>`;
        this.formElem.append(txt);
    }


    #numberElem(key){
        let txt =`
        <div class="mb-3 mt-3">
        <label for="${key}" class="form-label">
        ${this.#leiro[key].megjelenes}
        </label>
        <input type="${this.#leiro[key].tipus}"
         class="form-control" 
         id="${key}" 
         name="${key}" 
         value="${this.#leiro[key].value}"
         ">
      </div> 
        `;
        this.formElem.append(txt);
    }

    #esemeny(esemeny) {
        let es = new CustomEvent(esemeny, {detail : this.#urlapElemLista});
        window.dispatchEvent(es);
    }
}

export default UrlapView;