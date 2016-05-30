"use strict";

import "./index.less";

let Base = Object.assign({}, {
	// 仿照Array.map方法对obj进行处理并返回数组
	map(obj, callback){
		let mapResult = [];

		for(var pname in obj){
			mapResult.push(callback(pname, obj[pname]));
		}

		return mapResult;
	},

	// 克隆对象
	clone(obj, filterFunc){
		let newObj = {};

		for(var pname in obj) {
			if(filterFunc(pname, obj[pname])){
				newObj[pname] = obj[pname];
			}
		}

		return newObj;
	},

	// 判断是否是数组
	isArray(target){
		return Object.prototype.toString.call(target) === "[object Array]";
	},

	// 判断是否是对象
	isObject(target){
		return Object.prototype.toString.call(target) === "[object Object]";
	},

	// 判断是否是方法
	isFunc(target){
		return Object.prototype.toString.call(target) === "[object Function]";
	},

	// 获取远程json数据
	getJSON(url, params){
		return new Promise((resolve, reject) => {
			$.getJSON(url, params, (result) => {
				resolve( result );
			});
		});
	},

	// 发送post数据提交
	postData(url, params){
		return new Promise((resolve, reject) => {
			$.ajax({
				url : url,
				data : params,
				type : "post",
				dataType : "json",
				success : (result) => {
					resolve(result);
				},
				error : (xhr, error) => {
					reject(error);
				}
			});
		});
	},

	// 获取cookie数据
	getCookie(paramName){
		let cookieStr = document.cookie.replace(/\"\"/g, "").replace(/;\s/g, '","').replace(/=/g, '":"'); 
		let cookieObj = cookieStr ? JSON.parse( "{\"" + cookieStr + "\"}") : {};
		
		return paramName ? cookieObj[paramName] || null : cookieObj;
	}
});

export default Base;
