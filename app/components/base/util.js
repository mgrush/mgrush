// 基本方法定义
let BaseUtil = Object.assign({}, {
	// 仿照Array.map方法对obj进行处理并返回数组
	map(obj, callback){
		let mapResult = [];

		for(var pname in obj) {
			mapResult.push(callback(pname, obj[pname]));
		}

		return mapResult;
	},

	// 判断是否是数组
	isArray(target){
		return Object.prototype.toString.call(target) === "[object Array]";
	},

	// 判断是否是对象
	isObject(target){
		return Object.prototype.toString.call(target) === "[object Object]";
	},

	// 获取远程json数据
	getJSON(url, params){
		return new Promise((resolve, reject) => {
			$.getJSON(url, params, (result) => {
				resolve( result );
			});
		});
	}
});

export default BaseUtil;
