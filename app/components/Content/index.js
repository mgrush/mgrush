/**
 * 页面内容区域部分
 *
 */

"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Base from "Base";

export default class Content extends React.Component {
	static defaultProps = {
		contentList : {}
	};

	constructor(props){
		super(props);

		this.state = {
			contentList : props.contentList,
			selectedKey : Object.keys(props.contentList)[0]
		};
	}

	render(){
		let contentList = Base.map(this.state.contentList, (name, item) => {
			let [Comp, props = {}] = item;
			let className = (name == this.state.selectedKey ? "selected" : "") + " content-wrap";

			return (
				<div className={className} key={name}>
					<Comp {...props} /> 
				</div>
			);
		});

		return (
			<div className="m-content">
				{contentList}
			</div>
		);
	}
}
