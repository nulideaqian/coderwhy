class Person {
  protected name: string = '123'
}

class Student extends Person {
  getName() {
    return this.name
  }
}

const p = new Person()
const stu = new Student()
console.log(stu.getName())

export {}
