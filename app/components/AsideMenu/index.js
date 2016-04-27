"use strict";

import "./index.less";
import React from "react";

export default class AsideMenu extends React.Component {
	render(){
		return (
			<dl className="m-aside-menu">
				<dt className="group-name">我的工作</dt>
				<dd className="item">我的申请单列表</dd>
				<dd className="item">我的申请单列表</dd>
				<dd className="item">我的申请单列表</dd>
				<dt className="group-name">我的工作</dt>
				<dd className="item">我的申请单列表</dd>
				<dd className="item">我的申请单列表</dd>
				<dd className="item">我的申请单列表</dd>
				<dt className="group-name">我的工作</dt>
				<dd className="item">我的申请单列表</dd>
				<dd className="item">我的申请单列表</dd>
				<dd className="item">我的申请单列表</dd>
			</dl>		
		);
	}
}
