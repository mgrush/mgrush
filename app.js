var app		= require("./lib/express");
var webpack = require("./lib/webpack");
var session = require("./lib/session")(app);
var route	= require("./lib/route")(app);
var nodemon = require("./lib/nodemon");

module.exports	= app;
