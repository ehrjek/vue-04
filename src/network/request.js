import axios from 'axios'

// export function request (config, success, failur) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 500
//   })
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failur(err)
//     })
// }

// export function request (config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 500
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 500
  })
  return instance(config)
}
