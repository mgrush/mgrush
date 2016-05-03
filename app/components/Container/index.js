"use strict";

import React from "react";
import ReactDom from "react-dom";
import BaseUtil from "../Base/util";

const Container = {
	__refers : [],
	__containers : [],

	createContainer : function(){
		let container = document.createElement("div");
			container.id = new Date().getTime();

		this.__containers.push( document.body.appendChild(container) );

		return container;
	},

	renderComponent : function(Component, props){
		var container = this.createContainer();

		this.__containers.push( container );
		this.__refers.push( ReactDom.render(<Component {...props} />, container) );
	},

	destroyComponent : function(refer){
		let referIndex = this.__refers.indexOf(refer);
		let container = this.__containers[ referIndex ];

		this.__refers.splice(referIndex);
		this.__containers.splice(referIndex);

		container.remove();
	}
};

export default Container;
