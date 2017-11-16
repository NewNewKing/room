/*
Navicat MySQL Data Transfer

Source Server         : kingnewnew
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : room_fee

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-11-16 15:35:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_record_list
-- ----------------------------
DROP TABLE IF EXISTS `t_record_list`;
CREATE TABLE `t_record_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `costName` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `room_id` int(11) NOT NULL,
  `createTime` datetime NOT NULL,
  `type` int(255) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `t_record_list_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `t_room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for t_room
-- ----------------------------
DROP TABLE IF EXISTS `t_room`;
CREATE TABLE `t_room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomName` varchar(255) NOT NULL,
  `remainMoney` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `room_id` int(11) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `login_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createTime` datetime DEFAULT NULL,
  `level` int(11) NOT NULL DEFAULT '3',
  PRIMARY KEY (`id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `t_user_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `t_room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
