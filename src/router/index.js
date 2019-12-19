import Vue from 'vue'
import VueRouter from 'vue-router'
import introduction from './introduction'
import lesson from './lesson'
const _import = file => () => import(`@/views/${file}.vue`)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: _import('index/index')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...introduction,
  ...lesson
]

const router = new VueRouter({
  routes
})

export default router
