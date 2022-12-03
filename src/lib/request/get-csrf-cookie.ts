import axios, { AxiosResponse } from 'axios'

export async function getCsrfCookie(): Promise<AxiosResponse> {
  const urlCsrfCookie = `${import.meta.env.VITE_APP_HOST_URL}/sanctum/csrf-cookie`

  return await axios.get(urlCsrfCookie)
}
