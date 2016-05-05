"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";

import Header from "../../components/Header";
import AsideMenu from "../../components/AsideMenu";
import Login from "../../components/Login";
import Container from "../../components/Container";
import LoginAction from "../../components/Actions/LoginAction";

import DataList from "./components/data-list";

import UploadImage from "./components/upload-image";

// 页面导航条设置
let headerConfig = {
	// 已登陆用户显示的与用户相关的操作
	userMenuList : [
		[{ 
			name : "个人中心", 
			onClick : () => {
				alert("个人中心"); 
			}
		}, {
			name : "我的战绩",
			onClick : () => {
				alert("我的战绩");
			}
		}],
		[{ 
			name : "退出", 
			onClick : () => {
				LoginAction.submitLogout();
			}
		}]
	]
};

// 左侧导航配置
const MenuConfig = [{
	title : "我的工作",
	items : [{
		title : "我的数据表格",
		onClick : function(uniqueId){
			let content = document.getElementById(uniqueId);

			if( !content ) {
				Container.renderComponent(DataList, {}, uniqueId);
			}else {
				console.log("显示 content");
			}
		}
	}, {
		"title" : "我的申请单列表",
		"pageUrl" : "http://a.b.com"
	}, {
		"title" : "我的申请单列表",
		"pageUrl" : "http://a.b.com"
	}]
}, {
	title : "我的工作1",
	items : [{
		"title" : "我的申请单列表",
		"pageUrl" : "http://a.b.com"
	}, {
		"title" : "我的申请单列表",
		"pageUrl" : "http://a.b.com"
	}, {
		"title" : "我的申请单列表",
		"pageUrl" : "http://a.b.com"
	}]
}];

ReactDOM.render(
	<Header {...headerConfig} />,
	document.getElementById("header")
);

// 渲染左侧导航条
ReactDOM.render(
	<AsideMenu menuConfig={MenuConfig}/>,
	document.getElementById("aside")
);

// 渲染图片上传
Container.renderComponent(UploadImage);
