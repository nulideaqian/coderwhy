<template>
  <div @click="divClick">
    <h2>home组件</h2>
    {{ name }} - {{ age }}
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  },
  emits: ["pageClick"],
  methods: {
    divClick() {
      this.$emit("pageClick")
    }
  }
}
</script>

<style scoped>

</style>
