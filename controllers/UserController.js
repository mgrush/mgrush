"use strict";

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
		let userList = [];
		let page = req.query.page;
		let size = req.query.size;

		for(let index = page * size; index < (parseInt(page) + 1) * size; index++) {
			userList.push({
				id : index + 1,
				name : "mgrush",
				age : "25",
				gender : "male"
			});
		}

		return res.json({
			status : 0,
			data : userList,
			count : 120
		});
	}
};


module.exports	= UserController;
