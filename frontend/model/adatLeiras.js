export const adatLeiras = {
    nev:{
        megjelenes:"Név",
        tipus:"text",
        value:"", 
        placeholder:"Valaki Vagyok",
        regex:"[A-Z][a-z]{2,15}",
        validalas:"Név nagybetűvel kezdődik, és legalább 3 karakter",
        required: true
    },
    szul:{
        megjelenes:"Születési év",
        tipus:"number",
        value:"2000", 
        regex:{
            min:1000,
            max:2023
        },
        validalas:"1000 és 2023 között kell legyen!"
    }
}