#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const fse = require('fs-extra')
const webpackDevServer = require('webpack-dev-server')
const devConfig = require('../webpack.config.js')
const buildConfig = require('../webpack.prod.js')
const webpack = require('webpack')
const chalk = require('chalk')
const log = console.log

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
