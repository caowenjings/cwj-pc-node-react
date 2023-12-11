# React 项目实战

https://cnodejs.org/（爪哇实战）

## react 18.6 + ts + hook + router 6 创建项目

1.前端路由核心原理
2.react-router 简单编写
3.react 服务器渲染

## 项目结构

1. 页面

```
view
|- not-found
|   |- index.tsx // 404 页面
|- about
|   |- index.tsx // 关于页面
|- user
|   |- index.tsx // 用户信息页面
|   |- style.tsx
|- topic
|   |- index.tsx // 各种主题的文章列表页
|   |- card
|   |   |- card.tsx // 列表项
|   |   |- style.tsx
|- article
|   |- index.tsx // 文章详情页
|   |- style.tsx
|   |- code-prettify-sunburst.cssc'w'j
|   |- comment
|   |   |- index.tsx // 评论详情
|   |   |- style.tsx
|   |- comment-panel // 评论面板
|   |   |- index.tsx
|   |   |- style.tsx
|   |- info-bar
|   |   |- index.tsx // 文章顶部info
|   |   |- style.tsx
```

2. 组件

```
components
|- loading
|   |- index.tsx // 加载中
|- header
|   |- index.tsx // 顶部header
|- image
|   |- index.tsx // 图片组件
|   |- style.tsx
|- scroll-list
|   |- index.tsx // 滚动列表
|- tabbar
|   |- index.tsx // 顶部nav tabbar
|   |- style.tsx
|- tag
|   |- index.tsx // 文章标签
```

### 自定义 hooks

1. useAsync 用来发起异步请求, 添加 loading 等各种通用信息
2. useLoadMore 用来下拉加载
3. useInitPosition 用来初始化位置

### 开始

1. 路由
2. Tabbar
3. topic 列表页面
   3.1 service 请求封装
   3.2 scrollList 滚动列表
   3.3 card 列表项
   3.4 useLoadMore 下拉刷新
4. article 文章详情页面
   4.1 useAsync 异步请求 loading
   4.2 useInitPosition
   4.3 infoBar
   4.4 CommentPanel
   4.5 Comment
5. user
6. not-found
7. about
