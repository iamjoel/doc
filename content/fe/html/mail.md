# 邮件模板
Demo：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <div style="font-weight: bold;font-size: 16px;text-align: center;">HTML写 邮件模板注意点</div>
  <div>不同邮件客户端对 HTML 的支持性不同。邮件客户端的种类又多。outlook的不同版本，QQ 邮箱，GMail，163 等</div>

  <table style="margin-top: 20px; margin-bottom: 20px;background-color: #FFFBEB;padding: 10px;">
    <tr>
      <td>
        <div style="margin-top: 1.6rem;margin-bottom: 1.6rem;line-height: 1.5; font-size: 15px;font-weight: bold;">注意点</div>
      </td>
    </tr>
    <tr>
      <td valign="top">1</td>
      <td valign="top">
        用 table 布局。
        <div>1. 表格的私有属性：<span style="font-weight: bold;">width, height, bgcolor, background, align, valign</span></div>
        <div>2. 样式定义在 td 元素上，不要放在 tr 元素上。Gmail等邮件客户端会过滤tr 的属性。</div>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>在各个邮件客户端的标签： table, td, tr, div, span, a, img</td>
    </tr>
    <tr>
      <td>3</td>
      <td>不要用样式简写，在有的邮件客户端会不生效。简写比如: padding， font </td>
    </tr>
    <tr>
      <td>4</td>
      <td>对于img 标签，用width，height 属性来控制大小。用 style 控制无效。</td>
    </tr>
    <tr>
      <td>5</td>
      <td>颜色值要使用完整的6位的十六进制编码</td>
    </tr>
  </table>

  <div>链接：</div>
  <div>
    * <a href="https://juejin.cn/post/6903138530370715656" target="_blank">一文看懂前端怎么写HTML邮件模版</a>
  </div>
  <div>
    * <a href="https://zhuanlan.zhihu.com/p/89297007">HTML 文件在PC&移动端完美自适应布局的技巧</a>
  </div>
  <div>
    * <a href=https://www.campaignmonitor.com/css/grid/align-content/" target="_blank">各个邮件客户端对样式的兼容性</a>
  </div>
  <div>
    * <a href="https://css-tricks.com/using-css-in-html-emails-the-real-story/" target="_blank">Using CSS in HTML Emails: The Real Story</a>
  </div>
</body>
</html>
```