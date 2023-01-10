# 命令行
## zsh 的配置

```bash
~/.zshrc
```

重新编译配置:

```bash
source ~/.zshrc
```

## 运行 Shell 文件
```bash
sh 文件名
```

## 查看进程
```bash
ps
ps|grep 'yarn start'
```

## 杀死进程
```bash
kill 进程id
```

## 使用 nvm

```bash
export NVM_DIR=$HOME/.nvm
source $NVM_DIR/nvm.sh

nvm use v14
node -v
cd '...'
yarn start
```

## 启动前端项目
```bash
projectName=xxx
projectPath=/Users/...
port=4000
nodeVersion=v14

. ~/.nvm/nvm.sh
nvm use $nodeVersion
nodeVersion=$(node -v)

echo "启动: $projectName 。端口: $port 。Node 版本: $nodeVersion 。"
cd $projectPath
HOST=0.0.0.0 PORT=$port SOCK_PORT=$port PUBLIC_PATH=http://127.0.0.1:$port/ yarn run dev
```

## 推荐阅读

- [掌握Shell编程，一篇就够了](https://www.notion.so/Shell-c966594fd3884a6887b88afc860f2400)