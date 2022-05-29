<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style scoped>
</style>