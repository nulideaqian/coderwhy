interface IPerson<T1 = string, T2 = number> {
  name: T1,
  age: T2
}

const p: IPerson<string, number> = {
  name: 'abc',
  age: 18
}

export {}
