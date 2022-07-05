import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'

export default createStore<IRootState>({
  state: () => {
    return {
      name: 'coder why',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
