<template>
  <div>
    <h2>Home Page</h2>
    <button @click="updateState">+1</button>
  </div>
</template>

<script>
import {ref, reactive, readonly} from "vue";

export default {
  name: "Home",
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    const info1 = {name: 'why'}
    const readonlyInfo1 = readonly(info1)

    const info2 = reactive({
      name: 'why'
    })
    const readonlyInfo2 = readonly(info2)

    const info3 = ref('why')
    const readonlyInfo3 = readonly(info3)

    const updateState = () => {
      info1.name = 'coderwhy'
      readonlyInfo1.name = 'coderwhy'
    }

    return {
      updateState,
    }
  }
}
</script>

<style scoped>

</style>
