<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>

    <hello-world message="hahaha" @increment="getCounter"/>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import HelloWorld from "@/08_setup顶层编写方式/HelloWorld";

const counter = ref(0)
const increment = () => counter.value++

const getCounter = (payload) => console.log(payload)
</script>

<style scoped>

</style>
