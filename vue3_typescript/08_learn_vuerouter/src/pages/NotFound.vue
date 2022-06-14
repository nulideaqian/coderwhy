<template>
  <div>
    <h2>Page Not Found</h2>
    <p>您打开的路径页面不存在，请联系客服人员~</p>
    <h1>{{$route.params.pathMatch}}</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>
