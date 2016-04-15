"use strict";

import "./index.less";
import React from "react";
import Tree from "../tree";

export default class Guide extends React.Component {
	static defaultProps = {
		guideName : ""
	}

	state = {
		nodes : [{
			nodeId : 10001,
			nodeName : "快速上手",
			url : "#",
			selected : 1
		}, {
			nodeId : 10002,
			nodeName : "如何高效开发",
			url : "#"
		}, {
			nodeId : 10003,
			nodeName : "组件列表",
			children : [{
				nodeId : 10004,
				nodeName : "下拉列表",
				url : "#"
			}, {
				nodeId : 10004,
				nodeName : "表单组件",
				children : [{
					nodeId : 10005,
					nodeName : "表单初始化",
					url : "#"
				}]
			}]
		}]
	}

	render(){
		return (
			<div className="m-guide">
				<Tree nodes={this.state.nodes} />
				<div className="m-post"></div>
			</div>	
		);
	}
}
