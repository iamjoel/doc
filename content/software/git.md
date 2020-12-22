# Git 常用命令

## 获取远程分支并切换到该分支

```bash
git checkout -b branchName origin/branchName
// 切换不成功，先拉下代码
```

## 获取远程分支

```bash
git fetch origin branchName:branchName
```

## 删除本地分支

```bash
git branch -D branchName
```

## 强制回滚到某个版本

```bash
git reset --hard commitId
git ph
```

## 暂存和恢复

```bash
git stash # 暂存
git stash pop # 恢复
```

## **用 rebase 的方式合并分支**

以 将 **`next` 合并到 `build/test` 为例。**

```bash
git checkout build/test
git pl
git checkout next
git rebase build/test
git checkout build/test
git merge next
git ph
```

## 配置别名

```bash
git config --global alias.st status
git config --global alias.pl 'pull --all --rebase' # 用 rebase 来合并代码
git config --global alias.aa 'add -A'
git config --global alias.ci commit
git config --global alias.ca 'commit -am'
git config --global alias.caa 'commit -am "just add"'
git config --global alias.ph push
```

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。