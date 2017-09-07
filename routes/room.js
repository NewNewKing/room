var express = require('express');
var router = express.Router();

var roomServer = require('../server/roomServer');

//获取房间相关信息
router.get('/getInfo',function(req,res){
	roomServer.find(req.query.id,function(data){
		res.send(data);
	});
});


module.exports = router;

