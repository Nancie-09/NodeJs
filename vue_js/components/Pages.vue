<template>
	<view>
		<view class="content">
			<view v-for="(item,index) in showList" :key="index" class="item">
				<view class="icon">
					<image :src="item.icon" mode=""></image>
				</view>
				<view class="info">
					<view class="name">{{item.name}}</view>
					<view class="intro">{{item.intro}}</view>
				</view>

			</view>
		</view>
		<view class="page-box">
			<ul>
				<li @click="goToPage(--cur)">上一页</li>
				<li v-for="index in amount" :class="{ active:cur == index }" class="index" :key="index"
					@click="goToPage(index)">
					{{index}}
				</li>
				<li @click="goToPage(++cur)">下一页</li>
				<li>共{{amount}}页</li>
			</ul>
		</view>

	</view>
</template>

<script>
	export default {
		name: "Pages",
		props: ['dataList', 'pageSize', 'total', 'current'], //herbs传入
		data() {
			return {
				amount: 1, //总页数
				showList: [], //需要显示的数据
				cur:1

			}
		},
		methods: {
			goToPage(index) {
				if(index>this.amount){
					this.cur--;
					return;
				}
				if(index<1){
					this.cur++;
					return;
				}
				
				if (this.dataList.length >= index * this.pageSize) {
					this.showList = this.dataList.slice((index - 1) * this.pageSize, index * this.pageSize);
				} else {
					this.showList = this.dataList.slice((index - 1) * this.pageSize);
				}
				this.cur = index;

			}
		},
		created() {
			this.amount = Math.ceil(this.total / this.pageSize) || 1;
			this.showList = this.dataList.slice(0, this.pageSize);
			this.cur = this.current
		}

	}
</script>

<style>
	.item {
		border: #dbccaf 1rpx solid;
		background-color: #f2eeec;
		border-radius: 30rpx;
		display: flex;
		height: 200rpx;
		margin: 30rpx 30rpx;
	}

	.icon {
		width: 120rpx;
		height: 120rpx;
		margin: 40rpx 40rpx;
	}

	.icon image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 120rpx;
	}

	.info {
		height: 110rpx;
		margin: 45rpx 0;
	}

	.info .name {
		line-height: 50rpx;
		font-size: 35rpx;
		margin-top: 10rpx;


	}

	.info .intro {
		line-height: 30rpx;
		font-size: 25rpx;
		margin-top: 10rpx;
		color: #707070;
	}
	
	.page-box{
		width: 750rpx;
		height: 100rpx;
	}
	ul,li{
		margin: 0;
		padding: 0;
	}
	ul {
		display: flex;
		align-items: center;
		justify-content:center;
		border: 50rpx;
	}
	li {
		list-style: none;
		height: 30rpx;
		margin: 10rpx;
		padding: 10rpx;
		border: 2rpx solid #725545;
		color: #83644a;
		border-radius: 10rpx;
		line-height: 30rpx;
		text-align: center;
	}
	.index {
		width: 30rpx;
	}
	
	.active{
		background-color: #83644a;
		color: #fff;
	}
</style>
