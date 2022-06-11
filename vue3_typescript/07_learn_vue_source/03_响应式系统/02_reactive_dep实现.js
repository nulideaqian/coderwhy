class Dep {
  constructor() {
    this.subscriber = new Set()
  }

  addEffect(effect) {
    this.subscriber.add(effect)
  }

  notify() {
    this.subscriber.forEach(effect => {
      effect()
    })
  }
}

const dep = new Dep()

const info = {counter: 100}

function doubleCounter() {
  console.log(info.counter * 2)
}

function powCounter() {
  console.log(info.counter * info.counter)
}

dep.addEffect(doubleCounter)
dep.addEffect(powCounter)

info.counter++
dep.notify()
