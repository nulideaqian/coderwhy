<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ height }}</h2>
  </div>
</template>

<script>
import {useVuex} from '@/hooks/useVuex.js'

export default {
  setup() {
    const storeState = useVuex(['counter', 'name', 'age', 'height'])
    return {
      ...storeState
    }
  }
}
</script>

<style scoped>

</style>
