<template>
<div class="nav-bar">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="center">
    <slot name="center"></slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
  <div class="addition">
    <slot :name="name"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "NavBar",
  // data() {
  //   return {
  //     name: 'why'
  //   }
  // }
  props: {
    name: String
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
}
.left, .right, .addition {
  width: 80px;
  background-color: red;
}
.center {
  background-color: blue;
}
.left, .right, .center {
  height: 40px;
}
.center {
  flex: 1;
}
</style>
