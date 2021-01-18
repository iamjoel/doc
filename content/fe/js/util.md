# JavaScript 工具方法
## 函数防抖(debounce)
```js
const onScroll = debounce(onScrollFn, 100)

function debounce(fn, delay) {
  return function () {
    let context = this
    let args = arguments
    clearTimeout(runId.id)
    fn.runId = setTimeout(function () {
        fun.call(context, args)
    }, delay)
  }
}
```

## 函数节流(throttle)
```js
const onSubmit = throttle(onSubmitFn, 1000)

function throttle(fun, delay) {
  let prev = Date.now()
  return function () {
    let context = this
    let args = arguments
    let now = Date.now()
    if (now > prev + delay) {
      fun.apply(context, args)
      prev = now
    }
  }
}
```

## 推荐阅读

- [1 LOC](https://1loc.dev/) JavaScript Utilities in single line of code