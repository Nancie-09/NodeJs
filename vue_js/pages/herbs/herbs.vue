<template>
	<view>
		<Swiper></Swiper>
		<view>
			<view class="header">
				<view class="header-title">药材</view>
				<view class="header-more">在汉族传统医术指导下，用于治疗疾病。</view>
			</view>
			
			<Pages 
				:dataList="herbs"
				:pageSize="4"
				:total="herbs.length"
				:current="1"></Pages>
			
		</view>
	</view>
</template>

<script>
	import Swiper from "../../components/Swiper.vue"
	import Pages from "../../components/Pages.vue"
	export default {
		components:{
			Swiper,Pages
		},
		data() {
			return {
				herbs:[
					{
						name: "辛夷",
						intro: "[花] 散风寒，通鼻炎",
						icon: require('../../static/herbs/IMG_1297.jpg')
					},
					{
						name: "凤仙",
						intro: "[花] 活血消肿，治跌打损伤",
						icon: require('../../static/herbs/IMG_1298.jpg')
					},
					{
						name: "柴胡",
						intro: "[根] 轻身明目，除伤寒",
						icon: require('../../static/herbs/IMG_1299.jpg')
					},
					{
						name: "无青",
						intro: "[根] 利五脏，轻身益气",
						icon: require('../../static/herbs/IMG_1300.jpg')
					},
					{
						name: "鸡血藤",
						intro: "[藤] 治风湿痹痛，手足麻木",
						icon: require('../../static/herbs/IMG_1301.jpg')
					},
					{
						name: "积雪草",
						intro: "[苗] 治寒热，神智昏迷",
						icon: require('../../static/herbs/IMG_1302.jpg')
					},
					{
						name: "凌霄",
						intro: "[花] 行血去瘀，凉血祛风",
						icon: require('../../static/herbs/IMG_1303.jpg')
						
					},
					{
						name: "杭白菊",
						intro: "[花] 疏散风热，平肝明目",
						icon: require('../../static/herbs/IMG_1304.jpg')
					},
					{
						name: "鼠尾草",
						intro: "[花] 鼠瘘寒热，下痢脓血不止",
						icon: require('../../static/herbs/IMG_1305.jpg')
					},
					{
						name: "樱桃",
						intro: "[实] 主调中，益脾气，养颜",
						icon: require('../../static/herbs/IMG_1306.jpg')
					},
					{
						name: "半夏",
						intro: "[根] 治伤寒寒热，胸胀咳逆",
						icon: require('../../static/herbs/IMG_1307.jpg')
					}
					
					
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.header{
		margin: 0 50rpx;
	}
	.header-title{
		font-size: 40rpx;
		font-weight: bold;
	}
	.header-more{
		flex: 1;
		text-align: left;
		color: #BFBFBF;
	}

</style>
