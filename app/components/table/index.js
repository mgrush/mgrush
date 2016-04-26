"use strict";

import "./index.less";
import React from "react";
import ReactDom from "react-dom";
import TableActions from "./actions";
import TableStore from "./store";
import Constants from "./constants";
import BaseUtil from "../base/util";
import Modal from "../modal";

export default class Table extends React.Component {

	constructor( props ){
		super( props );

		// 判断数据来源是本地数据（CLIENT_DATA）还是服务端数据（REMOTE_DATA）
		this.dataType = BaseUtil.isArray(props.data) ? Constants.CLIENT_DATA : Constants.REMOTE_DATA;

		this.state = {
			count : 0, 
			page : props.page || 0,
			size : props.size || 15,
			title : props.title || "",
			columns : props.columns || {}
		};

		// 获取数据列表
		this.getDataSource();
		
		// 监听数据变化
		TableStore.addChangeListener(this.onChange.bind(this));
	}

	// 获取指定分页的数据
	getDataSource( page ){
		let dataSource = this.props.data;
		let queryParams = Object.assign({
			size : this.state.size,
			page : page || this.state.page
		}, this.props.params);

		TableStore.getData( dataSource, queryParams).then((result) => {
			this.setState(Object.assign(this.state, {
				data : result.data,
				count : result.count 
			}));
		});
	}

	render(){
		// 表格标题
		let dataThs = BaseUtil.map(this.state.columns, (pname, pvalue) => (
			<th data-key={pname} key={pname}>{BaseUtil.isObject(pvalue) ? pvalue.title : pvalue}</th>
		));

		// 表格数据列表
		let dataRows = this.state.data && this.state.data.length ? this.state.data.map((item, index) => {
			let rows = BaseUtil.map(item, (pname, pvalue) => {
				let column = this.state.columns[pname];

				return (
					<td data-key={pname} key={pname}>
						{BaseUtil.isObject(column) ? column.map[pvalue] : pvalue}
					</td>
				);
			});

			return (
				<tr key={index} data-id={item.id}>
				{rows}
				</tr>
			);
		}) : ( <tr><td colSpan={10000}>暂无数据！</td></tr> );
		

		// 分页
		let pageCount = Math.ceil(this.state.count / this.state.size);
		let pageNav = new Array(pageCount).fill(0).map((item, index) => (
			<li key={index} onClick={this.onPageItemClick.bind(this)} data-value={index} className={ index == this.state.page ? "selected" : "" }>
				{index + 1}
			</li>			
		));

		return (
			<div className="m-datalist">
				<div className="search-content">
					<div className="button" onClick={this.showAppendModal.bind(this)}>添加记录</div>		
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

	showAppendModal(event){
		let items = BaseUtil.map(this.state.columns, (pname, pvalue) => {
			return (
				<div className="form-item" key={pname}>
					<label htmlFor={pname}>{BaseUtil.isObject(pvalue) ? pvalue.title : pvalue}</label>
					<input type="text" value="" id={pname} placeholder="" />
				</div>
			);
		});

		let modalConfig = {
			title : "这里是标题",
			content : (<div className="m-form">{items}</div>)
		} 

		ReactDom.render(
			<Modal {...modalConfig} />,
			document.getElementById("container")
		);
		/**
		TableActions.create({
			id : 26,
			name : "miracle",
			age : "18",
			gender : "female"
		});
		**/
	}

	onChange(){
		this.setState({
			page : 0,
			size : 15,
			data : TableStore.getData()
		});
	}

	onPageItemClick(event){
		let page = event.target.getAttribute("data-value");

		if( this.dataType === Constants.CLIENT_DATA ) {
		
		}else {
			this.getDataSource( page );
		}
	}
}
