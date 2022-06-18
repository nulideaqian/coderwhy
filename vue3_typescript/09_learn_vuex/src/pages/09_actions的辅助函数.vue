<template>
  <div>
    <h2>当前记数：{{ $store.state.counter }}</h2>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <hr>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  setup() {
    const actions = mapActions(['incrementAction', 'decrementAction'])
    return {
      ...actions
    }
  },
  methods: {
    // ...mapActions(['incrementAction', 'decrementAction']),
    ...mapActions({
      add: 'incrementAction',
      sub: 'decrementAction'
    })
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
