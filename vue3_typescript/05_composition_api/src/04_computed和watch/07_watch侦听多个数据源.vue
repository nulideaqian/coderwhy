<template>
  <div>
    <h2>{{ info.name }}</h2>
    <button @click="changeData">改数据</button>
  </div>
</template>

<script>
import {ref, reactive, watch, watchEffect} from "vue";

export default {
  name: "App",
  setup() {
    const info = reactive({name: 'why', age: 18})
    const name = ref('why')

    watch(info, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })

    watch([info, name], (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })

    const changeData = () => {
      info.name = 'kobe'
    }

    return {
      info,
      changeData
    }
  }
}
</script>

<style scoped>

</style>
