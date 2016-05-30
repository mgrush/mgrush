"use strict";

import { EventEmitter } from "events";
import Constants from "Constants";

const BaseStore = Object.assign({}, EventEmitter.prototype, {
	emitChange(){
		this.emit( Constants.CHANGE_EVENT );
	},

	addChangeListener(callback){
		this.on( Constants.CHANGE_EVENT, callback );
	},

	removeChangeListener(callback){
		this.removeListener( Constants.CHANGE_EVENT, callback );
	}
});

export default BaseStore;
