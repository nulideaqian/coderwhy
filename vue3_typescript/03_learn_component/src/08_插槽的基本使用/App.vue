<template>
  <my-slot-cpn>
    <button>我是按钮</button>
  </my-slot-cpn>

  <my-slot-cpn>
    <span>我是普通的文本</span>
  </my-slot-cpn>

  <my-slot-cpn>
    <my-button/>
  </my-slot-cpn>

  <my-slot-cpn/>

  <!-- 插入了很多内容 -->
  <my-slot-cpn>
    <h2>哈哈哈</h2>
    <button>我是按钮</button>
    <strong>i am strong</strong>
  </my-slot-cpn>
</template>

<script>
import MySlotCpn from "@/08_插槽的基本使用/MySlotCpn";
import MyButton from "@/08_插槽的基本使用/MyButton";

export default {
  name: "App",
  components: {
    MySlotCpn,
    MyButton
  }
}
</script>

<style scoped>

</style>
