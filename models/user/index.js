const MD5 = require("md5");
const Sequelize = require("sequelize");

var User = sequelize.define("user", {
	id : {
		type : Sequelize.INTEGER,
		primaryKey : true,
		autoIncrement : true
	},
	username : {
		type : Sequelize.STRING,
		allowNull : false
	},
	password : {
		type : Sequelize.STRING,
		allowNull : false
	},
	gender : {
		type : Sequelize.INTEGER,
		allowNull : false
	},
	age : {
		type : Sequelize.INTEGER,
		allowNull : false
	},
	createdAt : {
		type : Sequelize.DATE
	},
	updatedAt : {
		type : Sequelize.DATE
	}
}, {
	freezeTableName : true
});

// 对外开放模型接口
module.exports = {
	create : function(){
		var result = User.create({
			username : "黑夜的白雪",
			password : "",
			gender : 1,
			age : 27
		});		 

		return result;
	},

	authorize : function(username, password){
		return new Promise(function(resolve, reject){
			User.findOne({
				where : {
					username : username
				}
			}).then(function(user){
				if( !user ) {
					reject(new Error("账号不存在"));
				}else if( user.password !== MD5(password) ) {
					reject(new Error("登陆密码错误，请重新输入"));
				}else {
					resolve(user);
				}
			}).catch(function(error){
				reject(error);
			});
		});			
	}
};
