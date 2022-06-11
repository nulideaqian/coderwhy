<script>
import {h} from 'vue'
import HelloWorld from "@/01_render函数的使用/HelloWorld";

export default {
  name: "App",
  render() {
    return h(HelloWorld, null, {
      default: props => h('span', props, 'app传到HelloWorld的内容')
    })
  }
}
</script>

<style scoped>

</style>
