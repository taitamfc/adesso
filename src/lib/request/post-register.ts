import axios from "axios"

import { getCsrfCookie } from './get-csrf-cookie'

import { RegisterOptions } from "../../models/register"
import { Results } from "../../models/result-type"

export async function postRegister(params: RegisterOptions): Promise<Results<any>> {
    let dataReturn: Results<any> = {
        error: false,
        success: false,
        data: undefined,
        errorMessage: undefined
    }

    await getCsrfCookie().then(res => {
        console.info('getCsrfCookie success', res)

        return axios.post("/register", params).then(response => {
            if (response.data.data.token){
                localStorage.setItem("token", response.data.data.token);
            }

            dataReturn.error = false
            dataReturn.success = true
            dataReturn.data = response.data

            console.info('postRegister', dataReturn)
            return dataReturn
        }).catch((error) => {
            const errorData = error.response && error.response.data || error.request || error.message || undefined
            console.info('postRegister error!', errorData)

            dataReturn.error = true
            dataReturn.success = false
            dataReturn.errorMessage = errorData?.message || errorData

            console.info('postRegister', dataReturn)
            return dataReturn
        });
    }).catch(error => {
        console.info('getCsrfCookie error', error)

        dataReturn.error = true
        dataReturn.success = false
    })

    return dataReturn
}