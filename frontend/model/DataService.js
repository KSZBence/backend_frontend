class DataService {
    constructor() {
        
    }

    getData(vegpont, callback) {
        axios.get(vegpont)
            .then(function (response) {
                callback(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}

export default DataService;