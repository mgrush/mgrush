"use strict";

import "./index.less";
import React from "react";
import Menu from "../Menu";
import UserLogo from "../UserLogo";

export default class Header extends React.Component {
	state = {};

	render(){
		return (
			<div className="m-header">
				<div className="header-content">
					<div className="m-logo"></div>	
					<UserLogo/>
					<Menu/>
				</div>
			</div>		
		);
	}
}
