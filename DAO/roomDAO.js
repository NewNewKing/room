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