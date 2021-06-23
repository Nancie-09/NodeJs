<template>
	<view>
		<view class="option-box">
			<view class="option-item" 
				v-for="(item,index) in options" 
				:key="index" 
				:style="{backgroundColor:item.color}"
				@click="gotoPage(item.pagename)">
				<view>
					<image :src="item.icon"></image>
				</view>
				{{ item.name }}
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:['options'],
		data() {
			return {
				
			};
		},
		
		methods:{
			gotoPage(pagename){
				console.log("点击")
				uni.navigateTo({
					url:"/pages/"+pagename+"/"+pagename
				})
			}
		}
		
	}
</script>

<style>
	.option-box{
		display: flex;
		width: 750rpx;
		padding: 20rpx;
	}
	.option-item{
		flex: 1;
		text-align: center;
		border-radius: 25rpx;
		margin: 0 20rpx;
		padding: 20rpx 0;
	}
	
	.option-item image{
		width: 60rpx;
		height: 60rpx;
	}

</style>
