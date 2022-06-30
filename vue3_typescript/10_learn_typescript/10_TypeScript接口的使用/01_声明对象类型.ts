// type InfoType = {name: string, age: number}

interface IInfoType {
  readonly name: string
  age?: number
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: 'why',
  age: 18,
  friend: {
    name: 'kobe'
  }
}

console.log(info.friend?.name)
