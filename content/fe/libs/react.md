# React

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
        <input type="text" onChange={handleChange} ref={inputRef}/>
      </div>
    )
  }
}

class PureComp extends React.PureComponent {}
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

## 生命周期

```jsx
componentWillMount() {} // 渲染前调用 
componentDidMount() {} // DOM Ready
componentWillReceiveProps(newProps) {} // Props 变化时调用
componentWillUpdate(prevProps, prevState) {} // Props 或 state 变化时调用
componentWillUnmount() {} // 组件从 DOM 中移除之前
```

## [PropTypes](https://react.docschina.org/docs/typechecking-with-proptypes.html#proptypes)

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

## 默认属性值

```jsx
Comp.defaultProps = {
  name: 'Joel',
  age: 18
}
```

## Portals

```jsx
ReactDOM.createPortal(
  jsxEl, // 一般是 this.props.children
  targetEl // Portal 到哪个元素下。document.body
)
```

## 项目脚手架: CPA
```js
npx create-react-app 项目名
```

## 文档

- [React 文档](https://react.docschina.org/docs/getting-started.html)

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。