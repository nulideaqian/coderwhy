const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state, getters, rootState) {
      console.log(getters.otherGetter + 1)
      console.log(rootState.rootCounter + 1)
      return state.homeCounter * 2
    },
    otherGetter() {
      return 100
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter++
    }
  },
  actions: {
    incrementAction(context) {
      context.commit('increment')
      context.commit('increment', null, {root: true})
    }
  }
}

export default homeModule
