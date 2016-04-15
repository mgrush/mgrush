// 通过使用chokidar、browser-sync的组合达到文件监听以及自动构建的目的
var fs = require("fs-extra");
var path = require("path");
var colors = require("colors");
var Webpack = require("webpack");
var Chokidar = require("chokidar");
var BrowserSync = require("browser-sync");

// webpack配置项
var webpackConfig = require("./webpack.config");

// webpack对象
var webpackCompiler = Webpack( webpackConfig );

// 根目录路径
var root = path.join(__dirname, "../../");

// 启动browser-sync服务
function startBrowSyncServer(){
	BrowserSync.init({
		open : false,
		reloadDebounce : 50,
		watchOptions : {
			ignoreInitial : true
		},
		proxy : {
			target : "http://localhost:3000"
		}
	}, function(){
		console.log(("请打开" + this.options.get("urls").toJS().local + "进行调试开发！").green);
	});

	// 监听文件变化之后，刷新页面
	Chokidar.watch(root + "**/*.ejs").on("change", function(){
		BrowserSync.reload();
	});
}

// 启动webpack构建服务
function startWebpackService(options, callback) {
	// 优先清空目标文件夹
	fs.removeSync( webpackConfig.output.path );

	// 执行webpack构建操作
	var handler = function(err, stats){
		if( err ) {
			return console.log(("Webpack编译异常：" + err.stack).red);
		}

		if( stats.hasErrors() ) {
			return console.log(("Webpack编译出错：\n" + stats.toString({
				colors : true,
				hash : false,
				version : false,
				timings : false,
				assets : false,
				chunks : false,
				children : false,
				chunkModules : false,
				modules : false
			})).red);
		}

		console.log(("Webpack编译成功：" + (stats.endTime - stats.startTime) + "ms !\n").green);

		// 编译成功执行回调
		callback && callback();
	};

	if( options.watch ) {
		return webpackCompiler.watch({ aggregateTimeout : 200 }, handler);
	}else {
		return webpackCompiler.run(handler);
	}
}

// 启动webpack文件构建服务、browser-sync服务
startWebpackService({ watch : true }, function(){
	if( BrowserSync.active ) {
		BrowserSync.reload();
	}else {
		startBrowSyncServer();
	}
});

module.exports = Webpack;
