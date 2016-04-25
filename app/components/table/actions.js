"use strict";

import AppDispatcher from "../dispatcher";

export default {
	create( data ){
		AppDispatcher.dispatch({
			actionType : "CREATE",
			data : data
		});
	}
};
