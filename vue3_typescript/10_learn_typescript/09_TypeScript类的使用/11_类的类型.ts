class Person {
  name: string = '123'
  eating() {

  }
}

const person = new Person();

const p1: Person = {
  name: 'abc',
  eating() {
  }
}

console.log(p1.name)

export {}
