# React
## 快速创建项目

```jsx
npx create-react-app 项目名称
npx create-react-app 项目名称 --template typescript
```
## Class 组件

```jsx
class Comp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.inputRef = React.createRef()
  }

  handleChange = (e) => {}

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} ref={this.inputRef}/>
      </div>
    )
  }
}

class PureComp extends React.PureComponent {}
```

### 生命周期

```jsx
componentWillMount() {} // 渲染前调用 
componentDidMount() {} // DOM Ready
componentWillReceiveProps(newProps) {} // Props 变化时调用
componentWillUpdate(prevProps, prevState) {} // Props 或 state 变化时调用
componentWillUnmount() {} // 组件从 DOM 中移除之前
```

### [PropTypes](https://react.docschina.org/docs/typechecking-with-proptypes.html#proptypes)

```jsx
import PropTypes from 'prop-types'
Comp.PropTypes = {
  optionalArray: PropTypes.array,
  requiredArray: PropTypes.array.isRequired, // .isRequired 确保一定有。
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  optionalNode: PropTypes.node, // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  optionalElement: PropTypes.element, // React 元素
  optionalElementType: PropTypes.elementType, // React 组件

  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ])
}
```

### 默认属性值

```jsx
Comp.defaultProps = {
  name: 'Joel',
  age: 18
}
```

## 函数组件

```jsx
function Comp(props) {
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    console.log('只执行一次')
  }, [])

  useEffect(() => {
    console.log('总是执行')
  })

  const handleChange = useCallback(e => {
  }, [])

  const inputRef = useRef(null)

  return (
    <div>
      <input type="text" onChange={handleChange} ref={inputRef}/>
    </div>
  )
}

const MemoComp = React.memo(Comp)
```

### useCallback 中用 useRef 获取最新值

```jsx
const listRef = useRef(list)

const setListWithRef = (newList) => {
  setList(newList)
  listRef.current = newList
}

const renderList = useCallback(() => {
  return (<List list={listRef.current} setList={setListWithRef} />)
}, [])
```

## 组件代码复用

### HOC - 高阶组件

```jsx
// 定义
function withName (Component) {
  return (props) => <Component {...props} name="Joel"/>
}

// 使用。用装饰器看起来更舒服。
const WithNameComp = withName(Comp)
```

### RenderProps

```jsx
// 定义
function Provider (props) {
  return <div>{props.children({name: 'Joel', ...props})}</div>
}

// 使用
<Provider>
  {(props) => {
    return <Comp name={props.name}/>
  }}
</Provider>
```

### 组合模式

```jsx
render() {
  const newChildren = React.Children.map(this.props.children, (child, index) => {
    if (child.type) {
      return React.cloneElement(child, {
        active: this.state.activeIndex === index, // 子组件
        onClick: () => this.setState({ activeIndex: index }),
      })
    }
    return child
  })
}
```

### Refs 转发(forwardRef)

```jsx
const Comp = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (<div ref={ref}></div>);
}

const Par = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const getCompWidth = () => compRef.current?.clientWidth || 0
	return (<Comp ref={compRef}/>)
}
```

## Context API
类组件

```jsx
const ctx = React.createContext()
const { Provider, Consumer } = ctx

<Provider value={{name: 'joel'}}>
  <Consumer>
    {ctx => ( // Provider 上 value 属性的值
      <Component
        {...props}
        name={ctx.name}
      />
    )}
  </Consumer>
</Provider>
```

函数组件

```html
const ctx = React.createContext()
const { Provider, Consumer } = ctx

<Provider value={{name: 'joel'}}>
  <Child />
</Provider>

function Child() {
  const nameCtx = useContext(ctx)
  return <div>{nameCtx.name}</div>
}
```

## Portals

```jsx
ReactDOM.createPortal(
  jsxEl, // 一般是 this.props.children
  targetEl // Portal 到哪个元素下。document.body
)
```

## 事件
### 停止冒泡到原生的事件
```jsx
<div onClick={e => e.nativeEvent.stopImmediatePropagation()}>...</div>
```

### 以捕获的方式绑定事件

`事件名Capture`。如

```html
<div onClickCapture={...} />
```

## 问题

### Can’t perform a react state update on an unmounted component

异步代码回调里改变状态，如果组件已经被卸载，会报这个错。

解决方案：设置状态前，判断组件是否已被卸载。

```jsx
const [isUnMount, setIsUnMount] = useState(false)

useEffect(async () => {
	const data = await fetchSth()
	isUnMount && setData(data)
	return () => {
		setIsUnMount(true)
	}
}, [])
```

用 [ahooks](https://ahooks.js.org/hooks/life-cycle/use-unmounted-ref) 的 API

```jsx
import { useUnmountedRef } from 'ahooks'

const unmountRef: { current: boolean } = useUnmountedRef()
unmountRef.current && setData(data)
```

## 项目脚手架: CPA
[文档](https://create-react-app.dev/)

```bash
npx create-react-app 项目名
# 创建 ts 项目
npx create-react-app 项目名 --template typescript
```

## 文档

- [React 文档](https://react.docschina.org/docs/getting-started.html)

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。