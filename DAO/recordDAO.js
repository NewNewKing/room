var query = require('../config/query.js');


var INSERTSQL = 'INSERT INTO t_record_list(id,costName,price,userName,room_id,type,createTime) VALUES(0,?,?,?,?,?,now())';
var DELSQL = 'DELETE FROM t_record_list where id='



exports.find = function(data,callback){
	var FINDSQL = 'SELECT * FROM t_record_list WHERE type='+data.type+' AND room_id='+data.room_id+' ORDER BY createTime DESC';
	query(FINDSQL,null,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});		
}


exports.insert = function(data,callback){
	query(INSERTSQL,data,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}	
	});
}

exports.removeById = function(id,callback){
	query(DELSQL+id,null,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
}

