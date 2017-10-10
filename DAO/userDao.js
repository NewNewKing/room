var query = require('../config/query.js');

var LOGINSQL = 'SELECT a.*,b.roomName FROM t_user a LEFT JOIN t_room b ON a.room_id = b.id WHERE login_id = ? AND password = ?';
var FINDSQL = 'SELECT a.*,b.roomName FROM t_user a LEFT JOIN t_room b ON a.room_id = b.id';
var DELETESQL = 'DELETE FROM t_user WHERE id=';
var INSERTSQL = 'INSERT INTO t_user (id,userName,sex,login_id,password,room_id,level,createTime) VALUES(0,?,?,?,?,?,2,now())';
var FINDBYROOMIDSQL = 'SELECT * FROM t_user WHERE room_id='

//验证登录
module.exports.validate = function(data,callback){
	query(LOGINSQL,data,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}	
	});
}


//查询所有用户
module.exports.find = function(callback){
	query(FINDSQL,null,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
}


//删除用户
module.exports.remove = function(id,callback){
	query(DELETESQL + id,null,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
}


//新增用户
module.exports.insert = function(data,callback){
	query(INSERTSQL,data,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	});
}

//通过房间id查询
module.exports.findByRoomId = function(id,callback){
	query(FINDBYROOMIDSQL + id,null,function(error,results,fields){
		if(!error){
			callback(results);
		}else{
			callback('error');
		}
	})
}
