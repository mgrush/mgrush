"use strict";

import React from "react";
import IO from "socket.io-client";
import BaseUtil from "../../../components/Base/util";

const socket = IO.connect("http://127.0.0.1:5000");

socket.on("connect", function(){
	console.log("client connected !");
});

socket.on("UPDATE_IMAGE_PROGRESS", function(data){
	console.log("socket data :", data);
});

export default class UploadImage extends React.Component {
	constructor(props) {
		super(props);

	}

	render(){
		return (
			<div className="m-upload">
				<input type="file" ref="uploadFile" />
				<span onClick={this.uploadImage.bind(this)}>上传</span>
			</div>
		);
	}

	uploadImage(){
		let formData = new FormData();

		formData.append("uploadFile",this.refs.uploadFile.files[0]);

		$.ajax({
			url : "/image/upload",
			type : "post",
			data : formData,
			cache : false,
			contentType : false,
			processData : false,
			success : function(result){
				console.log(result);
			},
			error : function(xhr, error){
				console.log(error);		
			}
		});
	}
}
