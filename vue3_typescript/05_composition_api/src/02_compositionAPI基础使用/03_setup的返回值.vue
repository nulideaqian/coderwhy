<template>
  <div>
    <h2>Home Page</h2>

    <h2>{{ title }}</h2>
    <h2>当前记数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Home",
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(props, {attrs, slots, emit}) {
    let counter = ref(100)

    const increment = () => {
      counter.value++
    }

    return {
      title: 'Hello World',
      counter,
      increment
    }
  }
}
</script>

<style scoped>

</style>
