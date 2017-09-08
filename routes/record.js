var express = require('express');
var router = express.Router();
var recordServer = require('../server/recordServer');

//获取花费记录表
router.get('/getList',function(req,res){
	recordServer.find(req.query,function(data){
		res.send(data);		
	});
});


//新增记录
router.post('/add',function(req,res){
	var data = req.body;
	recordServer.insert(data,function(data){
		res.send(data);			
	});
});


//删除记录
router.post('/remove',function(req,res){
	var id = req.body.id;
	recordServer.remove(id,function(data){
		res.send(data);		
	});
});

module.exports = router;
