-- 用户数据表
CREATE TABLE IF NOT EXISTS `user` (
	`id` int NOT NULL AUTO_INCREMENT,
	`username` varchar(25) NOT NULL default "",
	`password` varchar(32) NOT NULL default "",
	`gender` tinyint(1) NOT NULL default 0 COMMENT "0: 女, 1: 男",
	`age` tinyint(8) NOT NULL default 0,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;