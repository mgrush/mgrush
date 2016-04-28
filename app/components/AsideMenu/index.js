"use strict";

import "./index.less";
import React from "react";
import BaseUtil from "../Base/util";

const itemHeight = 4; // rem

export default class AsideMenu extends React.Component {
	static defaultProps = {
		menuConfig : []
	};

	constructor(props){
		super(props);
	}

	render(){
		let menuList = this.props.menuConfig.map((group, index) => {
			let styleMap = {
				height : group.items.length * itemHeight + "rem"
			};

			let itemList = group.items.map((item, index) => {
				return (
					<div className="item" key={index} onClick={this.onItemClick.bind(this, item, new Date().getTime())}>
					{item.title}
					</div>	
				);
			});

			return (
				<div className="group" key={index}>
					<div className="group-name" onClick={this.toggleMenu.bind(this)}>
						<span>{group.title}</span>
						<i className="icon-angle-up"></i>
					</div>
					<div className="group-items" data-length={group.items.length} style={styleMap}>
						{itemList}
					</div>
				</div>	
			);
		});

		return (
			<div className="m-aside-menu">
				{menuList}
			</div>		
		);
	}

	toggleMenu(event){
		let target = event.target.className.includes("group-name") ? event.target : event.target.parentNode;
		let groupItems = target.nextSibling;
		let itemCount = groupItems.getAttribute("data-length");
		let className = target.lastChild.getAttribute("class");

		if( className.includes("icon-angle-up") ) {
			target.nextSibling.style.height = "0rem";
			target.lastChild.className = "icon-angle-down";
		}else {
			target.nextSibling.style.height = itemCount * itemHeight + "rem";
			target.lastChild.className = "icon-angle-up";
		}
	}

	onItemClick(item, uniqueId){
		item.onClick && item.onClick(uniqueId);
	}
}
