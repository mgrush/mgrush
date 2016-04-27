"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";

import Header from "../../components/Header";
import AsideMenu from "../../components/AsideMenu";
import Table from "../../components/Table";

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
		id : {
			title : "序号",
			editable : false
		},
		username : "姓名",
		age : "年龄",
		gender : {
			title : "性别",
			map : {
				0 : "女",
				1 : "男"
			},
			hint : "请选择性别"
		},
		_operation : {
			title : "操作",
			render : () => {
				return (
					<div className="t-operation">
						<span className="edit">编辑</span>
						<span className="delete">删除</span>
					</div>		
				);
			}
		}
	},
	data : "/user/getUserList"
};

ReactDOM.render(
	<Table {...tableProps} />,
	document.getElementById("m-content")
);
