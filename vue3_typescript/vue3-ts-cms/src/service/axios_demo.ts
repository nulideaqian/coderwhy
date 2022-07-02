import axios from 'axios'

// axios
//   .get('http://123.207.32.32:8000/home/multidata')
//   .then((res) => console.log(res.data))
//
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios.get('/get', {
  params: {
    name: 'why',
    age: 18
  },
  timeout: 5000,
  headers: {}
})

axios
  .post('/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 29 } }),
    axios.post('/post', { data: { name: 'why', age: 29 } })
  ])
  .then((res) => {
    console.log('get', res[0].data)
    console.log('post', res[1].data)
  })

axios.interceptors.request.use(
  (config) => {
    // 1. 给请求增加token
    // 2. isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (error) => {
    console.log('请求失败的拦截')
    return error
  }
)

axios.interceptors.response.use(
  (config) => {
    // 1. 给请求增加token
    // 2. isLoading动画
    console.log('响应成功的拦截')
    return config
  },
  (error) => {
    console.log('响应失败的拦截')
    return error
  }
)

axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 29 } }),
    axios.post('/post', { data: { name: 'why', age: 29 } })
  ])
  .then((res) => {
    console.log('get', res[0].data)
    console.log('post', res[1].data)
  })
