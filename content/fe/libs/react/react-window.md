# react window
[官网](https://github.com/bvaughn/react-window)。控制宽高的包: [react-virtualized-auto-sizer](https://www.npmjs.com/package/react-virtualized-auto-sizer)。

## VariableSizeList 改变 item 高度

```jsx
this.listRef = React.createRef()

<VariableSizeList
  ref={this.listRef}
>...</VariableSizeList

// item 高度变化时
this.listRef.current.resetAfterIndex(0, false)
```