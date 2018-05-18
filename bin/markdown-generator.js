#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const fse = require('fs-extra')
const webpackDevServer = require('webpack-dev-server')
const devConfig = require('../webpack.config.js')
const buildConfig = require('../webpack.prod.js')
const webpack = require('webpack')
const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const log = console.log

const allTheme = ['blog', 'cayman']
const defaultTheme = 'blog'

// 选择主题
program.option('-t, --theme [tname]', 'choose a website theme')

program
	.version('0.0.1')
	.command('preview')
	.arguments('<docDirName>')
	.description('预览markdown')
	.action(function(docDirName) {
		// docDirName:要转的文件夹名称

		// 执行命令的当前路径
		const currentPath = process.cwd()
		const docPath = path.resolve(currentPath, docDirName)
		const ifExist = fse.pathExistsSync(docPath)
		if (!ifExist) {
			log(chalk.red(docPath, ' not exists'))
			return
		}

		// 如果选择了主题，需要在webpack里修改相应的配置
		let theme = program.theme
		if (!theme || theme === true) {
			theme = defaultTheme
		}
		if (typeof theme === 'string' && allTheme.indexOf(theme) !== -1) {
			// 指定入口
			devConfig.entry = {
				[theme]: [
					'react-hot-loader/patch',
					path.resolve(__dirname, `../src/themes/${theme}`),
				],
			}

			// 选择静态html模板
			devConfig.plugins.push(
				new HtmlWebpackPlugin({
					title: 'preview',
					template: path.resolve(
						__dirname,
						`../template/${theme}.html`,
					),
				}),
			)
		}

		const choosedTheme = theme || defaultTheme
		// 选择主题
		devConfig.module.rules[0].use[1].options.theme = choosedTheme
		// 将读取的md文档目录
		devConfig.module.rules[0].use[1].options.docPath = docPath

		const compiler = webpack(devConfig)
		const devServer = new webpackDevServer(compiler, {
			hot: true,
			historyApiFallback: true,
		})
		devServer.listen(8080)
	})

program
	.version('0.0.1')
	.command('build')
	.arguments('<docDirName>')
	.description('打包')
	.action(function(docDirName) {
		// docDirName:要转的文件夹名称

		// 执行命令的当前路径
		const currentPath = process.cwd()
		const docPath = path.resolve(currentPath, docDirName)
		const ifExist = fse.pathExistsSync(docPath)
		if (!ifExist) {
			log(chalk.red(docPath, ' not exists'))
			return
		}

		// 修改webpack输入和输出的路径
		buildConfig.module.rules[0].use[1].options.docPath = docPath
		const outPath = path.resolve(currentPath, 'website')
		buildConfig.output.path = outPath

		// 如果选择了主题，需要在webpack里修改相应的配置
		let theme = program.theme
		if (!theme || theme === true) {
			theme = defaultTheme
		}
		if (typeof theme === 'string' && allTheme.indexOf(theme) !== -1) {
			// 指定入口
			buildConfig.entry = {
				[theme]: [path.resolve(__dirname, `../src/themes/${theme}`)],
			}

			// 选择静态html模板
			buildConfig.plugins.push(
				new HtmlWebpackPlugin({
					title: 'preview',
					template: path.resolve(
						__dirname,
						`../template/${theme}.html`,
					),
				}),
			)
		}

		const choosedTheme = theme || defaultTheme
		// 选择主题
		buildConfig.module.rules[0].use[1].options.theme = choosedTheme
		// 将读取的md文档目录
		buildConfig.module.rules[0].use[1].options.docPath = docPath

		const compiler = webpack(buildConfig)
		compiler.run(function() {
			console.log('please open website')
		})
	})

program.parse(process.argv)

// 如果参数数量等于2，说明直接调用fe-note没加其他参数
if (process.argv.length === 2) {
	// 初始化项目
	// webpack(devConfig)
}
