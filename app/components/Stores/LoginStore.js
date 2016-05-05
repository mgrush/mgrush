"use strict";

import BaseStore from "./BaseStore";
import Constants from "../Constants";
import AppDispatcher from "../Dispatcher";
import BaseUtil from "../Base/util";

let LoginStore = Object.assign({}, BaseStore, {
	cacheData : {
		message : "",
		isUserLogin : BaseUtil.getCookie("isUserLogin") == "true"
	},

	getLoginInfo(){
		return this.cacheData;
	},

	submitLogin(username, password){
		BaseUtil.postData("/user/checkUserLogin", { username, password }).then((result) => {
			if( result.status == 0 ) {
				// 登陆成功
				this.cacheData.message = "";
				this.cacheData.isUserLogin = true;
			}else {
				// 登陆失败
				this.cacheData.isUserLogin = false;
				this.cacheData.message = result.message;
			}

			this.emitChange();
		});
	},

	submitLogout(){
		BaseUtil.getJSON("/user/logout").then((result) => {
			if( result.status == 0 ) {
				this.cacheData.message = "";
				this.cacheData.isUserLogin = false;
			}else {
				this.cacheData.isUserLogin = true;
				this.cacheData.message = result.message;
			}

			this.emitChange();
		});
	},

	// 用户注册登录
	submitRegist(username, password){
		BaseUtil.postData("/user/regist", {username, password}).then((result) => {
			if( result.status == 0 ) {
				// 注册成功，直接登录
				this.cacheData.message = "";
				this.cacheData.isUserLogin = true;
			}else {
				this.cacheData.isUserLogin = false;
				this.cacheData.message = result.message;
			}

			this.emitChange();
		});
	}
});

AppDispatcher.register(( action ) => {
	let username = null;
	let password = null;

	switch( action.actionType ) {
		case Constants.LOGIN : 
			username = action.data.username;
			password = action.data.password;

			LoginStore.submitLogin(username, password);
			break;

		case Constants.LOGOUT :
			LoginStore.submitLogout();
			break;

		case Constants.REGIST :
			username = action.data.username;
			password = action.data.password;

			LoginStore.submitRegist(username, password);
			break;
	}
});

export default LoginStore;
