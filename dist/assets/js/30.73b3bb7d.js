(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{388:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),s("h2",{attrs:{id:"响应式-meta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式-meta"}},[t._v("#")]),t._v(" 响应式 Meta")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"发送邮件链接的写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送邮件链接的写法"}},[t._v("#")]),t._v(" 发送邮件链接的写法")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mailto:someone@yoursite.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Email Us"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 邮件主题 --\x3e")]),t._v('\n<a href={mailto:...?subject=`${encodeURIComponent(主题)}`">Email Us'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 邮件内容 --\x3e")]),t._v("\n<a href={mailto:?body=`${encodeURIComponent('姓名: \\n诉求: \\n')}`}>Email Us"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"下载文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载文件"}},[t._v("#")]),t._v(" 下载文件")]),t._v(" "),s("p",[s("code",[t._v("a")]),t._v("标签的 "),s("code",[t._v("download")]),t._v(" 属性。指示浏览器下载 URL 而不是导航到它，因此将提示用户将其保存为本地文件。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("此属性仅适用于"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("同源 URL"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("li",[t._v("尽管 HTTP URL 需要位于同一源中，但是可以使用 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URL.createObjectURL",target:"_blank",rel:"noopener noreferrer"}},[t._v("blob: URL"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs",target:"_blank",rel:"noopener noreferrer"}},[t._v("data: URL"),s("OutboundLink")],1),t._v(" ，以方便用户下载使用 JavaScript 生成的内容（例如使用在线绘图 Web 应用程序创建的照片）。")])])]),t._v(" "),s("h2",{attrs:{id:"关闭输入框自动补全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭输入框自动补全"}},[t._v("#")]),t._v(" 关闭输入框自动补全")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autocomplete")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"关闭自动填充密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭自动填充密码"}},[t._v("#")]),t._v(" 关闭自动填充密码")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/password --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autocomplete")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("current-password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"让元素可编辑的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#让元素可编辑的属性"}},[t._v("#")]),t._v(" 让元素可编辑的属性")]),t._v(" "),s("p",[t._v("加 "),s("code",[t._v("contentEditable")]),t._v(" 属性。编辑内容，默认是支持粘贴富文本的。只支持纯文本: "),s("code",[t._v('contenteditable="plaintext-only"')]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"站位图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站位图"}},[t._v("#")]),t._v(" 站位图")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("//iph.href.lu/335x200?text=文字\n")])])]),s("h2",{attrs:{id:"更多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://css-tricks.com/snippets/html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Snippets"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("— 完 —")])]),t._v(" "),s("p",[t._v("整理By "),s("a",{attrs:{href:"https://github.com/iamjoel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joel"),s("OutboundLink")],1),t._v("。微信号搜索: joel007。")])])}),[],!1,null,null,null);a.default=n.exports}}]);