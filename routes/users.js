var express = require('express');
var router = express.Router();

var userServer = require('../server/userServer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录接口
router.post('/login',function(req,res){
	userServer.login(req.body,function(data){
		res.send(data);
	});
});

//获取用户列表
router.get('/getUserList',function(req,res){
	userServer.find(function(data){
		res.send(data);
	})
});

//删除用户
router.post('/remove',function(req,res){
	userServer.remove(req.body.id,function(data){
		res.send(data);
	});
});

//新增用户
router.post('/add',function(req,res){
	userServer.add(req.body,function(data){
		res.send(data);
	});
});

module.exports = router;
