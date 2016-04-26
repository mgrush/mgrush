"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/header";
import AsideMenu from "../../components/aside-menu";

import Table from "../../components/table";

ReactDOM.render(
	<Header />,
	document.getElementById("header")
);

ReactDOM.render(
	<AsideMenu />,
	document.getElementById("aside")
);

// 渲染数据表格
let tableProps = {
	title : "数据表格标题",
	columns : {
		id : "序号",
		name : "姓名",
		age : "年龄",
		gender : {
			title : "性别",
			map : {
				female : "女",
				male : "男"
			}
		}
	},
	/*
	data : [
		{ id : 1, name : 23, age : 23, gender : 23},
		{ id : 1, name : 23, age : 23, gender : 23},
		{ id : 1, name : 23, age : 23, gender : 23},
		{ id : 1, name : 23, age : 23, gender : 23}
	]
	*/
	data : "/user/getUserList"
};

ReactDOM.render(
	<Table {...tableProps} />,
	document.getElementById("m-content")
);
