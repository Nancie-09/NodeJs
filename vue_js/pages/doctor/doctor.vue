<template>
	<view>
		<view class="head">十大名医</view>
		<ul>
			<li v-for="(item,index) in doctors" :key="index" class="item">
				<view class="title">{{item.title}}</view>
				<view class="name">{{item.name}}</view>
				<view class="content" v-html="getContent(item.intro)"></view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doctors: [{
						title: '针灸之祖',
						name: '黄帝',
						intro: `姓：姬，公孙、氏：有熊、轩辕。
							黄帝是华夏族领袖。
							现存《内经》即系托名黄帝与歧伯、雷公等讨论医学的著作。此书治疗方法多用针刺，故对针刺的记载和论述亦特别详细，对俞穴和刺阖、刺禁等记录较详。`
					}, {
						title: '脉学介导者',
						name: '扁鹊',
						intro: `姓秦，名越人，战国渤海郡郑（今河北任丘）人。
							太子尸厥已死，而治之复生；齐桓公未病，而知其后五日不起，名闻三下。《史记·战国策》载有他的传记病案，并推崇为脉学的倡导者。`
					}, {
						title: '外科之祖',
						name: '华佗',
						intro: `又名敷，字元化，后汉末沛国（今安徽亳州）人。
							精内、外、妇、儿、针灸各科，对外科尤为擅长。对“肠胃积聚”等病，饮麻沸散，须臾便如醉肠洗涤，缝腹摩膏，施行腹部手术。`
					}, {
						title: '医圣',
						name: '张仲景',
						intro: `名机，汉末向阳郡（今河南南阳人）人。
							相传曾任长沙太守，当时伤寒流行，病死者很多。他的著作《伤寒杂病论》总结了汉代300多年的临床实践经验，对祖国医学的发展有重大贡献。`
					}, {
						title: '预防医学的介导者',
						name: '葛洪',
						intro: `字稚川，自号抱朴子，晋朝丹阳句容（今属江苏人）。
							著有《时后方》，书中最早记载一些传染病如天花、恙虫病症侯及诊治。“天行发斑疮”是全世界最早有关天花的记载。`
					}, {
						title: '药王',
						name: '孙思邈',
						intro: `唐朝京兆华原（今陕西铜川耀州区）人，医德高尚，医术精湛。
							因治愈唐太宗唐太后头痛病，宫廷要留他做御医，他扯谎采“长生不老药”献皇上，偷跑了。监视人谎报采药时摔死，太宗封孙思邈为药王。`
					}, {
						title: '儿科之祖',
						name: '钱乙',
						intro: `字仲阳，北宋郓州（今山东东平）人。
							著《小儿药证直诀》共三卷。以脏腑病理学说立论，根据其虚实寒热而立法处方，比较系统地作出了辨证证治的范例。`
					}, {
						title: '法医之祖',
						name: '宋慈',
						intro: `宋朝福建人。1247年总结宋代前法医方面的经验及他本人四任法官的心得，写成《洗冤集录》，是世界上最早的法医文著。`
					}, {
						title: '药圣',
						name: '李时珍',
						intro: `字东壁，号频湖，明朝蕲州（今湖北蕲春）人。
							长期上山采药，深入民间，参考历代医书800余种，经27年的艰苦，著成《本草纲目》，所载药物共1758种，被译为日、法、德、俄等国文字。`
					}, {
						title: '《医宗金鉴》总修官',
						name: '吴谦',
						intro: `字文吉，清朝安徽歙县人。
							乾隆时为太医院院判。《医宗金鉴》是清代御制钦定的一部综合性医书，全书90卷；它是中国综合性中医医书最完善又最简要的一种。`
					}

				]
			}
		},
		methods: {
			getContent(str) {
				return str.replace(/\n/g, '<br>');
			}
		}
	}
</script>

<style lang="less" scoped>
	.head {
		font-size: 40rpx;
		text-align: center;
		padding: 20rpx;
		color: #705053;
	}

	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.item {
		padding: 20rpx 30rpx;
	}

	.title {
		font-size: 35rpx;
		color: #705053;
	}

	.name{
		font-size: 30rpx;
		width: 120rpx;
		margin: 0 auto;
		text-align: center;
		background-color: #fdeadc;
		border-radius: 25rpx;
		margin-top: 10rpx;
	}
	.content {
		margin: 20rpx 10rpx;
		padding: 30rpx 25rpx;
		border: 1rpx solid #705053;
		background-color: #fffaf6;
		border-radius: 30rpx;
	}
</style>
