<script type="text/babel">
import HelloWorld from "@/02_jsx的使用/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      counter: 0
    }
  },
  render() {
    const increment = () => this.counter++
    const decrement = () => this.counter--
    return (
      <div>
        <h2>当前计数器: {this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <HelloWorld>
          {{default: () => <button>我是按钮</button>}}
        </HelloWorld>
      </div>
    )
  }
}
</script>

<style scoped>

</style>
