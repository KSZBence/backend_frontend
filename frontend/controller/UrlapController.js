import UrlapModel from "../model/Urlap.js";
import UrlapView from "../view/UrlapView.js";


class UrlapController{
    constructor() {
        const URLAPMODEL = new UrlapModel();
        const URLAPVIEW = new UrlapView($('.urlap'), URLAPMODEL.getLeiro());
        window.addEventListener('esemeny', (event)=> {
            console.log(event.detail);
        })
    }
}

export default UrlapController;