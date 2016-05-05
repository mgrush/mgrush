"use strict";

import Constants from "../Constants";
import AppDispatcher from "../Dispatcher";
import LoginStore from "../Stores/LoginStore";

export default {
	submitLogin(username = "", password = ""){
		AppDispatcher.dispatch({
			data : {
				username,
				password
			},
			actionType : Constants.LOGIN
		});
	},

	submitLogout(){
		AppDispatcher.dispatch({
			actionType : Constants.LOGOUT
		});
	},

	submitRegist(username = "", password = ""){
		AppDispatcher.dispatch({
			data : {
				username,
				password
			},
			actionType : Constants.REGIST
		});
	}
};
