import axios from 'axios'

import { Results } from '../../models/result-type'

export async function postLogout(): Promise<Results<any>> {
  let dataReturn: Results<any> = {
    error: false,
    success: false,
    data: undefined,
    errorMessage: undefined,
  }

  await axios
    .post('/logout')
    .then((response) => {
      if (response.data === 'Success!') {
        localStorage.removeItem('token')
        return true
      }

      dataReturn.error = false
      dataReturn.success = true
      dataReturn.data = response.data

      console.info('postLogoutAPI SUCCESS!', dataReturn)
      return dataReturn
    })
    .catch((error) => {
      const errorData = (error.response && error.response.data) || error.request || error.message || undefined

      dataReturn.error = true
      dataReturn.success = false
      dataReturn.errorMessage = errorData?.message || errorData

      console.info('postLogoutAPI ERROR!', dataReturn)
      return dataReturn
    })

  return dataReturn
}
