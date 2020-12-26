# Vue 2 常用写法

## 生命周期函数

```html
created: function(){},
mounted : function(){},
beforeDestroy: function(){},
destroyed: function(){}
```

## Slot

```html
<template>
	<!-- 子组件传递值给父组件 -->
	<slot a="1" b="msg"></slot>
	<slot name="foot"></slot>
</template>
```

```html
<Comp scope="data">
	<div>{{data}}: {a: 1, b: 'msg'}</div> 
	<div slot="foot">foot content</div>
</Comp>
```

## 输出 HTML

```html
<div v-html="raw_html"></div>
```

## 事件

### 阻止事件冒泡

```html
<button @事件名.stop="doSth">点击</button>
```

### 组织默认行为

```html
<button @事件名.prevent="doSth">点击</button>
```

### 给组件绑定原生事件

```html
<MyComp @事件名.native="doSth">
```

## 避免闪烁

```html
<div v-cloak>
  {{ message }}
</div>
```

## 文档

- [Vue 2 文档](https://cn.vuejs.org/v2/api/)
- [Vue 2 风格指南](https://cn.vuejs.org/v2/style-guide/)