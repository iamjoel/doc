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
                        title: '常用网站',
                        path: '/content/fe/link'
                    },
                    {
                        title: '收藏',
                        path: '/content/fe/bookmark'
                    },
                    {
                        title: 'HTML',
                        path: '/content/fe/html/'
                    },
                    {
                        title: '样式',
                        children: [
                            {
                                title: 'CSS 工具类',
                                path: '/content/fe/style/css-util'
                            },
                            {
                                title: 'Sass',
                                path: '/content/fe/style/sass'
                            },
                            {
                                title: '防止样式污染',
                                children: [
                                    {
                                        title: 'CSS Modules',
                                        path: '/content/fe/style/css-modules'
                                    },
                                    {
                                        title: 'Scoped CSS',
                                        path: '/content/fe/style/scoped-css'
                                    },
                                    {
                                        title: 'CSS in JS',
                                        path: '/content/fe/style/css-in-js'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'JavaScript',
                        children: [
                            {
                                title: 'JavaScript ',
                                path: '/content/fe/js/javascript'
                            },
                            {
                                title: 'JavaScript 工具方法',
                                path: '/content/fe/js/util'
                            },
                            {
                                title: 'DOM & BOM',
                                path: '/content/fe/js/DOM-BOM/'
                            },
                            {
                                title: '异步处理',
                                path: '/content/fe/js/async'
                            },
                            {
                                title: 'TypeScript',
                                path: '/content/fe/js/ts/'
                            },
                        ]
                    },
                    {
                        title: '框架 & 第三方库',
                        children: [
                            {
                                title: 'React',
                                path: '/content/fe/libs/react/',
                                children: [
                                    {
                                        title: 'ahooks',
                                        path: '/content/fe/libs/react/ahooks'
                                    },
                                    {
                                        title: 'react window',
                                        path: '/content/fe/libs/react/react-window'
                                    },
                                    {
                                        title: 'Ant Design',
                                        path: '/content/fe/libs/react/ant-design'
                                    }
                                ]
                            },
                            {
                                title: 'Vue',
                                children: [
                                    {
                                        title: 'Vue 2',
                                        path: '/content/fe/libs/vue/vue-2'
                                    },
                                    {
                                        title: 'Vue 3',
                                        path: '/content/fe/libs/vue/vue-3'
                                    },
                                ]
                            },
                            {
                                title: 'Lodash',
                                path: '/content/fe/libs/lodash'
                            },
                            {
                                title: 'Moment',
                                path: '/content/fe/libs/moment'
                            },
                            {
                                title: 'Mobx',
                                path: '/content/fe/libs/mobx'
                            },
                            {
                                title: 'Jest',
                                path: '/content/fe/libs/jest'
                            },
                            {
                                title: 'Taro',
                                path: '/content/fe/libs/taro/'
                            },
                        ]
                    },
                    {
                        title: '工具',
                        children: [
                            {
                                title: 'ESLint & TSLint',
                                path: '/content/fe/tool/eslint'
                            },
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
                children: [
                    {
                        title: '常用网站',
                        path: '/content/backend/link'
                    },
                    {
                        title: '收藏',
                        path: '/content/backend/bookmark'
                    },
                    {
                        title: 'Node.js',
                        path: '/content/backend/nodejs'
                    },
                ]
            },
            {
                title: '数据库',
                children: [{
                    title: 'MySQL & SQL',
                    path: '/content/database/mysql'
                }]
            },
            {
                title: '软件 & 工具',
                path: '/content/software/',
                children: [
                    {
                        title: 'Markdown 及扩展',
                        path: '/content/software/markdown/'
                    },
                    {
                        title: 'Git',
                        path: '/content/software/git'
                    },
                    {
                        title: 'Chrome',
                        path: '/content/software/chrome/'
                    },
                    {
                        title: 'Mac',
                        path: '/content/software/mac'
                    },
                    {
                        title: 'Shell',
                        path: '/content/software/shell'
                    },
                    {
                        title: 'whistle - 跨平台 Web 调试代理工具',
                        path: '/content/software/whistle'
                    },
                    {
                        title: 'HHKB 配置 Karabiner-Elements 改键位',
                        path: '/content/software/hhkb'
                    },
                    {
                        title: '鼠须管配置（default.custom.yaml)',
                        path: '/content/software/rime'
                    },
                    
                ]
            },
            {
                title: 'VSCode 片段',
                children: [
                    {
                        title: 'HTML',
                        path: '/content/fe/html/0-snippet'
                    },
                    {
                        title: 'CSS',
                        path: '/content/fe/style/0-snippet'
                    },
                    {
                        title: 'JavaScript',
                        path: '/content/fe/js/0-snippet'
                    },
                    {
                        title: 'TypeScript',
                        path: '/content/fe/js/ts/0-snippet'
                    },
                    {
                        title: 'React',
                        path: '/content/fe/libs/react/0-snippet'
                    },
                    {
                        title: 'Taro',
                        path: '/content/fe/libs/taro/0-snippet'
                    },
                    {
                        title: 'Markdown',
                        path: '/content/software/markdown/0-snippet'
                    },
                ]
            },
            {
                title: '写作',
                children: [
                    {
                        title: '工具',
                        path: '/content/write/tools'
                    },
                    {
                        title: '配色',
                        path: '/content/write/palette/'
                    },
                ]
            },
            {
                title: '做事',
                children: [
                    {
                        title: '工具箱',
                        path: '/content/do/tools/'
                    },
                    {
                        title: '精进问题',
                        path: '/content/do/tools/content/up-question'
                    },
                    {
                        title: '写作检查列表',
                        path: '/content/do/write'
                    }
                ]
            },
            
        ]
    }
};