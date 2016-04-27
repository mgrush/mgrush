"use strict";

import "./index.less";
import React from "react";
import BaseUtil from "../base/util";

export default class Form extends React.Component {
	static defaultProps = {
		formId : "default-form",
		columns : {}
	};

	constructor(props) {
		super(props);
	}

	// 通过表单ID获取表单的数据
	static getFormData( formId = "default-form", formData = {}, $content = $("#" + formId) ){
		$content.find("input, select, textarea").each((index, item) => {
			formData[ $(item).attr("name") || $(item).attr("id") ] = $(item).val();
		});

		return formData;
	}

	render(){
		let itemList = BaseUtil.map(this.props.columns, (pname, pvalue) => {
			return (
				<div className="item" key={pname}>
					<label htmlFor={pname}>{pvalue.title || pvalue}</label>
					<input type="text" value="" id={pname} placeholder={pvalue.hint || ""} />
	 			</div>	
			);
		});

		return (
			<div className="m-form" id={this.props.formId}>
				{itemList}
			</div>		
		);
	}

}
