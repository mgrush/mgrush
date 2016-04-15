"use strict";

import "./index.less";
import React from "react";
import TreeNode from "./tree-node";

export default class Tree extends React.Component {
	static defaultProps = {
		nodes : []
	}

	render(){
		let nodeList = this.props.nodes.map((node, index) => <TreeNode key={index} {...node} />);

		return (
			<div className="m-tree">
				{nodeList}
			</div>	
		);
	}
}
