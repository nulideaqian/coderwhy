<template>
  <div>
<!--    <input v-model="message">-->
<!--    <h2>{{ message }}</h2>-->

    <hy-input-v2 v-model="message" v-model:title="title"></hy-input-v2>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <!--    <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input>-->
  </div>
</template>

<script>
import HyInput from "@/15_组件的v-model/HyInput";
import HyInputV2 from "@/15_组件的v-model/HyInputV2";

export default {
  name: "App",
  data() {
    return {
      message: 'Hello World',
      title: '哈哈哈'
    }
  },
  components: {
    HyInput,
    HyInputV2
  }
}
</script>

<style scoped>

</style>
