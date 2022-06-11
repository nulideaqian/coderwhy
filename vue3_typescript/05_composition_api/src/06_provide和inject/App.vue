<template>
  <div>
    <home></home>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import {provide, ref} from "vue";
import Home from "@/06_provide和inject/Home";

export default {
  name: "App",
  components: {
    Home
  },
  setup() {
    const name = ref('coderwhy')
    let counter = ref(100)

    provide('name', name)
    provide('counter', counter)

    const increment = () => {
      counter.value++
    }

    return {
      increment
    }
  }
}
</script>

<style scoped>

</style>
