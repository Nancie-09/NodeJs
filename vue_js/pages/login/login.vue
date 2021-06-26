<template>
	<view>
		<view class="avatar">
			<image src="../../static/login.png"></image>
		</view>
		<uni-forms :modelValue="userForm" ref="form" :rules="rules" class="form">
			<uni-forms-item label="用户名" name="name">
				<uni-easyinput type="text" v-model="userForm.name" placeholder="请输入用户名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="password" v-model="userForm.password" placeholder="请输入密码"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<view class="button-group">
			<button type="primary" class="button" @click="submit">登录</button>
			<button type="primary" class="button" @click="toRegister">注册</button>
		</view>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="error" message="用户名或密码错误" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userForm: {
					name: '',
					password: ''
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
				}
			}
		},
		methods: {
			submit(){
				console.log(this.userForm);
				this.$refs.form.submit().then(res=>{
					console.log('表单数据信息：', res);
					this.login();
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			},
			async login(){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/user/login',
					data: {
						name:this.userForm.name,
						password:this.userForm.password
					}
				});
				console.log(res.data)
				if(!res.data){
					this.$refs.popup.open()
				}else{
					uni.setStorageSync('user',res.data);
					uni.switchTab({
						url:'../index/index'
					})
				}
			},
			toRegister(){
				uni.navigateTo({
					url:'../register/register'
				})
			}
			
		},
	}
</script>

<style lang="less" scoped>
	.avatar{
		text-align: center;
		margin: 100rpx auto;
	}
	.avatar image{
		width: 250rpx;
		height: 250rpx;
	}
	.form{
		margin: 20rpx 30rpx;
	}
	.button-group{
		display: flex;
		margin: 30rpx 100rpx;
	}
	.button{
		width: 200rpx;
	}
	
</style>
