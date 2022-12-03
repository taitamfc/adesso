import axios from "axios";

class MyBeatsServices {

    getMyBeats() {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.get("/my-beats").then(response => {
                    if (response.data && response.data.score) {
                        localStorage.setItem("myBeats", response.data.score);
                    }
                    console.log(response.data)
                    return response.data;
                }).catch(function (error) {
                    if (error.response && error.response.data) {
                        return error.response.data;
                    } else if (error.request || error.message) {
                        return error.message
                    } else {
                        console.log('Error', error.message);
                    }
                });
            })
    }
}

export default new MyBeatsServices();