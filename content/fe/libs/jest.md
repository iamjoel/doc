# Jest

## 基础写法

```js
describe('fn', () => {
  test('should xxx if xxx', async () => {
	   expect(fn(...)).toBe(value) // 浅比较
		 expect(fn(...)).toEqual(obj) // 深比较。比较对象，数组内容时。
  })
})
```

## 回调被调用的测试

```js
const cb = jest.fn()
expect(cb).toHaveBeenCalledTimes(0) // 测试 cb 没变调用
expect(cb).toHaveBeenCalledTimes(5) // 测试 cb 被调用 5 次
expect(cb).toHaveBeenNthCalledWith(1, arg1, arg2, ... ) // 测试 cb 被调用时的参数值
```

## 文档

- [官网](https://jestjs.io/)