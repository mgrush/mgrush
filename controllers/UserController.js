"use strict";

const Promise = require("promise");
const User = require("../models/user");

var UserController	= {
	// 显示用户登录界面
	login : function(req, res){
		res.render("pages/login/index");	
	},

	// 验证用户登录
	checkUserLogin : function(req, res){
		var session = req.session;
		var username = req.body.username;
		var password = req.body.password;

		if( session && session.userId ) {
			return res.json({ status : 1, message : "您当前已经是登陆状态" });
		}

		User.authorize(username, password).then(function(user){
			// 将用户信息写入session中
			req.session.userId = user.id;
			req.session.userData = user;

			// 登陆成功之后，在cookie中写入标记
			res.cookie("isUserLogin", true);	

			res.json({ status : 0, data : {} });
		}).catch(function(error){
			res.json({ status : 1, message : error.toString() });
		});
	},

	// 判断用户是否已经登陆
	isLogined : function(req, res){
		res.json({
			status : 0,
			data : {
				isUserLogin : req.session && req.session.userId != null
			}
		});			
	},

	// 登陆
	logout : function(req, res){
		// 清空session中的用户信息
		req.session.userId = null;		 
		req.session.userData = null;

		// 清除cookie中的标记
		res.cookie("isUserLogin", false);

		res.json({ status : 0 });
	},

	// 测试接口：获取用户列表
	getUserList : function(req, res){
		res.json({
			status : 0,
			data : [],
			count : 0
		});
	},
};


module.exports	= UserController;
