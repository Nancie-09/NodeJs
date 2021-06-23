<template>
	<view>
		<view class="input" >
			<span>用户名：</span>
			<input type="text" disabled="disabled" :value="name">
		</view>
		<view class="input">
			<span>昵称：</span>
			<input type="text" v-model="nickname">
		</view>
		<view v-if="modifyP === true">
			<view class="input" >
				<span>密码：</span>
				<input type="password" v-model="password1">
			</view>
			<view class="input" >
				<span>确认密码：</span>
				<input type="password" v-model="password2">
			</view>
		</view>
		<view class="buttons">
			<view class="button" @click="modifyPassword()" v-if="modifyP === false">
				<span>修改密码</span>
			</view>
			<view class="button" @click="modifyPassword()" v-if="modifyP === true">
				<span>修改昵称</span>
			</view>
			<view class="button" @click="modify()">
				<span>确认修改</span>
			</view>
		</view>
		<Tips :tips="tips" @showable="getShow"></Tips>
	</view>
</template>

<script>
	import Tips from '../../components/Tips.vue'
	export default {
		components:{
			Tips
		},
		data() {
			return {
				tips:{
					show: false,
					content:"",
					time: 0,
				},
				user:null,
				nickname:'',
				name:'111',
				password1:null,
				password2:null,
				modifyP:false,
			}
		},
		methods: {
			getShow(val) {
				this.tips.show = val
			},
			modifyPassword() {
				this.modifyP = !this.modifyP
			},
			modify() {
				if(this.modifyP === false) {
					// 修改昵称
				}
				else {
					if(this.password1 != this.password2){
						this.tips = {
							show: true,
							content:"两次输入密码不同，请重输",
							time: 3,
						};
					}
					else {
						//修改密码和昵称
					}
				}
			}
		}
	}
</script>

<style scoped>
	.input{
		display: flex;
		flex-direction: row;
		margin: 40rpx;
		border-radius: 10rpx;
		background-color: #e1e5e0;;
	}
	.input span{
		flex: 1;
		margin: 20rpx 0;
		margin-left: 20rpx;
	}
	.input input{
		flex: 3;
		border: #b8c1b7 solid 1rpx;
		margin: auto 0;
		margin-right: 80rpx;
	}
	.button{
		width: 300rpx;
		height: 70rpx;
		margin: 40rpx auto;
		border-radius: 10rpx;
		background-color: #e1e5e0;
		text-align: center;
		padding-top: 15rpx;
	}
	.buttons{
		display: flex;
		flex-direction: row;
	}
</style>
