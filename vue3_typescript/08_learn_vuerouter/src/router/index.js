import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home-router',
    component: () => import(/* webpackChunkName: "home-chunk" */'../pages/Home.vue'),
    meta: {
      name: 'why',
      age: 28
    },
    children: [
      {
        path: 'message',
        component: () => import('../pages/HomeMessage.vue')
      },
      {
        path: 'shops',
        component: () => import('../pages/HomeShops.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/user/:username',
    component: () => import('../pages/User.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/NotFound.vue')
  }
]

// 创建路由对象
const router = createRouter({
  routes,
  history: createWebHistory('')
  // history: createWebHashHistory()
})

const categoryRoute = {
  path: '/category',
  component: () => import('../pages/Category.vue')
}

router.addRoute(categoryRoute)

export default router
