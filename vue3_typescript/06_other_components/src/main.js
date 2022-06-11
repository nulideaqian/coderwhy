import { createApp } from 'vue'
import registerDirectives from "@/directives";
// import App from './01_render函数的使用/App.vue'
// import App from './02_jsx的使用/App.vue'
// import App from './03_自定义指令/App.vue'
import App from './04_teleport内置组件/App.vue'
import pluginObj from './plugins/plugins_object.js'

const app = createApp(App)
// app.directive('focus', {
//   mounted(el) {
//     el.focus()
//     console.log('focus mounted')
//   }
// })
registerDirectives(app)
app.use(pluginObj)
app.mount('#app')
