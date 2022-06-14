<template>
  <div>
    <h2>Home</h2>

    <router-link to="/home/message">消息</router-link> |
    <router-link to="/home/shops">商品</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
