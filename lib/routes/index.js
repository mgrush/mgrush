/**
 * 系统路由控制
 *
 */

"use strict";

const path	= require("path");
const glob	= require("glob");
const srcPath	= path.join(__dirname, "../../protected/controllers"); 

module.exports = function(app){

	// 遍历protected/controllers中的接口
	glob.sync(path.join(srcPath, "/**.js")).map(function(filePath){
		let contObj = require(filePath);
		let contName = path.relative(srcPath, filePath).replace(/^\w/, function(ch){
			return ch.toLowerCase();
		}).replace("Controller.js", "");

		for( var pathName in contObj ) {
			app.all("/" + contName + "/" + pathName, contObj[pathName]);

			if( pathName == "index" ) {
				app.all("/" + contName, contObj[pathName]);
			}
		}
	});

};
