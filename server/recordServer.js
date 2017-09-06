var recordDAO = require('../DAO/recordDAO');

exports.insert = function(data,callback){
	var data = [data.costName,data.price,data.userName];
	recordDAO.insert(data,callback);
}

exports.find = function(callback){
	recordDAO.find(callback);
}

exports.remove = function(id,callback){
	recordDAO.removeById(id,callback);
}