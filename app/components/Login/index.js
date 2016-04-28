"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";

function createContainer(){
	let container = document.createElement("div");
	container.className = "content";

	document.body.appendChild( container );

	return container;
}

class LoginComp extends React.Component {
	render(){
		return (
			<div className="m-login"></div>		
		);
	}
}

const Login = {
	show : (function(){
		let loginInstance = null;

		return function(){
			if( loginInstance == null ) {
				loginInstance = ReactDOM.render(
					<LoginComp />,
					createContainer()
				);
			}
		};
	})(),

	hide : function(){
	
	}
};

export default Login;
