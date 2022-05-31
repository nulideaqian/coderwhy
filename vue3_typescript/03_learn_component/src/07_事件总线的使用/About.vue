<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
import emitter from "@/07_事件总线的使用/eventbus";

export default {
  name: "About",
  methods: {
    btnClick() {
      console.log('about点击')
      emitter.emit('why', {name: 'why', age: 18})
      emitter.emit('kobe', {name: 'kobe', age: 18})
    }
  }
}
</script>

<style scoped>

</style>
