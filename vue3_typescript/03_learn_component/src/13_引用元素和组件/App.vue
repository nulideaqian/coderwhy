<template>
  <h2 ref="title">哈哈哈</h2>
  <button @click="btnClick">获取元素</button>
  <nav-bar ref="navBar"></nav-bar>
</template>

<script>
import NavBar from "@/13_引用元素和组件/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      names: ['abc', 'kobe', 'cba']
    }
  },
  methods: {
    btnClick() {
      console.log(this.$refs.title.innerHTML)
      console.log(this.$refs.navBar.message)
      this.$refs.navBar.sayHello()
      // this.$refs.title.innerHTML = '呵呵呵'
    }
  }
}
</script>

<style scoped>

</style>
