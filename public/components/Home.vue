<template>
	<div class='home'>
		<el-header></el-header>
		<left-menu class='content'></left-menu>
		<right-content class='content'></right-content>
	</div>
</template>

<script type="text/javascript">
	import elHeader from './Header'
	import leftMenu from './LeftMenu.vue'
	import rightContent from './RightContent.vue'

	export default{
		name:'home',
		components:{elHeader,leftMenu,rightContent}
	}
</script>