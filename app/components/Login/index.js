"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import LoginAction from "../Actions/LoginAction";
import LoginStore from "../Stores/LoginStore";
import Container from "../Container";

class LoginComp extends React.Component {
	constructor(props){
		super(props);

		// 监听登陆结果 
		LoginStore.addChangeListener(this.onLoginStatusChange.bind(this));
	}

	render(){
		return (
			<div className="m-login" onClick={this.onCloseDomClick.bind(this)}>
				<div className="content">
					<div className="left-content">
						<div className="input-item">
							<span className="icon">
								<i className="icon-user"></i>
							</span>
							<input type="text" defaultValue="" ref="username" />
						</div>
						<div className="input-item">
							<span className="icon">
								<i className="icon-key"></i>
							</span>
							<input type="password" defaultValue="" ref="password" />
						</div>
						<div className="login-button" onClick={this.submitLogin.bind(this)}>登&nbsp;&nbsp;&nbsp;&nbsp;陆</div>
					</div>
					<div className="right-content">
					</div>
				</div>
			</div>		
		);
	}

	submitLogin(event){
		let username = this.refs.username.value;
		let password = this.refs.password.value;

		LoginAction.submitLogin(username, password);
	}

	// 监听登陆结果
	onLoginStatusChange(){
		let loginInfo = LoginStore.getLoginInfo(); 

		if( loginInfo.isUserLogin == true ) {
			this.remove();
		}else {
			alert(loginInfo.message);
		}
	}

	// 点击蒙板关闭登陆窗口
	onCloseDomClick(event){
		let className = event.target.className;

		if( className.indexOf("m-login") >= 0 || className.indexOf("close-icon") >= 0 ) {
			this.remove();
		}
	}

	// 删除dom节点以及组件对象
	remove(){
		return Container.destroyComponent(this);
	}
}

const Login = {
	show : (props = {})=>{
		Container.renderComponent(LoginComp, props);
	}
};

export default Login;
