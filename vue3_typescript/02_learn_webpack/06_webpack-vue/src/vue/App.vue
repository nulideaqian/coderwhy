<template>
  <div>
    <h2>我是Vue渲染出来的</h2>
    <h2>{{ title }}</h2>
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: 'Hello World'
    }
  },
  methods: {}
}
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
