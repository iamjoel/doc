# JavaScript 常用方法

## 数字

## 取小数

```jsx
// 最后一位数字做四舍五入的操作
3.1415.toFixed(2);// '3.14'
3.1455.toFixed(2);// '3.15'
3.1415.toFixed();// '3'
```

### 小数转整数

```jsx
Math.ceil(4.3) // 5。向上取整
Math.ceil(-4.3) // -4。向上取整
Math.floor(3.5) // 3。向下取整
Math.floor(-3.5) // -4。向下取整
Math.round(3.5) //4。 四舍五入。
parseInt(3.5) // 3。去小数部分。
parseInt(-3.5) // -3。去小数部分。
```

### 文件大小转化
```js
export const formatFileSize = fileSize => {
  if (!fileSize) {
    return 0
  }
  const units = ['B', 'KB', 'MB', 'GB']
  let res = parseFloat(fileSize)
  let unitIndex = 0
  while (res > 1024 && unitIndex < units.length - 1) {
    res = res / 1024
    unitIndex++
  }
  const fractionalPartLen = (res + '').split('.')[1] ? (res + '').split('.')[1].length : 0
  if (fractionalPartLen > 2) {
    res = res.toFixed(2)
  }
  return `${res}${units[unitIndex]}`
}
```

## 字符串

### substr

取子字符串。

```jsx
const str = 'abcde';
str.substr(1);// 返回 'bcde'
str.substr(1,3);// 返回 'bcd'
str.substr(0,3);// 返回 'abc'
```

### 转大写字母

```jsx
'aaa'.toUpperCase()
```

## 正则

### 创建

```jsx
new RegExp(pattern, modifiers) // pattern 中可以带变量
/pattern/modifiers
```

### 非贪婪模式

正则匹配默认是贪婪模式的，即前面的正则匹配尽可能多的。

```jsx
/(\d+)(\d+)/.exec('12345');//贪婪模式。结果["12345", "1234", "5"]
// 开启非贪婪模式,量词后面加"?"
/(\d+?)(\d+)/.exec('12345');//非贪婪模式。结果["12345", "1", "2345"]
```

### 常用正则

匹配中文: `[\u4e00-\u9fa5]+`

### 不捕获分组内容

括号开头加 `?:`。

### 零宽断言
| 写法        | 说明           |
| ------------ |-------------|
| (?=exp)      | 匹配exp前面的位置 |
| (?<=exp)     | 匹配exp后面的位置 |

### 工具

- [RegExr](https://regexr.com/): 正则测试工具。
- [Regulex](https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24): 正则可视化工具。

## 数组

### 头 & 尾 删除 & 插入

下面的方法都会修改数组

```jsx
const arr = [1, 2, 3]

arr.unshift(0) // 头部插入一个
arr.shift() // 头部删除一个
arr.push(4) 
arr.pop()// 尾部删除一个
```

### [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

数组中添加或者删除元素。

```jsx
// splice(开始下标, 删除个数，插入元素(可以多个)）
var arr = [1, 2, 3, 4];
arr.splice(1, 2);// [2,3]
arr;// [1,4]
arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b', 'c');// [2,3]
arr;// [1, "a", "b", "c", 4]
```

### [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

选择数组中的一部分。

```jsx
// slice(开始下标, 结束下标（可选，默认为数组长度）)
['a', 'b', 'c', 'd'].slice(1);// ["b", "c", "d"]
['a', 'b', 'c', 'd'].slice(1, 2);// ["b"]
['a', 'b', 'c', 'd'].slice(1, 3);// ["b", "c"]
```

## 导出导入的值

```jsx
// a, b 在当前文件中不可用
export {
  a,
  default as b
} from 某文件

// a, b 在当前页面中可用
import { 
  a,
  default as b 
} from 某文件
export { a, b }
let c = 3
export {c}
```

## Webpack 异步加载模块

```tsx
require.ensure([], function () {
  let A = require('./A.js')
  alert(A)
}, 'chunk Name。可选')
```

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。