<template>
	<view>
		<uni-forms :modelValue="userForm" ref="form" :rules="rules" class="form">
			<uni-forms-item label="用户名" name="name">
				<uni-easyinput type="text" v-model="userForm.name" placeholder="请输入用户名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="昵称" name="nickname">
				<uni-easyinput type="text" v-model="userForm.nickname" placeholder="请输入昵称"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="password" v-model="userForm.password" placeholder="请输入密码"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" class="button" @click="submit">注册用户</button>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="error" message="用户名已存在" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userForm: {
					name: '',
					password: '',
					nickname: '',
					avatar: '/static/login.png'
				},
				rules: {
					// 对name字段进行必填验证
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入用户名',
							},
							{
								minLength: 3,
								maxLength: 10,
								errorMessage: '用户名在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					// 对password字段进行必填验证
					password: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							},
							{
								minLength: 3,
								maxLength: 20,
								errorMessage: '密码在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					// 对nickname字段进行必填验证
					nickname: {
						rules: [{
								required: true,
								errorMessage: '请输入昵称',
							},
							{
								minLength: 3,
								maxLength: 20,
								errorMessage: '昵称在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
				}
				
			}
		},
		methods: {
			async register(){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/user/findByName',
					data: {
						name:this.userForm.name
					}
				});
				console.log(res.data)
				if(res.data!=null){
					this.$refs.popup.open();
				}else{
					let x = Math.floor((Math.random()*14)+1);
					if(x<10)
						this.userForm.avatar =  '/static/forum/user_image_0'+x+'.jpg';
					else
						this.userForm.avatar =  '/static/forum/user_image_'+x+'.jpg';
					[error, res] = await uni.request({
						url: 'http://localhost:3000/user/add',
						data: {
							user:this.userForm
						},
						method:'POST'
					});
					if(!error){
						uni.navigateBack();
					}
					
				}
				
			},
			submit(){
				// console.log(this.userForm)
				this.$refs.form.submit().then(res=>{
					console.log('表单数据信息：', res);
					this.register();
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			},
			
		}
	}
</script>

<style lang="less" scoped>
	.form{
		margin: 20rpx 30rpx;
		margin-top: 100rpx;
	}
	button{
		margin: 100rpx;
	}
	
</style>
