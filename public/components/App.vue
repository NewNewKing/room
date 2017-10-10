<template>
	<div id='app'>
		<router-view></router-view>
	</div>

</template>

<script>
	
	import '../css/index.css'
	import config from '../js/config.js'

	window.config = config;

	var user = sessionStorage.getItem('user');
	config.user = JSON.parse(user);
	export default{
		name:'app'
	}
</script>

<style scoped>

</style>template=compiler