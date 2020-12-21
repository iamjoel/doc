module.exports = {
	title: '常用文档',
	base: '/doc/dist/', // 部署站点的基础路径
	dest: './dist', // 构建输出的位置，从项目根路径开始算。
	themeConfig: {
		nav: [ { text: 'GitHub', link: 'https://github.com/iamjoel/doc' } ],
		sidebar: [
			{
				title: '前端',
				children: [
					{
						title: 'DOM 常用操作',
						path: '/content/fe/DOM'
					},
					{
						title: '异步常用写法',
						path: '/content/fe/async'
					},
					{
						title: 'TypeScript 常用写法',
						path: '/content/fe/ts'
					}
				]
			},
			{
				title: '数据库',
				children: [
					{
						title: 'MySQL 常用命令 & SQL',
						path: '/content/database/mysql'
					}
				]
			}
		]
	}
};
