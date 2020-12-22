# Node.js 常用写法

## 文件操作

### 读文件

```jsx
const contentbuff = fs.readFileSync(文件名)
const content = contentbuff.toString()
```

### 写文件

```jsx
fs.writeFileSync(文件名, 内容)
```

### 给文件追加内容

```jsx
fs.appendFileSync(文件名, 追加内容)
```

### 复制文件

```jsx
fs.writeFileSync(新文件名, fs.readFileSync(要复制的文件名))
```

### 删除文件

```jsx
fs.unlinkSync(文件名)
```

### 文件是否存在

```jsx
fs.existsSync(文件名)
```

### 创建文件夹

```jsx
fs.mkdirSync(文件名, 权限) // 权限: 0777。 777 分别表示 读，写，执行的权限值。
```

## 文件增强库 - [fs-extra](https://www.npmjs.com/package/fs-extra)

### 确保文件 & 文件夹存在

若不存在，则创建。

```jsx
await fs.ensureFile(文件名)
await fs.ensureDir(文件夹名)
```

### 复制文件

```jsx
const fs = require('fs-extra')
await fs.copy(要复制的文件名, 新文件名)
```

## 路径

### 常量

- __dirname: 被执行的 js 所在文件夹的绝对路径
- __filename: 被执行的 js 的绝对路径
- process.cwd(): 运行 node 命令时所在的文件夹的绝对路径

### 文件拓展名

```jsx
path.extname(文件名)
```

### 文件路径的详细信息

```jsx
path.parse('/home/user/dir/file.txt');
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```

### 路径拼接

```jsx
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// 返回: '/foo/bar/baz/asdf'
```

### normalize

```jsx
path.normalize('/foo/bar//baz/asdf/quux/..');
// 返回: '/foo/bar/baz/asdf'
```

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。