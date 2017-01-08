/**
 * 相册管理
 */

"use strict";

import "./index.less";
import React from "react";
import { Button, Row, Col } from "antd";

export default class Albums extends React.Component {
	static defaultProps = {
	};

	constructor(props){
		super(props);

		this.state = {
			//{{{
			albumList : [{
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}, {
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}, {
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}, {
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}, {
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}, {
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}, {
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}, {
				id : 10000,
				name : "艺术插画",
				description : "这里是我的艺术长廊，记载着我美好的回忆",
				photos : 300
			}]
			//}}}
		};
	}

	render(){
		let albumList = this.state.albumList.map((item, index) => {
			return (
				<div className="album col-6" key={index}>
					<div className="album-wrap">
						<div className="info">
							<h3 className="name">{item.name}</h3>
							<span className="photos">{item.photos}</span>
							<p className="description">{item.description}</p>
						</div>
					</div>
				</div>	
			);
		});

		return (
			<div className="m-albums">
				<div className="toolbar">
					<Button type="primary" size="large">创建相册</Button>
					<Button type="ghost" size="large">上传照片</Button>
				</div>
				<div className="album-list">
					{albumList}
				</div>
			</div>		
		);
	}
}
