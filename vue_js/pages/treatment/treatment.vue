<template>
	<view>
		<Picker 
			:dataList="treatments"
			@choosePicker="choosePicker" 
			ref="picker"
			v-if="treatments.length!=0"></Picker>
		<view class="content-box">
			<view v-if="picked[0]==-1" class="list">
				<ul>
					<li v-for="(item,index) in treatments" :key="index">
						<span class="title">{{item.name}}</span>
						<ul>
							<li v-for="(item2,index2) in treatments[index].type" :key="index2"
								@click="chooseList(index,index2)" class="item">
								<view :style="{backgroundColor: item2.color}"
									class="type-icon"><image :src="item2.icon" ></view>
								<view>
									<span class="type-name">{{item2.name}}</span>
									<span class="type-intro">{{item2.intro}}</span>
								</view>
								
							</li>
						</ul>
					</li>
				</ul>
			</view>

			<view v-if="picked[0]!=-1" class="info">
				<ul>
					<li class="info-icon"><image :src="treatments[picked[0]].type[picked[1]].icon"></image></li>
					<li class="info-name">
						{{treatments[picked[0]].type[picked[1]].name}}
					</li>
					<li class="info-intro">
						{{treatments[picked[0]].type[picked[1]].intro}}
					</li>
					<li class="info-theory">
						<view class="info-title">理论</view>
						<view class="info-content">{{treatments[picked[0]].type[picked[1]].theory}}</view>	
					</li>
					<li class="info-effect">
						<view class="info-title">功效</view>
						<view class="info-content">{{treatments[picked[0]].type[picked[1]].effect}}</view>
					</li>
				</ul>				
			</view>

		</view>
		<view v-if="picked[0]!=-1" 
			class="fix-button" @click="showAll">
				全部
		</view>
	</view>
</template>

<script>
	import Picker from '../../components/Picker.vue'
	export default {
		components: {
			Picker
		},
		data() {
			return {
				height: 0,
				picked: [-1, -1],
				treatments:[],
				currentName: ''
			}
		},
		methods: {
			choosePicker(tap, drop) {
				let item = this.treatments[tap].type[drop].name
				this.currentName = item;
				this.picked = [];
				this.picked.push(tap);
				this.picked.push(drop);
				console.log(this.picked)
			},
			chooseList(tap, drop) {
				this.$refs.picker.parentChooseList(tap, drop);
				this.picked = [];
				this.picked.push(tap);
				this.picked.push(drop);
			},
			showAll(){
				this.$refs.picker.parentChooseList(-1, -1);
				this.picked = [-1,-1];
			},
			async getTreatments() {
			    var [error, res] = await uni.request({
			        url: 'http://localhost:3000/treatment'
			    });
				for(let item of res.data){
					for(let item2 of item.type){
						let path = item2.icon;
						item2.icon = require(`../../static/treatments/${path}`);
					}
					
				}
				this.treatments = res.data;
				
				
			}
		},
		created() {
			// console.log(JSON.stringify(this.treatments))
			this.getTreatments()
		}
		
		

	}
</script>
<style lang="less" scoped>
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.content-box {
		height: 100%;
	}
	
	.list{
		height: var(height)rpx;
		padding: 50rpx 0 30rpx;
		// background-color: #fbead7;
	}

	.title {
		font-size: 45rpx;
		font-weight: bold;
		margin: 0 35rpx 40rpx;
		display: block;
		// color: #7e7281;
	}

	.item {
		border: 1rpx solid #705053;
		background-color: #fffaf6;
		border-radius: 30rpx;
		color: #705053;
		margin: 30rpx 40rpx;
		padding: 40rpx 30rpx;
		display: flex;
		
	}

	.type-name,
	.type-intro {
		display: block;
	}

	.type-name {
		font-size: 35rpx;
		font-weight: bold;
		line-height: 50rpx;
	}

	.type-intro {
		margin-top: 15rpx;
		font-size: 28rpx;
		line-height: 40rpx;
		padding: 0 5rpx;
	}
	.type-icon{
		width: 120rpx;
		height: 120rpx;
		padding: 10rpx;
		margin-right: 30rpx;
		border-radius: 20rpx;
	}
	
	.type-icon image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 20rpx;
			
		}
	
	
	.fix-button{
		color: #fff;
		border-radius: 50%;
		width: 100rpx;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		background-color: #2e8e3a;
		position: absolute;
		top: 12%;
		left: 85%;
		transform: translate(-50%,-50%);
	}
	.info{
		padding: 50rpx;
	}
	.info-icon{
		margin: 0 auto;
		width: 200rpx;
		height: 200rpx;
		padding: 30rpx;
		border-radius: 50%;
		border: 2rpx solid #9a565e;
		text-align: center;	
		
	}
	
	.info-icon image{
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		
	}
	.info-name{
		margin: 40rpx auto 20rpx;
		text-align: center;
		font-size: 35rpx;
		font-weight: bold;
	}
	.info-intro{
		margin: 0 0 30rpx;
		text-align: center;
		font-size: 27rpx;
		color: #8e94b1;
	}
	.info-title{
		background-color: #fff;
		font-size: 32rpx;
		font-weight: bold;
		padding: 20rpx 0;
		margin-top: 20rpx;
		
	}
	.info-content{
		background-color: #ffeee0;
		color: #6b555c;
		padding: 20rpx;
		// border:2rpx solid #6b555c;
		border-radius: 30rpx;
	}
	
	
	
</style>
