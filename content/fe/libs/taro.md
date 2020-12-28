# Taro

## 下拉刷新

加事件:

```jsx
onPullDownRefresh = () => {}
```

config 文件设置

```jsx
enablePullDownRefresh: true
```

停止下拉刷新

```jsx
Taro.stopPullDownRefresh()
```

::: tip

- `pullDown` 可以在模拟器中模拟触发。
- `scrollView` 的 `onRefresherPulling` 在模拟器中触发不了。

:::

## 预览文件

打开 doc，PPT，之类的文件。 `opendocumen` 前要先调用 `download`。

## 文档

- [官网](https://taro.jd.com/)