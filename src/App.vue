<template>
  <div id="app">
    <filp-number :value="value" :speed="400"></filp-number>
    <button @click="generate">generate</button>
  </div>
</template>

<script>
import FilpNumber from '@/components/FlipNumber'

export default {
  name: 'app',
  components: {
    FilpNumber
  },
  data () {
    return {
      value: 115246.10
    }
  },
  methods: {
    generate () {
      this.value = (Math.random() * 100000).toFixed(2)
    }
  }
}
</script>

<style>
</style>
