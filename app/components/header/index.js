"use strict";

import "./index.less";
import React from "react";
import Logo from "../logo";
import Menu from "../menu";
import Dropdown from "../dropdown";

export default class Header extends React.Component {
	state = {}

	render(){
		return (
			<div className="m-header" onClick={this.onClick}>
				<div className="header-content">
					<Logo />
					<Dropdown />
					<Menu />
				</div>
			</div>		
		);
	}

	onClick(evt) {
		alert("Clicked!");
	}
}
