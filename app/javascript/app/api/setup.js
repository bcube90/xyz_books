import { CURRENT_ENV, DEV_API_URL, PRO_API_URL } from "./endpoint";

export function setupAxios(axios) {
  axios.defaults.headers.Accept = 'application/json'
  axios.defaults.baseURL = CURRENT_ENV == "development" ? DEV_API_URL : DEV_API_URL
  axios.defaults.validateStatus = (status) => status < 500
  axios.defaults.timeout =  8000
  axios.interceptors.request.use(
    (config) => config,
    (error) => Promise.resolve(error),
  )
}

export function setupResponseAxios(axios) {
  axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.resolve(error)
  )
}