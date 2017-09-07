var recordDAO = require('../DAO/recordDAO');

exports.insert = function(data,callback){
	var data = [data.costName,data.price,data.userName,data.roomName];
	recordDAO.insert(data,function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'添加消费记录失败'
			});
		}else{
			callback({
				code:200,
				data:null,
				msg:'添加成功'
			});
		}
	});
}

exports.find = function(callback){
	recordDAO.find(function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'获取花费记录失败'
			});
		}else{
			callback({
				code:200,
				data:data,
				msg:'获取花费记录成功'
			});
		}
	});
}

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