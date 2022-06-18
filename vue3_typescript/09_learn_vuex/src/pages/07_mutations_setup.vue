<template>
  <div>
    <h2>当前记数：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="increment_n(10)">+10</button>
    <button @click="decrement">-1</button>
    <hr>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations(['increment', 'increment_n', 'decrement'])
  }
}
</script>

<style scoped>

</style>
