# CSS Modules

## 全局样式

```css
:global(选择器) {
	 color: red;
}
/* 或 */
:global {
	选择器1 {}
  选择器2 {}
}

@keyframes :global(xxx) {
	 width: 100px;
}
```

在 webpack 中可以设置，文件名中带 `.global.` 的 样式，不用 CSS Modules 处理:

```js
const excludeCssModuleRegex = /\.global\.css$/

{
  test: [excludeCssModuleRegex, /node_modules/],
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
  }),
  sideEffects: true,
},
```

## 组合

```css
.className {
  color: green;
  background: red;
}

.otherClassName {
  composes: className;
  color: yellow;
}

.otherClassName2 {
  composes: className from "./style.css";
}
```

## **文档**

- [官网](https://github.com/css-modules/css-modules)