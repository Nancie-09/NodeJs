<template>
	<view class="aboutme">
		<view class="head">
			<view class="avatar-view">
				<image class="avatar" :src="user.avatar"></image>
			</view>
			<view class="nickname-view">
				<span>{{user.nickname}}</span>
			</view>
			<!-- <view class="icon">
				<image src="../../static/aboutme/icon_on_the_right.png"></image>
			</view> -->
		</view>
		<view class="items" v-if="this.user!=null">
			<view class="course">
				<span>我的课程</span>
				<image src="../../static/aboutme/icon_on_the_right.png"></image>
			</view>
			<view class="course">
				<span>我的帖子</span>
				<image src="../../static/aboutme/icon_on_the_right.png"></image>
			</view>
			<view class="course">
				<span>我的赞</span>
				<image src="../../static/aboutme/icon_on_the_right.png"></image>
			</view>
			<view class="setting" @click="gotoPage('setting')">
				<span>设置</span>
				<image src="../../static/aboutme/icon_on_the_right.png"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				user:null,
			}
		},
		methods:{
			gotoPage(pagename){
				console.log("点击")
				uni.navigateTo({
					url:"/pages/aboutme/"+pagename
				})
			},
			getUser(){
				uni.getStorage({
					key: 'user',
					success:  res=>{
						console.log(res.data)
						this.user = res.data
					}
				})
			}
		},
		created() {
			// console.log(JSON.stringify(this.user))
			this.getUser()
		},
		onShow() {
			this.getUser()
		}
		
	}
</script>

<style scoped>
	.aboutme {
		margin: 20rpx;
	}
	.head {
		display: flex;
		flex-direction: row;
		padding: 10rpx 20rpx;
		height: 170rpx;
		border-radius: 10rpx;
		background-color: #e1e5e0;
		margin-bottom: 15rpx;
	}
	.avatar-view {
		padding: 10rpx;
	}
	.avatar{
		height: 130rpx;
		width: 130rpx;
		border-radius: 50%;
	}
	.nickname-view {
		flex: 1;
		font-size: 30rpx;
		margin: auto 0;
		padding-left: 50rpx;
	}
	/* .icon{
		margin: auto 0;
	}
	.icon image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	} */
	.items view{
		display: flex;
		flex-direction: row;
		padding: 10rpx 20rpx;
		height: 100rpx;
		border-radius: 10rpx;
		background-color: #e1e5e0;
		margin-bottom: 15rpx;
	}
	.items span{
		flex: 1;
		margin: auto 0;
		margin-left: 20rpx;
	}
	.items image{
		width: 30rpx;
		height: 30rpx;
		margin: auto 0;
		margin-right: 20rpx;
	}
</style>
