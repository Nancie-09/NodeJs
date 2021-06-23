<template>
	<view class="alsrtInfo" v-if="show === true" @click="closeDialog()">
		<view class="profPrompt_test" >
			<view>{{content}}</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"Tips",
		props:['tips'],
		data() {
			return {
				show: false,
				time:0,
				content: "",
			};
		},
		methods: {
			// 提示弹框
			showDialog(tips) {
				this.show = tips.show;
				this.content = tips.content;
				this.time = tips.time;
				setTimeout(() => {
					this.show = false;
					this.$emit('showable',this.show);
				}, this.time * 1000);
			},
			closeDialog:function(){
				this.show = false;
				this.$emit('showable',this.show);
			}
		},
		watch:{
			tips:{
				handler(val) {
					this.showDialog(val)
				},
				deep: true
			}
		}
	};
	
</script>
<style lang="scss" scoped>
	.alsrtInfo {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		// background: rgba(255, 255, 255, 0.1); 
	}
	.profPrompt_test {
		display: flex;
		align-items: center;
		padding: 12px 18px;
		overflow: hidden;
		color: #fff;
		position: absolute;
		background: #e0d6d8;
		border-radius: 5px;
		top: 356px;
		left: 50%;
		font-size: 14px;
		opacity: 1;
		/* z-index: 1; */
		text-align: center;
		transform: translate(-50%, -50%);
	}

</style>

