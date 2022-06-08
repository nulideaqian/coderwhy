<template>
  <div>
    <h2 ref="title">hahaha</h2>
  </div>
</template>

<script>
import {ref, computed, watch, watchEffect} from "vue";

export default {
  name: "App",
  setup() {
    const title = ref(null)

    watchEffect(() => {
      console.log(title.value)
    })

    return [
      title
    ]
  }
}
</script>

<style scoped>

</style>
