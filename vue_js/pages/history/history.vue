<template>
	<view>
		<view class="head">中医的发展</view>
		<ul>
			<li v-for="(item,index) in histories" :key="index" class="item">
				<view class="title">{{item.name}}</view>
				<view 
					v-if="histories.length!=0"
					class="content" 
					v-html="getContent(item.intro)"></view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				histories:[],
				history:[
					{
						name:'形成',
						intro:`中医产生于原始社会，春秋战国中医理论已经基本形成，出现了解剖和医学分科，已经采用“四诊”，治疗法有砭石、针刺、汤药、艾灸、导引、布气、祝由等。
						\n《黄帝内经》，它是中国传统医学四大经典著作之一，也是我国医学宝库中成书最早的一部医学典籍。同时是研究人的生理学、病理学、诊断学、治疗原则和药物学的医学巨著。在理论上建立了中医学上的“阴阳五行学说”、“脉象学说”、“藏象学说”、“经络学说”、“病因学说”、“病机学说”、“病症”、“诊法”、论治及“养生学”、“运气学”等学说，后来的中医学和养生学开始用阴阳五行解释人体生理，出现了“医工”、金针、铜钥匙等。`
					},
					{
						name:'发展',
						intro:`东汉出现了著名医学家张仲景，他已经对“八纲”（阴阳、表里、虚实、寒热）有所认识，总结了“八法”。,
						\n华佗则以精通外科手术和麻醉名闻天下，还创立了健身体操“五禽戏”。
						\n唐代孙思邈总结前人的理论并总结经验，收集5000多个药方，并采用辨证治疗，因医德最高，被人尊为“药王”。`
					},
					{
						name:'繁荣',
						intro:`唐朝以后，中国医学理论和著作大量外传到高丽、日本、中亚、西亚等地。
						\n龙门石窟的药方洞窟门刻有诸多唐代药方，多达150多种，所用药物多是植物、动物和矿物药。药方涉及内科、外科、小儿科、五官科等，所涉及药材在民间都能找到，很大程度上方便了老百姓。这些药方不仅可以治疗常见的疾病，而且还能治疗疑难杂症，如：疗噎方可以治疗食道癌。其中有95方在公元10世纪被一位日本学者收录在《医心方》中，足见它的价值和影响。药方洞的药方是中国现存最早的石刻药方，对研究中国医药学起了重要的作用。
						\n两宋时期，宋政府设立翰林医学院，医学分科接近完备，并且统一了中国针灸由于传抄引起的穴位紊乱，出版《图经》。`
					},
					{
						name:'衰弱',
						intro:`金元以降，中医开始没落。明清以后，出现了温病派时方派，逐步取代了经方派中医。,
							\n在明朝后期成书的李时珍的《本草纲目》标志着中药药理学没落。同一时期，蒙医、藏医受到中医的影响。在朝鲜东医学也得到了很大的发展，例如许浚撰写了《东医宝鉴》。`
						
					},
					{
						name:'复兴',
						intro:`2003年“非典”以来，经方中医开始有复苏迹象。
							\n现代，中医在中国仍然是治疗疾病的常用手段之一。
							\n在国际上，针灸引起医学界极大兴趣。针灸已被证实在减轻手术后疼痛、怀孕期反胃、化疗所产生的反胃和呕吐、牙痛方面是有效的且其副作用极低，然而，对慢性疼痛，背部疼痛以及头痛，数据显示出模棱两可或者争议性。WHO认为很多针灸和一些草药的有效性得到了科学双盲研究的较强支持，但是对于其它的传统疗法还需要进行进一步研究，而且不能忽视未经研究的传统疗法存在的安全性及危险性等问题。WHO在2002年5月26日发表“2002—2005年传统医药研究全球策略”，邀请全球180余国将替代医学纳入该国的医疗政策。
							\n20世纪90年代发起的现代中医基础理论的原始创新、革命。中医新哲学观中医三个哲学观：整体观、辨证观，及新挖掘出的中医第三哲学观：相似观－分形论。
							\n2018年10月1日，世界卫生组织首次将中医纳入其具有全球影响力的医学纲要。新纳入的中医传统医学的相关信息将写入第11版全球医学纲要第26章内，该章节主要阐释传统医学的分类体系，将于2022年在世卫组织成员国实施。`

							
					}
				]
			}
		},
		methods: {
			getContent(str){
				return str.replace(/\n/g, '<br>');
			},
			async getHistories() {
			    var [error, res] = await uni.request({
			        url: 'http://localhost:3000/history'
			    });
				
				this.histories = res.data;
				console.log(this.histories);
				
				
			}
		},
		created() {
			this.getHistories()
			// console.log(JSON.stringify(this.histories))
		}
	}
</script>

<style lang="less" scoped>
	.head{
		font-size: 40rpx;
		text-align: center;
		padding: 20rpx;
		color: #705053;
	}
	ul,li{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.item{
		padding: 20rpx 30rpx;
	}
	.title{
		font-size: 35rpx;
		color: #705053;
	}
	.content{
		margin: 20rpx 10rpx;
		padding: 30rpx 25rpx;
		border: 1rpx solid #705053;
		background-color: #fffaf6;
		border-radius: 30rpx;
	}
</style>
