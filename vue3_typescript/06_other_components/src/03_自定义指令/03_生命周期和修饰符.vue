<template>
  <div>
    <input type="text" v-focus>
    <button v-if="counter < 2" v-why.aaa.bbb @click="increment">当前记数: {{counter}}</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    let counter = ref(0)
    const increment = () => counter.value++
    return {
      counter,
      increment
    }
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
        // console.log('focus mounted')
      }
    },
    why: {
      created() {
        console.log('why created')
      },
      beforeMount() {
        console.log('why beforeMount')
      },
      mounted() {
        console.log('why mounted')
      },
      beforeUpdate() {
        console.log('why beforeUpdate')
      },
      updated() {
        console.log('why updated')
      },
      beforeUnmount() {
        console.log('why beforeUnmount')
      },
      unmounted() {
        console.log('why unmounted')
      }
    }
  }
}
</script>

<style scoped>

</style>
