<template>
  <div>
    <home message="hahahaha" id="aaa"></home>
  </div>
</template>

<script>
import Home from "@/02_compositionAPI基础使用/Home";

export default {
  name: "App",
  components: {
    Home
  },
  setup() {
    console.log(this)
  }
}
</script>

<style scoped>

</style>
