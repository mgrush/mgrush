// 基本方法定义
let BaseUtil = Object.assign({}, {

	// 仿照Array.map方法对obj进行处理并返回数组
	map(obj, callback){
		let mapResult = [];

		for(var pname in obj) {
			mapResult.push(callback(pname, obj[pname]));
		}

		return mapResult;
	}
});

export default BaseUtil;
