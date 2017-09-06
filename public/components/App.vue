<template>
	<div id='app'>
		<router-view></router-view>
	</div>

</template>

<script>
	
	import '../css/index.css'
	import config from '../js/config.js'

	window.config = config;

	export default{
		name:'app'
	}
</script>

<style scoped>

</style>