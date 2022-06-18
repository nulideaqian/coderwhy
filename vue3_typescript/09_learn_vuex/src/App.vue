<template>
  <home/>

  <h2>{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import {useStore} from 'vuex'
import Home from "@/pages/Home";

export default {
  name: 'App',
  setup() {
    const store = useStore()
    const increment = () => {
      store.commit('increment')
    }
    const decrement = () => {
      store.commit('decrement')
    }

    return {
      increment,
      decrement
    }
  },
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
