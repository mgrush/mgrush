"use strict";

import React from "react";
import ReactDom from "react-dom";
import BaseUtil from "../Base/util";

const Container = {
	__refers : [],
	__containers : [],

	createContainer : function(id){
		let container = document.createElement("div");
			container.id = id || new Date().getTime();

		this.__containers.push( document.body.appendChild(container) );

		return container;
	},

	renderComponent : function(Component, props, containerId){
		var container = this.createContainer(containerId);

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
