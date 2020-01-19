<template>
  <div class="flip-number-item">
    <div class="flip" :class="animationClass">
      <div class="digital front" :class="'number'+frontCount"></div>
      <div class="digital back" :class="'number'+backCount"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlipNumberItem',
  props: ['value', 'speed'],
  data () {
    return {
      frontCount: 0,
      backCount: this.value,
      animationClass: '',
      isFlipping: false
    }
  },
  watch: {
    value (newVal, oldVal) {
      if (newVal < oldVal) {
        this.flipUp(newVal, oldVal)
      } else if (newVal > oldVal) {
        this.flipDown(newVal, oldVal)
      }
    }
  },
  methods: {
    async flipDown (newVal, oldVal) {
      while (newVal > oldVal) {
        // console.log(new Date().toTimeString())
        await this.flipDownOne(oldVal)
        oldVal++
      }
    },
    async flipUp (newVal, oldVal) {
      while (newVal < oldVal) {
        await this.flipUpOne(oldVal)
        oldVal--
      }
    },
    async flipDownOne (num) {
      if (this.isFlipping) {
        return false
      }
      this.frontCount = num
      this.backCount = this.frontCount >= 9 ? 0 : (this.frontCount + 1)
      this.animationClass = 'down go'
      this.isFlipping = true
      await this.resetClass('down')
    },
    async flipUpOne (num) {
      if (this.isFlipping) {
        return false
      }
      this.frontCount = num
      this.backCount = this.frontCount <= 0 ? 9 : (this.frontCount - 1)
      this.animationClass = 'up go'
      this.isFlipping = true
      await this.resetClass('up')
    },
    resetClass (type) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.animationClass = type
          this.isFlipping = false
          this.frontCount = this.backCount
          setTimeout(() => {
            resolve()
          }, 0)
        }, this.speed)
      })
    }
  }
}
</script>
<style scoped>
.flip {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 100px;
  line-height: 100px;
  border: solid 1px #000;
  border-radius: 10px;
  background: #fff;
  font-size: 66px;
  color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: 'Helvetica Neue';
}

.flip .digital:before,
.flip .digital:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  background: #000;
  overflow: hidden;
  box-sizing: border-box;
}

.flip .digital:before {
  top: 0;
  bottom: 50%;
  border-radius: 10px 10px 0 0;
  border-bottom: solid 1px #666;
}

.flip .digital:after {
  top: 50%;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  line-height: 0;
}

/*向下翻*/
.flip.down .front:before {
  z-index: 3;
}

.flip.down .back:after {
  z-index: 2;
  transform-origin: 50% 0%;
  transform: perspective(160px) rotateX(180deg);
}

.flip.down .front:after,
.flip.down .back:before {
  z-index: 1;
}

.flip.down.go .front:before {
  transform-origin: 50% 100%;
  animation: frontFlipDown 0.3s ease-in-out both;
  box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
  backface-visibility: hidden;
}

.flip.down.go .back:after {
  animation: backFlipDown 0.3s ease-in-out both;
}

/*向上翻*/
.flip.up .front:after {
  z-index: 3;
}

.flip.up .back:before {
  z-index: 2;
  transform-origin: 50% 100%;
  transform: perspective(160px) rotateX(-180deg);
}

.flip.up .front:before,
.flip.up .back:after {
  z-index: 1;
}

.flip.up.go .front:after {
  transform-origin: 50% 0;
  animation: frontFlipUp 0.3s ease-in-out both;
  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
  backface-visibility: hidden;
}

.flip.up.go .back:before {
  animation: backFlipUp 0.3s ease-in-out both;
}

@keyframes frontFlipDown {
  0% {
    transform: perspective(160px) rotateX(0deg);
  }

  100% {
    transform: perspective(160px) rotateX(-180deg);
  }
}

@keyframes backFlipDown {
  0% {
    transform: perspective(160px) rotateX(180deg);
  }

  100% {
    transform: perspective(160px) rotateX(0deg);
  }
}

@keyframes frontFlipUp {
  0% {
    transform: perspective(160px) rotateX(0deg);
  }

  100% {
    transform: perspective(160px) rotateX(180deg);
  }
}

@keyframes backFlipUp {
  0% {
    transform: perspective(160px) rotateX(-180deg);
  }

  100% {
    transform: perspective(160px) rotateX(0deg);
  }
}

.flip .number0:before,
.flip .number0:after {
  content: '0';
}

.flip .number1:before,
.flip .number1:after {
  content: '1';
}

.flip .number2:before,
.flip .number2:after {
  content: '2';
}

.flip .number3:before,
.flip .number3:after {
  content: '3';
}

.flip .number4:before,
.flip .number4:after {
  content: '4';
}

.flip .number5:before,
.flip .number5:after {
  content: '5';
}

.flip .number6:before,
.flip .number6:after {
  content: '6';
}

.flip .number7:before,
.flip .number7:after {
  content: '7';
}

.flip .number8:before,
.flip .number8:after {
  content: '8';
}

.flip .number9:before,
.flip .number9:after {
  content: '9';
}
</style>
