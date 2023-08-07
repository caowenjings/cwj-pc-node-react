# 项目过程中学习到的

### 1. 本地项目上传 git

1、找到想要本地文件上传的目录 （如果有.git 文件请删除）
2、git init 生成 .git 文件
3、git remote add origin https://gitee.com/a/.git (这里标红部分为你在 git 上所建的仓库网址)
4、git add . (把文件全部添加本地 git)
5、git commit -m “测试 ” （添加 git log）
6、git remote -v （查看是否关联远程仓库）
7、git push -f -u origin master （带-f 是因为要强制。如果是有同事协同写的项目请注意，是否需要带-f ，可能会把同事提交的代码盖掉）

### 2.hooks

1.React.memo
函数组件，使用 React.memo ，将函数组件传递给 memo 之后，就会返回一个新的组件，新组件的功能：如果接受到的属性不变，则不重新渲染函数

2.useCallback
接收一个内联回调函数参数和一个依赖项数组（子组件依赖父组件的状态，即子组件会使用到父组件的值） ，useCallback 会返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新

3.useRef
useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的 ref 对象都是同一个