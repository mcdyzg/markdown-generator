# markdown-generator

transform md to static website

## how to use

```js
preview:

1. npm install markdown-generator -g
2. ensure docs exists

	───docs
	   ├── category1
	   │   └── article1.md
	   ├── category2  
	   │   └── article2.md
	   └── category2  
	 	   └── article3.md  
3. markdown-generator preview docs
4. open http://localhost:8080

build:
1. markdown-generator build docs

───docs
   ├── category1
   │   └── article1.md
   ├── category2  
   │   └── article2.md
   └── category2  
	   └── article3.md  
───website
```

## TODO

1.  support Cayman theme
2.  add docute theme
3.  add vuepress theme
4.  support anchor
