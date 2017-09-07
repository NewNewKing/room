var roomDAO = require('../DAO/roomDAO');
var userDAO = require('../DAO/userDao');


//查询对应房间信息
module.exports.find = function(id,callback){
	roomDAO.findById(id,function(data){
		console.log(data);
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
				msg:'没有找到相应房间'
			});
		}else{
			userDAO.findByRoomId(id,function(user){
				if(user === 'error'){
					callback({
						code:500,
						data:null,
						msg:'查询数据库出错'
					});
				}else{
					callback({
						code:200,
						data:{userList:user,id:data[0].id,remainMoney:data[0].remainMoney,roomName:data[0].roomName},
						msg:'查询用户表成功'
					});
				}
			})
		}
	});
}