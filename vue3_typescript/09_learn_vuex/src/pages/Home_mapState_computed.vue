<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <h2>Home: {{ sCounter }}</h2>
    <h2>Home: {{ sName }}</h2>
    <h2>Home: {{ name }}</h2>
    <h2>Home: {{ age }}</h2>
    <h2>Home: {{ $store.state.height }}</h2>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore, mapState} from 'vuex'

const store = useStore()
// console.log(store.state.counter)
// const counterRef = ref(store.state.counter)
const sCounter = computed(() => store.state.counter)
const sName = computed(() => store.state.name)
const {name} = mapState(['counter', 'name', 'age', 'height'])
const {age} = mapState({
  age: state => {
    console.log(state)
    return state.age
  }
})
console.log(typeof age)
</script>

<style scoped>

</style>
