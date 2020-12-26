module.exports = {
    title: '常用文档',
    base: '/doc/dist/', // 部署站点的基础路径
    dest: './dist', // 构建输出的位置，从项目根路径开始算。
    plugins: [
        'vuepress-plugin-mermaidjs'
    ],
    themeConfig: {
        nav: [{ text: 'GitHub', link: 'https://github.com/iamjoel/doc' }],
        sidebar: [
            {
                title: '前端',
                children: [
                    {
                        title: 'HTML',
                        path: '/content/fe/html'
                    },
                    {
                        title: '样式',
                        children: [
                            {
                                title: 'CSS 工具类',
                                path: '/content/fe/style/css-util'
                            },
                            {
                                title: 'Sass 常用写法',
                                path: '/content/fe/style/sass'
                            },
                            {
                                title: 'CSS in JS',
                                path: '/content/fe/style/css-in-js'
                            }
                        ]
                    },
                    {
                        title: 'JavaScript',
                        children: [
                            {
                                title: 'JavaScript 常用写法',
                                path: '/content/fe/js/javascript'
                            },
                            {
                                title: 'JavaScript 工具方法',
                                path: '/content/fe/js/util'
                            },
                            {
                                title: 'DOM 常用操作',
                                path: '/content/fe/js/DOM'
                            },
                            {
                                title: '异步常用写法',
                                path: '/content/fe/js/async'
                            },
                            {
                                title: 'TypeScript 常用写法',
                                path: '/content/fe/js/ts'
                            },
                        ]
                    },
                    {
                        title: '框架 & 第三方库',
                        children: [
                            {
                                title: 'React 常用写法',
                                path: '/content/fe/libs/react'
                            },
                            {
                                title: 'Vue 2 常用写法',
                                path: '/content/fe/libs/vue-2'
                            },
                            {
                                title: 'Mobx',
                                path: '/content/fe/libs/mobx'
                            },
                            {
                                title: 'Jest',
                                path: '/content/fe/libs/jest'
                            }
                        ]
                    },
                    {
                        title: '工具',
                        children: [
                            {
                                title: '包管理工具',
                                path: '/content/fe/tool/package-manage'
                            }
                        ]
                    }
                ]
            },
            {
                title: '后端',
                children: [{
                    title: 'Node.js 常用写法',
                    path: '/content/backend/nodejs'
                },]
            },
            {
                title: '数据库',
                children: [{
                    title: 'MySQL 常用命令 & SQL',
                    path: '/content/database/mysql'
                }]
            },
            {
                title: '软件 & 工具',
                children: [
                    {
                        title: 'Markdown 及扩展',
                        path: '/content/software/markdown'
                    },
                    {
                        title: 'Git 常用命令',
                        path: '/content/software/git'
                    },
                    {
                        title: 'Mac',
                        path: '/content/software/mac'
                    }
                ]
            }
        ]
    }
};