<template>
	<div>
		<el-row :gutter="20">
			<div class="top">
				<el-col :span='6' :lg='3' :md='5' :xs='24' class="min_mar_b10">
					<el-input v-model="costName" placeholder="请输入花费名称"></el-input>
				</el-col>
				<el-col :span='6' :lg='3' :md='5' :xs='24' class="min_mar_b10">
					<el-input v-model="price" placeholder="请输入花费金额"></el-input>
				</el-col>
				<el-col :span='4' :lg='2' :md='3' :xs='24'>
					<el-button type="primary" class="w_100" @click='add()'>增加</el-button>
				</el-col>
			</div>		
		</el-row>
		<el-table
		    :data="tableData"
		    border

		    class='w_100'>
		    <el-table-column
		    	align='center'
		        prop="userName"
		        label="花费人">
		    </el-table-column>
		    <el-table-column
		    	align='center'
		      	prop="costName"
		      	label="花费名称">
		    </el-table-column>
		    <el-table-column
		    	align='center'
		      	prop="price"
		      	:formatter='moneyFilter'
		      	label="花费金额">
		    </el-table-column>    
		    <el-table-column
		    	align='center'
		        prop="createTime"
		        label="创建时间">
		    </el-table-column>

		    <el-table-column
		    	align='center'
		    	label='删除'>
		    	 <template scope="scope">
		    	 	<el-button size="small" type='danger' @click='remove(scope.row.id)'>删除</el-button>
		    	 </template>
		    </el-table-column>
		</el-table>
		
		<el-pagination
	    	layout="prev, pager, next"
	    	:page-size='10'
	    	:current-page='1'
	    	:total="20"
	    	class="center mar_t20"
	    	>
	  	</el-pagination>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'record',
		data(){
			return {
				costName:'',
				price:'',
				tableData:[]
			}
		},
		methods:{
			moneyFilter(row,colum,value){
				return '￥' + value;
			},
			remove(id){
				var that = this;
				this.$confirm('是否确认删除该条记录','提示',{
					confirmButtonText:'确定',
					cancelButtonText:'取消',
					type:'warning'
				}).then(() => {
					config.ajax({
						type:'post',
						url:'/record/remove',
						data:{
							id:id
						},
						callback({msg}){
							that.$message({
								message:msg,
								type:'success',
								showClose:true
							});
							that.getRecordList();
						}
					});
					
				}).catch(() => {

				});
			},
			add(){
				if(!this.costName) return this.$message({
					message:'花费名称不能为空',
					type:'error',
					showClose:true
				});
				if(!this.price) return this.$message({
					message:'花费金额不能为空',
					type:'error',
					showClose:true
				});

				var that = this;	

				config.ajax({
					url:'/record/add',
					type:'post',
					data:{
						costName:this.costName,
						price:this.price,
						userName:config.user.userName,
						room_id:config.user.room_id,
						type:1 
					},
					callback({data,msg}){
						that.getRecordList();
						that.clearInput();
					}
				});

			},
			clearInput(){
				this.costName = '';
				this.price = '';
				this.userName = '';
			},
			getRecordList(){
				var that = this;

				config.ajax({
					url:'/record/getList',
					type:'get',
					data:{type:1,room_id:config.user.room_id},
					callback({data}){
						that.tableData = data;
					}
				});
			},
			getRemainMoney(){
				
			}
		},
		created(){
			this.getRecordList();

			
		}
	}
</script>

<style type="text/css" scoped>
	.top{
		overflow:hidden;
		margin-bottom: 20px;
	}
</style>