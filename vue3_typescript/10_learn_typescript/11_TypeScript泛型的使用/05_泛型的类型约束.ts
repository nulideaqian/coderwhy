interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length
}

getLength('123')
getLength(['abc', 'cba'])
getLength({length: 100})

export {}
