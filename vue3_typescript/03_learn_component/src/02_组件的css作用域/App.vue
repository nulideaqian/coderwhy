<template>
  <h2>App</h2>
  <hello-world/>
</template>

<script>
import HelloWorld from "@/02_组件的css作用域/HelloWorld";

export default {
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
