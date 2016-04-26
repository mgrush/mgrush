"use strict";

import { EventEmitter } from "events";
import Constants from "./constants";
import BaseUtil from "../base/util";
import AppDispatcher from "../dispatcher";

let TableStore = Object.assign({}, EventEmitter.prototype, {
	getData(dataSource, params){
		return new Promise((resolve, reject) => {
			// 缓存数据
			if( BaseUtil.isArray(dataSource) ) {
				return resolve({
					data : dataSource,
					count : dataSource.length
				});
			}
			
			// 服务端异步数据
			BaseUtil.getJSON(dataSource, params).then((result) => {
				if( result.status == 0 ) {
					resolve( result );
				}else {
					reject( result.msg );
				}
			});
		});
	},

	create(itemData){
	},

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

AppDispatcher.register(( action ) => {
	switch( action.actionType ) {
		case Constants.ADD_ITEM : 
			TableStore.create(action.data);
			TableStore.emitChange();
	}
});

export default TableStore;
