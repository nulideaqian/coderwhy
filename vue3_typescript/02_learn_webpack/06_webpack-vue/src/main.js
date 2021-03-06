import {sum} from './js/math'

const {priceFormat} = require('./js/format')
import './js/element'
import './css/style.css'
import {createApp} from 'vue'

import App from './vue/App.vue'

console.log(sum(20, 30))
console.log(priceFormat())

const message = "Hello World"
const names = ['abc', 'cba', 'nba']

names.forEach(item => console.log(item))
console.log(message)

const app = createApp(App)
app.mount('#app')

console.log('abc')
