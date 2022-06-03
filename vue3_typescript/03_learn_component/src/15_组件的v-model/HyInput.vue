<template>
<!--  <button @click="btnClick">hy按钮</button>-->
<!--  <h2>HyInput的message: {{ modelValue }}</h2>-->

<!--  <input type="text" :value="modelValue" @input="btnClick">-->
  <input type="text" v-model="value">
</template>

<script>
export default {
  name: "HyInput",
  props: {
    modelValue: String
  },
  emits: ['update:model-value'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      }
    }
  },
  methods: {
    btnClick(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
