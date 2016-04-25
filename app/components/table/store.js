"use strict";

import { EventEmitter } from "events";
import AppDispatcher from "../dispatcher";

const CHANGE_EVENT = Symbol("change");

let TableStore = Object.assign({}, EventEmitter.prototype, {
	data : [{
		id : 24,
		name : "mgrush",
		age : "25",
		gender : "male"
	}, {
		id : 25,
		name : "mgrush01",
		age : "26",
		gender : "female"
	}, {
		id : 24,
		name : "mgrush",
		age : "25",
		gender : "male"
	}, {
		id : 25,
		name : "mgrush01",
		age : "26",
		gender : "female"
	}, {
		id : 24,
		name : "mgrush",
		age : "25",
		gender : "male"
	}, {
		id : 25,
		name : "mgrush01",
		age : "26",
		gender : "female"
	}, {
		id : 24,
		name : "mgrush",
		age : "25",
		gender : "male"
	}, {
		id : 25,
		name : "mgrush01",
		age : "26",
		gender : "female"
	}],

	getData(){
		return this.data;
	},

	create(itemData){
		this.data.push(itemData);
	},

	emitChange(){
		this.emit( CHANGE_EVENT );
	},

	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(( action ) => {
	switch( action.actionType ) {
		case "CREATE" : 
			TableStore.create(action.data);
			TableStore.emitChange();
	}
});

export default TableStore;
