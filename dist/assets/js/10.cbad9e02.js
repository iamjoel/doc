(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{371:function(a,s,t){"use strict";t.r(s);var e=t(24),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-sql"}},[a._v("#")]),a._v(" MySQL & SQL")]),a._v(" "),t("h2",{attrs:{id:"命令行登录-退出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行登录-退出"}},[a._v("#")]),a._v(" 命令行登录 & 退出")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql -u root -p "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 登录")]),a._v("\nquit "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 退出")]),a._v("\n")])])]),t("h2",{attrs:{id:"数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[a._v("#")]),a._v(" 数据库")]),a._v(" "),t("h3",{attrs:{id:"查看所有数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有数据库"}},[a._v("#")]),a._v(" 查看所有数据库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("show databases"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"选择数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择数据库"}},[a._v("#")]),a._v(" 选择数据库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("use 数据库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"创建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[a._v("#")]),a._v(" 创建数据库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("create database 数据库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表"}},[a._v("#")]),a._v(" 表")]),a._v(" "),t("h3",{attrs:{id:"查看当前库下所有表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前库下所有表"}},[a._v("#")]),a._v(" 查看当前库下所有表")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("show tables"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"查看表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看表结构"}},[a._v("#")]),a._v(" 查看表结构")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("desc 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"一对多表查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一对多表查询"}},[a._v("#")]),a._v(" 一对多表查询")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" *\n from a\n  left "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" b on a.bId "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b.id\n")])])]),t("h3",{attrs:{id:"多对多表查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多对多表查询"}},[a._v("#")]),a._v(" 多对多表查询")]),a._v(" "),t("p",[a._v("方法1:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("id1,id2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" from a where "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" * from a_b_relation as r\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" b on  b.id "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" r.bId\n  where r.aId "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id1,id2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("方法2:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" * from a\n  left "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" a_b_relation as r on a.id "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" r.aId\n  left "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" b on r.bId "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b.id\n  where a.id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id1,id2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("— 完 —")])]),a._v(" "),t("p",[a._v("整理By "),t("a",{attrs:{href:"https://github.com/iamjoel",target:"_blank",rel:"noopener noreferrer"}},[a._v("Joel"),t("OutboundLink")],1),a._v("。微信号搜索: joel007。")])])}),[],!1,null,null,null);s.default=r.exports}}]);