<template>
  <div>
    <!--    <child-cpn>-->
    <!--      <button>哈哈哈</button>-->
    <!--    </child-cpn>-->
    <show-names :names="names">
      <template v-slot="slotProps">
        <button>{{ slotProps.item }}</button>
      </template>
    </show-names>

    <show-names :names="names" v-slot="slotProps">
      <button>{{ slotProps.item }}</button>
    </show-names>
  </div>
</template>

<script>
import ChildCpn from "@/10_作用域插槽使用/ChildCpn";
import ShowNames from "@/10_作用域插槽使用/ShowNames";

export default {
  name: "App",
  components: {
    ChildCpn,
    ShowNames
  },
  data() {
    return {
      names: ['why', 'kobe', 'james', 'curry']
    }
  }
}
</script>

<style scoped>

</style>
