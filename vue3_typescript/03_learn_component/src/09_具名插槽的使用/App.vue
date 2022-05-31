<template>
  <nav-bar :name="name">
    <template v-slot:left>
      <button>左边的按钮</button>
    </template>
    <template #center>
      <h2>我是标题</h2>
    </template>
    <template v-slot:right>
      <i>右边的i元素</i>
    </template>
    <template v-slot:[name]>
      why内容
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/09_具名插槽的使用/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      name: 'why'
    }
  }
}
</script>

<style scoped>

</style>
