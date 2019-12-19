import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/stylus/index.styl'
import icon from '@/components/icon.vue'
import back from '@/components/back.vue'
import home from '@/components/home.vue'

Vue.component('Icon', icon)
Vue.component('Back', back)
Vue.component('Home', home)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
