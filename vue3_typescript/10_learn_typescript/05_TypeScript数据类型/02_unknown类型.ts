function foo() {
  return 'abc'
}

function bar() {
  return 123
}

let flag = true
let reslut: unknown
if (flag) {
  reslut = foo()
} else {
  reslut = bar()
}

console.log(reslut)

export {}
