import {computed} from 'vue'
import {mapState, useStore, mapGetters, createNamespacedHelpers} from 'vuex'

export function useState(moduleName, keys) {
  let mapperFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  }
  return useMapper(keys, mapperFn)
}

export function useGetters(moduleName, keys) {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  }
  return useMapper(keys, mapperFn)
}

function useMapper(mapper, vuexFn) {
  const store = useStore()
  const mapGettersFns = vuexFn(mapper)
  const result = {}
  Object.keys(mapGettersFns).forEach(fnKey => {
    const fn = mapGettersFns[fnKey].bind({$store: store})
    result[fnKey] = computed(fn)
  })
  return result
}
