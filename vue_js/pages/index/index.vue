<template>
	<view>
		<view class="header">
			<view class="header-left">
				<h2>中医之道</h2>
				<text>traditional Chinese medical science</text>
			</view>
			<view class="header-right">
				<view class="logo"><image src="../../static/logo2.png" mode=""></image></view>
			</view>
		</view>
		<view class="news" @click="gotoPage('news')">
			<view class="news-image"></view>
			<view class="news-title">
				<span>中医药：抗击疫情的独特力量</span>
			</view>
		</view>
		<Options :options="options"></Options>
		
		<Course :course="course"></Course>
		
	</view>
	
</template>

<script>
	import Options from "../../components/Options.vue"
	import Course from "../../components/Course.vue"
	export default {
		components:{
			Options,Course
		},
		data() {
			return {
				options:[
					{
						name:"药材",
						icon:require('../../static/medicine.png'),
						color: '#ead2d4',
						pagename:'herbs'
						
					},{
						name:"治疗",
						icon:require('../../static/operation.png'),
						color: '#c9c1d3',
						pagename:'treatment'
					},{
						name: "历史",
						icon:require('../../static/history.png'),
						color: '#eee6f8',
						pagename: 'history'
					},{
						name: "名医",
						icon:require('../../static/doctor.png'),
						color: '#e0d6d8',
						pagename: 'doctor'
					}
					
				],
				course:[{
						name:"八段锦",
						icon:require('../../static/course.png'),
						intro:"一套独立而完整的健身功法"
					
					},{
						name:"太极拳",
						icon:require('../../static/course.png'),
						intro:"内外兼修、刚柔相济的中国传统拳术"
					},{
						name:"五禽戏",
						icon:require('../../static/course.png'),
						intro:"五禽戏是中国传统导引养生的一个重要功法"
						
					}
				]
				
			}
		},
		
		methods: {
			gotoPage(pagename){
				console.log("点击")
				uni.navigateTo({
					url:"/pages/"+pagename+"/"+pagename
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.header{
		display: flex;
		height: 100rpx;
		margin-top: 40rpx;
	}
	.header .header-left{
		margin:10rpx 30rpx;
		color: #695455;
	}
	.header .header-left text{
		margin-top: 10rpx;
		color: #bfbfbf;
	}
	.header .header-right{
		flex: 1;
		text-align: right;
		position: relative;	
	}
	.header .logo{
		height: 70rpx;
		width: 70rpx;
		padding: 5rpx;
		border-radius: 20rpx;
		float: right;
		margin-right: 40rpx;
		margin-top: 20rpx;
		background-color: #b6c5b2;
	}
	.header .logo image{
		width: 60rpx;
		height: 60rpx;
	}
	
	.news{
		background-color: #b6c5b2;
		color: #FFFFFF;
		height: 350rpx;
		margin: 30rpx 30rpx;
		border-radius: 30rpx;
		background-image: url(../../static/news.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.news-image{
		flex: 1;
	}
	.news-title{
		background-color:rgba(0, 0, 0, 0.56); ;
		text-align: center;
		padding: 20rpx;
	}
	
	

</style>
