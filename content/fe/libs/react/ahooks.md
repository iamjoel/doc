# ahooks
[官方文档](https://ahooks.js.org/)。

## useUnmount & useUnmountedRef & useSafeState

常用来防止组件 unmount 后，仍然去改 state，导致内存泄露。

```jsx
useUnmount(() => {
  message.info('unmount');
})

const unmountRef: { current: boolean } = useUnmountedRef();
const doSth = async () => {
  await fetchSth();// 一些异步
  !unmountRef.current && setText('I am unmounted');
}

const [value, setValue] = useSafeState<string>()
const doSth2 = async () => {
  await fetchSth();// 一些异步
  setValue('I am unmounted'); // unmount 后，不会执行。
}
```

## useDebounce

防抖。

```jsx
const [value, setValue] = useState<string>();
const debouncedValue = useDebounce(value, { wait: 500 });
useEffect(() => {/* doSth */}, [debouncedValue])
return <input onChange={() => {(e) => setValue(e.target.value)}} />
```

## usePrevious

```jsx
const [count, setCount] = useState(0)
const previous = usePrevious(count)
```

## useEventListener

优雅使用 addEventListener 的 Hook。内部做了解绑事件。

```jsx
const ref = useRef();
useEventListener('click', clickHandler, { target: ref });
return <button ref={ref} type="button">...</button>
```

## useClickAway

优雅的管理目标元素外点击事件。一般处理点击元素外侧，元素消失。

```jsx
import { useClickAway } from 'ahooks'
const ref = useRef<HTMLSpanElement>();
useClickAway(() => {
  // doSth
}, ref);

return <span ref={ref}>...</span>
```

## useHover

追踪 dom 元素是否有鼠标悬停。

```jsx
const ref = useRef();
const isHovering = useHover(ref);
return <div ref={ref}>{isHovering ? 'hover' : 'leaveHover'}</div>;
```

## useSetState

与 class 组件的 this.setState 基本一致。

```jsx
const [state, setState] = useSetState<State>({
  hello: '',
  count: 0,
})

setState({ hello: 'world' })
setState((prev) => ({ count: prev.count + 1 }))
```

## useLocalStorageState & useSessionStorageState

将状态持久化存储在 localStorage 中的 Hook 。

```jsx
const [message, setMessage] = useLocalStorageState('user-message', 'Hello~')
```

## useWhyDidYouUpdate

帮助开发者排查是什么改变导致了组件的 rerender。

```jsx
const [randomNum, setRandomNum] = useState(Math.random());
useWhyDidYouUpdate('useWhyDidYouUpdateComponent', { ...props, randomNum })
```

## 其他

- [useHistoryTravel](https://ahooks.js.org/zh-CN/hooks/state/use-history-travel): 优雅的管理状态变化历史，可以快速在状态变化历史中穿梭 - 前进跟后退。
- [useLockFn](https://ahooks.js.org/zh-CN/hooks/advanced/use-lock-fn): 用于给一个异步函数增加竞态锁，防止并发执行。
- [useReactive](https://ahooks.js.org/zh-CN/hooks/advanced/use-reactive): 提供一种数据响应式的操作体验,定义数据状态不需要写useState , 直接修改属性即可刷新视图。