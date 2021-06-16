# Git

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
以 master 为基，把 `master` **合并到 `feature/a` 为例。和 merge 的命令类似:**

```bash
git checkout master
git pl
git checkout **feature/a**
git pl
git rebase master
git push --force-with-lease
# 自己开发的分支，可以这么做。rebase 改了提交顺序。本地分支和远程分支不一样了。
# 否则，git pull 来合并吧。
```

## 将多次 Commit 合并成一次

```bash
# 1 rebase
git rebase -i commitId # 要 合并 的前一次。
# git rebase -i HEAD~3 # 最后个数字是合并几次。

# 2 编辑内容
# 2.1 将第一个 commitId 前的 pick 改成 r
# 2.2 将其他的 commitId 前的 pick 改成 f

## 3 修改提交信息
# 2 结束后，会出现编辑器来改提交信息。

## 4 强推
git push --force-with-lease # rebase 改了提交顺序。本地分支和远程分支不一样了。
```

## 合并分支时，将多次 Commit 合并成一次

```bash
git merge --squash 分支名
```

其他分支合并策略: [图解4种git合并分支方法](https://zhuanlan.zhihu.com/p/28137908)。

## 提交信息前缀
- `feat`: new feature for the user, not a new feature for build script
- `fix`: bug fix for the user, not a fix to a build script
- `docs`: changes to the documentation
- `style`: formatting, missing semi colons, etc; no production code change
- `refactor`: refactoring production code, eg. renaming a variable
- `perf`:  add code for performance test
- `test`: adding missing tests, refactoring tests; no production code change
- `chore`: updating grunt tasks etc; no production code change

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

## SSH Key 位置

mac: 

```bash
open ~/.ssh
```
## PR

- [我是如何在 GitHub 上提交 PR 的](https://juejin.cn/post/6844904103294795789)

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。