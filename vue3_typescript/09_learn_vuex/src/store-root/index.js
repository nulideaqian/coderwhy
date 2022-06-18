import { createStore } from 'vuex'
import {INCREMENT_N} from "@/store/mutation-types";
import axios from "axios";

export default createStore({
  state: {
    counter: 100,
    name: 'why',
    age: 18,
    height: 1.88,
    discount: 1,
    books: [
      {
        name: '深入Vue',
        price: 200,
        count: 3
      },
      {
        name: '深入React',
        price: 240,
        count: 2
      },
      {
        name: '深入Webpack',
        price: 155,
        count: 3
      },
      {
        name: '深入Node',
        price: 220,
        count: 2
      }
    ],
    banners: [

    ]
  },
  getters: {
    totalPrice(state) {
      let totalPrice = 0
      for (const book of state.books) {
        totalPrice += book.price * book.count
      }
      return totalPrice
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPriceCountGreaterN(state, getters) {
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price
          }
        }
        console.log(getters.currentDiscount)
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
    heightInfo(state) {
      return `height: ${state.height}`
    }
  },
  mutations: {
    increment(state) {
      console.log('get mutation from mutation')
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload
    },
    addBannerData(state, payload) {
      state.banners = payload
    }
  },
  actions: {
    // 放函数
    incrementAction(context, payload) {
      console.log(payload)
      context.commit('increment')
    },
    decrementAction(context) {
      console.log(context)
      context.commit('decrement')
    },
    addBannerDataAction(context, payload) {
      context.commit('addBannerData', payload)
    },
    getHomeMultidata(context) {
      axios.get('http://123.207.32.32:8000/home/multidata')
      .then(res => {
        context.commit('addBannerData', res.data.data.banner.list)
      })
    }
  },
  modules: {
  }
})
