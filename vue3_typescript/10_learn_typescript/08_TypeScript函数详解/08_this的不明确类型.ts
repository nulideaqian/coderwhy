type ThisType = {name: string}

function eating(this: ThisType) {
  console.log(this.name + ' eating')
}

const info = {
  name: 'why',
  eating: eating
}

info.eating()

export {}
