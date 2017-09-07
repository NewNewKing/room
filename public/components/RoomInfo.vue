<template>
	<div>
		<div>
			<div class="bar">
				房间号：{{room.roomName}}
			</div>
			<div class="bar">
				已有住户：
				<template v-for='(item,index) in room.userList'>
					<span class="user">{{item.userName + (index == room.userList.length - 1 ? "" : ' 、 ')}}</span>
				</template>
			</div>
			<div class="bar">
				房间剩余室费金额：{{room.remainMoney}}元
			</div>
			<div class="bar">
				<el-input v-model="money" placeholder="请输入充值金额" style='width:180px'></el-input>
				<el-button type="primary" style="width:80px" @click='recharge()'>充值</el-button>
			</div>
			<div class="bar">
				<el-button type="text">查看充值记录</el-button>
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'roomInfo',
		data(){
			return {
				room:{},
				money:''
			}
		},
		methods:{
			getRoomInfo(){
				config.ajax({
					url:'/room/getInfo',
					data:{id:config.user.room_id},
					callback:({data}) => {
						this.room = data;
					}
				});
			},
			recharge(){
				var test = /^[0-9]*[1-9][0-9]*$/.test(this.money);
				if(!test){
					this.$alert('请输入正整数','输入错误',{
						confirmButtonText: '确定',
						type: 'warning'
					});
				}else{

				}
			}
		},
		created(){
			this.getRoomInfo();
		}
	}
</script>

<style type="text/css" scoped>
	.bar{
		line-height: 36px;
		font-size: 14px;
		margin-bottom: 10px;
	}
</style>