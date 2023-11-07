class Lista {
    #list = []
    constructor(list) {
        this.#list = list;
    }

    //visszaadjuk a prog akt áll
    getList() {
        return this.#list;
    }
}

export default Lista;