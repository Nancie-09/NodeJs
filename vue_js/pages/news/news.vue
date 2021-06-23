<template>
	<view class="news">
		<view class="video">
			<video  :src="news.video"></video>
		</view>
		<h3 class="title">
			中医药：抗击疫情的独特力量
		</h3>
		<view class="line" ></view>
		<view class="content" >
			<view v-for="(item,index) in news.text" :key="index">
				<view>{{item}}</view>
				<view class="content-image" v-if="index < news.image.length" :style="{backgroundImage:`url(${news.image[index]})`}"></view>
			</view>
			<!-- <view class="content-image" :style="{backgroundImage:`url(${news.image[0]})`}"></view> -->
			<view class="footer">{{news.footer}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news:{
					text:[
						"中医药学，是中华文明的瑰宝，是一代代中华民族的行医者在与疾病的不懈斗争中不断探索、逐渐形成的科学认识，包含着中华民族几千年的健康养生理念及其实践经验，是几千年沉淀下来的中国文化精髓。一把草药、一根银针，护佑着中华民族的繁衍昌盛。当前抗疫战场上，古老的中医药焕发着新的生命力，成为抗击疫情的利器。",
						"曾经肆虐人类的天花，1980年被世界卫生组织宣布已在全世界彻底消灭。缘于中西医早期的一次碰撞：中医人痘接种术于18世纪流传国外，启发英国医生詹纳发明了“牛痘”来代替“人痘”。后来，牛痘接种术又传向世界各地。",
						"明朝末年的中医名家吴又可在创作《瘟疫论》时肯定没有想到：他为防治传染病所开的一剂药方，在360年后的2003年，又被现代人用来应对一种全新的传染病——SARS。诺贝尔医学奖获得者屠呦呦在中医药古典文献中获取灵感，发现了青蒿素，开创了疟疾治疗新方法，惠及全球数亿人。",
						"2019年新型冠状病毒肺炎是一场人类共同的灾难。在抗击新冠肺炎疫情的中国方案中，中医药功不可没。中国各地共派出4900余名中医医务人员支援湖北。《新型冠状病毒肺炎诊疗方案(试行第七版)》，清肺排毒汤列入中医临床治疗期首选。清肺排毒汤在抗疫战场中发挥作用，临床证明总有效率达90%以上。不但在遏制国内疫情方面发挥重大作用，而且在国际疫情战场上也提供了宝贵的抗疫经验。近期，中国医疗专家驰援意大利、伊拉克等国家，就带去了中药连花清瘟和金花清感，成为首次公开参与海外抗疫的两款中药产品。此外，根据湖北省卫健委提供的药方生产的“新冠肺炎湖北预防方颗粒”已出口到荷兰和意大利，并在当地证明有疗效。",
						"中医药学是中华民族灿烂文化的重要组成部分。中医既要继承古人留下的遗产，同时也要结合现代科技手段，进一步探索中医药治疗和中西医结合治疗，总结和研究成功经验，在继承的同时不断创新发展下去。"
					],
					image:[
						require('../../static/news/1.jpg'),
						require('../../static/news/2.png'),
						require('../../static/news/3.png'),
						require('../../static/news/4.jpg'),
					],
					footer:"策划：吴婧后期：白玥",
					video:require('../../static/news/1.mp4'),
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.news{
		background-color: rgba(230,210,213,0.4);
		padding: 20rpx 0 0 0;
	}
	.video{
		margin: 20rpx;
		border: #2C405A 2rpx solid;
		height: 400rpx;
	}
	.video video{
		height: 100%;
		width:100%;
	}
	.line{
		border-top: 2rpx solid #cdd4d9;
		margin-top: 10rpx;
	}
	.title {
		margin: 30rpx 0;
		text-align: center;
	}
	.content{
		padding: 20rpx;
	}
	.content-image{
		margin: 20rpx;
		height: 500rpx;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.footer{
		padding: 40rpx 0 100rpx 0;
	}
</style>
