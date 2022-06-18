<template>
  <div>
    <h2>当前记数：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr>
  </div>
</template>

<script>
export default {
  setup() {
  },
  methods: {
    increment() {
      setTimeout(() => {
        this.$store.dispatch('incrementAction', {count: 100})
      }, 1000)
    },
    decrement() {
      this.$store.dispatch('decrementAction')
    }
  },
  mounted() {
    this.$store.dispatch('getHomeMultidata')
  }
}
</script>

<style scoped>

</style>
