function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x)
  console.log(point.y)
  if (point.z) {
    console.log(point.z)
  }
}

printPoint({x: 123, y: 234})
printPoint({x: 123, y: 234, z: 111})
