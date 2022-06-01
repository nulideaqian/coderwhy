<template>
  <div>
    <h2>测试</h2>
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index">
<!--        <h2>test</h2>-->
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "ShowNames",
  props: {
    names: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
