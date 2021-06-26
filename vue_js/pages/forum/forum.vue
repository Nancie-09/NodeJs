<template>
	<view class="forum">
		<Create :message="message" :user="user" @msg="getMessage"></Create>
		<Message :message="message" :user="user" @reply="addReply" @replyIndex="addReplyIndex" @messageIndex="addMessageIndex" @deleteFirstReply="deleteFReply" @deleteSecondReply="deleteSReply" @like="likeMsg"></Message>
		<Tips :tips="tips" @showable="getShow"></Tips>
	</view>
</template>

<script>
	import Message from '../../components/Message.vue'
	import Create from '../../components/Create.vue'
	import Tips from '../../components/Tips.vue'
	export default {
		components:{
			Message,Create,Tips
		},
		data() {
			return {
				user:{},
				index:-2,
				messageIndex: -1,
				message:[],
				tips:{
					show: false,
					content:"",
					time: 0,
				},
			}
		},
		methods: {
			getUser(){
				uni.getStorage({
					key: 'user',
					success:  res=>{
						console.log(res.data)
						this.user = res.data
					}
				})
			},
			async getMessages() {
			    var [error, res] = await uni.request({
			        url: 'http://localhost:3000/message'
			    });
				// for( var i = 0; i < messages.length; i++){
				// 	messages[i].avatar = require(`../../static/{messages[i].avatar}`);
				// 	for(var z = 0; z < messages[i].images.length;z++){
				// 		messages[i].images[z] = require(`../..${messages[i].images[z]}`);
				// 	}
				// 	for(var j = 0; j < messages[i].replies.length; j++){
				// 		messages[i].replies[j].avatar = require(`../..${messages[i].replies[j].avatar}`);
				// 		for(var k = 0; k < messages[i].replies[j].replies.length; k++) {
				// 			messages[i].replies[j].replies[k].avatar = require(`../..${messages[i].replies[j].replies[k].avatar}`);
				// 		}
				// 	}
				// }
				this.message = res.data;
				console.log("messages",this.message)
			},
			async addMessage(msg){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/message/',
					data: {
						message:msg
					},
					method:'POST'
				});
				if(!error){
					this.getMessages();
					this.tips = {
						show: true,
						content:"发送成功",
						time: 3,
					};
				}
			},
			async addFirstReply(messageId,reply){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/message/'+ messageId,
					data: {
						reply: reply
					},
					method:'POST'
				});
				if(!error){
					this.getMessages();
					this.tips = {
						show: true,
						content:"一级评论成功",
						time: 1,
					};
				}
			},
			async deleteFirstReply(messageId,replyId){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/message/delete/'+ messageId+'/'+replyId,
					method:'POST'
				});
				if(!error){
					this.getMessages();
					this.tips = {
						show: true,
						content:"删除一级评论成功",
						time: 1,
					};
				}
			},
			async addSecondReply(messageId,replyId,reply){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/message/'+ messageId+'/'+replyId,
					// header:{
					// 	'content-type':'application/json',
					// },
					data: {
						reply: reply
					},
					method:'POST'
				});
				if(!error){
					this.getMessages();
					this.tips = {
						show: true,
						content:"二级评论成功",
						time: 1,
					};
					
				}
			},
			async deleteSecondReply(messageId,replyId,id){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/message/delete/'+ messageId+'/'+replyId+'/'+id,
					method:'POST'
				});
				if(!error){
					this.getMessages();
					this.tips = {
						show: true,
						content:"删除二级评论成功",
						time: 1,
					};
				}
			},
			async like(messageId){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/like/'+ messageId,
					method:'POST'
				});
				if(!error){
					this.getMessages();
					this.tips = {
						show: true,
						content:"点赞3",
						time: 3,
					};
				}
			},
			async unlike(messageId){
				var [error, res] = await uni.request({
					url: 'http://localhost:3000/like/delete/'+ messageId,
					method:'POST'
				});
				if(!error){
					this.getMessages();
					this.tips = {
						show: true,
						content:"取消赞2",
						time: 2,
					};
				}
			},
			getMessage(msg){
				this.addMessage(msg);
			},
			addReplyIndex(index) {
				this.index = index;
			},
			addMessageIndex(index) {
				this.messageIndex = index;
			},
			addReply(reply) {
				if(this.index === -1) {
					this.addFirstReply(this.message[this.messageIndex]._id,reply);
				}
				else {
					this.addSecondReply(this.message[this.messageIndex]._id,this.message[this.messageIndex].replies[this.index]._id,reply);
				}
			},
			getShow(val) {
				this.tips.show = val
			},
			deleteFReply(msg){
				var messageIndex = msg.messageIndex;
				var replyIndex = msg.replyIndex;
				this.deleteFirstReply(this.message[messageIndex]._id,this.message[messageIndex].replies[replyIndex]._id);
			},
			deleteSReply(msg){
				var messageIndex = msg.messageIndex;
				var replyIndex = msg.replyIndex;
				var index = msg.index;
				// console.log(msg)
				this.deleteSecondReply(this.message[messageIndex]._id,this.message[messageIndex].replies[replyIndex]._id,this.message[messageIndex].replies[replyIndex].replies[index]._id);
			},
			likeMsg(msg){
				var index = msg.index;
				var like = msg.like;
				// console.log(msg)
				if(like){
					this.like(this.message[index]._id);
				}
				else{
					this.unlike(this.message[index]._id)
				}
			}
		},
		created() {
			this.getMessages();
			this.getUser();
		},
		
	};
</script>

<style>
</style>
