function printID(id: number | string) {
  console.log(id)
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printID(123)
printID('abc')
