"use strict";

import "./index.less";
import React from "react";
import ReactDom from "react-dom";
import BaseUtil from "../base/util";

let Container = {
	__refers : [],
	__containers : [],

	createContainer : function(){
		let container = document.createElement("div");
			container.id = new Date().getTime();

		this.__containers.push( document.body.appendChild(container) );

		return container;
	},

	renderComponent : function(Component, props){
		var container = this.createContainer();

		this.__containers.push( container );
		this.__refers.push( ReactDom.render(<Component {...props} />, container) );
	},

	destroyComponent : function(refer){
		let referIndex = this.__refers.indexOf(refer);
		let container = this.__containers[ referIndex ];

		this.__refers.splice(referIndex);
		this.__containers.splice(referIndex);

		container.remove();
	}
};

class Modal extends React.Component {
	static defaultProps = {
		id : "default-modal",
		title : "标题",
		content : "",
		actions : [{
			name : "确定",
			action : ($content) => {
				$content.remove();
			}
		}]
	};

	constructor(props){
		super(props);
	}

	render(){
		let actionList = this.props.actions.map((item, index) => (
			<span className={item.className || ""} key={index} data-index={index} onClick={this.onToolbarItemClick.bind(this)} >
				{item.name}
			</span>
		));

		return (
			<div className="m-modal" id={this.props.id} onClick={this.onCloseDomClick.bind(this)} ref="mContent">
				<div className="main">
					<div className="title"><h3>{this.props.title}</h3></div>
					<div className="content">{this.props.content}</div>
					<div className="toolbar">{actionList}</div>
				</div>
			</div>		
		);
	}

	// 点击工具栏需要执行的回调
	onToolbarItemClick(event){
		let itemIndex = event.target.getAttribute("data-index");
		let actionItem = this.props.actions[ itemIndex ];

		if( "function" != typeof actionItem.action || actionItem.action() != false ) {
			this.remove();
		}
	}

	// 点击关闭按钮或者wrap区域，关闭当前弹窗
	onCloseDomClick(event){
		let className = event.target.getAttribute("class") || "";

		if(className.indexOf("m-modal") >= 0 || className.indexOf("close-icon") >= 0) {
			this.remove();
		}
	}

	// 删除dom节点
	remove(){
		return Container.destroyComponent(this);
	}
}

const Layer = {
	modal(props = {}){
		return Container.renderComponent(Modal, props);
	}
};

export default Layer;
