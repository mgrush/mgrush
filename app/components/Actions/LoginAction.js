"use strict";

import Constants from "../Constants";
import AppDispatcher from "../Dispatcher";

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
	}
};
