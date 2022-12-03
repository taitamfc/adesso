import axios from "axios";

class MyActionServices {
    getCompletedActions() {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.get("/my-actions/complete").then(response => {
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

    getInCompletedActions() {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.get("/my-actions/not-complete").then(response => {
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

    addMyAction(key: string){
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.post("/my-actions/complete-by-key", {
                    key: key
                }).then(response => {
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

export default new MyActionServices();