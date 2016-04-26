"use strict";

import "./index.less";
import React from "react";
import BaseUtil from "../base/util";

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="m-modal">
				<div className="main">
					<div className="title"><h3>{this.props.title}</h3></div>
					<div className="content">{this.props.content}</div>
					<div className="toolbar">
						<span>确定</span>
						<span>取消</span>
					</div>
				</div>
			</div>		
		);
	}
}
