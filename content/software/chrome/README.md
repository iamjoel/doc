# Chrome
## 禁止chrome浏览器 http 自动转成 https

1. 地址栏中输入 chrome://net-internals/#hsts
2. 在 Delete domain security policies 中输入项目的域名，并 Delete 删除
3. 可以在 Query domain 测试是否删除成功

## 截图

截图支持指定区域，指定节点，当前页面，完整页面。步骤

1. 打开开发者工具。两种方式
    1. 命令行: ⌘Command + ⌥Option + I（Windows 为 F12）
    2. 右击选择：审查元素
2. 呼出截图命令: ⌘Command + ⇧Shift + P（Windows 为 Ctrl + Shift + P），输入 screen。

![](./capture.png)

## Chrome 94 后导致加载 http 资源报跨域的错误

解决方案：

1. chrome://flags
2. 搜索 Block insecure private network requests, 然后 disabled