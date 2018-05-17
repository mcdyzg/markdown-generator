'use strict!'
// loader-utils作为工具类引入(作为webpack依赖，所以在安装webpack时候就带上了)
// const loaderUtils = require('loader-utils')
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const log = console.log
const MarkdownIt = require('markdown-it')
const hljs = require('highlight.js')
const markdownRender = new MarkdownIt({
	html: true,
	highlight: function(str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(lang, str).value
			} catch (__) {}
		}

		return '' // use external default escaping
	},
})

// loader调用的时候，会将源数据和sourcemap作为参数传入函数
module.exports = function(source, inputSourceMap) {
	let code = source
	const map = inputSourceMap
	// 文档目录，文档目录下必须将.md后缀替换为.js
	const docsPath = path.resolve(this.rootContext, 'docs')
	// 根README.md路径
	const readmePath = path.resolve(this.rootContext, 'docs/README.md')
	// 获取options的方法
	// loaderUtils.getOptions 可以获取到设置loader时候设置的options
	// 当然loaderUtils还有很多其他有用的方法，详情可以看 https://github.com/webpack/loader-utils
	// webpack4不适用
	// const loaderOptions = loaderUtils.getOptions(this) || {}

	// this 属性
	// resourcePath 当前文件路径
	// resource "/abc/resource.js?rrr"
	// loaders 共有哪些loaders
	// context 当前文件所在目录
	// rootContext 项目目录
	// query loaders的options

	//  替换px
	// const regex = /(\d+?)px/g
	// code = code.replace(regex, function(match, p1) {
	//   return p1/10 + 'vw'
	// })

	// 这是同步写法
	// loader需要将自己的值传给下一个loader，并且，loader不免会有异步操作
	// 因此需要回调来证明自己已经处理结束了
	// this.callback(null, code, map)

	// 这是异步写法
	// var callback = this.async();
	// setTimeout(()=>{
	//     callback(null, code,map)
	// },1000)

	// 这是将md转为react component的例子,如果读取的是docs文件夹下的文本
	if (this.context.indexOf('/docs') !== -1) {
		// console.log(this.context)
		// md 标题 作者 时间信息
		let mdInfo = getMdInfo(code)

		// 获取md的详情模板 pages/Detail组件
		const templatePath = path.resolve(
			this.rootContext,
			`src/themes/${this.query.theme}/Detail/Detail.js`,
		)
		let template = fs.readFileSync(templatePath, 'utf-8')

		// img标签加闭合避免报错
		// this.cacheable()

		// 删除code中的info信息
		let tem = code.slice(
			code.indexOf('^^_^^'),
			code.lastIndexOf('^^_^^') + 5,
		)
		code = code.replace(tem, '')

		// 替换md为react组件
		template = template.replace(
			'/* {{MarkdownInfo}} */',
			`${JSON.stringify(mdInfo || {})}`,
		)
		template = template.replace(
			'/* {{MarkdownContent}} */',
			markdownRender.render(code),
		)
		code = template
	}

	// 处理根组件的路由，目的是给跟组件添加import和Route，指向docs文件夹下的md
	if (code.indexOf('i am root component') !== -1) {
		let originDocPath =
			this.query.docPath || path.resolve(this.rootContext, 'origin')
		handleOriginDocs(originDocPath, this.rootContext)

		let arr = fs.readdirSync(docsPath).filter(item => {
			return item.slice(0, 1) !== '.' && item !== 'README.md'
		})
		let _importStr = ''
		let _routeStr = ''
		arr.map(item => {
			// console.log(docsPath+item)
			let categoryPath = docsPath + '/' + item
			fs.readdirSync(categoryPath).map((item2, index) => {
				const _importName = `${item}${item2.slice(0, -3)}`
				let _importStr2 = `
				    const ${_importName} = DynamicImport(() =>
				        import(/* webpackChunkName: "${_importName}" */ '@docs/${item}/${item2}'),
				    )
				`
				_importStr += _importStr2

				let _routeStr2 = `<Route path="/${item}/${item2.slice(
					0,
					-3,
				)}" component={${_importName}} />`
				_routeStr += _routeStr2
			})
		})

		code = code.replace('/* {{DynamicImportChunks}} */', _importStr)
		code = code.replace('{/* {{RouteList}} */}', _routeStr)
	}

	// 处理redux store
	if (code.indexOf('i am redux store') !== -1) {
		// 存放category的数组
		let categoryArr = fs.readdirSync(docsPath).filter(item => {
			return item.slice(0, 1) !== '.' && item !== 'README.md'
		})

		// 存放所有的文章
		let article = []

		categoryArr.map(item => {
			let categoryPath = docsPath + '/' + item
			fs.readdirSync(categoryPath).map(item2 => {
				// md名称
				let mdName = item2
				// md路径
				let mdPath = categoryPath + '/' + item2
				// md的内容
				let md = fs.readFileSync(mdPath, 'utf-8')
				// md信息：标题，作者，时间
				let mdInfo = getMdInfo(md)
				// md所属分类
				let category = item

				// 将md转成html
				md = md.replace('i am a markdown component', '')
				let tem = md.slice(
					md.indexOf('^^_^^'),
					md.lastIndexOf('^^_^^') + 5,
				)
				md = md.replace(tem, '')
				md = markdownRender.render(md)

				article.push({
					mdName,
					...mdInfo,
					category,
				})
			})
		})

		// 将readme里的的信息提取到redux里
		let readme = fs.readFileSync(readmePath, 'utf-8')
		let readmeInfo = getMdInfo(readme)

		code = code.replace('readme replace me', JSON.stringify(readmeInfo))

		code = code.replace(
			'category replace me',
			`["${categoryArr.join('","')}"]`,
		)
		code = code.replace('article replace me', JSON.stringify(article))
	}

	// 关于我的 组件
	if (code.indexOf('i am about component') !== -1) {
		// md的内容
		let readme = fs.readFileSync(readmePath, 'utf-8')

		// 将readme里的项目信息去掉
		let tem = readme.slice(
			readme.indexOf('^^_^^'),
			readme.lastIndexOf('^^_^^') + 5,
		)
		readme = readme.replace(tem, '')

		let str = markdownRender.render(readme)
		code = code.replace('/* {{ReadmeContent}} */', str)
	}

	return code
	// this.callback(null, code, map)
}

