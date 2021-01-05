# 包管理工具

## 快速生成 package.json

```bash
npm init -y
```

## 本地调试第三方模块

```bash
cd 要调试的第三方模块的代码
npm link

cd 用第三方模块的项目
npm link 第三方模块的包名
```

更多:  [`npm link`](https://javascript.ruanyifeng.com/nodejs/npm.html#toc18)。

## 全局包操作

### 安装

```bash
yarn global <add/bin/list/remove/upgrade> 包名
npm install -g 包名
```

### 更新

```bash
npm update -g 包名
```

有时，更新删除报错。解决方案： 

1. 打开 npm 包的位置： `npm config get prefix`， 下的 node_modules 文件夹
2. 删除文件。
3. 再安装。如： `npm -g install @tarojs/cli`

### 卸载

```bash
npm uninstall -g 包名
```

### 查看安装的模块

```bash
npm list -g --depth=0
```