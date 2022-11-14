<template>
	<view>
		<u-tabbar
			:placeholder="false"
			:fixed="true"
			:safeAreaInsetBottom="false"
			activeColor="#88dfbf"
		>
		
			<u-tabbar-item
				text="首页"
				icon="home-fill"
				activeColor="#88dfbf"
				@click = "homeClick"
			></u-tabbar-item>
			
			<u-tabbar-item
				text="发现"
				icon="integral"
				@click = "discoverClick"
			></u-tabbar-item>
			
			<u-tabbar-item>
			</u-tabbar-item>
			
			<u-tabbar-item
				text="纸条"
				icon="file-text-fill"
				@click="scripClick"
			></u-tabbar-item>
			
			<u-tabbar-item
				text="我的"
				icon="account"
				@click = "personClick"
			></u-tabbar-item>
			
		</u-tabbar>	
		<u-icon class="addicon"size="40" color="#88dfbf" name="plus-circle-fill" @click="navigateTo"
		></u-icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1:'',
				value2: 1,
			}
		},
		methods: {
			change(e) {
				console.log(e);
			},
			navigateTo(){
				uni.navigateTo({
					url: "/pages/2"
				})
			},
			homeClick(){
				uni.navigateTo({
					url: "/pages/homePage/homePage"
				})				
			},
			discoverClick(){
				uni.navigateTo({
					url: "/pages/discover/discover"
				})					
			},
			scripClick(){
				uni.navigateTo({
					url: "/pages/scrip/scrip"
				})	
			},
			personClick(){
				uni.navigateTo({
					url: "/pages/personCenter/personCenter"
				})
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
	

</style>
