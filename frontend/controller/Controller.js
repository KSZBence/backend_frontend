import DataService from "../model/DataService.js";
import DataView from "../view/DataView.js";

class Contoller{
    constructor(){
        this.dataService = new DataService()
        this.getData = this.dataService.getData("http://localhost:8000/api/writers/", this.view)
    }

    view(response){
        new DataView(response, $(".lista"))
    }
}
export default Contoller