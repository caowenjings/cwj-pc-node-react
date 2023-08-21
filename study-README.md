# 项目过程中学习到的

### 1. 本地项目上传 git

1、找到想要本地文件上传的目录 （如果有.git 文件请删除）
2、git init 生成 .git 文件
3、git remote add origin https://gitee.com/a/.git (这里标红部分为你在 git 上所建的仓库网址)
4、git add . (把文件全部添加本地 git)
5、git commit -m “测试 ” （添加 git log）
6、git remote -v （查看是否关联远程仓库）
7、git push -f -u origin master （带-f 是因为要强制。如果是有同事协同写的项目请注意，是否需要带-f ，可能会把同事提交的代码盖掉）

### 2.组件模版

import React, { useState, memo } from 'react';
interface IApp {}
const App: React.FC<IApp> = (props:IApp) => {
const [data, setData] = useState(0);

return (123);
};
export default memo(App);

### 3.hooks

1.React.memo
函数组件，使用 React.memo ，将函数组件传递给 memo 之后，就会返回一个新的组件，新组件的功能：如果接受到的属性不变，则不重新渲染函数

2.useCallback
接收一个内联回调函数参数和一个依赖项数组（子组件依赖父组件的状态，即子组件会使用到父组件的值） ，useCallback 会返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新

3.useRef
useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的 ref 对象都是同一个

可以获取实时的数据

4.useNavigate 路由跳转

### 4.style.compontnt

1.可以传入动态参数，在 component/loading 组件中

interface WrapperProps {
size: number;
}

export const LoadingWrapper = styled.div<WrapperProps>`

width: ${(props) => props.size}px;
height: ${(props) => props.size}px;
animation: ${rotate} 1s linear infinite

`;

### 5. intersection-observer 无线滚动

使用场景： 1.可以用作监听下拉滚动，视口出来了再播放视频 2.实现无限下拉

IntersectionObserver: 一个元素是否在视窗中可见， 通过该对象实现对于 DOM 元素的异步监听功能的实现
callback:回调参数
options：配置项

const observer = new IntersectionObserver(callback, options);
observer.observe(target); // target 是被观察的目标元素
observer.unobserve(target); // 取消观察
observer.disconnect(); // 监听多个停止所有

### 6.timeago.js 的使用，实现几小时前，几天前，几周前

### 小结：

1. Image 组件 实现了，图片没加载处理有默认图

2. Tag 组件 规范了对象映射值的规范写法

3. 没有数据时要显示骨架图， 在 info/list

list hasList 用 usememo 优化

4.没有数据显示骨架图 Skelention

5.T 范型学习使用

user 组件

useInitPisition 定义页面的滚动条位置

info 组件 没有数据时显示骨架图

list 组件 没有数据时显示骨架图

user 中的 useAsyc 解释使用了 T

给默认值 { } as UserDetail

如果一个函数需要传给另外一个组件或者函数，最好用 useCallback
