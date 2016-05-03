"use strict";

import "./index.less";
import React from "react";
import Login from "../Login";
import BaseUtil from "../Base/util";
import LoginStore from "../Stores/LoginStore";

export default class UserLogo extends React.Component {
	static defaultProps = {
		menuList : []
	};

	state = {
		isUserLogin : this.isUserLogin()
	};

	constructor(props){	
		super(props);

		// 监听登陆状态变更
		LoginStore.addChangeListener( this.onLoginStatusChange.bind(this) );
	}

	isUserLogin(){
		return LoginStore.getLoginInfo()["isUserLogin"];
	}

	render(){
		// 尚未登陆
		if( !this.state.isUserLogin ) {
			return (
				<div className="m-dropdown">
					<span className="login" onClick={this.startLogin.bind(this)}>登录</span>
				</div>
			);
		}

		// 尚未设置任何的下拉菜单
		if( !this.props.menuList.length ) {
			return (
				<div className="m-dropdown">
					<span className="user"></span>
				</div>
			);
		}

		let menuList = [], groupLength = this.props.menuList.length;
		
		this.props.menuList.map((group, index) => {
			// 处理只有一个菜单项的情况，可以不按照group的形式配置
			if( !BaseUtil.isArray(group) ) {
				group = [group];
			}

			group.forEach((item, keyIndex) => {
				menuList.push(<li className={item.className || ""} onClick={item.onClick} key={index + "-" + keyIndex} >{item.name}</li>);
			});

			if( index < groupLength - 1 ) {
				menuList.push(<li className="sep" key={index + "-sep"}></li>);
			}
		});

		return (
			<div className="m-dropdown">
				<span className="user"></span>
				<div className="menu-list">
					<ul>{menuList}</ul>
				</div>		
			</div>
		);
	}

	// 显示登陆注册窗口
	startLogin(event){
		event.stopPropagation();
		Login.show();
	}

	onLoginStatusChange(){
		this.setState({
			isUserLogin : this.isUserLogin()
		});
	}
};
