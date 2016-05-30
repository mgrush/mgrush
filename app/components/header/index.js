/**
 * 页面导航条
 *
 */

"use strict";

import "./index.less";
import React from "react";
import Base from "Base";
import { Menu, Icon, Dropdown } from "antd";
 
export default class Header extends React.Component {
	static defaultProps = {
		menuList : {},
		selectedKeys : []
	};

	constructor(props){
		super(props);

		this.state = {
			selectedKeys : props.selectedKeys
		};
	}

	render(){
		let menuList = Base.map(this.props.menuList, (name, menu) => (
			<Menu.Item key={name}>
				<Icon type={menu.icon}></Icon>
				<span>{menu.title}</span>
			</Menu.Item>
		));

		let subMenuList = Base.map(this.props.menuList[this.state.selectedKeys[0]]["subMenus"], (name, menu) => (
			<Menu.Item key={name}>
				<span>{menu.title}</span>
			</Menu.Item>		
		));

		let overlayMenu = (
			<Menu>
				<Menu.Item>退出</Menu.Item>
			</Menu>		
		);

		return (
			<div className="m-header">
				<div className="menu">
					<div className="m-logo"></div>
					<Menu 
						theme="dark" 
						mode="horizontal" 
						style={{lineHeight: "4.8rem"}} 
						selectedKeys={[this.state.selectedKeys[0]]}>
						{menuList}
					</Menu>
					<div className="m-user" id="m-user">
						<Dropdown overlay={overlayMenu}>
							<div className="user"></div>
						</Dropdown>
					</div>
				</div>
				<div className="sub-menu">
					<Menu
						theme="light"
						mode="horizontal"
						style={{lineHeight: "3.6rem"}}
						selectedKeys={[this.state.selectedKeys[1]]}>
						{subMenuList}
					</Menu>
				</div>
			</div>		
		);
	}
};
