var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'w80195909',
	database:'room_fee'
});
connection.connect();

var FINDSQL = 'SELECT * FROM record_list ORDER BY create_time DESC';
var INSERTSQL = 'INSERT INTO record_list(ID,name,price,create_name,create_time) VALUES(0,?,?,?,now())';
var DELSQL = 'DELETE FROM record_list where id='


exports.find = function(callback){
	connection.query(FINDSQL,function(error,results,fields){
		if(!error){
			callback(results);
		}
	});
		
}


exports.insert = function(data,callback){
	connection.query(INSERTSQL,data,function(error,results,fields){
		if(!error){
			callback(results);
		}		
	});
}

exports.removeById = function(id,callback){
	connection.query(DELSQL+id,function(error,results,fields){
		if(!error){
			callback(results);
		}
	});
}

