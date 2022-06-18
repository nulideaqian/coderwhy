<template>
  <div>
    <h2>{{ homeCounter }}</h2>
    <h2>{{ doubleHomeCounter }}</h2>
    <button @click="increment">home+1</button>
    <button @click="incrementAction">homeAction+1</button>
    <hr>
  </div>
</template>

<script>
import { createNamespacedHelpers} from 'vuex'
import {useState, useGetters} from '../hooks/index'

const { mapMutations, mapActions} = createNamespacedHelpers('home')

export default {
  setup() {
    const mutations = mapMutations(['increment'])
    const actions = mapActions(['incrementAction'])

    return {
      ...useState('home', ['homeCounter']),
      ...useGetters('home', ['doubleHomeCounter']),
      ...mutations,
      ...actions
    }
  },
  methods: {
    // ...mapMutations({
    //   increment: 'home/increment'
    // }),
    // ...mapActions({
    //   incrementAction: 'home/incrementAction'
    // })
    // ...mapMutations('home', ['increment']),
    // ...mapActions('home', ['incrementAction']),
    // ...mapMutations(['increment']),
    // ...mapActions(['incrementAction']),

  },
  computed: {
    // ...mapState({
    //   homeCounter: state => state.homeCounter
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: 'doubleHomeCounter'
    // })
  }
}
</script>

<style scoped>

</style>
