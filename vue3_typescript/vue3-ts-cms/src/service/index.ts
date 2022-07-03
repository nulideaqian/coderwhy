import HYRequest from '@/service/request'
import { BASE_URL, TIMEOUT } from './request/config'

export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // const token = '123123'
      // if (token) {
      //   config.headers?.Authorization = `Bearer ${token}`
      // }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败的拦截')
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})
