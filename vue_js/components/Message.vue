<template>
	<view class="messages">
		<view class="message" v-for="(item,index) in message" :key="index" v-if="message.length!= 0">
			<view class="head">
				<view class="avatar-view">
					<image class="avatar" :src="item.avatar"></image>
				</view>
				<view class="nickname-time">
					<span class="nickname" >{{item.nickname}}</span>
					<span class="time" >{{item.time}}</span>
				</view>
				<view class="more">
					<image src="../static/forum/gengduo.png" @click="more()"></image>
					
				</view>
			</view>
			<view class="content">{{item.content}}</view>
			<view class="images" v-if="item.images.length">
				<view class="images1" v-if="item.images.length >= 1" 
				:style="{backgroundImage:`url(${item.images[0]})`}">
					<!-- <image :src="item.images[0]" class="image"></image> -->
				</view>
				<view class="image-box" v-if="item.images.length >= 2">
					<view class="images2" v-if="item.images.length >= 2"
					:style="{backgroundImage:`url(${item.images[1]})`}">
						<!-- <image :src="item.images[1]" class="image"></image> -->
					</view>
					<view class="images3" v-if="item.images.length >= 3"
					:style="{backgroundImage:`url(${item.images[2]})`}">
						<!-- <image :src="item.images[2]" class="image"></image> -->
					</view>
				</view>
			</view>
			<view class="likes">
				<view class="like">
					<image src="../static/forum/like-2.png" v-if="item.show === false" @click="like(index)"></image>
					<image src="../static/forum/like.png" v-if="item.show === true" @click="unlike(index)"></image>
					<span>{{item.likes}} 赞</span>
					<span>{{item.comment}} 评论</span>
				</view>
				<view class="share"> 
					<image src="../static/forum/symbols.png" mode=""></image>
					<span>{{item.share}} 分享</span>
				</view>
			</view>
			<view class="line" ></view>
			<Reply :replies="item.replies" :user="user" @messageIndex="addMessageIndex(index)" @replyIndex="addReplyIndex" @reply="addReply" @deleteFirstReply="deleteFirstReply" @deleteSecondReply="deleteSecondReply"></Reply>
			<Tips :tips="tips" @showable="getShow"></Tips>
		</view>
	</view>
</template>

<script>
	import Tips from './Tips.vue'
	import Reply from './Reply.vue'
	export default {
		components:{
			Tips,Reply
		},
		name:"Message",
		props:['message','user'],
		data() {
			return {
				tips:{
					show: false,
					content:"",
					time: 0,
				},
				messageIndex: -1,
			};
		},
		methods:{
			like(index){
				// this.tips = {
				// 	show: true,
				// 	content:"点赞3",
				// 	time: 3,
				// };
				// this.message[index].show = true
				// this.message[index].likes++;
				this.$emit('like', {
					like: true,
					index: index
				});
				
			},
			unlike(index) {
				// this.tips = {
				// 	show: true,
				// 	content:"取消赞2",
				// 	time: 2,
				// };
				// this.message[index].show = false;
				// this.message[index].likes--;
				this.$emit('like', {
					like: false,
					index: index
				});
			},
			more(){
				this.tips = {
					show: true,
					content:"更多1",
					time: 1,
				};
			},
			getShow(val) {
				this.tips.show = val
			},
			
			addReply(reply) {
				// console.log(reply)
				this.$emit('reply', reply);
			},
			addReplyIndex(index){
				this.$emit('replyIndex', index);
			},
			addMessageIndex(index){
				this.$emit('messageIndex', index);
				this.messageIndex = index;
			},
			deleteFirstReply(msg){
				msg.messageIndex = this.messageIndex;
				// console.log(msg);
				this.$emit('deleteFirstReply',msg);
			},
			deleteSecondReply(msg){
				msg.messageIndex = this.messageIndex;
				// console.log(msg);
				this.$emit('deleteSecondReply',msg);
			}
		}
	}
</script>

<style scoped>
	.message {
		display: flex;
		flex-direction: column;
		padding: 10rpx 20rpx 0 20rpx;
		margin: 20rpx;
		border-radius: 10rpx;
		background-color: #e1e5e0;
	}
	.head {
		display: flex;
		flex-direction: row;
		height: 120rpx;
	}
	.avatar-view {
		flex: 1;
		padding: 10rpx;
	}
	.avatar{
		height: 100rpx;
		width: 100rpx;
		border-radius: 50%;
	}
	.nickname-time {
		flex: 6;
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
		margin: 20rpx 10rpx;
	}
	.time{
		font-size: 18rpx;
		color: #007AFF;
	}
	.nickname-time span{
		margin:auto 0;
	}
	.more {
		flex: 1;
	}
	.more image{
		width: 30rpx;
		height: 30rpx;
		margin: 35rpx 20rpx 35rpx 40rpx;
	}
	.more image:hover{
		cursor: pointer;
	}
	.content{
		font-size: 25rpx;
		color: #707070;
	}
	.likes{
		display: flex;
		flex-direction: row;
		color: #918f92;
	}
	.like{
		flex: 1;
		padding: 10rpx 0;
	}
	.like image {
		height: 25rpx;
		width: 25rpx;
	}
	.like image:hover{
		cursor: pointer;
	}
	.like span {
		padding-left: 20rpx;
	}
	.share{
		padding: 10rpx 0;
		float: right;
	}
	.share image {
		height: 25rpx;
		width: 25rpx;
	}
	.share image:hover{
		cursor: pointer;
	}
	.share span {
		padding: 20rpx;
	}
	.images {
		display: flex;
		flex-direction: row;
		height: 500rpx;
		overflow: hidden;
	}
	.images1 {
		flex: 1;
		margin: 7rpx;
		border-radius: 10rpx;
		/* overflow: hidden; */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.image-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.images2, .images3 {
		flex: 1;
		margin:7rpx;
		border-radius: 10rpx;
		/* overflow: hidden; */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.image{
		height: 100%;
		width: auto;
		display: block;
	}
	.image:hover{
		cursor: pointer;
	}
	.line{
		border-top: 2rpx solid #cdd4d9;
		margin-top: 10rpx;
	}
	</style>

