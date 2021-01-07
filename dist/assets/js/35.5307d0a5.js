(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{395:function(a,t,s){"use strict";s.r(t);var n=s(24),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[a._v("#")]),a._v(" Git")]),a._v(" "),s("h2",{attrs:{id:"获取远程分支并切换到该分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支并切换到该分支"}},[a._v("#")]),a._v(" 获取远程分支并切换到该分支")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -b branchName origin/branchName\n// 切换不成功，先拉下代码\n")])])]),s("h2",{attrs:{id:"获取远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支"}},[a._v("#")]),a._v(" 获取远程分支")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch origin branchName:branchName\n")])])]),s("h2",{attrs:{id:"删除本地分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支"}},[a._v("#")]),a._v(" 删除本地分支")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch -D branchName\n")])])]),s("h2",{attrs:{id:"强制回滚到某个版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制回滚到某个版本"}},[a._v("#")]),a._v(" 强制回滚到某个版本")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard commitId\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" ph\n")])])]),s("h2",{attrs:{id:"暂存和恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暂存和恢复"}},[a._v("#")]),a._v(" 暂存和恢复")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 暂存")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash pop "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 恢复")]),a._v("\n")])])]),s("h2",{attrs:{id:"用-rebase-的方式合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-rebase-的方式合并分支"}},[a._v("#")]),a._v(" "),s("strong",[a._v("用 rebase 的方式合并分支")])]),a._v(" "),s("p",[a._v("以 将 "),s("strong",[s("code",[a._v("next")]),a._v(" 合并到 "),s("code",[a._v("build/test")]),a._v(" 为例。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout build/test\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout next\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase build/test\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout build/test\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge next\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" ph\n")])])]),s("h2",{attrs:{id:"配置别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置别名"}},[a._v("#")]),a._v(" 配置别名")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.st status\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.pl "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pull --all --rebase'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用 rebase 来合并代码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.aa "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'add -A'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.ci commit\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.ca "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'commit -am'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.caa "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'commit -am \"just add\"'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.ph push\n")])])]),s("p",[s("strong",[a._v("— 完 —")])]),a._v(" "),s("p",[a._v("整理By "),s("a",{attrs:{href:"https://github.com/iamjoel",target:"_blank",rel:"noopener noreferrer"}},[a._v("Joel"),s("OutboundLink")],1),a._v("。微信号搜索: joel007。")])])}),[],!1,null,null,null);t.default=e.exports}}]);