<template>
  <show-message title="哈哈哈" content="我是哈哈哈哈"/>
  <show-message title="嘻嘻嘻" content="我是嘻嘻嘻嘻"/>
  <show-message id="abc" class="why" title="呵呵呵" content="我是呵呵呵呵"/>

  <multi-root-element id="abc"/>
</template>

<script>
import ShowMessage from "@/03_父组件传递子组件/ShowMessage";
import MultiRootElement from "@/03_父组件传递子组件/MultiRootElement";

export default {
  name: "App",
  components: {ShowMessage, MultiRootElement}
}
</script>

<style scoped>

</style>
