<template>
  <div class="app">
    <div>
      <button @click="toggle">显示/隐藏</button>
    </div>
    <transition @enter="enter"
                @leave="leave">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      isShow: true,
      distance: 200
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
    },
    enter(el, done) {
      gsap.from(el, {
        scale: 0,
        x: this.distance,
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    }
  }
}
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>
