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
		// 登录窗口
		let loginContent = (
			<div className="login-content">
				<div className="left-content">
					<div className="input-item">
						<span className="icon"><i className="icon-user"></i></span>
						<input type="text" defaultValue="" ref="l-username" />
					</div>
					<div className="input-item">
						<span className="icon"><i className="icon-key"></i></span>
						<input type="password" defaultValue="" ref="l-password" />
					</div>
					<div className="login-button" onClick={this.submitLogin.bind(this)}>登&nbsp;&nbsp;&nbsp;&nbsp;陆</div>
				</div>
				<div className="right-content">
					<div className="regist-button" onClick={this.showRegContent.bind(this)}>立即注册</div>
				</div>
			</div>
		);

		// 注册窗口
		let registContent = (
			<div className="regist-content">
				<div className="left-content">
					<div className="input-item">
						<span className="icon"><i className="icon-user"></i></span>
						<input type="text" defaultValue="" ref="r-username" />
					</div>
					<div className="input-item">
						<span className="icon"><i className="icon-key"></i></span>
						<input type="text" defaultView="" ref="r-password" />
					</div>
					<div className="input-item">
						<span className="icon"><i className="icon-key"></i></span>
						<input type="text" defaultView="" ref="r-confirm-password" />
					</div>
					<div className="regist-button" onClick={this.submitRegist.bind(this)}>注&nbsp;&nbsp;&nbsp;&nbsp;册</div>
				</div>
				<div className="right-content">
					<div className="regist-button" onClick={this.showLogContent.bind(this)}>立即登录</div>
				</div>
			</div>
		);

		return (
			<div className="m-login" onClick={this.onCloseDomClick.bind(this)}>
				<div className="content" ref="content">
					<div className="slide" ref="slide">
					{loginContent}
					{registContent}
					</div>
				</div>
			</div>		
		);
	}

	showRegContent(event){
		this.refs.slide.style.left = "-" + document.defaultView.getComputedStyle(this.refs.content).width;
	}

	showLogContent(event){
		this.refs.slide.style.left = "0rem";
	}

	submitLogin(event){
		let username = this.refs["l-username"].value;
		let password = this.refs["l-password"].value;

		LoginAction.submitLogin(username, password);
	}

	submitRegist(event){
		let username = this.refs["r-username"].value;
		let password = this.refs["r-password"].value;
		let confirmPwd = this.refs["r-confirm-password"].value; 

		if( password != confirmPwd ) {
			return alert("两次输入的密码不一致");
		}

		LoginAction.submitRegist(username, password);
	}

	// 监听登陆结果
	onLoginStatusChange(){
		let loginInfo = LoginStore.getLoginInfo(); 

		if( loginInfo.isUserLogin == true ) {
			this.remove();
		}else {
			console.log(loginInfo.message);
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
