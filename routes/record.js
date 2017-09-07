var express = require('express');
var router = express.Router();
var recordServer = require('../server/recordServer');

router.get('/getList',function(req,res){
	recordServer.find(function(data){
		res.send(data);		
	});
});

router.post('/add',function(req,res){
	var data = req.body;
	recordServer.insert(data,function(data){
		res.send(data);			
	});
});

router.post('/remove',function(req,res){
	var id = req.body.id;
	recordServer.remove(id,function(data){
		res.send(data);		
	});
});

module.exports = router;
