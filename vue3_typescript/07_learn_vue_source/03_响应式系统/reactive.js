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

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key, receiver) {
    },
    set(target, key, value, receiver) {
    }
  });
}

function watchEffect(effect) {
  activeEffect = effect
  dep.depend()
  activeEffect = null
}

const dep = new Dep()

let activeEffect = null

const info = reactive({counter: 100, name: '123'})
info.name = '666'

watchEffect(function () {
  console.log(info.counter * 2)
})
watchEffect(function () {
  console.log(info.counter * info.counter)
})

info.counter++
dep.notify()
