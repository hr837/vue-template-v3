# Git 仓库关联、分支使用推荐方式

该方式使用fork方式，可以查看项目的关联关系。  
以便友好的处理 `爷爷->儿子->孙子` 这种关联关系库的代码合并。

## 工作流程：

### 创建仓库
  
个人先fork自己的工作项目，到自己用户下的仓库，而不是组织下。  

1. 使用代码管理web端控制面板fork源仓库

    eg: 假使现存一个git管理中心服务器 http://git_control_server ,fork 示意：
    ```mermaid
    graph LR

      group/main --> userIsMe/main
    ```
    ```console
    http://git_control_server/group/project.git 
    ---->
    http://git_control_server/userIsMe/project.git
    ```
2. clone 已经fork的仓库到本地

    ```bash
    git clone http://git_control_server/userIsMe/project.git
    ```
3. 关联源fork源仓库

    ```bash
    git remote add upstream http://git_control_server/group/project.git
    ```

4. 查看本地分支信息

    ```bash
    git branch -a

    # * main
    #   origin/main
    #   upstream/main
    ```

### 本地仓库管理
  
应该遵循这种流程：代码开发 》提交 》更新 》推送

1. 检出一个分支作为自己本地开发分支
     
    ```bash
    git checkout -b dev
    ```

2. 添加代码到暂存区域

    ```bash
    git add .
    git commit -m 'feature:description your added feature infomation'
    ```

3. 切到自己的main分支，先更新源仓库代码，指不定已经有更新。
   
   > github控制面板有sync fork按钮，直接更新，然后pull自己的main分支进行merge
   
    ```bash
    # gitlab用户
    git checkout main
    git fetch upstream
    git merge upstream/main
    ```

    ```bash
    # github用户
    git pull origin main
    ```
4. 如果有冲突就进行更改，然后执行第二步骤
5. 推送到自己的仓库

    ```bash
    git push origin main
    ```

### 提交PR到源仓库
  
1. 登录Gitlab/Github(公司git地址)在自己的仓库左侧点击Merge requests. 创建PR，选择自己的仓库分支提交到fork源仓库的目标分支。  

2. 认真填写comment信息，将你提交的代码功能进行描述，否则有可能被管理员关闭你提交的PR.

    > 服务器控制面板一般有创建请求并删除当前分支的选项，可以勾选。

    提交PR示意图.  
    ```mermaid
    graph RL

      group/main <-- userIsMe/main
    ```

### 更新自己fork的仓库代码

 管理员Merge你提交的PR之后，你的仓库会有比源仓库落后的代码版本，这时候需要同步保持自己的项目是最新的，要跟源仓库的一致。

 * gitlab用户需要手动同步

    ```bash
    # gitlab用户执行此命令更新自己本地main仓库代码，以便操作。
    git fetch upstream
    git merge upstream/main
    git push origin main
    ```
  * github可以点击sycn fork,同步远程仓库
    ```bash
    # github用户还需要自行更新本地代码
    git pull origin main
    ```
### 再接再厉
 开启新的分支，准备下一次的功能迭代。


## 疑惑点：为什么要删除提交PR的分支？

因为你提交的分支里面的commit信息都是你自己开发的功能。  
当你提交PR之后如果源仓库设置为将PR设置为一个新的commit，  
那么你的这些commit会成为新的ID，不再包含提交的commitId了。   

此时你的提交PR的分支不能代表最新的版本了, 因为源仓库不存在你已经合并过的commitId 。  
所以你需要在同步之后创建一个新分支用来提交，以保证你的提交信息都在源仓库提交之后。  



