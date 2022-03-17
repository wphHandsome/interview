#### git常用命令
* 初始化仓库：git init （像文件添加一个.git文件）
* 查看本地库状态：git status
* 添加暂存区： git add 文件名
* 提交本地库： git commit -m'注释' 文件名
* 查看历史版本：git reflog （查看所有版本信息，删除的也可以查到）  git log 查看版本详细信息
* 回退指定版本： git reset --hard 版本号  （版本号可以通过git reflog查到）
* 查看分支： git branch -v （-v是远程分支，-a是所有本地远程所有分支）branch本质是commit 的一个哈希
* 切换分支： git checkout 分支名
* 创建分支： git branch 分支名
* 合并分支： git merge 分支名
* 查看所有远程分支地址别名： git remote -v
* 地址起别名: git remote add 别名 地址
* 推送本地分支到远程仓库： git push 别名 分支
* 将远程仓库克隆到本地： git clone 地址
* 将远程仓库最新内容拉下来与当前本地分支合并：git pull 远程地址别名 远程分支名
* 将未提交的修改（工作区和暂存区）保存至堆栈中： git stash save "save message" 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别，没有在git 版本控制中的文件，是不能被git stash 存起来的。
* 查看stash了哪些存储：git stash list 
* 恢复之前缓存的工作目录：git stash pop
* 删除所有缓存的stash：git stash clear
* 选择一个commit，合并进当前分支:git cherry-pick <commitHash>

#### git rebase和merge区别：
rebase把所有commit的迁移到一个分支上了
merge历史汇合

#### 知名仓库，如何PR，修改他的bug

#### git hooks
* Husky 的原理是让我们在项目根目录中写一个配置文件，然后在安装 Husky的时候把配置文件和 Git Hook 关联起来，这样我们就能在团队中使用 Git Hook。