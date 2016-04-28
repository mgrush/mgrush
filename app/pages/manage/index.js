"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";

import Header from "../../components/Header";
import AsideMenu from "../../components/AsideMenu";

import DataList from "./data-list";

import Login from "../../components/Login";

// 测试
Login.show();

// 自动创建react组件容器
function createContainer(uniqueId){
	let container = document.createElement("div");
	container.id = uniqueId;
	container.className = "content";

	document.body.appendChild( container );

	return container;
}

// 页面导航条设置
ReactDOM.render(
	<Header />,
	document.getElementById("header")
);

// 左侧导航配置
const MenuConfig = [{
	title : "我的工作",
	items : [{
		title : "我的数据表格",
		onClick : function(uniqueId){
			let content = document.getElementById(uniqueId);
			if( !content ) {
				ReactDOM.render(
					<DataList />,
					createContainer(uniqueId)
				);
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

// 渲染左侧导航条
ReactDOM.render(
	<AsideMenu menuConfig={MenuConfig}/>,
	document.getElementById("aside")
);
