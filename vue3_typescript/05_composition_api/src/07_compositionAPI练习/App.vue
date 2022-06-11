<template>
  <div>
    <h2>当前记数：{{counter}}</h2>
    <h2>记数*2：{{doubleCounter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{data}}</h2>
    <button @click="changeData">修改data</button>

    <p class="content"></p>
    <div class="scroll">
      <div class="scroll-x">scrollX: {{scrollX}}</div>
      <div class="scroll-y">scrollY: {{scrollY}}</div>
      <div class="mouse-x">mouseX: {{mouseX}}</div>
      <div class="mouse-y">mouseY: {{mouseY}}</div>
    </div>

  </div>
</template>

<script>
import {
  useTitle,
  useCounter,
  useScrollPosition,
  useMousePosition,
  useLocalStorage
} from '@/07_compositionAPI练习/hooks'

export default {
  name: "App",
  setup() {
    const {counter, doubleCounter, increment, decrement} = useCounter()

    const titleRef = useTitle('goahead')
    setTimeout(() => {
      titleRef.value = 'kobe'
    }, 3000)

    // 滚动位置
    const {scrollX, scrollY} = useScrollPosition()

    // 鼠标位置
    const {mouseX, mouseY} = useMousePosition()

    // localStorage
    const data = useLocalStorage('info', {name: 'coderwhy', age: 18})
    const changeData = () => {
      data.value = 'hahaha'
    }

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
      changeData
    }
  }
}
</script>

<style scoped>
.content {
  width: 3000px;
  height: 4000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
