import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utilities/auth'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error.response.status)
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    return res
  },
  (error) => {
    const toast = useToast()
    if (error.response.status == 401 && error.response.data.message == 'Unauthenticated.') {
      setTimeout(() => {
        // Redirect to the desired URL
        window.location.href = '/simple-auth/login'
      }, 1000)
    }
    toast.error('Erro ' + error.response.status ? error.response.status : '' + ': ' + (error.response.data.message ?? error.response.data.data.message))
    return Promise.reject(error)
  }
)

export default service
