import {ref, watch} from 'vue'

export default function (key, val) {

  const data = ref(val)

  if (val) {
    window.localStorage.setItem(key, JSON.stringify(val))
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key))
  }

  watch(data, (newVal) => {
    window.localStorage.setItem(key, JSON.stringify(newVal))
  })

  return data
}
