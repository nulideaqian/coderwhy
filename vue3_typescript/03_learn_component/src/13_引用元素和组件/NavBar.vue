<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和跟组件</button>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {message: '我是navBar里边的message'}
  },
  methods: {
    sayHello() {
      console.log("Hello NavBar")
    },
    getParentAndRoot() {
      console.log(this.$parent)
      console.log(this.$root)
    }
  }
}
</script>

<style scoped>

</style>
