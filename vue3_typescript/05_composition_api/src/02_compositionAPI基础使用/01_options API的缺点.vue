<template>
  <h2>{{ counter }}</h2>
  <h2>counter * 2: {{ counter * 2 }}</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {

    },
    decrement() {

    }
  },
  computed: {
    doubleCounter() {
      return this.counter * 2
    }
  }
}
</script>

<style scoped>

</style>
