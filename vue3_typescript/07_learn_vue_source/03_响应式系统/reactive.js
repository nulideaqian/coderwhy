class Dep {
  constructor() {
    this.subscriber = new Set()
  }

  depend() {
    if (activeEffect) {
      this.subscriber.add(activeEffect)
    }
  }

  notify() {
    this.subscriber.forEach(effect => {
      effect()
    })
  }
}

function watchEffect(effect) {
  activeEffect = effect
  dep.depend()
  activeEffect = null
}

const dep = new Dep()

let activeEffect = null

const info = {counter: 100}

watchEffect(function () {
  console.log(info.counter * 2)
})
watchEffect(function () {
  console.log(info.counter * info.counter)
})

info.counter++
dep.notify()
