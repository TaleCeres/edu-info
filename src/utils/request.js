/*
* base64-encoded Authorization header ==> https://gist.github.com/brandonmwest/a2632d0a65088a20c00a
*/
import axios from 'axios'
import config from '../api/api.config'

import { Notify } from 'vant'

// 创建axios实例
const service = axios.create({
  baseURL: `${config.BASE_API}` // api的base_url
})

// 请求拦截器
service.interceptors.request.use(config => {
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'application/json; charset=utf-8'
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  const { code, msg } = response.data
  // 成功的error_code为0，其他都是
  if (code !== 2000) {
    Notify({
      message: msg || '服务端异常',
      type: 'warning',
      duration: 2 * 1000
    })
    return Promise.reject(msg || '服务端异常')
  } else {
    return response.data
  }
}, error => {
  return Promise.reject(error)
}
)

export default service
