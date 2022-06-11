<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数器: </h2>
      <button>+1</button>
    </teleport>
  </div>
</template>

<script>
import {getCurrentInstance} from 'vue'

export default {
  name: "App",
  mounted() {
    console.log(this.$name)
  },
  setup() {
    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties)
  }
}
</script>

<style scoped>

</style>
