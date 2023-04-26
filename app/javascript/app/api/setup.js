
export function setupAxios(axios) {
  axios.defaults.headers.Accept = 'application/json'
  axios.defaults.headers["Content-Type"] = 'application/json'
  axios.interceptors.request.use(
    (config) => {},
    (err) => Promise.reject(err),
  )
}