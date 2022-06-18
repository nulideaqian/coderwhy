<template>
  <div>
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
    <hr>
    <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>{{ $store.getters.heightInfo }}</h2>
    <h2>{{ $store.getters.ageInfo }}</h2>
    <hr>
  </div>
</template>

<script>
import {useGetters} from '@/hooks/useVuex'

export default {
  setup() {
    return {
      ...useGetters(['nameInfo', 'ageInfo', 'heightInfo'])
    }
  }
}
</script>

<style scoped>

</style>
