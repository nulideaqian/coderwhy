<template>
  <div>
    <h2>当前记数：{{ $store.state.counter }}</h2>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('increment_n', 10)">+10</button>
    <button @click="$store.commit('decrement')">-1</button>
    <hr>
  </div>
</template>

<script>
export default {
  computed: {

  }
}
</script>

<style scoped>

</style>
