<template> 
	<view 
		class="slide" 
		v-on:mouseover="stop()" 
		v-on:mouseout="move()">
		
			<view class="slideshow">
				<ul>
					<li 
						v-for="(img,index) in imgs" 
						:key="index"
						v-show="index===mark">
						<image :src="img" alt="" mode="scaleToFill">
					</li>
					
				</ul>
			</view>
		
		<view class="bar">
			<span 
				v-for="(item,index) in imgs" 
				:key="index" 
				:class="{'active':index===mark}"></span>
		</view>
	</view>
</template> 


<script>
	export default {
		name:"Swiper2",
		data() {
			return {
				animation:null,
				timer: null,//定时器
				mark: 0,
				imgs: [
					require('../static/imgs/IMG_1291.jpg'),
					require('../static/imgs/IMG_1292.jpg'),
					require('../static/imgs/IMG_1295.jpg'),
					require('../static/imgs/IMG_1296.jpg'),
				],
			};
		},
		methods:{
			autoPlay(){
				this.mark++;
				if(this.mark === this.imgs.length){
					this.mark=0;
				}
			},
			play(){
				this.timer = setInterval(this.autoPlay, 2500);
			},
			change(i){
				this.mark = i;
			},
			stop () { 
				clearInterval(this.timer) 
			},
			move () { 
				this.timer = setInterval(this.autoPlay, 2500) 
			} 
		},
		created(){
			this.play();
		}
		
	}
</script>


<style> 
* { 
	margin: 0; 
	padding: 0; 
	list-style: none; 
} 
.slide { 
	width: 700rpx; 
	height: 400rpx; 
	margin: 0 auto; 	
	margin-top: 20rpx;
	margin-bottom: 50rpx;
	overflow: hidden; 
	position: relative; 
} 
.slideshow { 
	width: 700rpx; 
	height: 400rpx; 
} 
li { 
	position: absolute; 
} 
image { 
	width: 700rpx; 
	height: 400rpx; 
	border-radius: 50rpx;
} 
.bar { 
	position: absolute; 
	width: 100%; 
	bottom: 10rpx; 
	margin: 0 auto; 
	z-index: 10; 
	text-align: center; 
} 
.bar span { 
	width: 10rpx;
	height: 10rpx;
	border-radius: 50%;
	background: white; 
	display: inline-block; 
	margin-right: 10rpx; 
} 
.active { 
	background: red !important; 
} 
.image-enter-active { 
	transform: translateX(0); 
	transition: all 1.5s ease; 
} 
.image-leave-active { 
	transform: translateX(-100%); 
	transition: all 1.5s ease; 
} 
.image-enter { 
	transform: translateX(100%); 
} 
.image-leave { 
	transform: translateX(0); 
} 
</style> 

