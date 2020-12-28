# Scoped CSS

## 影响子组件的样式写法

```html
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

生成的样式

```css
.a[data-v-hash值] .b { /* ... */ }
```

## 文档

- [Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)