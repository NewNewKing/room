var userDao = require('../DAO/userDao.js');

//登录验证
module.exports.login = function(data,callback){
	userDao.validate([data.username,data.password],function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'查询数据库出错'
			});
		}else if(data.length === 0){
			callback({
				code:404,
				data:null,
				msg:'账号或者密码错误'
			});
		}else{
			callback({
				code:200,
				data:data[0],
				msg:'登录成功'
			});
		}
	});
}


//查询所有用户
module.exports.find = function(callback){
	userDao.find(function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'查询数据库出错'
			});
		}else{
			callback({
				code:200,
				data:data,
				msg:'查询用户表成功'
			});
		}
	});
}


//根据id删除用户
module.exports.remove = function(id,callback){
	userDao.remove(id,function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'删除失败'
			});
		}else{
			callback({
				code:200,
				data:null,
				msg:'删除成功'
			});
		}
	});
}


//新增用户
module.exports.add = function(data,callback){
	userDao.insert([data.username,data.sex,data.login_id,data.password,data.room_id],function(data){
		if(data === 'error'){
			callback({
				code:500,
				data:null,
				msg:'添加失败'
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