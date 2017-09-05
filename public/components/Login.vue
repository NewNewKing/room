<template>
	<div>
		<button @click='login()'>点击登录</button>
	</div>
</template>

<script>
	export default{
		name:'login',
		methods:{
			login(){
				this.$router.push('/home');
			}
		}
	}
</script>