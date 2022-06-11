<template>
  <div>
    <h2>Hello World</h2>
    <h2>{{message}}</h2>

    <button @click="emitEvent">发送事件</button>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: "eeeee"
  }
})

const emit = defineEmits(['increment', 'decrement'])
const emitEvent = () => {
  emit('increment', 10000)
}
</script>

<style scoped>

</style>
