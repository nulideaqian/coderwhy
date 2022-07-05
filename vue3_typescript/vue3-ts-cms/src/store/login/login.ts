import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ILoginState } from '@/store/login/types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    },
    phoneLoginAction({ commit }, payload: null) {
      console.log('执行phoneLoginAction', payload)
    }
  },
  getters: {}
}

export default loginModule
