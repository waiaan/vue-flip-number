<template>
  <div id="app">
    <filp-number :value="value" :speed="700"></filp-number>
    <button @click="generate" style="margin-top:20px;">generate</button>
    <div style="margin-top:20px;">
      {{value}}
    </div>
    <button @click="add" style="margin-top:20px;">add</button>
    <button @click="abstract" style="margin-top:20px;">abstract</button>
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
      value: 0.0
    }
  },
  methods: {
    generate () {
      // this.value = (Math.random() * 100000).toFixed(2)
      this.value = (Math.random() * 10000).toFixed(2)
    },
    add () {
      this.value += 4
    },
    abstract () {
      this.value -= 4
    }
  }
}
</script>

<style>
#app {
  margin: 100px 200px;
}
</style>
