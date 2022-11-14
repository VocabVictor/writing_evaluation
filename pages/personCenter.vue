<template>
	<view class="page">
		<view class="mainContent">
			<!-- 主要信息 -->
			<view class="personInformation" >
				<view class="mainInformation">
					<view class="nameSex">
						<view class="information">
							<u--text :text="name" color="#FFFFFF" ></u--text>
						</view>
						<view class="information">
							<u-icon  name="woman" color="#FFFFFF" size="20"></u-icon>
						</view>
						<u-icon class="rightIcon" name="arrow-right" color="#FFFFFF" size="20"></u-icon>
					</view>
					<u-line color="#FFFFFF"></u-line>
					
				</view>				
				<u-avatar class="image":src="imagesrc" size="80"></u-avatar>
			</view>
			
			
			<!-- 列表栏 -->
			<view class="List">
				<u-cell-group>
					<u-cell icon="file-text" title="作文盒"></u-cell>
					<u-cell icon="star" title="我的收藏" ></u-cell>
					<u-cell icon="heart" title="我的喜欢" ></u-cell>
					<u-cell icon="eye" title="浏览记录" ></u-cell>
					<u-cell icon="bell" title="系统通知"></u-cell>
					<u-cell icon="setting" title="退出账号" @click="navigateTo"> </u-cell>
				</u-cell-group>
			</view>
		</view>
<mytabbar></mytabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				
					name:"怀左同学",
					
					imagesrc:'',
					
					
				
			}
		},
		methods: {
			
			homeClick(){
				this.$u.route('pages/homePage/homePage');
			},
			scripClick(){
				this.$u.route('pages/scrip/scrip');
			},
			discoverClick(){
				this.$u.route('pages/discover/discover');
			}
			,
			navigateTo(){
				uni.navigateTo({
					url:"/pages/enter/enter"
				})
			}
		}
	}
</script>

<style>
	.personInformation {
		background-color: #88dfbf;
		height: 170px;
	}
	
/* 姓名信息栏 */
	.mainInformation {
		padding-top:50px;
	}
	
/* 姓名， */
	.nameSex {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding-left: 130px;
		margin: 10px;
		position: relative; 
	}
	
/* 右图标 */
	.rightIcon {
		position: fixed;
		position: absolute;
		right:5%;
		z-index: 1;
	}
/* 个人信息间隔 */	
	.information{
		margin-left: 10rpx;
		margin-right:10rpx;
	}
	
/* 头像 */
	.image {
		position: fixed;
		position: absolute;
		left:15%;
		top:8%;
		z-index:1;
	}

	.addicon{
		position: fixed;
		bottom:10rpx;
		right:50%;
		transform: translate(50%);
		z-index: 1;
	}
	
</style>
