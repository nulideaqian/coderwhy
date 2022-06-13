import Home from "@/pages/Home";
import About from "@/pages/About";
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

// 创建路由对象
const router = createRouter({
  routes,
  history: createWebHistory('')
})

export default router
