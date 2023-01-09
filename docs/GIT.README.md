# Git 仓库关联、分支使用推荐方式

## 工作流程：

1、个人先fork自己的工作项目，到自己用户下的仓库，而不是组织下。  

```bash
# 1.1 使用代码管理web端控制面板fork源仓库
# eg: 假使现存一个git管理中心服务器 http://git_control_server
# http://git_control_server/group/project.git -> http://git_control_server/userIsMe/project.git
# 1.2 clone 已经fork的仓库
git clone http://git_control_server/userIsMe/project.git


git checkout -b dev
```

2、代码开发 》提交 》Push 到自己的仓库。  

```bash
# 2.1
git branch -a

# * main
#   origin/main

# 2.2 创建一个分支，用来开发自己的代码，main分支始终用来merge和同步。
#     因为在你还没有push之前，也许源仓库已经更新了
git branch -b dev

# 2.3 添加代码到暂存区域
git add .
git commit -m 'fix:update my code task'

# 2.4 合并代码到自己的main分支，准备push
git checkout main
git merge dev

# 2.5 推送到自己的仓库

git push origin main

```


3、登录Gitlab(公司git地址)在自己的仓库左侧点击Merge requests. 创建PR，选择自己的仓库分支提交到fork源仓库的目标分支。  
  
  > 提交PR之后也许会被拒绝，可能你的代码版本太低了,请执行第4步。

```mermaid
graph RL

  group/main <-- userIsMe/main
```

4、源仓库Merge之后，你的仓库会有比源仓库落后的代码版本，这时候同步(github可以点击sycn fork，gitlab用户需要手动同步)。就跟保持自己的项目是最新的，跟源仓库的一致了  

```bash
# 添加fork源仓库的远程地址
git remote add upstream http://git_control_server/group/project.git
# 更新git存储库的版本信息
git fetch upstream

# 合并源仓库的最新代码到你的git仓库
git merge upstream/main

# 如果有冲突处理冲突
# 如果有更改重新提交 -> 2.3

# 推送合并的最新代码到自己的仓库
git push origin main

# 此时你本地的main代码是最新的，并且包含源仓库的特性代码
```

5、在源仓库管理员Merge你提交的PR之后，删除自己提交过的PR的分支。  

```bash
# 删除dev分支吧，因为你的dev分支在此时此刻也许不包含main分支的commit，
# 因为main分支有源仓库的commit
git branch -D dev

# 现在你可以从main分支创建一个新的分支继续coding
# 现在这个新的分支你还可以叫dev
git branch -b task-1
```

6、在自己的仓库Pull之后从同步的主分支创建一个分支用来下一个功能的编辑。  

> 此步骤适用于github仓库用户，并且在第5步之前执行。


## 疑惑点：为什么要删除自己的分支？

因为你提交的分支里面的commit信息都是你自己开发的功能。当你提交PR之后再同步源仓库的代码，你会发现你的commit列表里面会有插入。  
这就说明你的提交PR的分支不能代表最新的版本了。如果再次提交PR，管理员也合并了。那恭喜你，第二次的Merge会将源仓库的代码commit干掉。  



## 同步举例说明

如果是公共组件，各个项目的都要用的。那就应该再template仓库进行更新。   
factoring 项目fork自template项目，他会收到更新提示，管理员更新factoring项目之后，这个项目就有了template里面的公共组件了。  
自己fork的factoring项目这时候也会收到更新通知，点击同步，就能同步到新的commit了。  
自己本地代码管理端，先commit，然后pull ，这时候本地会合并。  
此时你的代码已经包含公共组件和你的业务代码了。  
