class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('eating')
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age);
    this.sno = sno
  }

  studying() {
    console.log('studying')
  }

  eating() {
    super.eating()
    console.log('stu eating')
  }
}

const stu = new Student('coderwhy', 18, 666)
console.log(stu.name)
console.log(stu.age)
console.log(stu.sno)
stu.eating()

export {}
