"use strict";

const http = require("http");
const redis = require("redis");
const socketIO = require("socket.io");

module.exports = function(app){
	let server = http.createServer(app);
	let io = socketIO.listen(server);
	let pub = redis.createClient();
	let sub = redis.createClient();

	io.on("connection", function(socket){
		// 接收所有浏览器端发布过来的信息
		sub.subscribe("UPDATE_IMAGE_PROGRESS");

		// 使用sub redis对象监听所有被订阅的redis信息
		// 并将收到的信息，通过socket发送到浏览器端
		sub.on("message", function(channel, message){
			socket.emit(channel, message);
		});

		// 成功建立socket链接
		console.log("socket.io connect success !");
	});

	server.listen(5000);
};
