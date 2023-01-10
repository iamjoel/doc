(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{422:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[a._v("#")]),a._v(" Git")]),a._v(" "),s("h2",{attrs:{id:"获取远程分支并切换到该分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支并切换到该分支"}},[a._v("#")]),a._v(" 获取远程分支并切换到该分支")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -b branchName origin/branchName\n// 切换不成功，先拉下代码\n")])])]),s("h2",{attrs:{id:"获取远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支"}},[a._v("#")]),a._v(" 获取远程分支")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch origin branchName:branchName\n")])])]),s("h2",{attrs:{id:"删除本地分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支"}},[a._v("#")]),a._v(" 删除本地分支")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch -D branchName\n")])])]),s("h2",{attrs:{id:"强制回滚到某个版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制回滚到某个版本"}},[a._v("#")]),a._v(" 强制回滚到某个版本")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard commitId\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" ph -f\n")])])]),s("h2",{attrs:{id:"暂存和恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暂存和恢复"}},[a._v("#")]),a._v(" 暂存和恢复")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 暂存")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash pop "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 恢复")]),a._v("\n")])])]),s("h2",{attrs:{id:"用-rebase-的方式合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-rebase-的方式合并分支"}},[a._v("#")]),a._v(" "),s("strong",[a._v("用 rebase 的方式合并分支")])]),a._v(" "),s("p",[a._v("以 master 为基，把 "),s("code",[a._v("master")]),a._v(" "),s("strong",[a._v("合并到 "),s("code",[a._v("feature/a")]),a._v(" 为例。和 merge 的命令类似:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout **feature/a**\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push --force-with-lease\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 自己开发的分支，可以这么做。rebase 改了提交顺序。本地分支和远程分支不一样了。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 否则，git pull 来合并吧。")]),a._v("\n")])])]),s("h2",{attrs:{id:"将多次-commit-合并成一次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将多次-commit-合并成一次"}},[a._v("#")]),a._v(" 将多次 Commit 合并成一次")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1 rebase")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase -i commitId "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 要 合并 的前一次。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# git rebase -i HEAD~3 # 最后个数字是合并几次。")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2 编辑内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2.1 将第一个 commitId 前的 pick 改成 r")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2.2 将其他的 commitId 前的 pick 改成 f")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 3 修改提交信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2 结束后，会出现编辑器来改提交信息。")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 4 强推")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push --force-with-lease "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rebase 改了提交顺序。本地分支和远程分支不一样了。")]),a._v("\n")])])]),s("h2",{attrs:{id:"合并分支时-将多次-commit-合并成一次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并分支时-将多次-commit-合并成一次"}},[a._v("#")]),a._v(" 合并分支时，将多次 Commit 合并成一次")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge --squash 分支名\n")])])]),s("p",[a._v("其他分支合并策略: "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/28137908",target:"_blank",rel:"noopener noreferrer"}},[a._v("图解4种git合并分支方法"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"合并其他分支的某次提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并其他分支的某次提交"}},[a._v("#")]),a._v(" 合并其他分支的某次提交")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick commitID\n")])])]),s("h2",{attrs:{id:"提交信息前缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交信息前缀"}},[a._v("#")]),a._v(" 提交信息前缀")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("feat")]),a._v(": new feature for the user, not a new feature for build script")]),a._v(" "),s("li",[s("code",[a._v("fix")]),a._v(": bug fix for the user, not a fix to a build script")]),a._v(" "),s("li",[s("code",[a._v("docs")]),a._v(": changes to the documentation")]),a._v(" "),s("li",[s("code",[a._v("style")]),a._v(": formatting, missing semi colons, etc; no production code change")]),a._v(" "),s("li",[s("code",[a._v("refactor")]),a._v(": refactoring production code, eg. renaming a variable")]),a._v(" "),s("li",[s("code",[a._v("perf")]),a._v(":  add code for performance test")]),a._v(" "),s("li",[s("code",[a._v("test")]),a._v(": adding missing tests, refactoring tests; no production code change")]),a._v(" "),s("li",[s("code",[a._v("chore")]),a._v(": updating grunt tasks etc; no production code change")])]),a._v(" "),s("h2",{attrs:{id:"配置别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置别名"}},[a._v("#")]),a._v(" 配置别名")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.st status\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.pl "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pull --all --rebase'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用 rebase 来合并代码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.aa "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'add -A'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.ci commit\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.ca "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'commit -am'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.caa "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'commit -am \"just add\"'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.ph push\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.co checkout\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.br branch\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global alias.re rebase\n")])])]),s("h2",{attrs:{id:"所有配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所有配置"}},[a._v("#")]),a._v(" 所有配置")]),a._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[a._v("git config "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("list\n")])])]),s("h2",{attrs:{id:"改了-git-密码后的处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改了-git-密码后的处理"}},[a._v("#")]),a._v(" 改了 Git 密码后的处理")]),a._v(" "),s("p",[a._v("Mac 会默认会从密钥链里拿。git config 里会有一句")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("credential.helper"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("osxkeychain\n")])])]),s("p",[a._v("密码改后， 要删除旧的凭证：Keychain access > 搜索 "),s("a",{attrs:{href:"http://github.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("github.com"),s("OutboundLink")],1),a._v('(或其他代码托管网站) > "互联网密码“> 删除。再做一次，会要求输用户名和密码，更新到新的凭证。')]),a._v(" "),s("p",[a._v("具体见 "),s("a",{attrs:{href:"https://docs.github.com/cn/github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"ssh-key-位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-key-位置"}},[a._v("#")]),a._v(" SSH Key 位置")]),a._v(" "),s("p",[a._v("mac:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" ~/.ssh\n")])])]),s("h2",{attrs:{id:"pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[a._v("#")]),a._v(" PR")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844904103294795789",target:"_blank",rel:"noopener noreferrer"}},[a._v("我是如何在 GitHub 上提交 PR 的"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[a._v("#")]),a._v(" 文档")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://gitbook.liuhui998.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git Community Book 中文版"),s("OutboundLink")],1)])]),a._v(" "),s("p",[s("strong",[a._v("— 完 —")])]),a._v(" "),s("p",[a._v("整理By "),s("a",{attrs:{href:"https://github.com/iamjoel",target:"_blank",rel:"noopener noreferrer"}},[a._v("Joel"),s("OutboundLink")],1),a._v("。微信号搜索: joel007。")])])}),[],!1,null,null,null);t.default=r.exports}}]);