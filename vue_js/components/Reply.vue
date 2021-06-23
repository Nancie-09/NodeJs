<template>
	<view class="replies">
		<view class="reply" v-for="(item,index) in replies" :key="index">
			<view class="head">
				<view class="avatar-view">
					<image class="avatar" :src="item.avatar"></image>
				</view>
				<view class="nickname-content">
					<view class="nickname">{{item.nickname}}</view>
					<view class="content">{{item.content}}</view>
					<view class="options">
						<span @click="reply(index)">回复</span>
						<span @click="deleteReply(index)">删除</span>
					</view>
				</view>
			</view>
			<view class="new-replies" v-for="(listItem,listIndex) in item.replies" :key="listIndex">
				<view class="head">
					<view class="avatar-view">
						<image class="avatar" :src="listItem.avatar"></image>
					</view>
					<view class="nickname-content">
						<view class="nickname">
							<view>{{listItem.nickname}}</view>
							<view class="right" v-if="listItem.other != null"><image src="../static/forum/xiangyou-towardstheright.png"></image></view>
							<view class="other" v-if="listItem.other != null">{{listItem.other}}</view>
						</view>
						<view class="content">{{listItem.content}}</view>
						<view class="options">
							<span @click="newReply(index,listIndex)">回复</span>
							<span @click="deleteNewReply(index,listIndex)">删除</span>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="new-reply">
			<input class="msg" @blur="unFocus()" :focus="focusState" v-model="message"></input>
			<image class="send" src="../static/forum/B.png" @click="handleSend"></image>
		</view>
		<Tips :tips="tips" @showable="getShow"></Tips>
	</view>

</template>

<script>
	import Tips from './Tips.vue'
	export default {
		components:{
			Tips
		},
		name:"Reply",
		props:['replies','user'],
		data() {
			return {
				message:"",
				focusState: false,
				replyState: 0,
				index:-1,
				listIndex:-1,
				tips:{
					show: false,
					content:"",
					time: 0,
				},
			};
		},
		methods:{
			handleSend(){
				if(this.message === "") {
					this.tips = {
						show: true,
						content:"评论内容不能为空",
						time: 2.5,
					};
				}
				else if(this.replyState === 0) {
					this.sendMsg(null,null);
				}
				else if(this.replyState === 1){
					this.sendMsg(this.index,null);
				}
				else {
					this.sendMsg(this.index,this.listIndex);
				}
				this.replyState = 0;
			},
			reply(index){
				this.focusState = true;
				this.replyState = 1;
				this.index = index;
			},
			deleteReply(index){
				this.replies.splice(index,1);
			},
			newReply(index, listIndex){
				this.focusState = true
				this.replyState = 2;
				this.index = index;
				this.listIndex = listIndex;
			},
			deleteNewReply(index,listIndex){
				this.replies[index].replies.splice(listIndex,1);
			},
			sendMsg(index, listIndex) {
				this.$emit('messageIndex', true);
				if(index === null) {
					// this.replies.push({
					// 	avatar:this.user.avatar,
					// 	nickname:this.user.nickname,
					// 	content: this.message
					// });
					this.$emit('replyIndex', -1);
					this.$emit('reply', {
						avatar:this.user.avatar,
						nickname:this.user.nickname,
						content: this.message,
						replies:[]
					});
					this.message='';
				}
				else if(listIndex === null) {
					// this.replies[index].replies.push({
					// 	avatar:this.user.avatar,
					// 	nickname:this.user.nickname,
					// 	content: this.message,
					// 	other: null
					// });
					this.$emit('replyIndex', index);
					this.$emit('reply', {
						avatar:this.user.avatar,
						nickname:this.user.nickname,
						content: this.message,
						other: null
					});
					this.message='';
				}
				else {
					// this.replies[index].replies.push({
					// 	avatar:this.user.avatar,
					// 	nickname:this.user.nickname,
					// 	content: this.message,
					// 	other: this.replies[index].replies[listIndex].nickname
					// });
					this.$emit('replyIndex', index);
					this.$emit('reply', {
						avatar:this.user.avatar,
						nickname:this.user.nickname,
						content: this.message,
						other: this.replies[index].replies[listIndex].nickname
					});
					this.message='';
				}
				this.$emit('comment', true);
			},
			unFocus() {
				this.focusState = false;
				if(this.message === "") {
					this.replyState = 0;
				}
					
			},
			getShow(val) {
				this.tips.show = val
			},
		}
		
	}
</script>

<style scoped>
	.replies {
		margin: 20rpx 0;
		background-color: #e1e5e0;
	}
	.reply {
		/* border: #007AFF 2rpx solid; */
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
	}
	.new-replies {
		/* border: #007AFF 2rpx solid; */
		display: flex;
		flex-direction: column;
		margin-bottom: 7rpx;
		margin-left: 55rpx;
	}
	.head {
		/* border: #007AFF 2rpx solid; */
		display: flex;
		flex-direction: row;
		height: auto;
		padding-bottom: 10rpx;
	}
	.avatar-view {
		padding:0 10rpx;
	}
	.avatar{
		height: 55rpx;
		width: 55rpx;
		border-radius: 50%;
	}
	.nickname-content {
		display: flex;
		flex-direction: column;
		font-size: 25rpx;
		margin: 0 10rpx;
	}
	.nickname{
		display: flex;
		flex-direction: row;
		padding-top: 3rpx;
	} 
	.content,.options{
		color: #707070;
		padding-top: 5rpx;
	}
	.options span {
		font-size: 25rpx;
		color: #007AFF;
		margin-right: 15rpx;
	}
	.options span:hover{
		cursor: pointer;
	}
	.new-reply{
		display: flex;
		flex-direction: row;
	}
	.msg {
		flex: 7;
		border-radius: 10rpx;
		height: 75rpx;
		border: 2rpx solid #cdd4d9;;
		padding:0 20rpx;
	}
	.send {
		width: 50rpx;
		height: 50rpx;
		margin:auto 0 auto 20rpx;
	}
	.right {
		width: 20rpx;
		height: 20rpx;
		margin: auto 15rpx;
	}
	.right image {
		width: 20rpx;
		height: 20rpx;
		display: block;
	}
</style>
