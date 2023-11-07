class NumberUrlapElem {
    #key
    #leiro = {}
    #value = ""
    #valid = false;
    constructor(key, leiro, szuloElem) {
        this.#key = key;
        this.#leiro = leiro;
        this.formElem = szuloElem; 
        this.#numberElem();
        this.inputElem = $(`#${this.#key}`)
        this.validElem = this.formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.formElem.children("div:last-child").children(".invalid");
        console.log(this.inputElem);
        this.inputElem.on("keyup", () => { 
            this.#value = this.inputElem.val();
            if (this.#value > this.#leiro.regex.min && this.#value < this.#leiro.regex.max) {
                 this.#valid = true;
                this.validElem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else {
                this.#valid = false;
                this.validElem.addClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }
        })
    }
    get valid () {
        return this.#valid;
    }
    get value () {
        return this.#value;
    }
    get key () {
        return this.#key
    }
    #numberElem(){
        let txt =`
        <div class="mb-3 mt-3">
        <label for="${this.#key}" class="form-label">
        ${this.#leiro.megjelenes}
        </label>
        <input type="${this.#leiro.tipus}"
         class="form-control" 
         id="${this.#key}"
         name="${this.#key}" 
         value="${this.#leiro.value}">
         <div class="valid elrejt">Ok</div>
         <div class="invalid elrejt">${this.#leiro.validalas}</div>
      </div> 
        `;
        this.formElem.append(txt);
    }
}

export default NumberUrlapElem;