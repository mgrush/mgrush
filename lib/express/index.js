var express			= require("express");
var path			= require("path");
var bodyParser		= require("body-parser");
var cookieParser	= require('cookie-parser');

var app				= express();

// 设置模版语言以及视图页面路径
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../app"));

// 设置静态资源的路径
app.use(express.static(path.join(__dirname, "../../build")));

// 解析post提交中的body数据以及文件上传内容
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// 确保在配置了/lib/session之后能够通过request.session获取会话信息
app.use(cookieParser());

module.exports = app;
