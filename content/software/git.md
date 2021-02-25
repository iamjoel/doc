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

## 将多次 Commit 合并成一次

```bash
# 1 rebase
git rebase -i commitId # 要 合并 的前一次

# 2 编辑内容
# 2.1 将第一个 commitId 前的 pick 改成 r
# 2.2 将其他的 commitId 前的 pick 改成 f

## 3 修改提交信息
# 2 结束后，会出现编辑器来改提交信息。

## 4 强推
git push -f
```

## 合并分支时，将多次 Commit 合并成一次

```bash
git merge --squash 分支名
```

其他分支合并策略: [图解4种git合并分支方法](https://zhuanlan.zhihu.com/p/28137908)。

## 提交信息前缀
- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

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