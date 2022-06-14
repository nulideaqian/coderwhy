<template>
  <div>
    <h2>User: {{ $route.params.username }}</h2>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'

export default {
  name: "User",
  setup() {
    const route = useRoute()
    console.log(route)
    console.log(route.params.username)
  }
}
</script>

<style scoped>

</style>
