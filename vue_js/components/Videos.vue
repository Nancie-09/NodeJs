<template>
	<view>
		<view class="video">
			<video 
				class="video-class"
				id="myVideo"
				ref="myVideo"
				:src="video" 
				:controls="false"
				:show-center-play-btn="false"
				@timeupdate='videoUpdate'
			></video>
		</view>
		<view class="process">
			<view class="slider">
			    <slider @change="sliderChange" @changing="sliderChanging" 
				step="1" :value="sliderValue" backgroundColor="#e1dee4" activeColor="#b8c1b7" 
				block-color="#FFFFFF" block-size="16rpx"/>
			</view>
			<view class="slider-text">
				<view class="currtime"><span>{{currtime}}</span></view>
				<view class="druationTime"><span>{{druationTime}}</span></view>
			</view>
		</view>
		<view class="controls-button">
			<image @click="videoOpreation" v-if="palyFlag === true"
				src="../static/news/start.png" />
			<image @click="videoOpreation" v-if="palyFlag === false"
				src="../static/news/pause.png" />
		</view>
	</view>
</template>

<script>
	export default {
		name:"Videos",
		props:['video'],
		data() {
			return {
				fullScreenFlag: false,
				currtime:'00:00:00',//当前播放时间 字符串 计算后
				druationTime:'00:00:00',//总时间 字符串 计算后
				sliderValue: 0, //控制进度条slider的值，
				updateState: false, //防止视频播放过程中导致的拖拽失效
				palyFlag:true,
				duration:0,
			};
		},
		mounted() {
			this.videoContext = uni.createVideoContext('myVideo')
			this.updateState = true
		},
		methods:{
			// 根据秒获取时间
			formatSeconds(a) {
				var hh = parseInt(a/3600);  
				var mm = parseInt((a-hh*3600)/60);  
				if(mm<10) mm = "0" + mm;  
				var ss = parseInt((a-hh*3600)%60);  
				if(ss<10) ss = "0" + ss;  
				if(hh<10) hh = hh == 0?'':`0${hh}:`;  
				var length = hh  + mm + ":" + ss;  
				if(a>=0){  
					return length;  
				}else{  
					return "00:00";  
				}  
			},
			// 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次
			videoUpdate(e) {
				this.duration = e.detail.duration;
				let sliderValue = e.detail.currentTime / this.duration * 100;
				if (this.updateState) { //判断拖拽完成后才触发更新，避免拖拽失效
					this.sliderValue = sliderValue;
				}else{
					
				}
				this.currtime = this.formatSeconds(e.detail.currentTime);
				this.druationTime = this.formatSeconds(e.detail.duration);
			},
	        //拖动过程中触发的事件
	        sliderChanging(e) {
				//拖拽过程中，不允许更新进度条
				this.updateState= false;
			},
			// 拖动slider完成后触发
			sliderChange(e) {
				var second = e.detail.value / 100 * this.duration;
				if (this.duration) { //完成拖动后，计算对应时间并跳转到指定位置
				   this.videoContext.seek(second);
				   this.sliderValue= e.detail.value,
				   this.updateState= true //完成拖动后允许更新滚动条
				   // this.druationTime = this.formatSeconds(duration);
				   this.currtime = this.formatSeconds(second);
				} 
				else { }
			},
			//开始+暂停
			videoOpreation() { 
				if(this.palyFlag)
					this.videoContext.play();
				else
					this.videoContext.pause();
			    this.palyFlag = !this.palyFlag;
			},

		}
	}
</script>

<style>
	.video{
		margin-bottom: 20rpx;
		border: #2C405A 2rpx solid;
		height: 500rpx;
	}
	.video video{
		height: 100%;
		width:100%;
	}
	.play{
		padding: 20rpx;
		border: #007AFF 2rpx solid;
		text-align: center;
	}
	.process{
		margin-top: 120rpx;
		display:flex;
		flex-direction: column;
		align-items: center;
	}
	.slider{
		height:60rpx;
		margin-bottom:10rpx;
		flex:6;
		color: #007AFF;
		width: 100%;
	}
	.slider-text{
		display: flex;
		flex-direction: row;
		width: 90%;
	}
	.currtime,.druationTime{
		flex: 1;
		font-size: 30rpx;
		line-height: 60rpx;
	}
	.currtime span{
		float: left;
	}
	.druationTime span{
		float: right;
	}
	.controls-button{
		display:block;
		width:120rpx;
		height:120rpx;
		margin: 0 auto;
		margin-top: 100rpx;
	}
	.controls-button image{
		width:120rpx;
		height:120rpx;
	}
</style>
