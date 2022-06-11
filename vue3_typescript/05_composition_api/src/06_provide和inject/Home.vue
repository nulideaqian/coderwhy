<template>
  <div>
    <h2>{{ counter }} - {{ name }}</h2>

    <button @click="homeIncrement">home + 1</button>
  </div>
</template>

<script>
import {inject} from 'vue'

export default {
  name: "Home",
  setup() {
    const name = inject('name', 'goahead')
    let counter = inject('counter', 300)

    const homeIncrement = () => {
      counter.value++
    }
    return {
      name,
      counter,
      homeIncrement
    }
  }
}
</script>

<style scoped>

</style>
