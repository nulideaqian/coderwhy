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

function watchEffect(effect) {
  dep.addEffect(doubleCounter)
  dep.addEffect(powCounter)
}

const dep = new Dep()

const info = {counter: 100}

watchEffect(function () {
  console.log(info.counter * 2)
})
watchEffect(function () {
  console.log(info.counter * info.counter)
})

info.counter++
dep.notify()
