import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/stylus/index.styl'
import icon from '@/components/icon.vue'
import icons from '@/components/icons.vue'
Vue.component('Icons', icons)
Vue.component('Icon', icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
