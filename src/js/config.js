import $ from './jquery-1.11.3.min'
import Vue from 'vue'

var vue = new Vue();


export default {
	ajax:function({callback,url,type = 'GET',data}){
		var params = {
			error(){
				vue.$message({
					message:'服务器连接错误',
					type:'error',
					showClose:true
				});
			},
			success(res){
				if(res.code === 200){
					callback(res);
				}else{
					vue.$message({
						message:res.msg,
						type:'error',
						showClose:true
					});
				}
			}
		};

		params.url = url;
		params.type = type;
		params.data = data;

		$.ajax(params);
	}
}