<template>
  <div id="app">
<!--    <router-link to="/home">home</router-link> |-->
<!--    <router-link to="/about">about</router-link>-->
    <h2>哈哈哈</h2>
    <div>呵呵呵</div>

<!--    <button>首页</button>-->
<!--    <button>关于</button>-->

    <!-- props: href 跳转的链接 -->
    <router-link to="/home" v-slot="props">
      <button>{{props.href}}</button>
      <p>{{props.route}}</p>
      <p>{{props.navigate}}</p>
    </router-link> |
    <router-link to="/about">
      <strong>关于</strong>
    </router-link> |
    <router-link to="/user">
      <nav-bar title="用户">用户</nav-bar>
    </router-link>
    <router-link to="/category">
      <button>分类</button>
    </router-link>
    <router-view>

    </router-view>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar},
  setup() {
    return {
      NavBar
    }
  }
}
</script>
<style>
.router-link-active {
  color: red;
}
</style>
