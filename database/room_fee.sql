/*
Navicat MySQL Data Transfer

Source Server         : kingnewnew
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : room_fee

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-11-16 15:33:39
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
-- Records of t_record_list
-- ----------------------------
INSERT INTO `t_record_list` VALUES ('54', '充值', '200', '王兴欣', '1', '2017-09-08 15:50:44', '2');
INSERT INTO `t_record_list` VALUES ('55', '充值', '200', '王兴欣', '1', '2017-09-08 15:52:55', '2');
INSERT INTO `t_record_list` VALUES ('56', '充值', '200', '王兴欣', '1', '2017-09-08 15:53:41', '2');
INSERT INTO `t_record_list` VALUES ('57', '充值', '200', '王兴欣', '1', '2017-09-08 15:54:08', '2');
INSERT INTO `t_record_list` VALUES ('58', '充值', '1', '王兴欣', '1', '2017-09-08 15:54:28', '2');
INSERT INTO `t_record_list` VALUES ('59', '充值', '5', '王兴欣', '1', '2017-09-08 15:54:41', '2');
INSERT INTO `t_record_list` VALUES ('60', '充值', '4', '王兴欣', '1', '2017-09-08 15:55:02', '2');
INSERT INTO `t_record_list` VALUES ('61', '充值', '500', '王兴欣', '1', '2017-09-08 15:55:13', '2');
INSERT INTO `t_record_list` VALUES ('62', '充值', '123', '王兴欣', '1', '2017-09-08 15:56:20', '2');
INSERT INTO `t_record_list` VALUES ('63', '清空', '800', '王兴欣', '1', '2017-09-12 10:24:38', '1');
INSERT INTO `t_record_list` VALUES ('64', '123', '33', '王兴欣', '1', '2017-09-12 14:41:28', '1');
INSERT INTO `t_record_list` VALUES ('65', '充值', '500', '王兴欣', '1', '2017-09-12 14:41:34', '2');
INSERT INTO `t_record_list` VALUES ('66', '<script>console.log(1)</script>', '2', '王兴欣', '1', '2017-09-12 14:52:29', '1');
INSERT INTO `t_record_list` VALUES ('67', '‘’‘’‘’‘’', '33', '王兴欣', '1', '2017-09-12 14:57:06', '1');
INSERT INTO `t_record_list` VALUES ('68', '\'\'\'\'\'\'\'\'\'', '8', '王兴欣', '1', '2017-09-12 14:57:17', '1');
INSERT INTO `t_record_list` VALUES ('69', '\'\'', '6', '王兴欣', '1', '2017-09-12 14:57:20', '1');
INSERT INTO `t_record_list` VALUES ('70', '<script>alert(1)</script>', '44', '王兴欣', '1', '2017-09-12 15:04:13', '1');

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
-- Records of t_room
-- ----------------------------
INSERT INTO `t_room` VALUES ('1', '6-1-2003', '374');

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

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', '王兴欣', '1', '1', 'wangxx', 'wangxx', null, '2');
INSERT INTO `t_user` VALUES ('11', '程伟', '1', '1', 'chengw', 'chengw', '2017-09-08 11:08:46', '3');
INSERT INTO `t_user` VALUES ('12', '王雨霜', '1', '1', 'wangys', 'wangys', '2017-09-08 11:09:17', '3');
INSERT INTO `t_user` VALUES ('13', '陈思龙', '1', '1', 'chengsl', 'chengsl', '2017-09-08 11:09:31', '3');
