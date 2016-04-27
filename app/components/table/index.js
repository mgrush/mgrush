"use strict";

import "./index.less";
import React from "react";
import ReactDom from "react-dom";

import TableActions from "./actions";
import TableStore from "./store";
import Constants from "./constants";

import BaseUtil from "../base/util";
import Form from "../Form";
import Layer from "../Layer";

export default class Table extends React.Component {

	static defaultProps = {
		count : 0,		// 记录总数
		page : 0,		// 当前的page页码
		size : 15,		// 每一页显示的数据的多少
		title : "",		// 表格的标题
		columns : {},	// 列设置
		data : []		// 需要显示的数据列表
	};

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
			let columns = BaseUtil.map(this.state.columns, (pname, column) => {
				let isObj = BaseUtil.isObject(column);
				let hasMap = isObj && BaseUtil.isObject(column.map);
				let hasRender = isObj && BaseUtil.isFunc(column.render);
				let pvalue = hasMap ? column.map[ item[pname] ] : item[ pname ];

				return (
					<td data-key={pname} key={pname}>
					{ hasRender ? column.render(pvalue) : pvalue }
					</td>	
				);
			});

			return (
				<tr key={index} data-id={item.id}>{columns}</tr>
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
		let columns = BaseUtil.clone(this.state.columns, (pname, item) => {
			return !BaseUtil.isObject(item) || item.editable !== false;
		});

		let props = {
			title : "这里是标题",
			content : (<Form columns={columns} />),
			actions : [{
				name : "确定",
				className : "confirm",
				action : () => {
					let formData = Form.getFormData();

					console.log(formData);
				}
			}, {
				name : "取消",
				className : "cancel",
				action : () => {
				}
			}] 
		} 

		Layer.modal( props );

		/*
		ReactDom.render(
			<Modal {...modalConfig} />,
			document.getElementById("container")
		);
		*/

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
