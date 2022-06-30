interface IPerson {
  name: string,
  age: number,
  height: number
}

const info = {
  name: 'why',
  age: 18,
  height: 1.99,
  address: '广州市'
}

const p: IPerson = info

console.log(info)
console.log(p)

export {}
