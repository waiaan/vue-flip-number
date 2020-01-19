<template>
  <div class="flip-number">
    <template v-for="(item, index) in numbersSplitted">
      <template v-if="typeof(item)==='number'">
        <flip-number-item :value="item" :speed="speed" class="loop-item" :key="index"></flip-number-item>
      </template>
      <template v-else>
        <div class="loop-item sign" :key="index">{{item}}</div>
      </template>
    </template>
  </div>
</template>
<script>
import FlipNumberItem from './FlipNumberItem'

export default {
  name: 'FlipNumber',
  components: {
    FlipNumberItem
  },
  props: {
    value: {
      type: String,
      required: true,
      default: '0'
    },
    speed: {
      type: [Number, String],
      default: 600
    }
  },
  data () {
    let _speed = this.speed * 1
    if (isNaN(_speed)) {
      console.error('the prop speed is not a number')
      _speed = 600
    } else {
      _speed = _speed < 600 ? 600 : _speed
    }
    return {
      numbersSplitted: [],
      interval: _speed
    }
  },
  created () {
    this.splitValue()
  },
  watch: {
    value () {
      this.splitValue()
    }
  },
  methods: {
    splitValue () {
      this.numbersSplitted = []
      if (isNaN(Number(this.value))) {
        return console.error('the prop must be a number')
      }
      const valueSplittedArr = this.value.toString().split('')
      for (let i = 0; i < valueSplittedArr.length; i++) {
        let _val = valueSplittedArr[i]
        if (isNaN(Number(_val))) {
          this.numbersSplitted.push(_val)
        } else {
          this.numbersSplitted.push(Number(_val))
        }
      }
    }
  }
}
</script>
<style scoped>
.loop-item {
  display: inline-block;
}
</style>
