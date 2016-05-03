"use strict";

import "./index.less";
import React from "react";
import Login from "../Login";
import BaseUtil from "../Base/util";
import LoginStore from "../Stores/LoginStore";

export default class UserLogo extends React.Component {
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

		return (
			<div className="m-dropdown">
				<span className="user"></span>
				<div className="operate-list">
					<ul>
						<li>个人信息</li>
						<li>设置</li>
						<li className="sep"></li>
						<li>退出</li>
					</ul>
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
