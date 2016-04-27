"use strict";

const Mysql = require("mysql");

exports.getConnection = function(){
	var connection = Mysql.createConnection({
		host	: "localhost",
		user	: "root",
		password	: "",
		database	: "mgrush",
		port		: 3306
	});

	return connection;
};
