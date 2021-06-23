<template>
	<view class="course">
		<view class="course-header">
			<h3>课程推荐</h3>
		</view>
		<view class="course-content" v-for="(item,index) in course" :key="index" @click="goToPage(item)">
			<view class="course-icon">
				<image :src="item.icon" mode=""></image>
			</view>
			<view class="course-intro">
				<h4>{{item.name}}</h4>
				<span>{{item.intro}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Course",
		props:['course'],
		data() {
			return {
				
			};
		},
		methods:{
			goToPage(item) {
				if(item.name === "八段锦") {
					uni.navigateTo({
						url:"/pages/baduanjin/baduanjin"
					})
				}
			}
		}
	}
</script>

<style>
	.course{
		margin: 30rpx 30rpx;
	}
	.course-content{
		background-color: #e1e5e0;
		border-radius: 30rpx;
		display: flex;
		height: 200rpx;
		margin-top: 30rpx;
		margin-bottom: 40rpx;
	}
	.course-icon{
		width: 120rpx;
		height: 120rpx;
		padding: 15rpx 10rpx;
		padding-left: 15rpx;
		background-color: #b8c1b7;
		margin: 40rpx 40rpx;
		border-radius: 15rpx;
	}
	.course-icon image{
		width: 100rpx;
		height: 90rpx;
	}
	.course-intro{
		height: 110rpx;
		margin: 45rpx 0;
	}
	.course-intro h4{
		line-height: 50rpx;
		font-size: 35rpx;
		margin-top: 10rpx;
		
		
	}
	.course-intro span{
		line-height: 30rpx;
		font-size: 25rpx;
		color: #707070;
	}
	
	

</style>
