import {sum} from './js/math'

const {priceFormat} = require('./js/format')
import './js/element'
import './css/style.css'
import {createApp} from 'vue/dist/vue.runtime.esm-bundler'

console.log(sum(20, 30))
console.log(priceFormat())

const message = "Hello World"
const names = ['abc', 'cba', 'nba']

names.forEach(item => console.log(item))
console.log(message)

createApp({
  template: '<h2>Hello World</h2>',
  data() {
    return {
      title: 'Hello World'
    }
  }
}).mount('#app')
