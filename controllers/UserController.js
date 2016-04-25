// 用户中心控制器
var UserController	= {
	// 显示用户登录界面
	login : function(req, res){
		res.render("pages/login/index");	
	},

	// 验证用户登录
	checkUserLogin : function(req, res){
		
	},

	// 测试接口：获取用户列表
	getUserList : function(req, res){
		res.send(JSON.stringify({
			name : "mgrush"
		}));
	}
};


module.exports	= UserController;
