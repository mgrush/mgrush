"use strict";

import Constants from "./constants";
import AppDispatcher from "../Dispatcher";

export default {
	create( data ){
		AppDispatcher.dispatch({
			actionType : Constants.ADD_ITEM,
			data : data
		});
	}
};
