<template>
  <div>
    <h2>Home Page</h2>

    <h2>{{ title }}</h2>
    <h2>当前记数：{{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import {ref, reactive} from "vue";

export default {
  name: "Home",
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(props, {attrs, slots, emit}) {
    const state = reactive({
      counter: 100
    })
    const increment = () => {
      state.counter++
    }

    return {
      title: 'Hello World',
      state,
      increment
    }
  }
}
</script>

<style scoped>

</style>
