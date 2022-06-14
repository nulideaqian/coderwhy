<template>
  <div id="app">
<!--    <router-link to="/home">home</router-link> |-->
<!--    <router-link to="/about">about</router-link>-->
    <h2>哈哈哈</h2>
    <div>呵呵呵</div>

<!--    <button>首页</button>-->
<!--    <button>关于</button>-->

    <router-link to="/home">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/user">用户</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  components: {

  }
}
</script>
<style>
.router-link-active {
  color: red;
}
</style>
