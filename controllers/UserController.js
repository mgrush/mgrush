"use strict";

const Promise = require("promise");
const Connection = require("../components/mysql").getConnection();

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

		Connection.query("SELECT * FROM user", function(err, rows){
			for(let index = 0; index < rows.length; index++) {
				userList.push(rows[index]);
			}

			res.json({
				status : 0,
				data : userList,
				count : 0
			});
		});
	}
};


module.exports	= UserController;
