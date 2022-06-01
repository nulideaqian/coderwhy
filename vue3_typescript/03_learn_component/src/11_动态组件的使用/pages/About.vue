<template>
  <h2>about组件</h2>
  <button @click="counter++">{{counter}}</button>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped>

</style>
