<template>
  <div>
    HomeContent:
  </div>
</template>

<script>
import emitter from "@/07_事件总线的使用/eventbus";

export default {
  name: "HomeContent",
  created() {
    // emitter.on('why', ({name, age}) => {
    //   console.log(name, age)
    // })
    // emitter.on('kobe', (info) => {
    //   console.log(info)
    // })
    emitter.on('*', (type, info) => {
      console.log(type, info)
    })
  }
}
</script>

<style scoped>

</style>
