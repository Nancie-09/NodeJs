<template>
	<view class="video">
		<Videos :video="video"></Videos>
	</view>
</template>

<script>
	import Videos from '../../components/Videos.vue'
	export default {
		components:{
			Videos
		},
		data() {
			return {
				video:require('../../static/news/2.mp4'),
			}
		},
		methods: {
		}
	}
</script>

<style scoped>
	.video{
		padding: 20rpx;
		padding-bottom: 260rpx;
		height: 100%;
		/* background-color: #e1e5e0; */
	}
</style>
