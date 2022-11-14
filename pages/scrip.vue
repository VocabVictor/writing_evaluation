<template>
	<view class="page">
		<u-navbar
			title="纸条"
			safeAreaInsetTop
			fixed
			placeholder
			border
			:autoBack="true"
		>
		</u-navbar>
		<u-gap height="10"></u-gap>
		<!-- 日历图标 -->
		<u-icon class="icon"  name="calendar" color="#88dfbf" size="40"></u-icon>
		
		<!-- 今日日签 -->
		<view class="content" v-for="(textItem, textIndex) in text">
			<view class="wordText">
				<u--text  :text="textItem.word" color="black" align="center" size="20" ></u--text>
			</view>
			<view class="wordAutor">
				<view class="autorLine">
					<u-line  direction="col" length="50px" color="grey" ></u-line>
				</view>
				<u--text :text="textItem.wordAutor" color="grey" align="center" size="20" ></u--text>
			</view>
			<view class="image">
				<u--image :showLoading="true" :src="textItem.src" width="300px" height="100px" ></u--image>
			 </view>
		</view>
		
		<!-- 今日 -->
		<view class="date">
			<u--text  v-for="(dateItem, dateIndex) in date"   :text="dateItem.day" color="grey" align="center" size="18" ></u--text> 
		</view>

		<mytabbar></mytabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value2: 1,
				text:[
					{ word:"默而识之，学而不厌，诲人不倦。",
					 wordAutor:"孔子",
					 src:'https://cdn.uviewui.com/uview/album/1.jpg',
					},
				],
				
				date: [
					{day:"今日"},
				]
			}
		},
		methods: {
			homeClick(){
				this.$u.route('pages/homePage/homePage');
			},
			scripClick(){
				this.$u.route('pages/scrip/scrip');
			},
			personClick(){
				this.$u.route('pages/personCenter/personCenter');
			}
			
		}
	}
</script>

<style>

	
	.addicon{
		position: fixed;
		bottom:10rpx;
		right:50%;
		transform: translate(50%);
		z-index: 1;
	}
	
	.icon {
		position: fixed;
		right:45%;
		z-index: 1;
	}
	
	.content {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		background-color: #F8F8F8;
		height:480px;
		width: 80%;
		margin-top: 10vw;
		margin-left: 10vw;
		position: relative;
	}
	
	.date{
		position: fixed;
		right:45%;
		z-index: 1;
	}
	
	.image {
		position:absolute;
		bottom:0%;
		z-index: 1;
	} 
	
	.wordText {
		writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/  
		writing-mode: tb-lr; 
		text-align: initial;
		display:flex;
		-webkit-display:flex;
		flex-direction:column;
		 height: 200px; 
		/* align-content: center; */
		/* vertical-align: middle; */
		justify-content:flex-start;
		position:absolute;
		bottom: 220px;
		left:30%;
	}
	
	.wordAutor {
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 15%;
		right: 10%;
		height: 200px;
		writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
		writing-mode: tb-lr; 
		text-align: center;
		-webkit-display:flex;
		flex-direction:column;
		justify-content:flex-start;
	}
	
	
	
</style>
