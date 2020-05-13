import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import('../views/Config.vue')
  },
  {
    path: '/manage',
    name: 'AppManage',
    component: () => import('../views/AppManage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
