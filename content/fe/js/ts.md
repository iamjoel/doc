# TypeScript 常见写法

## 常见 JavaScript 类型
```ts
const isGood: boolean = true
const num: number = 3
const str: string = 'str'

const arr: number[] = [1, 2, 3]
const strArr: string[] = ['a', 'b']

const obj: {name: string} = {name: 'Joel'}
const notCertainObj: {[key: string]: any} = {name: 'Joel', age: 27}
const obj2: Record<string, any> = {name: 'Joel', age: 27}

const nul: null = null
const und: undefined = undefined

let anyVal: any = 3

onst timeId: NodeJS.Timer = setInterval(fn, 1000)
clearInterval(Number(timeId)) // 不转会报错。

Promise<T> // Promise
```

## DOM 相关类型
### 元素
```ts
const el:HTMLElement = document.querySelector('.el')
const divEl:HTMLDivElement = document.querySelector('div')
const inputEl:HTMLInputElement = document.querySelector('input')
```

### 事件
```ts
onClick = (event: Event) => {...}
```

### CSS
```ts
CSSStyleDeclaration
```

## React 相关类型
```ts
JSX.Element // 元素
React.ComponentType // 组件类型 
React.RefObject<HTMLDivElement> // ref

// 事件
React.SyntheticEvent<EventTarget> // 事件
React.KeyboardEvent<HTMLInputElement> // 键盘事件
React.MouseEvent<HTMLElement> // 鼠标事件
```

## 枚举
```ts
enum week {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday = 0,
}

enum payType {
  wechat = '微信支付',
  ali = '支付宝'
}
```

## interface
```ts
interface Label {
  name: string
  size: 'sm' | 'md' | 'lg'
  des?: () => string
}

interface NeedPayLabel extends Label {
	price: number
}
```

## type
```ts
type BtnSize = 'sm' | 'md' | 'lg'

type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}
```

## 工具泛型
### Partial \<T>
将传入的属性变为可选项。

### Omit \<T, K>
将传入的属性中剔除某些属性。如

```ts
Omit<{
	name: string,
	age: number, 
	des: string
}, 'name' | 'age'> // -> { des: string }
```

### Pick \<T, K>
将传入的属性中选择某些属性。

### Readonly \<T>
将传入的属性变为只读选项。

## 忽略 Lint
```ts
// @ts-ignore
// tslint:disable-next-line
```

**— 完 —**

整理By[Joel](https://github.com/iamjoel)。微信号搜索: joel007。