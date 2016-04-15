var express			= require("express");
var path			= require("path");

var app				= express();

// 设置模版语言以及视图页面路径
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../app"));

// 设置静态资源的路径
app.use(express.static(path.join(__dirname, "../../build")));

module.exports = app;
