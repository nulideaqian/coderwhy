interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

class Animal {

}

class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log('fish swimming')
  }

  eating() {
    console.log('fish eating')
  }
}

class Person implements ISwim {
  swimming() {
    console.log('people swimming')
  }
}

function swimAction(swimable: ISwim) {
  swimable.swimming()
}

swimAction(new Fish())
swimAction(new Person())

export {}