// 获取md文本中的标题、作者、时间。
function getMdInfo(content) {
	let mdInfo = content.slice(
		content.indexOf('^^_^^') + 5,
		content.lastIndexOf('^^_^^'),
	)
	let mdInfoObj = eval(`({${mdInfo}})`)

	// let mdInfoArr = content.slice(content.indexOf('^^_^^')+5,content.lastIndexOf('^^_^^')).split('\n')
	// let mdInfoObj = {}
	// mdInfoArr.shift()
	// mdInfoArr.pop()
	// mdInfoArr.map(item=>{
	//     let item2 = item.split(':')
	//     mdInfoObj[item2[0]] = item2[1]
	// })

	return mdInfoObj
}

// 将原始的markdown文件改成js后缀方便走loader，然后移动到指定位置
const handleOriginDocs = (p, rootContext) => {
	const docsPath = path.resolve(rootContext, 'docs')
	fse.emptyDirSync(docsPath)

	fse.copySync(p, docsPath)

	const files = fs.readdirSync(docsPath).filter(item => {
		return item.slice(0, 1) !== '.' && item !== 'README.md'
	})
	files.forEach(item => {
		// docs下目录文件夹的路径，目录下所有的.md文件都要转.js
		const dirPath = path.resolve(docsPath, item)
		transformMdToJs(dirPath)
	})
}
const transformMdToJs = dirPath => {
	const files = fs.readdirSync(dirPath).filter(item => {
		return item.slice(0, 1) !== '.' && item.slice(-3) === '.md'
	})
	files.forEach(item => {
		let filename = path.resolve(dirPath, item)
		fs.renameSync(filename, filename.replace('.md', '.js'))
	})
}
