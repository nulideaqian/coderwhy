<template>
  <div class="app">
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>
<!--    <transition name="why" mode="out-in" :appear="true">-->
<!--      <h2 v-if="isShow">Hello World</h2>-->
<!--    </transition>-->
    <transition enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__flipInY">
      <h2 v-if="isShow">Hello World</h2>
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
    }
  }
}
</script>

<style scoped>
/*.why-enter-active {*/
/*  animation: bounceInUp 1s ease;*/
/*}*/

/*.why-leave-active {*/
/*  animation: bounceInUp 1s ease reverse;*/
/*}*/

.animate__flipIny {
  animation-direction: reverse;
}
</style>
