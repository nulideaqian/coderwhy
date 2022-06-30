abstract class Shape {
  abstract getArea()
}

class Rectangle extends Shape {
  private _width: number
  private _height: number


  constructor(width: number, height: number) {
    super()
    this._width = width;
    this._height = height;
  }

  getArea() {
    return this._height * this._width
  }
}

class Circle extends Shape {
  private _r: number

  constructor(r: number) {
    super()
    this._r = r;
  }

  getArea() {
    return this._r * this._r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10);

function makeArea(shape: Shape) {
  console.log(shape.getArea())
}

makeArea(rectangle)
makeArea(circle)

export {}
