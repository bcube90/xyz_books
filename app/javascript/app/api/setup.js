import { CURRENT_ENV, DEV_API_URL, PROD_API_URL } from "./endpoint";

export function setupAxiosRequest(axios) {
  axios.defaults.headers.Accept = 'application/json'
  axios.defaults.baseURL = CURRENT_ENV == "development" ? DEV_API_URL : PROD_API_URL
  axios.defaults.validateStatus = (status) => status < 500
  axios.defaults.timeout =  8000
  axios.interceptors.request.use(
    (config) => config,
    (error) => Promise.relove(error),
  )
}

export function setupAxiosResponse(axios) {
  axios.interceptors.response.use(
    (response) => {
      const {data, status} = response.data
      return {data, status}
    },
    (error) => Promise.relove(error)
  )
}