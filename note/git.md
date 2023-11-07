<!-- git操作记录 -->

## 1.拉去分支代码

git clone -b ants git@github.com:Ants-double/CareerJava.git

## 2.退回到指定版本

1.git log 查看提交记录
2.git reset -- hard b48175a(要退回的版本)
3.git push -f （强制提交）

## 3.切换分支

git branch
git checkout nemw

## 4.更改 ssh 用户信息

git config --system --unset credential.helper
git config --global credential.helper store

## 5.一个分支的修改同步到另一个分支

1.git log 命令 或去 gitlab 界面找 commit 的 ID 号，比如 026d0203 2.切换目标分支 3.执行命令：git cherry-pick aabb4d0203

## 6.合并分支 dev 合并到 prd

两个人分支都 git pull 1.切到 prd： git checkout prd 2. git merge dev 3. put push

## 7.出现提交不上去，提交之前没有 git pull

1.ctrl + P 出现顶部输入框 2.输入 > reload window 3.然后重新提交

## 8.撤销提交

1.git log 查找 commitId
2.git revert commitId

## 9.发包打 tag

#git 查看 tag
git tag -l

#git 删除 tag
git tag -d xs-1.5-deployment
git push origin :refs/tags/xs-1.5-deployment

##git 创建 tag
git tag -a xs-1.5-deployment -m"行数 1.5 部署版本"
git push origin
