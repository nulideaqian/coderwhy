<template>
<div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</div>
</template>

<script>
export default {
  name: "CounterOperation",
  emits: ['add', 'sub'],
  methods: {
    increment() {
      console.log('+1')
      this.$emit('add')
    },
    decrement() {
      console.log('-1')
      this.$emit('sub')
    }
  }
}
</script>

<style scoped>

</style>
