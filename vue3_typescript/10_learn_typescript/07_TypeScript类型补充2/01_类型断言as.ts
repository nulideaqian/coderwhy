const el = document.getElementById('why') as HTMLImageElement

el.src = 'url地址'

class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)

const message = 'Hello World'
const num: number = message as unknown as number
