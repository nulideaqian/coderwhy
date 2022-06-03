<template>
  <button @click="toggle">切换</button>
  <template v-if="isShow">
    <home></home>
  </template>
</template>

<script>
import Home from "@/14_组件的生命周期/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>

</style>
