<template>
  <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
</template>

<script>
export default {
  setup() {
    const timestamp = 1654925356
    return {
      timestamp
    }
  }
}
</script>

<style scoped>

</style>
