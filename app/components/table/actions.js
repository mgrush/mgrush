"use strict";

import Constants from "./constants";
import AppDispatcher from "../dispatcher";

export default {
	create( data ){
		AppDispatcher.dispatch({
			actionType : Constants.ADD_ITEM,
			data : data
		});
	}
};
