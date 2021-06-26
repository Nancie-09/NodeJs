<template>
	<view>
		<Swiper></Swiper>
		<view>
			<view class="header">
				<view class="header-title">药材</view>
				<view class="header-more">在汉族传统医术指导下，用于治疗疾病。</view>
			</view>

			<Pages v-if="herbs.length!=0" :total="herbs.length" :dataList="herbs" :pageSize="4" :current="1"></Pages>

		</view>
	</view>
</template>

<script>
	import Swiper from "../../components/Swiper.vue"
	import Pages from "../../components/Pages.vue"
	export default {
		components: {
			Swiper,
			Pages
		},
		data() {
			return {
				herbs: [],
				total: 0,
			}
		},
		methods: {
			async getHerbs() {
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/herb'
				});
				for(let item of res.data){
					let path = 'IMG_'+item.icon+'.jpg';
					item.icon = require(`../../static/herbs/${path}`);
				}
				this.herbs = res.data;
				console.log(this.herbs)
				this.total = this.herbs.length


			}
		},
		created() {
			this.getHerbs()
			// console.log(JSON.stringify(this.herb))

		}
	}
</script>

<style lang="less" scoped>
	.header {
		margin: 0 50rpx;
	}

	.header-title {
		font-size: 40rpx;
		font-weight: bold;
	}

	.header-more {
		flex: 1;
		text-align: left;
		color: #BFBFBF;
	}
</style>
