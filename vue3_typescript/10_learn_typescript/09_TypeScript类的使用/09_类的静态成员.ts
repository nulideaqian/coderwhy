// class Person {
//   name: string = ''
//   age: number = 12
// }
//
// const p = new Person()

class Student {
  static time: string = '20:00'

  static attendClass() {
    console.log('去学习~')
  }
}

console.log(Student.time)
Student.attendClass()

export {}
