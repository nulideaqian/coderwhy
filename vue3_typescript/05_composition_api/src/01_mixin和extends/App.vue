<template>
  <h2>{{ message }}</h2>
  <button @click="foo">按钮</button>
</template>

<script>
import {demoMixin} from "@/01_mixin和extends/mixin/demoMixin";

export default {
  name: "App",
  data() {
    return {
      title: 'Hello World'
    }
  },
  mixins: [demoMixin]
}
</script>

<style scoped>

</style>
