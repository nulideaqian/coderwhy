<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
import {ref, computed, watch} from "vue";

export default {
  name: "App",
  setup() {
    const firstName = ref("kobe")
    const lastName = ref('Bryant')

    // const fullName = computed(() => firstName.value + ' ' + lastName.value)

    const fullName = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set(newName) {
        const names = newName.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })

    const changeName = () => {
      fullName.value = 'coder why'
    }

    return {
      firstName,
      lastName,
      fullName,
      changeName
    }
  }
}
</script>

<style scoped>

</style>
