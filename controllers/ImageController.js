"use strict";

const fs = require("fs");
const MD5 = require("md5");
const Redis = require("redis");
const pub = Redis.createClient();
const Promise = require("promise");
const Formidable = require("formidable");
const cacheDir = "/tmp/mgrush/";

var ImageController = {
	upload : function(req, res){
		var extName			= "";
		var userData		= req.session.userData;
		var userCacheDir	= cacheDir + userData.username;
		var form			= new Formidable.IncomingForm();

		form.type		= true;
		form.encoding	= "utf-8";
		form.uploadDir	= userCacheDir;
		form.keepExtensions = true;
		form.maxFieldsSize	= 2 * 1024 * 2014; // 2M大小限制

		if( !fs.existsSync(userCacheDir) ) {
			fs.mkdirSync(userCacheDir);
		}

		form.parse(req, function(error, fields, files){
			if( error ) {
				return res.json({ status : 1, message : error.toString() });
			}

			switch( files.uploadFile.type ){
				case "image/jpeg" :
				case "image/pjpeg" :
					extName		= "jpg";
					break;

				case "image/png" :
				case "image/x-png" :
					extName		= "png";
					break;
			}

			if( !extName ) {
				return res.json({ status : 1, message : "当前只支持jpg和png类型的文件上传" });
			}

			fs.renameSync(files.uploadFile.path, form.uploadDir + "/" + MD5(form.uploadDir) + "." + extName);

			res.json({ status : 0 });
		});

		form.on("progress", function(received, expected){
			pub.publish("UPDATE_IMAGE_PROGRESS", received * 100 / expected + "%");
		});
	}
};

module.exports = ImageController;
