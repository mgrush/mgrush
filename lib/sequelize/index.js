"use strict";

const Sequelize = require("sequelize");

module.exports = {
	init : function(){
		global.sequelize = new Sequelize("mgrush", "root", "", {
			host : "localhost",
			dialect : "mysql",
			pool : {
				max : 5,
				min : 0,
				idle : 10000
			}
		});

		return global.sequelize;
	}
};
