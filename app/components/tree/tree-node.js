"use strict";

import React from "react";

export default class TreeNode extends React.Component {
	static defaultProps = {
		nodeId : 0,
		nodeName : "nodeName",
		children : [],
		url : ""
	}

	getNodeContent(nodeData, level = 0, nodeIndex = 0){
		let nodeChildClass = "children";
		let className = "tree-node level-" + level;
		let nodeNameClass = "node-name " + (nodeData.selected ? "selected" : "");

		if( nodeData.children && nodeData.children.length ) {
			let childList = nodeData.children.map((node, index) => this.getNodeContent(node, level + 1, index));

			return (
				<div className={className} key={nodeIndex} isLeaf="false">
					<div className={nodeNameClass}>{nodeData.nodeName}</div>
					<div className={nodeChildClass}>{childList}</div>
				</div>
			);	
		}else {
			return (
				<div className={className} key={nodeIndex} isLeaf="true">
					<div className={nodeNameClass} data-url={nodeData.url}>{nodeData.nodeName}</div>
				</div>
			);
		}
	}

	render(){
		return this.getNodeContent( this.props );
	}
}
