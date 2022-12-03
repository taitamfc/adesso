import axios from "axios";

class MyGoalServices {
    getAllGoals() {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.get("/goals").then(response => {
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

    getMyGoal(date: string | null = null) {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                let requestUrl = "/my-goals/with-date";
                if (date) {
                    requestUrl += '?date=' + date;
                } else {
                    let today = new Date();
                    let month = today.getMonth() + 1
                    let date = today.getDate();
                    requestUrl += '?date=' + today.getFullYear() + "-";
                    requestUrl += month < 10 ? ("0" + month) : month;
                    requestUrl += "-";
                    requestUrl += date < 10 ? ("0" + date) : date;
                }
                return axios.get(requestUrl).then(response => {
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

    addMyGoal(title: string, addDate: string | null = null) {
        return this.getAllGoals().then(response => {
            let data = response.data;
            let id = 0;
            data.forEach(function (goal: any) {
                if (goal.name == title) {
                    id = goal.id
                    return false;
                }
            })
            if (id) {
                return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
                    .then(function (response) {
                        if (addDate == null) {
                            let today = new Date();
                            let month = today.getMonth() + 1
                            let date = today.getDate();
                            addDate =  today.getFullYear() + "-"
                            addDate += month < 10 ? ("0" + month) : month;
                            addDate += "-";
                            addDate += date < 10 ? ("0" + date) : date;
                        }
                        return axios.post("/my-goals", {
                            add_date: addDate,
                            goal_id: id
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
        })
    }

    getMonthData() {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(function (response) {
                return axios.get("/my-goals/in-month").then(response => {
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

export default new MyGoalServices();