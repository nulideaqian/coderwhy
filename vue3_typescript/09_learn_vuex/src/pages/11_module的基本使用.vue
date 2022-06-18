<template>
  <div>
    <h2>当前记数：{{ $store.state.rootCounter }}</h2>
    <h2>当前记数：{{ $store.state.home.homeCounter }}</h2>
    <h2>当前记数：{{ $store.state.user.userCounter }}</h2>
    <hr>
  </div>
</template>

<script>
export default {
  setup() {
  },
}
</script>

<style scoped>

</style>
