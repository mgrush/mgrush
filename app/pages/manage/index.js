/**
 * 后台管理中心
 *
 */

"use strict";

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import LayoutView from "LayoutView";
import Albums from "Albums";

class Demo extends React.Component {
	render(){
		return (
			<div>this is the component demo</div>		
		);
	}
}

const menuList = {
	picManage : {
		icon : "mail",
		title : "照片管理",
		subMenus : {
			myPic : { title : "我的相册", component : Demo }
		}
	}
};

const contentList = {
	albums : [Albums, {}]
};

ReactDOM.render(
	<LayoutView 
		selectedMenuKeys={["picManage", "myPic"]} 
		menuList={menuList} 
		contentList={contentList} />,
	document.getElementById("root")
);
