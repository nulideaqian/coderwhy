<script>
import {ref, h} from 'vue'

export default {
  name: "App",
  setup() {
    const counter = ref(0)
    return () => {
      return h('div', {class: 'app'}, [
        h('h2', null, `当前记数：${counter.value}`),
        h('button', {
          onClick: () => counter.value++
        }, '+1'),
        h('button', {
          onClick: () => counter.value--
        }, '-1')
      ])
    }
  }
}
</script>

<style scoped>

</style>
