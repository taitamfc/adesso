import axios from "axios";

class MyNowServices {

    getMyNow() {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.get("/my-now").then(response => {
                    if (response.data.content) {
                        localStorage.setItem("myNow", response.data.content);
                    }
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

    updateMyNow(content: string) {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(response => {
                return axios.post("/my-now/update-or-create", {
                    content
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
            });
    }
}

export default new MyNowServices();