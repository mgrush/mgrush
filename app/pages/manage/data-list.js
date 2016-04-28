"use strict";

import React from "react";
import Table from "../../components/Table";

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

export default class DataList extends React.Component {
	render(){
		return (
			<div className="m-data-list">
				<Table {...tableProps} />
			</div>		
		);
	}
};

