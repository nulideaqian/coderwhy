type IDType = number | string
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  }
}

printID('abc')

type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {

}
