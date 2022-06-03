<template>
  <h2>{{ message }}</h2>
  <button @click="changeMessage">修改message</button>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: 'hello galaxy'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'hello go ahead'
    }
  },
  beforeCreate() {
    console.log('home beforeCreate')
  },
  created() {
    console.log('home created')
  },
  beforeMount() {
    console.log('home beforeMount')
  },
  mounted() {
    console.log('home mounted')
  },
  beforeUpdate() {
    console.log('home beforeUpdate')
  },
  updated() {
    console.log('home updated')
  },
  beforeUnmount() {
    console.log('home beforeUnmount')
  },
  unmounted() {
    console.log('home unmounted')
  }
}
</script>

<style scoped>

</style>
