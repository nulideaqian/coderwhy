<template>
  <h2 v-bind="$attrs">{{ title }}</h2>
  <p>{{ content }}</p>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "ShowMessage",
  // props: ['title', 'content']
  props: {
    title: String,
    content: String
  }
}
</script>

<style scoped>

</style>
