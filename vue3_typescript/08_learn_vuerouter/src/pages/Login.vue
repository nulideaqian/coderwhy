<template>
  <div>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: "Login",
  setup() {
    const router = useRouter()
    const loginClick = () => {
      window.localStorage.setItem('token', 'why')
      router.push({
        path: '/home'
      })
    }
    return {
      loginClick
    }
  }
}
</script>

<style scoped>

</style>
