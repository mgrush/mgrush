"use strict";

import "./index.less";
import React from "react";
import MenuItem from "./menu-item";

export default class Menu extends React.Component {
	static defaultProps = {
		menus : [
			{ text : "文档", url : "#", selected : true },
			{ text : "中文社区", url : "#", selected : false },
			{ text : "下载", url : "#", selected : false },
			{ text : "GitHub", url : "#", selected : false }
		]
	}

	render() {
		let menuList = this.props.menus.map(function(menuItem, index){
			return <MenuItem key={index} text={menuItem.text} url={menuItem.url} selected={menuItem.selected} />
		});

		return (
			<ul className="m-menu">{menuList}</ul>		
		);
	}
}
