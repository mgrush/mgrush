var app		= require("./lib/express");
var session = require("./lib/session")(app);
var redis	= require("./lib/socket")(app);
var sequelize = require("./lib/sequelize").init();
var route	= require("./lib/route")(app);

module.exports	= app;
