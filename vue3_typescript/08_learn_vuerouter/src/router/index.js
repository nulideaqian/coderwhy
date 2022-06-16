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
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
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

let counter = 0
// 返回值： false不进行导航；undefined或者不写：进行默认导航，该去哪去哪；字符串：路径，则跳转
router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
