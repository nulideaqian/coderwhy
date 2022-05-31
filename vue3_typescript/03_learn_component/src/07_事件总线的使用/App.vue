<template>
  <div>
    <home/>
    <about/>
  </div>
</template>

<script>
import Home from "@/07_事件总线的使用/Home";
import About from "@/07_事件总线的使用/About";

export default {
  name: "App",
  components: {
    Home,
    About
  }
}
</script>

<style scoped>

</style>
