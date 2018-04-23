# markdown-generator

transform md to static website

## how to use

preview:

```js
1. npm install markdown-generator -g
2. ensure docs exists

───docs
   ├── category1
   │   └── article1.md
   ├── category2  
   │   └── article2.md
   └── category3  
 	   └── article3.md  
3. markdown-generator preview docs
4. open http://localhost:8080
```

build:

```
1. markdown-generator build docs

───docs
   ├── category1
   │   └── article1.md
   ├── category2  
   │   └── article2.md
   └── category3  
	   └── article3.md  
───website   // created
```

## md format(文档书写规范)

```
^^_^^
title:'This is the first note about js',
author:'mcdyzg',
cover:'https://wp-themes.com/wp-content/themes/hestia/demo-preview-images/img/10.jpg',
desc:'hahahahahahahahahahahhahahahahahahahahahahahahahahahhahahahahahahahahahahahahahahahhahahahahahahahahahahahahahahahhahahahaha',
time:'2017-02-02 14:20:30',
^^_^^

...more content eg: ## doc title
```

1.  文档标题作者等信息必须写在^^\_^^标签中

2.  如新增自定义属性，可以在 src/pages/Detail/Detail.js 里通过 this.state.md 接收到。

3.  正文写在第二个^^\_^^后。

## TODO

1.  support Cayman theme
2.  add docute theme
3.  add vuepress theme
4.  support anchor
