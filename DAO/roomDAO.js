var query = require('../config/query.js');

var FINDSQL = 'SELECT * FROM t_room WHERE id='


//根据房间ID来查询
module.exports.findById = function(id,callback){
	query(FINDSQL+id,null,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
}

//根据房间ID来更新剩余金额
module.exports.updateMoney = function(data,callback){

	var UPDATESQL = 'UPDATE t_room SET remainMoney = remainMoney + ' + data.price +' WHERE id = ' + data.id;
	query(UPDATESQL,null,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
}