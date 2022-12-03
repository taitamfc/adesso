import axios from "axios";
import {HeartScoreSubscription} from "../types/HeartScoreSubscription";

const subscriptionData = {
    "success": true,
    "data": {
        "phoneNumber": "01234567890",
        "textFrequency": "daily",
        "emailAddress": "email@test.com",
        "emailFrequency": "monthly"
    }
}

class OnboardServices {
    async getOnBoardData() {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(async function (response) {
                    return await axios.get("/onboard/subscription ")
                        .then(response => {
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
                }
            );
    }

    setOnBoardSubscription(data: HeartScoreSubscription) {
        return axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie")
            .then(response => {
                    const payload = {
                        "by_phone": true,
                        "type_notifi_by_phone": data.textFrequency,
                        "number_phone": data.phoneNumber,
                        "by_email": true,
                        "type_notifi_by_email": data.emailFrequency,
                        "email": data.email,
                    }
                    return axios.post("/setting-notifications ", payload)
                        .then(response => {
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
                }
            );
    }
}

export default new OnboardServices();