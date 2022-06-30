class Person {
  readonly name: string
  readonly friend?: Person

  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person('coder why', new Person('kobe'))
// p.name = '321'
console.log(p.name)
console.log(p.friend)

export {}
