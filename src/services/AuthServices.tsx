import axios from "axios";

class AuthServices {

    login(email: string, password: string) {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.post("/login", {
                    email,
                    password
                }).then(response => {
                    if (response.data.access_token) {
                        localStorage.setItem("token", response.data.access_token);
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

    logout() {
        return axios
            .post("/logout").then(response => {
                if (response.status === 204) {
                    localStorage.removeItem("token")
                    return true;
                }
                return false;
            })
    }

    register(name: string, email: string, password: string) {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(response => {
                return axios.post("/register", {
                    name,
                    email,
                    password
                }).then(response => {
                    if (response.data.token){
                        localStorage.setItem("token", response.data.token);
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
            });
    }
}

export default new AuthServices();