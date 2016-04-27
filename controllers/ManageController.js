"use strict";

const MysqlMgr = require("../components/mysql/index.js");

module.exports = {
	index : function(req, res){
		var connection = MysqlMgr.getConnection();


		res.render("pages/manage/index");		
	}
};
