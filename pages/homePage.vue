<template>
	<view class="page">
		<!-- 顶部-->
		<view class="title">
			<u--text text="涌文" color="#FFFFFF" align="center" size="20"></u--text>
		</view>
		<!-- 内容 -->
		<view class="mainCentent"  v-for="(textItem, textIndex) in list">
			<view class="content">
				<view class="theme">
					<view class="themecell">
						<u-avatar  shape="circle" size="30px" src="https://cdn.uviewui.com/uview/album/1.jpg"></u-avatar>
					</view>
					<view class="themecell">
						<text style="font-size: small;">{{textItem.user_id}}</text>
					</view>
					<view class="themecell">
						<text style="font-size: smaller; color: #C0C0C0;">{{textItem.time}}</text>
					</view>
				</view>
				<view class="image">
					<u--image :showLoading="true"  height="150px" @click="click" src="https://api.hzxwhzxw.asia/static/writing/demo.jpg"></u--image>
				</view>
				<view class="article">
					<text style="font-size: larger;">{{textItem.title}}</text>
				</view>
				<view class="article">
					<u--text :text="textItem.article" lines="2" ></u--text>
				</view>
				<view class="allTag">
					<!-- 文本标签 -->
					<view class="tagLeft">
							<u-tag
								class="textTag"
								v-for="textTag in textItem.textTag"
								:text="textTag.tagName"
								plain
								borderColor="#88dfbf"
								color="#88dfbf"
								size="mini"
							>
							</u-tag>
					</view>
					<!--  右标签-->
					<view class="tagRight">
							<u-tag
								class="tagIcon"
								:text="textItem.brouseTag"
								plain
								color="grey"
								size="mini"
								icon="eye-fill"
							>
							</u-tag>
							<u-tag
								class="tagIcon"
								:text="textItem.likeTag"
								plain
								color="grey"
								size="mini"
								icon="heart-fill"
							>
							</u-tag>
					</view>
				</view>
			</view>
		</view>

		<mytabbar></mytabbar>
		
	</view>
</template>

<script>
	import {getTopic,getList} from "../component/homePage.js"
	export default {
		data() {
			return {
				value1:'',
				value2: 1,
				list:[],
				pageIndex:0,
				pageSize:10,
				textList:[
					{
					avatar:'https://cdn.uviewui.com/uview/album/1.jpg',
					name:"李金海",
					time:"6小时前", 
					theme:"心怀使命，毅然前行", 
					textarea:"人生是一场无法重来的旅程，我们每个人都一无所有的来，又一无所有的去。有人曾说，人生本没有意义，我们要做的是赋予它意义，所以天地空旷，生命广博，我们要让自己在有限的生命中绽放光彩，让世界听到我们的声音。这就是我们人生的意义，同样也是我们的使命。",
					brouseTag:1007,
					likeTag:662,
					textTag:[{tagName:"热爱"},{tagName:"反思"}],
					image:'https://api.hzxwhzxw.asia/static/writing/demo.jpg',
					 },
					 
					{
					avatar:'https://cdn.uviewui.com/uview/album/1.jpg',	
					name:"王金芳", 
					time:"12小时前",
					theme:"青春的旋律" , 
					textarea:"青春如阳光般灿烂，我们正是这一缕阳光下渐渐成长的希望。在这样一个可爱的晴天，不要再做一个安于现状的人。为了你自己，为了那些爱你的人去奋斗吧！去找寻属于你的青春旋律。",
					brouseTag:1008,
					likeTag:678,
					textTag:[{tagName:"热爱"},{tagName:"反思"},],
					image:'https://api.hzxwhzxw.asia/static/writing/shu.jpg',
					},
				],
			}
		},
		methods: {
			change(e) {
				console.log(e);
			},
			navigateTo(){
				uni.navigateTo({
					url: "../1"
				})
			},
			discoverClick(){
				this.$u.route('pages/discover/discover');
			},
			scripClick(){
				this.$u.route('pages/scrip/scrip');
			},
			personClick(){
				this.$u.route('pages/personCenter/personCenter');
			},
			getNewList(){
				this.pageIndex++
				let obj = {pageIndex:this.pageIndex,pageSize:this.pageIndex * 10 , token:uni.getStorageSync('token')}
				getList(obj).then(res=>{
					this.list = this.list.concat(res.data.data)
					console.log(this.list)
				})
			}
	
		},
		onLoad(){
			getTopic().then(res=>{
				this.list = res.data.data
			})
		},
		onReachBottom (){
			this.getNewList()
		}
	}
</script>

<style>
	
	.title{
		position: fixed;
		display: flex;
		height: 50px;
		width: 100%;
		background-color:#88dfbf;
		justify-content: center;
		z-index: 1;
		top:0;
	}
	
	.mainContent {
		background-color: #EBEDF0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		margin:2vh 0;
	}
	
	.content {
		width:80%;
		margin: 15vw 10vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.theme {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-bottom: 5px;
		vertical-align: middle;
	}
	
	.themecell {
		margin-right: 10px;
	}
	
	.allTag {
		display: flex;
		flex-direction: row;
		width: 100%;
		position: relative; 
	}
	
	.tagLeft {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 5px;
		position:absolute;
		left:0%;

	}
	
	.tagRight {
		display: flex;
		flex-direction: row;
		margin-top: 5px;
		position:absolute;
		right:0%;
	}
	
	.textTag {
		height: 20px;
		width: 40px;
		margin-right: 10px;
	}
	
	.tagIcon {
		height: 20px;
		margin-right: 10px;
	}
	
	.article {
		margin-top: 5px;
	}
	
	.addicon{
		position: fixed;
		bottom:10rpx;
		right:50%;
		transform: translate(50%);
		z-index: 1;
	}
	

</style>
