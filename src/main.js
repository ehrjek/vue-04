// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// author li
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'jquery/dist/jquery.min'
import 'vee-validate'
import './js/czFunction'
// import './js/plugins/sui/sui.min'
/* eslint-disable no-new */
// import m1 from './components/login'
// var axios = require('axios')
// import $ from 'jquery'
// // 写在main中，全局引入js文件
// import {request} from './network/request'
Vue.config.productionTip = false
// console.log(m1.data().from.password)
new Vue({ // 对app.vue 和index.vue 进行统一管理后挂载到app.vue中
  el: '#app',
  router,
  components: { App }, // 注册
  template: '<App/>' // 使用
})

// 全局默认配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.baseURL = 'http://localhost:8089/test'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Vue.use(ElemetnUI)

// axios({
//   url: 'login',
//   params: {
//     password: '123456',
//     no: 'admin'
//   }
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: '/login',
//   // get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
//
// // axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })])
//   .then(results => {
//     console.log(results)
//   })
//
// // 创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// // 引用
// instance1({
//   url: '/home/data'
// }).then(res => {
//   console.log(res)
// })
// // 引用request.js的文件1
// // request({
// //   url: '/home/multidata'
// // }, res => {
// //   console.log(res)
// // }, err => {
// //   console.log(err)
// // })
// // 通过promise2
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
