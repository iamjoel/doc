# Lodash
[官网文档](https://lodash.com/docs/4.17.15)。

## 对象深度拷贝

```js
_.cloneDeep(obj)
```

## 深度比较内容

```js
_.isEqual(value, other)
```

## 防抖

```js
_.debounce(func, [wait=0])
```

## 节流

```js
_.throttle(func, [wait=0])
```

## 移除对象上的一些属性

```js
_.omit(object, [props])
const object = { 'a': 1, 'b': '2', 'c': 3 };
_.omit(object, ['a', 'c']);
```

## 选择对象上的一些属性

```js
_.pick(object, [props])
const object = { 'a': 1, 'b': '2', 'c': 3 };
_.pick(object, ['a', 'c']);
```

## 除去原数组中所有的假值元素

```js
_.compact(array)
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

## 生成全局唯一ID

```js
_.uniqueId([prefix=''])
_.uniqueId() // => 104
_.uniqueId('contact_') // => contact_105
```

## 生成随机数

```js
_.random([lower=0], [upper=1], [floating])
_.random(0, 5) // => 0 到 5 之间的整数
_.random(5) // => 0 到 5 之间的浮点数
```