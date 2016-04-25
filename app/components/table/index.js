"use strict";

import "./index.less";
import React from "react";
import TableActions from "./actions";
import TableStore from "./store";
import BaseUtil from "../base/util";

export default class Table extends React.Component {
	constructor( props ){
		super( props );

		// 获取数据项配置
		let { index = 0, size = 15, title = "", data, columns, params = {} } = props;

		// 获取data数据列表
		if( "string" == typeof data ) {
		}

		// 获取分页的总数
		let pages = Math.ceil(data.length / size);

		// 监听数据变化
		TableStore.addChangeListener(this.onChange.bind(this));

		// 设置state数据
		this.state = { pages, index, size, title, data, columns };
	}

	render(){
		// 表格标题
		let dataThs = BaseUtil.map(this.state.columns, (pname, pvalue) => (
			<th data-key={pname} key={pname}>{pvalue}</th>
		));

		// 表格数据列表
		let dataRows = this.state.data.length ? this.state.data.map((item, index) => {
			let rows = BaseUtil.map(item, (pname, pvalue) => (
				<td data-key={pname} key={pname}>{pvalue}</td>
			));

			return (
				<tr key={index} data-id={item.id}>
				{rows}
				</tr>
			);
		}) : ( <tr><td colSpan={10000}>暂无数据！</td></tr> );
		

		// 分页
		let pageNav = new Array(this.state.pages).fill(0).map((item, index) => (
			<li key={index}>{index + 1}</li>			
		));

		return (
			<div className="m-datalist">
				<div className="search-content">
					<div className="search-row">
						<label>姓名：</label>
						<input type="text" placeholder="输入查询姓名！"/>
					</div>
					<div className="button" onClick={this.onClick}>添加记录</div>		
				</div>
				<div className="table-content">
					<div className="t-title">{this.state.title}</div>
					<table className="">
						<thead><tr>{dataThs}</tr></thead>
						<tbody>{dataRows}</tbody>
					</table>
					<div className="t-footer">
						<ul>{pageNav}</ul>
					</div>
				</div>
			</div>
		);
	}

	onClick(){
		TableActions.create({
			id : 26,
			name : "miracle",
			age : "18",
			gender : "female"
		});
	}

	onChange(){
		this.setState({
			pageIndex : 0,
			size : 15,
			data : TableStore.getData()
		});
	}
}
