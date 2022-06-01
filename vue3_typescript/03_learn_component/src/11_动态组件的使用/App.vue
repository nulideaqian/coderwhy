<template>
  <button v-for="(item, index) in tabs" :key="item" @click="itemClick(item)"
          :class="{active: currentTab === item}">
    {{ item }}
  </button>
  <!--  <template v-if="currentTab === 'home'">-->
  <!--    <home/>-->
  <!--  </template>-->
  <!--  <template v-else-if="currentTab === 'about'">-->
  <!--    <about/>-->
  <!--  </template>-->
  <!--  <template v-else>-->
  <!--    <category/>-->
  <!--  </template>-->

  <keep-alive>
    <component :is="currentTab"
               name="coder why"
               :age="18"
               @pageClick="pageClick"></component>
  </keep-alive>

</template>

<script>
import Home from "@/11_动态组件的使用/pages/Home";
import About from "@/11_动态组件的使用/pages/About";
import Category from "@/11_动态组件的使用/pages/Category";

export default {
  name: "App",
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'home'
    }
  },
  methods: {
    itemClick(item) {
      this.currentTab = item
    },
    pageClick() {
      console.log('page click')
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
