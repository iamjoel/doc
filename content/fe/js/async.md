# 异步处理
## async & await

```jsx
async function handler() {
  try {
    const res = await asyncFn()
  } catch (e) {
    // 错误处理
  }
}
```

## Promise

```jsx
asyncFn().then(成功回调，错误处理)
asyncFn().then(成功回调).catch(错误处理)
```

## 回调

```jsx
asyncFn(成功回调，错误处理)
```

## 异步**串行处理**

### async & await

```jsx
await asyncFn1()
await asyncFn2()
await asyncFn3()
```

### Promise

```jsx
asyncFn1()
  .then(() => asyncFn2())
  .then(() => asyncFn3())
```

## 异步**并行处理**

### 所有异步都完成

```jsx
// 所有异步都成功。
await Promise.all([asyncFn1(), asyncFn2(), asyncFn3()])
await Promise.all(asyncFnArr.map(asyncFn => asyncFn()))

// 有 reject 也能进最后的成功
Promise.allSettled([
  Promise.reject(),
  Promise.resolve(1),
  Promise.resolve(2)
]).then(res => console.log(res.filter(item => item.status !== 'rejected')))
```

### 只要一个异步完成

```jsx
await Promise.race([asyncFn1(), asyncFn2(), asyncFn3()])
```

使用场景：给异步处理时间设上限。如

```jsx
await Promise.race([
  asyncFn1,
  new Promise(resolve, reject => 
    setTimeout(() => reject(new Error('asyncFn1 timeout')), 5000)
  )
])
```

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。