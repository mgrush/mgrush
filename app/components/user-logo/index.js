"use strict";

import "./index.less";
import React from "react";

export default class UserLogo extends React.Component {
	state = {}

	render(){
		return (
			<div className="m-dropdown">
				<span className="user"></span>
			</div>		
		);
	}
};