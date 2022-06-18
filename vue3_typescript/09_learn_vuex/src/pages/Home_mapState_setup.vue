<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <hr>
    <h2>{{sCounter}}</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore, mapState} from 'vuex'

export default {
  setup() {
    const store = useStore()
    const sCounter = computed(() => store.state.counter)
    const storeStateFns = mapState(['counter', 'name', 'age', 'height'])

    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
      const fn = storeStateFns[fnKey].bind({$store: store})
      storeState[fnKey] = computed(fn)
    })

    // console.log(storeState.age())

    return {
      sCounter,
      ...storeState
    }
  }
}
</script>

<style scoped>

</style>
