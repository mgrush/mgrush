"use strict";

import "./index.less";
import React from "react";
import Menu from "../menu";
import UserLogo from "../user-logo";

export default class Header extends React.Component {
	state = {}

	render(){
		return (
			<div className="m-header" onClick={this.onClick}>
				<div className="header-content">
					<div className="m-logo"></div>	
					<UserLogo/>
					<Menu/>
				</div>
			</div>		
		);
	}

	onClick(evt) {
		alert("Clicked!");
	}
}
