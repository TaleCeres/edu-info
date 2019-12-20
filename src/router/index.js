import Vue from 'vue'
import VueRouter from 'vue-router'
import introduction from './introduction'
import lesson from './lesson'
import about from './about'
const _import = file => () => import(`@/views/${file}.vue`)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: _import('index/index')
  },
  ...introduction,
  ...lesson,
  ...about
]

const router = new VueRouter({
  routes
})

export default router
