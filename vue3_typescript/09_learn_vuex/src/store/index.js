import { createStore } from 'vuex'
import home from "@/store/modules/home";
import user from "@/store/modules/user";

export default createStore({
  state() {
    return {
      rootCounter: 0
    }
  },
  mutations: {
    increment(state) {
      state.rootCounter++
    }
  },
  modules: {
    home,
    user
  }
})
