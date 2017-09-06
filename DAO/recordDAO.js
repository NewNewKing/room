var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'w80195909',
	database:'room_fee'
});
connection.connect();

var FINDSQL = 'SELECT * FROM t_record_list ORDER BY createTime DESC';
var INSERTSQL = 'INSERT INTO t_record_list(id,costName,price,userName,createTime) VALUES(0,?,?,?,now())';
var DELSQL = 'DELETE FROM t_record_list where id='


exports.find = function(callback){
	connection.query(FINDSQL,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
		
}


exports.insert = function(data,callback){
	connection.query(INSERTSQL,data,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}		
	});
}

exports.removeById = function(id,callback){
	connection.query(DELSQL+id,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
}

