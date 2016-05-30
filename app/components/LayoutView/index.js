/**
 * 页面的layout结构组件
 *
 */

"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Header from "Header";
import Content from "Content";

export default class LayoutView extends React.Component {
	static defaultProps = {
		menuList : {},
		selectedMenuKeys : []
	};

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="m-layout">
				<Header 
					menuList={this.props.menuList} 
					selectedKeys={this.props.selectedMenuKeys} />

				<Content />
			</div>		
		);
	}
}
