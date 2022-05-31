<template>
  <div>
    <home/>
    <button @click="addName">添加名字</button>
  </div>
</template>

<script>
import Home from "@/06_Provide和Inject使用/Home";
import {computed} from 'vue'

export default {
  name: "App",
  components: {
    Home
  },
  provide() {
    return {
      name: 'why',
      age: 18,
      length: computed(() => this.names.length)
    }
  },
  data() {
    return {
      names: ['abc', 'nba', 'cba']
    }
  },
  methods: {
    addName() {
      this.names.push('why')
    }
  }
}
</script>

<style scoped>

</style>
