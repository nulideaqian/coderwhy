import {sum} from './js/math'

const {priceFormat} = require('./js/format')
import './css/style.css'
import {createApp} from 'vue'
import App from './vue/App.vue'

import './js/element'
import axios from "axios";

if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element module is hot reload')
  })
}

console.log(sum(20, 30))
console.log(priceFormat())

const message = "Hello World"
const names = ['abc', 'cba', 'nba']

names.forEach(item => console.log(item))
console.log(message)

const app = createApp(App)
app.mount('#app')

axios.get('')
