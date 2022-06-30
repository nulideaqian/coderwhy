class Point<T> {
  x: T
  y: T
  z: T


  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const p = new Point<string>('1', '2', '3')
