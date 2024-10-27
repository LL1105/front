/* 封装axios用于发送请求 */
import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)

// 创建一个新的axios实例
const request = axios.create({
  baseURL: 'http://49.232.232.203:10010',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code !== 200) {
    Toast(response.data.msg)
  }

  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
