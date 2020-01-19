# vue-flip-number-card

a flip number card component for vue.

follow the lead of  [干货满满!如何优雅简洁地实现时钟翻牌器(支持JS/Vue/React)](https://juejin.im/post/5dd9490a6fb9a07a961d11e7)

## demo

![avatar](/demo.gif)

## usage

```html
<filp-number :value="value" :speed="700"></filp-number>
```
```js
import FilpNumber from '@/components/FlipNumber'
```

```js
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
}
```

 value:
 could be like '00000.00'、'0012' and so on for placeholder

 speed:
 could not be less than 600.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
