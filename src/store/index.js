import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    org: 'test'
  },
  mutations: {
    SET_ORG (state, org) {
      state.org = org
    }
  },
  actions: {
  },
  modules: {
  }
})
