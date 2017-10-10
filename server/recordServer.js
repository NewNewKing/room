var recordDAO = require('../DAO/recordDAO');
var roomDAO = require('../DAO/roomDAO');


//插入消费或者充值记录
exports.insert = function({costName,price,userName,room_id,type},callback){
	var data = [costName,price,userName,room_id,type];
	recordDAO.insert(data,function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:type == 1 ? '添加消费记录失败' : '充值失败'
			});
		}else{
			callback({
				code:200,
				data:null,
				msg:type == 1 ? '添加消费记录成功' : '充值成功'
			});

			roomDAO.updateMoney({id:room_id,price:type == 1 ? -price : price},function(){});
		}
	});
}


//查找消费记录
exports.find = function(data,callback){
	recordDAO.find(data,function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'获取记录失败'
			});
		}else{
			callback({
				code:200,
				data:data,
				msg:'获取记录成功'
			});
		}
	});
}


//删除消费记录
exports.remove = function(id,callback){
	recordDAO.removeById(id,function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'删除记录失败'
			});
		}else{
			callback({
				code:200,
				data:null,
				msg:'删除成功'
			})
		}
	});
}