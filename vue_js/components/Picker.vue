<template>
	<div class="picker-box">
		<div class="tablist">
			<ul>
				<li v-for="(item,index) in dataList" :key="index" @click="clickTap(index)"
					:class="{active:index==currentTap}">
					{{item.name}}
					<uni-icons type="arrowdown" color="index==currentTap?red|black"></uni-icons>
				</li>
			</ul>
		</div>
		<div class="droplist" v-if="showDrop">
			<ul>
				<li v-for="(item,index) in dataList[currentTap].type" :key="index" @click="clickDrop(index)"
					:class="{active:index==currentDrop&&oldTap==currentTap }"
					class="dropItem">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['dataList'],
		data() {
			return {
				currentTap: -1,
				oldTap: -1,
				currentDrop: -1,
				showDrop: false,

			}
		},
		methods: {
			clickTap(index) {
				if (!this.showDrop) {
					if (this.currentDrop != -1) {
						this.oldTap = this.currentTap;
					}
					this.currentTap = index;
					this.showDrop = true;
				} else {
					if (this.currentDrop != -1) {
						if (this.currentTap === index) {
							this.showDrop = false
							this.currentTap = this.oldTap;
						} else {
							this.currentTap = index
						}
					} else {
						if (this.currentTap === index) {
							this.showDrop = false
							this.currentTap = -1;

						} else {
							this.currentTap = index
						}
					}


				}

			},
			clickDrop(index) {
				this.currentDrop = index;
				this.showDrop = false;
				this.$emit('choosePicker', this.currentTap, this.currentDrop);
			},
			parentChooseList(tap,drop){
				this.currentTap = tap;
				this.currentDrop = drop;
				this.showDrop = false;
			}
		}
	}
</script>

<style>
	.picker-box {
		/* background-color: #fbead7; */
		margin: 0 auto;
		border-left: 1rpx solid #E1E5E0;
		border-right: 1rpx solid #E1E5E0;
	}

	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.tablist ul {
		display: flex;
		width: 100%;
	}

	.tablist ul li {
		width: 50%;
		text-align: center;
		border-bottom: 1rpx solid #7e7281;
		height: 50rpx;
		line-height: 50rpx;
		z-index: 100;
		padding: 10rpx;
	}

	.tablist ul li:first-child {
		border-right: 1rpx solid #7e7281;
	}

	.droplist {
		width: 99%;
		margin: 0 auto;
		position: absolute;
		z-index: 10;
		background-color: #fff;
	}

	.droplist ul {
		// padding: 10rpx;
	}

	.droplist ul li {
		padding: 15rpx;
		padding-left: 25rpx;
		border-bottom: 1rpx solid #E1E5E0;
	}

	.active {
		color: #FF0000;
	}
</style>
