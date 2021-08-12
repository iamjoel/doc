# CSS 工具类

## 长文本处理

### 单行文本超出显示省略号

```css
.ellipses{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

更多场景: [Handling Long Words and URLs (Forcing Breaks, Hyphenation, Ellipsis, etc)](https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/)

### 多行文本超出显示省略号

```css
.text-ellipsis-multi {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 两行 */
}
```

兼容性比较差。建议用 JS 库来做。

## 单词强制换行
```css
.word-break {
  word-wrap: break-word;
  word-break: break-all;
}
```
父元素如果有设置 white-space: nowrap ，子元素要换行，必须要设置： white-space: normal。

## 用阴影来突出区块

```css
.box {
  box-shadow: 0 3px 12px 0 rgba(0,0,0,.12), 0 1px 2px 0 rgba(0,0,0,.08);
}
```

## 文字两端对其

```css
.t-ly-j {
  text-align: justify;
}
.t-ly-j:after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 0;
}
```

## 禁止选中文本

```css
.text-no-select {
  user-select:none;
}
```

## 字体

### 常用字体

```css
/* 雅黑 "STXihei" 是微软雅黑在Mac平台上的对应字体 */
.ff-yahei{
	font-family: tahoma,arial,"STXihei","Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", "宋体", SimSun;
}
/* 普通黑体 */
.ff-hei{
    font-family: tahoma,arial,"STXihei",SimHei,"Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", "宋体", SimSun;
}
/* 宋体 */
.ff-song{
	font-family: tahoma,arial,"宋体", SimSun;
}
```

### Web 字体

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}

body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```

### 十字 & 关闭(×)

关闭(×)就是十字转 45 度。

```scss
.cross {
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 2px;
    border-radius: 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    background: rgb(32, 45, 64);
  }

  &::before {
    transform: translate(-50%, -50%);
    // 关闭按钮
    // transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
    // 关闭按钮
    // transform: translate(-50%, -50%) rotate(-45deg);
  }
}
```

## 常用设备的媒体查询

见 [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

## 常见光标样式

```css
.cursor-p {
  cursor: pointer;
}

.cursor-na {
  cursor: not-allowed;
}
```

## [解决 ios 的滚动生涩的问题](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)

```css
.smooth-scroll {
  -webkit-overflow-scrolling: touch;
}
```

## 动画
### 呼吸灯效果
```css
.breathing-anim {
  animation: breathing 1s ease-out infinite normal;
}

@keyframes breathing {
  0% {
      opacity: .5;
  }

  25% {
      opacity: .5;
  }

  60% {
      opacity: 1;
  }

  to {
      opacity: .5;
  }
}
```

### 无限转圈
```css
.running-anim {
  transform-origin: 9px 9px;
  animation: rotate-self 1s linear infinite;
}

@keyframes rotate-self {
  0% {
      transform: rotate(0) ;
  }

  to {
      transform: rotate(1turn);
  }
}
```

### 平滑滚动
```css
.smooth-scroll {
  scroll-behavior: smooth;
}
```

## 文档

- [CSS Snippets](https://css-tricks.com/snippets/css/)

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。