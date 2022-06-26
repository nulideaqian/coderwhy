function foo() {

}

type FooFnType = () => void
function bar(fn: FooFnType) {
  fn()
}

bar(foo)

// 2.
type AddFnType = (num1: number, num2: number) => void
const add: AddFnType = (num1: number, num2: number) => {
  return num1 + num2
}


