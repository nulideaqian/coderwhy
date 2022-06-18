<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
    <h2 ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import {ref, onUpdated, nextTick} from 'vue'

export default {
  name: "App_nexttick",
  setup() {
    const message = ref('哈哈哈')
    const titleRef = ref(null)
    const counter = ref(0)
    const addMessageContent = () => {
      message.value += '呵呵呵'
      nextTick(() => {
        console.log(titleRef.value.offsetHeight)
      })
    }
    onUpdated(() => {
      // console.log(titleRef.value.offsetHeight)
    })
    const increment = () => {
      counter.value++
    }
    return {
      message,
      titleRef,
      counter,
      addMessageContent,
      increment
    }
  }
}
</script>

<style scoped>
div {
  width: 100px;
}
</style>
