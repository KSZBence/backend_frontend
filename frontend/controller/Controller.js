import DataService from "../model/DataService.js";
import UrlapModel from "../model/Urlap.js";
import DataView from "../view/DataView.js";
import UrlapView from "../view/UrlapView.js";

class Contoller{
    constructor(){
        this.dataService = new DataService()
        const URLAPMODEL = new UrlapModel();
        this.dataService = new DataService()
        const URLAPVIEW = new UrlapView($('.urlap'), URLAPMODEL.getLeiro());
        window.addEventListener('adatHozzaad', (event)=> {
            console.log(event.detail[1].value);
            this.dataService.postData("http://localhost:8000/api/writers", {nev:event.detail[0].value, szul:event.detail[1].value+"-01-01"});    
        })
        
    }    

    view(response){
        new DataView(response, $(".lista"))
    }
}
export default Contoller