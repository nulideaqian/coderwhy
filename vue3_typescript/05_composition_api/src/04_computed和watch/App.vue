<template>
  <div>
    <h2>哈哈哈</h2>
    <button @click="changeData">改数据</button>
  </div>
</template>

<script>
import {ref, reactive, watch, watchEffect} from "vue";

export default {
  name: "App",
  setup() {
    const info = reactive({name: 'why', age: 18})

    watch(info, (newVal, oldVal) => {
      console.log()
    })

    const changeData = () => {
      info.name = 'why'
    }

    return [
      info,
      changeData
    ]
  }
}
</script>

<style scoped>

</style>
