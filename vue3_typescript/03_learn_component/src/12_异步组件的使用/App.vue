<template>
  <div>
    App组件
    <home/>
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import Home from "@/12_异步组件的使用/Home";
import Loading from "@/12_异步组件的使用/Loading";
// import AsyncCategory from "@/12_异步组件的使用/AsyncCategory";
const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))
// const AsyncCategory = defineAsyncComponent({
//   loader: () => import('./AsyncCategory.vue'),
//   loadingComponent: Loading,
//   delay: 5000,
//   onError: function (err, retry, attempts) {
//
//   }
// })

export default {
  name: "App",
  components: {
    Home,
    AsyncCategory,
    Loading
  }
}
</script>

<style scoped>

</style>
