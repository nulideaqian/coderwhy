<template>
  <div>
    <h2>当前记数：{{ counter }}</h2>
    <counter-operation @add="addOne" @sub="subOne"/>
  </div>
</template>

<script>
import CounterOperation from "@/04_子组件传递父组件/CounterOperation";

export default {
  name: "App",
  data() {
    return {
      counter: 0
    }
  },
  components: {
    CounterOperation
  },
  methods: {
    addOne() {
      this.counter++
    },
    subOne() {
      this.counter--
    }
  }
}
</script>

<style scoped>

</style>
