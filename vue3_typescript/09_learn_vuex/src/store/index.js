import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 100
  },
  getters: {
  },
  mutations: {
    increment(state) {
      console.log('get mutation from mutation')
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})
