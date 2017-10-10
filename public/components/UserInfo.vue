<template>
	<div>
		<el-table
    		:data="userList"
    		border
    		style="width: 100%">
    		<el-table-column
	      	prop="userName"
	      	label="姓名"
	      	align='center'>
	    	</el-table-column>
	    	<el-table-column
	      	prop="sex"
	      	label="性别"
	      	align='center'
	      	:formatter='sexFilter'>
	    	</el-table-column>
	    	<el-table-column
	      	prop="roomName"
	      	align='center'
	      	label="所在房间">
	    	</el-table-column>
	    	<el-table-column
	      	prop="createTime"
	      	align='center'
	      	label="加入日期">
	    	</el-table-column>
	    	<el-table-column label="操作" align='center'>
		      	<template scope="scope">
		        <el-button
		          size="small"
		          type="danger"
		          @click="remove(scope.row)">删除</el-button>
		      	</template>
		    </el-table-column>
	  	</el-table>

	  	<el-dialog title="添加新成员" :visible.sync="layer" >
	  		<el-form label-width="80px" :model='form' :rules='rules' ref='ruleform'>
	  			<el-form-item label="姓名" prop="username">
			      	<el-input v-model="form.username"></el-input>
			    </el-form-item>
			    <el-form-item label="性别">
				    <el-radio-group v-model="form.sex">
				      	<el-radio :label='1'>男</el-radio>
				      	<el-radio :label='0'>女</el-radio>
				    </el-radio-group>
			  	</el-form-item>
			    <el-form-item label="账号" prop='login_id'>
			      	<el-input v-model="form['login_id']"></el-input>
			    </el-form-item>
			    <el-form-item label="密码" prop='password'>
			      	<el-input v-model="form.password" type='password'></el-input>
			    </el-form-item>
			    <el-form-item label="确认密码" prop='validPwd'>
			      	<el-input v-model="form.validPwd" type='password'></el-input>
			    </el-form-item>

			    <el-form-item>
				    <el-button type="primary" @click="certain('ruleform')">确认添加</el-button>
				    <el-button @click='layer = false'>取消</el-button>
			  	</el-form-item>
	  		</el-form>
	  		
		</el-dialog>



	  	<div class='mar_t20'>
	  		<el-button type='info' class='fr' @click='openAdd()'>添加新成员</el-button>
	  	</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'userInfo',
		data(){
			var validPwd = (rule,value,callback) => {
				if (value === '' || value == undefined) {
		          	callback(new Error('请再次输入密码'));
		        } else if (value !== this.form.password) {
		          	callback(new Error('两次输入密码不一致!'));
		        } else {
		          	callback();
		        }
			};
			return {
				userList:[],
				layer:false,
				form:{
					sex:1
				},
				rules:{
					username:[
						{required: true, message: '请输入姓名', trigger: 'blur' }
					],
					login_id:[
						{required: true, message: '请输入账号', trigger: 'blur' }
					],
					password:[
						{required:true,message:'请输入密码',trigger:'blur'}
					],
					validPwd:[
						{validator:validPwd,trigger:'blur',required:true}
					]
				}
			}
		},
		methods:{
			certain(formName){
				this.$refs[formName].validate((valid) => {
					if(valid){
						config.ajax({
							type:"post",
							url:'/user/add',
							data:Object.assign({},this.form,{room_id:config.user.room_id}),
							callback:({msg}) => {
								this.$message({
									message:msg,
									type:'success',
									showClose:true
								});
								this.layer = false;
								this.getUserList();
							}
						});
					}else{
						return false;
					}
				});
			},
			openAdd(){
				this.layer = true;
				this.form = {sex:1};
			},
			remove(item){
				let that = this;
				this.$confirm('确认要删除' + item.userName + '？',{
					confirmButtonText:'确定',
					cancelButtonText:'取消',
					type:'warning'
				}).then(() => {
					config.ajax({
						type:'post',
						data:{id:item.id},
						url:'/user/remove',
						callback({msg}){
							that.$message({
								message:msg,
								type:'success',
								showClose:true
							});
							that.getUserList();
						}
					});
				}).catch(() => {

				});
				console.log(item);
			},
			getUserList(){
				let that = this;
				config.ajax({
					url:'/user/getUserList',
					callback({data,msg}){
						that.userList = data;
					}
				});
			},
			sexFilter(row,column,cellValue){
				return cellValue == 1 ? '男' : '女'
			}
		},
		created(){
			this.getUserList();
		}
	}
</script>