// 定义flux流中的常用标识变量
const Constants = {
	// change事件名称
	CHANGE_EVENT : Symbol(),

	// 创建数据
	ADD_ITEM : Symbol(),

	// 删除数据
	DEL_ITEM : Symbol(),

	// 更新数据
	UPDATE_ITEM : Symbol(),

	// 本地缓存数据
	CLIENT_DATA : Symbol(),

	// 远程数据
	REMOTE_DATA : Symbol(),

	// 登陆 
	LOGIN : Symbol(),

	// 登出
	LOGOUT : Symbol(),

	// 注册
	REGIST : Symbol()
};

export default Constants;
