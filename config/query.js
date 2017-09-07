var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'kingnewnew',
	database:'room_fee',
});

module.exports = function(sql,data,callback){
	pool.getConnection(function(err,connection){
		if(err){
			callback(err,null,null);
		}else{
			connection.query(sql,data,function(err,results,fields){
				connection.release();

				callback(err,results,fields);
			});
		}
	});
}