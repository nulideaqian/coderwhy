<template>
  <div class="app">
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
    },
    beforeEnter() {
      
    },
    enter() {

    },
    afterEnter() {

    },
    beforeLeave() {

    },
    leave() {

    },
    afterLeave() {

    }
  }
}
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>
