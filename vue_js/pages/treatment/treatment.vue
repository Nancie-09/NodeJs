<template>
	<view>
		<Picker :dataList="treatments" @choosePicker="choosePicker" ref="picker"></Picker>
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
				treatments: [{
						name: '内治',
						type: [{
							icon: require('../../static/treatments/medicine.png'),
							color: '#fbecde',
							name: '中草药疗法',
							intro: '中草药疗法是利用植物的叶、干、根、皮等制备的，以内服或外用的方式来治疗疾病的方法',
							effect: '调和人体五脏六腑，清心明目，和颜悦色，润泽肌肤，通利关窍，和畅百脉。',
							theory: '中药应用理论比较独特。中药有四气五味。四气又称四性，是指药性的寒、热、温、凉。五味指药物的辛、酸、甘、苦、咸。中草药的气、味不同，其疗效也各异。'

						}]
					},
					{
						name: '外治',
						type: [{
							icon: require('../../static/treatments/acupuncture.png'),
							color: '#f2eeed',
							name: '针灸疗法',
							intro: '针灸疗法即利用针刺与艾灸进行治疗，起源于新石器时代',
							effect: '扶正祛邪，治病保健',
							theory: '“针”即针刺，以针刺入人体穴位治病，它依据的是“虚则补之，实则泻之”的辨证原则，进针后通过补、泻、平补平泻等手法的配合运用，以取得人体本身的调节反应；“灸”即艾灸，以火点燃艾炷或艾条，烧灼穴位，将热力透入肌肤，以温通气血'
						},
						{	
							icon: require('../../static/treatments/tuina.png'),
							color: '#f3f7ff',
							name: '推拿疗法',
							intro: '推拿又称按摩，是人类最古老的一种外治疗法',
							effect: '疏通经络，行气活血，调整脏腑，理筋散结，正骨复位。',
							theory: '力学作用松解粘连缓解肌肉痉挛，感觉刺激。'
						},
						{
							icon: require('../../static/treatments/cupping.png'),
							color: '#c0c9db',
							name: '拔火罐疗法',
							intro: '拔火罐疗法是我国传统的中医疗法，其操作简单、方便易行',
							effect: '逐寒祛湿、疏通经络、祛除淤滞、行气活血、消肿止痛、拔毒泻热。',
							theory: '拔罐疗法以罐为工具，利用燃烧、挤压等方法排除罐内空气，造成负压，使罐吸附于体表特定拔火罐部位，产生广泛刺激，形成局部充血或淤血现象，而达到防病治病。'
						}]
					}
				],
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
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: function (res) {
					// 获取可使用窗口宽度
					let clientHeight = res.windowHeight;
					// 获取可使用窗口高度
					let clientWidth = res.windowWidth;
					// 算出比例
					let ratio = 750 / clientWidth;
					// 算出高度(单位rpx)
					let height = clientHeight * ratio;
					// 设置高度
					this.height = height;
					console.log(height)
				}
			});
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
