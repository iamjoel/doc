# HTML

## 响应式 Meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## 发送邮件链接的写法

```html
<a href="mailto:someone@yoursite.com">Email Us</a>
<!-- 带主题的 -->
<a href="mailto:someone@yoursite.com?subject=Mail from Our Site">Email Us</a>
```

## dowoload

`a`标签的 `download` 属性。指示浏览器下载 URL 而不是导航到它，因此将提示用户将其保存为本地文件。

::: tip

- 此属性仅适用于[同源 URL](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)。
- 尽管 HTTP URL 需要位于同一源中，但是可以使用 [blob: URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL.createObjectURL) 和 [data: URL](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) ，以方便用户下载使用 JavaScript 生成的内容（例如使用在线绘图 Web 应用程序创建的照片）。

:::

## 关闭输入框自动补全

```html
<input type="text" autocomplete="off"/>
```

## 让元素可编辑的属性

加 `contentEditable` 属性。编辑内容，默认是支持粘贴富文本的。只支持纯文本: `contenteditable="plaintext-only"`。

## 更多

- [HTML Snippets](https://css-tricks.com/snippets/html/)

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。