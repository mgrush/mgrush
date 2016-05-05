// 非必须登录即可访问的页面模块
var loginWhiteList	= ["/home", "/docs", "/user/login", "/manage", "/user/getUserList", "/user/checkUserLogin"];

// 用户模块
var UserModel	= require("../../models/user");

// 系统模块的路由处理方法
var Handlers	= {
	// 用户登录验证
	authorize : function(req, res, next){
		if( loginWhiteList.indexOf(req.path) == -1 && !req.session.userId ) {
			return res.send("请优先登录");
		}

		next();
	},

	// 获取处理对象
	getHandler : function(moduleName, contName){
		var keyName		= moduleName || contName;
		var contName	= contName.replace(/^\w/, function(ch){ return ch.toUpperCase(); }) + "Controller";
	
		if( moduleName && contName ) {
			// 适配 /modules/users/userController 的路由
			Handlers[keyName] = Handlers[keyName] 
				|| require("../../modules/" + moduleName + "/" + contName );
		}else if( contName ){
			// 适配 /controllers/userController 的路由模式
			Handlers[keyName] = Handlers[keyName] 
				|| require("../../controllers/" + contName);
		}

		return Handlers[keyName];
	},

	// 调用模块处理方法
	run : function(req, res, route){
		var moduleName	= route.moduleName;
		var contName	= route.contName;
		var funcName	= route.funcName;

		return Handlers.getHandler(moduleName, contName)[ funcName ](req, res);
	}
};

module.exports = function(app){
	// 首页路由设置
	app.get("/", function(req, res){
		res.redirect("/index/index");
	});

	// 屏蔽favicon.ico
	app.get("/favicon.ico", function(req, res){
		res.end();
	});

	// 统一模块路由处理方法 /controllers/IndexController
	app.all("/:contName", Handlers.authorize, function(req, res){
		var contName	= req.params.contName;

		Handlers.run(req, res, {
			contName	: contName,
			funcName	: "index"
		});
	});

	// 统一模块路由处理方法 /contName/funcName
	app.all("/:contName/:funcName", Handlers.authorize, function(req, res, next){
		var contName	= req.params.contName;
		var funcName	= req.params.funcName;

		Handlers.run(req, res, {
			contName	: contName,
			funcName	: funcName
		});
	});

	// 统一模块路由处理方法 /moduleName/contName/funcName
	app.all("/:moduleName/:contName/:funcName", Handlers.authorize, function(req, res){
		var moduleName	= req.params.moduleName;
		var contName	= req.params.contName;
		var funcName	= req.params.funcName;

		Handlers.run(req, res, {
			moduleName	: moduleName,
			contName	: contName,
			funcName	: funcName
		});
	});
}
