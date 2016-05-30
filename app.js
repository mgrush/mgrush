"use strict";

const http			= require('http');
const express		= require('express');
const path			= require('path');
const favicon		= require('serve-favicon');
const logger		= require('morgan');
const cookieParser	= require('cookie-parser');
const bodyParser	= require('body-parser');
const debug			= require('debug')('mgrush:server');

const app			= express();
const env			= app.get("env");

// 设置视图文件类型以及路径
app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// 路由设置
require('./lib/routes')(app);

// 404异常处理
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// 500异常处理
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('pages/error', {
		message: err.message,
		error: env == "development" ? err : {}
	});
});

// 设置访问端口
const port = process.env.PORT || '3000';
app.set('port', port);

// 创建服务器
const server = http.createServer(app).listen(port);

server.on('error', function(error){
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
});

server.on('listening', function(){
	let addr = server.address();
	let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

	debug('listening on ' + bind);
});
