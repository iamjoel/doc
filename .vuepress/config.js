module.exports = {
    title: '常用文档',
    base: '/doc/dist/', // 部署站点的基础路径
    dest: './dist', // 构建输出的位置，从项目根路径开始算。
    themeConfig: {
        nav: [{ text: 'GitHub', link: 'https://github.com/iamjoel/doc' }],
        sidebar: [
            {
                title: '前端',
                children: [
                    {
                        title: '样式',
                        children: [
                            {
                                title: 'CSS 工具类',
                                path: '/content/fe/style/css-util'
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
                        title: '框架',
                        children: [
                            {
                                title: 'React 常见写法',
                                path: '/content/fe/framework/react'
                            }
                        ]
                    },
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
                title: '工具',
                children: [{
                    title: 'Git 常用命令',
                    path: '/content/software/git'
                }]
            }
        ]
    }
};