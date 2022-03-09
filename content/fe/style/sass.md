# Sass

## 解决文件中有中文报错

文件的代码第一行加如下内容：

```scss
@charset 'utf-8';
```

## 变量

```scss
@import 'var.scss'
$primary-color: #333;
body {
  color: $primary-color;
	font-size: $font-size; // 会去 var.scss 中找
}
```

## 混入(Mixins)

```scss
// 定义
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

.wrap {
  @include clearfix;// 使用
}

// 带参数
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}

.block1{
  @include size(100px);
}

.block2{
  @include size(100px, 200px);
}
```

## 扩展 Extend

扩展和混入比较类似，不同点是，扩展不支持参数。

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
}

%border-box {
  box-sizing: border-box;
}

.success {
  @extend %border-box;
  @extend .message;
  border-color: #0f0;
}

.error {
  @extend %border-box;
  @extend .message;
  border-color: #00f;
}
```

## 插值

如果想要在选择器或属性上用变量,必须使用插值，否则会报错。

```scss
$sel: '.a';
$attr: width;
#{$sel}{
  color: #f00;
  #{$attr}: 100px;
}
```

## 条件

```scss
$isCool: true;
@if $isCool {
  .is-Cool{
    color: #fff;
  }
}

@if not $isCool {
} @else {
   .notCool{
    color: #000;
  }
}
```

## 循环
### 遍历对象
```scss
$map: ('a': #f00, 'b': #0f0, 'c': #00f);
@each $key, $value in $map {
  .section-#{$key} {
    background-color: $value;
  }
}
```

### 循环固定次数
```scss
@for $i from 1 through 20 {
    .list-col#{$i} {
        .card {
            width: calc(100% / #{$i} - 16px * (#{$i} - 1));
            &:nth-child(#{$i}n) {
                margin-right: 0;
            }
        }
    }
}
```

## 数组操作

```scss
// 数组的元素可以由空格或逗号分割。
$list: 10px 20px 10px;
nth($list, 2); // 20px。取列表中的第 n 个元素，下标从 1 开始。
$list2: 10,30,50;
list-separator($list2);//comma（逗号）。 数组的分隔符。
```

## **在命令行输出调试信息**

```scss
@debug info
```

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。