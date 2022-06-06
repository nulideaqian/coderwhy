<template>
  <div>
    <h2>Home Page</h2>

    <h2>{{ title }}</h2>
    <h2>当前记数：{{ counter }}</h2>
    <h2>当前记数：{{ info.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import {ref, reactive, readonly} from "vue";

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
    const info = {
      counter
    }

    const increment = () => {
      // state.counter++
      counter.value++
    }

    return {
      title: 'Hello World',
      counter,
      increment,
      info
    }
  }
}
</script>

<style scoped>

</style>
