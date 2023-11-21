class DataService {
    constructor() {
        
    }

    getData(vegpont, callback) {
        axios.get(vegpont)
            .then(function (response) {
                callback(response.data)
                console.log("called back");
            })
            .catch(function (error) {
                // handle error
                /* console.log(error) */;
            })
            .finally(function () {
                // always executed
            });
    }

    postData(url, data){
        axios.post(url, data)
      .then(function (response) {
        console.log("RESP", response);
        location.reload()
      })
      .catch(function (error) {
        console.log("hiba", error);
      });c
    }

    putData(url, data){
        axios.put(`${url}/${data.id}`, data)
      .then(function (response) {
        console.log("RESP", response);
        location.reload()
      })
      .catch(function (error) {
        console.log("hiba", error);
      });
    }

    deleteData(url, id){
        axios.delete(`${url}/${id}/`)
      .then(function (response) {
        console.log("RESP", response);
        location.reload()
      })
      .catch(function (error) {
        console.log("hiba", error);
      });
    }

}

export default DataService;