class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 访问器
  set name(newName) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

const p = new Person('why')
p.name = 'go ahead'
console.log(p.name)

export {}
