<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import {ref, computed, watch, watchEffect} from "vue";

export default {
  name: "App",
  setup() {
    const name = ref('why')
    const age = ref(18)

    const changeName = () => {
      name.value = 'kobe'
    }
    const changeAge = () => {
      age.value++
    }

    watchEffect(() => {
      console.log('hahah')
      console.log('name: ', name.value)
    })

    return {
      name,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style scoped>

</style>
