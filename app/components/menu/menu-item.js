"use strict";

import React from "react";

export default class MenuItem extends React.Component {
	static defaultProps = {
		text : "",
		url : "",
		selected : false
	}

	render() {
		let className = this.props.selected ? "menu-item selected" : "menu-item";

		return (<li className={className} data-url={this.props.url}>{this.props.text}</li>);
	}
}
