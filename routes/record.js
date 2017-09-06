var express = require('express');
var router = express.Router();
var recordServer = require('../server/recordServer');

router.get('/getList',function(req,res){
	recordServer.find(function(data){
		if(data === 'error'){
			res.send({
				code:500,
				data:null,
				msg:'获取花费记录失败'
			});
		}else{
			res.send({
				code:200,
				data:data,
				msg:'获取花费记录成功'
			});
		}
		
	});
});

router.post('/add',function(req,res){
	var data = req.body;
	recordServer.insert(data,function(data){
		if(data === 'error'){
			res.send({
				code:500,
				data:null,
				msg:'添加消费记录失败'
			});
		}else{
			res.send({
				code:200,
				data:null,
				msg:'添加成功'
			});
		}
		
	});
});

router.post('/remove',function(req,res){
	var id = req.body.id;
	recordServer.remove(id,function(data){
		if(data === 'error'){
			res.send({
				code:500,
				data:null,
				msg:'删除记录失败'
			});
		}else{
			res.send({
				code:200,
				data:null,
				msg:'删除成功'
			})
		}
		
	});
});

module.exports = router;
