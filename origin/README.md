# 个人简介

哈哈 111

![Alt text](https://avatars0.githubusercontent.com/u/9742995?s=40&v=4)

| adsf | fasdf   | sdaf |
| ---- | ------- | ---- |
| adf  | adsfasd | asdf |

## 项目概述

这是一个由 webpack 打包的 react 项目，配合配套的 md2rc-loader 可以实现本地编辑文档，浏览器热加载浏览，打包后直接发布到 cdn 上就可预览，可以用来实现文档管理、简化版的博客。

## 项目结构

```
├── src  // react组件放置位置
├── docs // 文档都要放在本文件夹下
│   ├── Node  // docs/下的二级文件夹名称将作为分类名使用
│   │   └── 20180203.js   // 文档名称最好按编写文档的时间定义。文档标题作者等信息需要在文档里定义。
│   ├── EcmaScript
│   └── 杂谈
├── dist // 打包后的资源
│   └── migrations
├── index.js
├── README.md
└── package.json
```

## 文档书写规范

```
^^_^^
title:'This is the first note about js',
author:'mcdyzg',
cover:'https://wp-themes.com/wp-content/themes/hestia/demo-preview-images/img/10.jpg',
desc:'hahahahahahahahahahahhahahahahahahahahahahahahahahahhahahahahahahahahahahahahahahahhahahahahahahahahahahahahahahahhahahahaha',
time:'2017-02-02 14:20:30',
^^_^^

## 标题

正文

...
```

1.  文档标题作者等信息必须写在^^\_^^标签中

2.  如新增自定义属性，可以在 src/pages/Detail/Detail.js 里通过 this.state.md 接收到。

3.  正文写在第二个^^\_^^后。

## 详解

1.  使用 redux react react-router-dom 组件懒加载方案。

2.  组件在 src 下，可直接修改。

3.  文档要写在 docs 文件夹下，docs 下的文件夹将作为目录使用。暂只支持 docs/Node/name.js 这种形式

4.  code 咱不支持正常解析。

5.  打包时请修改 webpack.output.publicPath 为 cdn 全路径。例如：`https://cdn.a.com/md/test/`

6.  README.md 中的内容将作为 #/readme 里的内容显示。

```js
// ======================================================
// 配置中间件
// ======================================================
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import { historyMiddleware } from './syncHistoryWithStore'

const middlewares = [thunk]

if (__LOCAL__) {
	/** Redux Logger (P.S: 打印日志会造成轻微的卡顿) **/
	middlewares.push(logger)
}

export default middlewares
```
