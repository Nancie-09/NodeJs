<template>
	<view>
		<view class="create">
			<view class="create-title" style="font-weight: 400;">发表帖子</view>
			<view class="create-area" @click="showPop()">
				<view class="line" ></view>
				<view class="avatar-input">
					<view class="create-avatar-view">
						<image class="create-avatar" :src="user.avatar"></image>
					</view>
					<input class="msg" placeholder="发表一些看法吧"></input>
				</view>
				<view class="line" ></view>
				<view class="more-edit">
					<view class="edit-photo">
						<image src="../static/forum/07.png"></image>
						<span>照片</span>
					</view>
					<view class="edit-tag">
						<image src="../static/forum/08.png"></image>
						<span>@朋友</span>
					</view>
					<view class="edit-feel">
						<image src="../static/forum/09.png"></image>
						<span>感受</span>
					</view>
					<view class="edit-more">
						<image src="../static/forum/gengduo.png" ></image>
					</view>
				</view>
			</view>
		</view>
		<view class="create-pop" v-if="popState===true">
			<view class="pop-item">
				<view class="create">
					<view class="create-title">
						<span class="title" style="font-weight: 400;">发表帖子</span>
						<span class="close"  @blur="unFocus()"  @click="closePop()">&times;</span><!-- 关闭按钮 -->
					</view>
					<view class="create-area">
						<view class="line" ></view>
						<view class="avatar-input">
							<view class="create-avatar-view">
								<image class="create-avatar" :src="user.avatar"></image>
							</view>
							<input class="msg" :focus="focusState" v-model="content" placeholder="发表一些看法吧"></input>
						</view>
						<view class="line" ></view>
						<view class="more-edits">
							<view class="edit-columns">
								<view class="edit-in-photo">
									<image src="../static/forum/07.png"></image>
									<span>照片</span>
								</view>
								<view class="edit-in-tag">
									<image src="../static/forum/08.png"></image>
									<span>@朋友</span>
								</view>
							</view>
							<view class="edit-columns">
								<view class="edit-in-feel">
									<image src="../static/forum/09.png"></image>
									<span>感受</span>
								</view>
								<view class="edit-in-check">
									<image src="../static/forum/10.png"></image>
									<span>地点</span>
								</view>
							</view>
							<view class="edit-columns">
								<view class="edit-in-live">
									<image src="../static/forum/11.png"></image>
									<span>视频</span>
								</view>
								<view class="edit-in-gif">
									<image src="../static/forum/12.png"></image>
									<span>动画</span>
								</view>
							</view>
						</view>
					</view>
					<view class="line" ></view>
					<view @click="addMessage()" class="add-button">
						<span>发表</span>
					</view>
				</view>
			</view>
		</view>
		<Tips :tips="tips" @showable="getShow"></Tips>
	</view>
	
</template>

<script>
	import Tips from './Tips.vue'
	export default{
		name:"Create",
		components:{
			Tips
		},
		props:['message','user'],
		data() {
			
			return {
				tips:{
					show: false,
					content:"",
					time: 0,
				},
				msg:{
					avatar: null,
					nickname: null,
					time: null,
					content: null,
					images:[
						require('../static/forum/p1.jpg')
					],
					likes: 0,
					show:false,
					comment: 0,
					share: 0,
					replies:[]
				},
				content:"",
				images:[],
				popState:false,
				focusState: false,
			}
		},
		methods:{
			addMessage(){
				if(this.content === "") {
					this.tips = {
						show: true,
						content:"帖子内容不能为空",
						time: 2.5,
					};
				}
				else{
					this.msg.avatar = this.user.avatar;
					this.msg.nickname = this.user.nickname;
					this.msg.time="now";
					this.msg.content = this.content;
					this.msg.images = this.images;
					this.$emit('msg',this.msg);
					this.popState = false;
					this.content = ""
				}
			},
			showPop() {
				this.popState = true;
				this.focusState = true
			},
			closePop() {
				this.popState = false;
				this.content = ""
			},
			getShow(val) {
				this.tips.show = val
			},
			unFocus() {
				this.focusState = false;
				if(this.message === "") {
					this.replyState = 0;
				}
					
			}
		}
	}
</script>

<style scoped>
	.line{
		border-top: 2rpx solid #cdd4d9;
		margin-top: 10rpx;
	}
	.create{
		padding: 10rpx 20rpx;
		margin: 20rpx;
		border-radius: 10rpx;
		background-color: #e1e5e0;
	}
	.create-title {
		margin: 10rpx 0;
		display: flex;
		flex-direction: row;
	}
	.title{
		flex: 1;
	}
	.create-avatar-view {
		padding: 10rpx;
		margin-right: 30rpx;
	}
	.create-avatar{
		height: 100rpx;
		width: 100rpx;
		border-radius: 50%;
		margin-top: 10rpx;
		display: block;
	}
	.avatar-input{
		display: flex;
		flex-direction: row;
	}
	.avatar-input input{
		margin: auto 0;
	}
	.more-edit{
		padding-top: 20rpx ;
		padding-bottom: 10rpx;
		display: flex;
		flex-direction: row;
	}
	.edit-more,.edit-feel ,.edit-photo,.edit-tag  {
		display: flex;
		flex-direction: row;
		border-radius: 10rpx;
		background-color: #b8c1b7;
		padding: 20rpx;
		margin-right: 20rpx;
	}
	.edit-more span,.edit-feel span ,.edit-photo span,.edit-tag span {
		margin-left: 10rpx;
	}
	.edit-more image,.edit-feel image,.edit-photo image,.edit-tag image{
		width: 30rpx;
		height: 30rpx;
		margin: auto 0;
		display: block;
	}
	.more-edits{
		padding-top: 20rpx ;
		padding-bottom: 10rpx;
		display: flex;
		flex-direction: column;
	}
	.edit-columns{
		display: flex;
		flex-direction: row;
		padding: 10rpx 0;
	}
	.edit-in-feel,.edit-in-photo,.edit-in-live{
		flex:1;
		display: flex;
		flex-direction: row;
		border-radius: 10rpx;
		background-color: #b8c1b7;
		padding: 20rpx;
		margin-right: 20rpx;
	}
	.edit-in-check,.edit-in-tag,.edit-in-gif{
		flex:1;
		display: flex;
		flex-direction: row;
		border-radius: 10rpx;
		background-color: #b8c1b7;
		padding: 20rpx;
	}
	.edit-in-feel span ,.edit-in-photo span,.edit-in-tag span,.edit-in-check span,.edit-in-live span,.edit-in-gif span{
		margin-left: 10rpx;
	}
	.edit-in-feel image,.edit-in-photo image,.edit-in-tag image,.edit-in-check image,.edit-in-live image,.edit-in-gif image{
		width: 30rpx;
		height: 30rpx;
		margin: auto 0;
		display: block;
	}
	.add-button{
		text-align: center;
		border-radius: 10rpx;
		background-color: #b8c1b7;
		margin: 20rpx 0;
		padding: 10rpx;
	}
	.create-pop{
		width: 100%;
		height: 100%;
		-webkit-transition: 1s ease all;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background: rgba(255, 255, 255, 0.6); 
	}
	.pop-item{
		position: fixed;
		top: 50%;
		left:50%;
		right: -50%;
		transform: translate(-50%, -50%);
	}
</style>
