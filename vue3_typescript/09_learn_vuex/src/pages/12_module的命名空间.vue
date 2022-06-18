<template>
  <div>
    <h2>root记数：{{ $store.state.rootCounter }}</h2>
    <h2>home记数：{{ $store.state.home.homeCounter }}</h2>
    <h2>user记数：{{ $store.state.user.userCounter }}</h2>

    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementAction">homeAction+1</button>
    <hr>
    <h2>{{ $store.getters['home/doubleHomeCounter'] }}</h2>
    <hr>
  </div>
</template>

<script>
export default {
  setup() {
  },
  methods: {
    homeIncrement() {
      this.$store.commit('home/increment')
    },
    homeIncrementAction() {
      this.$store.dispatch('home/incrementAction')
    }
  }
}
</script>

<style scoped>

</style>
