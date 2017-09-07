var query = require('../config/query.js');

var FINDSQL = 'SELECT * FROM t_record_list ORDER BY createTime DESC';
var INSERTSQL = 'INSERT INTO t_record_list(id,costName,price,userName,roomName,createTime) VALUES(0,?,?,?,?,now())';
var DELSQL = 'DELETE FROM t_record_list where id='


exports.find = function(callback){
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

