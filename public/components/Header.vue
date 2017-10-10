<template>
	<div class='header'>
		我是头部
		<span @click='logout()' class='exit'>退出登录</span>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'header',
		methods:{
			logout(){
				this.$confirm('确认注销登录？','提示',{
					confirmButtonText:'确定',
					cancelButtonText:'取消',
					type:'warning'
				}).then(() => {
					config.user = '';
					sessionStorage.removeItem('user');
					this.$router.push('/login');

					
				}).catch(() => {

				});
			}
		}
	}
</script>

<style type="text/css"scoped>
	.header{
		height: 60px;
		background: #58b7ff;
	}
	.exit{
		color:#fff;
	}
</style>