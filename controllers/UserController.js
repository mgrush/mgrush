// 用户中心控制器
var UserController	= {
	// 显示用户登录界面
	login : function(req, res){
		res.render("pages/login/index");	
	},

	// 验证用户登录
	checkUserLogin : function(req, res){
		
	} 
};


module.exports	= UserController;
