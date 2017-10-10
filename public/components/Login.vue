<template>
	<div>
		<input type="text" v-model='username' placeholder="请输入账号">
		<input type="password" v-model='password' placeholder="请输入密码">
		
		<button @click='login()'>点击登录</button>
	</div>
</template>

<script>
	export default{
		name:'login',
		data(){
			return {
				username:"",
				password:""
			}
		},
		methods:{
			login(){
				if(!this.username) return this.$message({
					message:'请输入账号',
					type:'error',
					showClose:true
				});

				if(!this.password) return this.$message({
					message:'请输入密码',
					type:'error',
					showClose:true
				});

				var that = this;

				config.ajax({
					type:'post',
					url:'/user/login',
					data:{
						username:this.username,
						password:this.password
					},
					callback:function({data}){

						sessionStorage.setItem('user',JSON.stringify(data));
						config.user = data;
						that.$router.push('/home');
					}
				});
				// this.$router.push('/home');
			}
		}
	}
</script>