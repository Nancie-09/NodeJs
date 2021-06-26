<template>
	<view>
		<view class="head">十大名医</view>
		<ul>
			<li v-for="(item,index) in doctors" :key="index" class="item">
				<view class="title">{{item.title}}</view>
				<view class="name">{{item.name}}</view>
				<view class="content" 
					v-if="doctors.length!=0"
					v-html="getContent(item.intro)"></view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doctors: []
			}
		},
		methods: {
			getContent(str) {
				return str.replace(/\n/g, '<br>');
			},
			async getDoctors() {
			    var [error, res] = await uni.request({
			        url: 'http://localhost:3000/doctor'
			    });
				this.doctors = res.data;
				
			}
			
		},
		created() {
			this.getDoctors();
		}
	}
</script>

<style lang="less" scoped>
	.head {
		font-size: 40rpx;
		text-align: center;
		padding: 20rpx;
		color: #705053;
	}

	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.item {
		padding: 20rpx 30rpx;
	}

	.title {
		font-size: 35rpx;
		color: #705053;
	}

	.name{
		font-size: 30rpx;
		width: 120rpx;
		margin: 0 auto;
		text-align: center;
		background-color: #fdeadc;
		border-radius: 25rpx;
		margin-top: 10rpx;
	}
	.content {
		margin: 20rpx 10rpx;
		padding: 30rpx 25rpx;
		border: 1rpx solid #705053;
		background-color: #fffaf6;
		border-radius: 30rpx;
	}
</style>
