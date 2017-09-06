<template>
	<el-col :span='4'>
		<el-menu default-active="/record" class="el-menu-vertical-demo left-bar" @open="handleOpen" @close="handleClose" :router='true'>
      		<!-- <el-submenu index="1">
        		<template slot="title"><i class="el-icon-message"></i>导航一</template>
	          	<el-menu-item index="1-1">选项1</el-menu-item>
	          	<el-menu-item index="1-2">选项2</el-menu-item>
	          	<el-menu-item index="1-3">选项3</el-menu-item>
      		</el-submenu> -->
      		<el-menu-item index="/record"><i class="el-icon-message"></i>花费记录</el-menu-item>
      		<el-menu-item index="/userInfo"><i class="el-icon-menu"></i>住户信息</el-menu-item>
      		<el-menu-item index="/roomInfo"><i class="el-icon-setting"></i>房间信息</el-menu-item>
    	</el-menu>
	</el-col>
</template>

<script type="text/javascript">
	export default{
		name:'leftMenu',
		data(){
			return {
				isCollapse:true
			}
		},
		methods:{
			handleOpen(key,keyPath){
				console.log(key,keyPath);
			},
			handleClose(key,keyPath){
				console.log(key,keyPath);
			}
		}
	}
</script>

<style type="text/css" scoped>
	.left-bar{
		height: 100%;
		overflow-y: auto;
	}
</style>