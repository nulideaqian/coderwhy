<template>
  <h2>组件开始</h2>
  <slot>
    <i>我是默认的i元素</i>
  </slot>
  <slot>
    <i>我是默认的i元素</i>
  </slot>
  <slot>
    <i>我是默认的i元素</i>
  </slot>
  <h2>组件结束</h2>
</template>

<script>
export default {
  name: "MySlotCpn"
}
</script>

<style scoped>

</style>
