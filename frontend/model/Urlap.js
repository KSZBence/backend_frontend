import { adatLeiras } from "./adatLeiras.js";

class UrlapModel {
    #leiro={}
    constructor() {
        this.#leiro = adatLeiras
    }
    getLeiro() {
        return {...this.#leiro};
    }
}

export default UrlapModel;