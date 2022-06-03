<template>
  <input type="text" v-model="value">
  <input type="text" v-model="why">
</template>

<script>
export default {
  name: "HyInputV2",
  props: {
    modelValue: String,
    title: String
  },
  emits: ['update:model-value', 'update:title'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      }
    },
    why: {
      set(why) {
        this.$emit('update:title', why)
      },
      get() {
        return this.title
      }
    }
  }
}
</script>

<style scoped>

</style>
