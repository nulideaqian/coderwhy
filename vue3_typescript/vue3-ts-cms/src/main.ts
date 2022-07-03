import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.css'
import router from './router'
import store from './store'
// import './service/axios_demo'
import hyRequest from './service'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
