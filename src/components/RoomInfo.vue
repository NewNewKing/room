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
				<el-button type="text" @click='showRecord()'>查看充值记录</el-button>
			</div>
		</div>
		<el-dialog title="充值记录" :visible.sync="layer">
		  	<el-table :data="rechargeList" height="400">
		    	<el-table-column property="userName" label="操作人" align='center' width='100'></el-table-column>
		    	<el-table-column property="costName" label="操作" align='center' width='100'></el-table-column>
		    	<el-table-column property="price" label="金额" :formatter='moneyFilter' align='center' width='100'></el-table-column>
		    	<el-table-column property="createTime" label="操作时间" align='center'></el-table-column>
		  	</el-table>
		</el-dialog>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'roomInfo',
		data(){
			return {
				room:{},
				money:'',
				layer:false,
				rechargeList:[]
			}
		},
		methods:{
			moneyFilter(row,colum,value){
				return '￥' + value;
			},
			showRecord(){
				this.layer = true;
				config.ajax({
					url:'/record/getList',
					data:{
						type:2,
						room_id:config.user.room_id
					},
					callback:({data}) => {
						this.rechargeList = data;
					}
				})
			},
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
						type: 'error'
					});
				}else{
					this.$confirm('确认充值'+ this.money,'确认',{
						confirmButtonText:'确定',
						cancelButtonText:'取消',
						type:'info'
					}).then(() => {
						config.ajax({
							type:'post',
							data:{
								costName:'充值',
								price:this.money,
								userName:config.user.userName,
								room_id:config.user.room_id,
								type:2
							},
							url:"/record/add",
							callback:({data,msg}) => {
								this.$message({
									message:'充值成功',
									type:'success',
									showClose:true
								});
								this.room.remainMoney = +this.money + +this.room.remainMoney;
								this.money = '';
							}
						});
					}).catch(() => {

					});
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